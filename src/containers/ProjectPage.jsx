import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Geocode from 'react-geocode';

import { getProjects } from '../redux/reducers/projects/actions';
import ProjectList from '../components/ProjectList';
import { getAllProjects } from '../redux/reducers/projects/selector';
import FilterForm from '../components/FilterForm';

const googleKey = process.env.REACT_APP_GOOGLE_API_KEY;
Geocode.setApiKey(googleKey);

export default function ProjectPage(props) {
  // Use the state and pass down the list
  const filters = useSelector((state) => state.projects.filters);
  const projects = useSelector(getAllProjects);
  const dispatch = useDispatch();

  function filteredProjects() {
    const categories = Object.keys(filters.category).filter(
      (cat) => filters.category[cat],
    );

    return projects.filter((project) => {
      let categoryCheck = true;
      if (categories.length)
        categoryCheck = categories.includes(project.category);
      let availabilityCheck = true;
      if (filters.availability)
        availabilityCheck = project.availability === filters.availability;
      return categoryCheck && availabilityCheck;
    });
  }

  // On componentDidMount (useEffect), get the list:
  useEffect(() => {
    // user geolocation
    if (!props.match.params.cityName) {
      navigator.geolocation.getCurrentPosition((position) => {
        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude,
        ).then(
          (res) => {
            const newCity = res.results[0].address_components.filter(
              (ac) => ~ac.types.indexOf('locality'), // eslint-disable-line
            )[0].long_name; // eslint-disable-line
            dispatch(getProjects(newCity));
          },
          (error) => {
            console.error(error); // eslint-disable-line no-console
          },
        );
      });
    } else {
      dispatch(getProjects(props.match.params.cityName));
    }
  }, [dispatch, props.match.params.cityName]); // eslint-disable-line

  // Search Toggle :
  const [isHidden, setVisibility] = useState(true);

  const toggleComponent = () => {
    setVisibility(!isHidden);
  };

  // If empty list :
  const renderEmptyList = () => {
    if (!projects) {
      return <h3>No projects in your area</h3>;
    }
    return null;
  };

  return (
    <div>
      <button type='button' onClick={toggleComponent}>
        <img src='/assets/icons/icon_filter.png' alt='back' height='34px' />
      </button>
      {!isHidden && (
        <FilterForm isHidden={!isHidden} toggleComponent={toggleComponent} />
      )}
      <ProjectList projects={filteredProjects()} />
      <div>{renderEmptyList()}</div>
    </div>
  );
}
