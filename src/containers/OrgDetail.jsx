import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getOneOrg from '../redux/reducers/orgs/actions';
import getOrg from '../redux/reducers/orgs/selector';
import Navbar from '../components/Navbar';
import OrgById from '../components/OrgById';

export default function OrgDetail(props) {
  const selectedOrg = useSelector(getOrg);
  const dispatch = useDispatch();
  console.log('selected org', selectedOrg); // eslint-disable-line

  useEffect(() => {
    // destructuring to do: const { OrgId } = props.match.params;
    dispatch(getOneOrg(props.match.params.orgId));
  }, [dispatch, props.match.params.orgId]); // eslint-disable-line

  return (
    <div>
      <Navbar />
      <OrgById selectedOrg={selectedOrg} />
    </div>
  );
}