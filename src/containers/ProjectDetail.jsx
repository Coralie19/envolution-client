import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOneProject } from '../redux/reducers/projects/actions';
import { getProject } from '../redux/reducers/projects/selector';
import ProjectById from '../components/ProjectById';

export default function ProjectDetail(props) {
  const selectedProject = useSelector(getProject);
  const dispatch = useDispatch();
  console.log('selected proj', selectedProject); // eslint-disable-line

  useEffect(() => {
    // destructuring to do: const { projectId } = props.match.params;
    dispatch(getOneProject(props.match.params.projectId));
  }, [dispatch, props.match.params.projectId]); // eslint-disable-line

  return (
    <div>
      <ProjectById selectedProject={selectedProject} />
    </div>
  );
}