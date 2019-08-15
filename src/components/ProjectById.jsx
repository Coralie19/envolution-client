import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Button from './Button';

// Images exports, refactoring to do:
import Ocean from '../assets/Ocean.jpg';
import Land from '../assets/Land.jpg';
import Air from '../assets/Air.jpg';
import Forest from '../assets/Forest.jpg';
import Wildlife from '../assets/Wildlife.jpg';

const ProjectById = (props) => {
  console.log('props', props); // eslint-disable-line no-console
  const {
    category,
    name,
    shortTerm,
    organization,
    date,
  } = props.selectedProject; // eslint-disable-line

  // render category pics --placeholders-- refactoring to do:
  const renderImage = () => {
    // const { category } = props;
    if (category === 'Ocean') {
      return <img src={Ocean} alt='category' height='100px' />;
    }
    if (category === 'Land') {
      return <img src={Land} alt='category' height='100px' />;
    }
    if (category === 'Air') {
      return <img src={Air} alt='category' height='100px' />;
    }
    if (category === 'Forest') {
      return <img src={Forest} alt='category' height='100px' />;
    }
    if (category === 'Wildlife') {
      return <img src={Wildlife} alt='category' height='100px' />;
    }
    return <p>no picture for this category</p>;
  };

  return (
    <div>
      <div>{shortTerm ? <h3>Short Term</h3> : <h3>Long Term</h3>}</div>
      <h1>{name}</h1>
      <h2>{organization}</h2>
      <h2>{category}</h2>
      <Moment format='MMM Do'>{date}</Moment>
      <p>at</p>
      <Moment format='h:mm'>{date}</Moment>
      <div>{renderImage()}</div>
      <div>
        <ul>
          <li>
            <Link to='/projects'>
              <Button />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectById;
