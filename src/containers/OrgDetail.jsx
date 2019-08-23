import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getOneOrg from '../redux/reducers/orgs/actions';
import getOrg from '../redux/reducers/orgs/selector';
import OrgById from '../components/OrgById';

export default function OrgDetail(props) {
  const selectedOrg = useSelector(getOrg);
  const dispatch = useDispatch();

  useEffect(() => {
    const { orgId } = props.match.params;
    dispatch(getOneOrg(orgId));
  }, [dispatch, props.match.params.orgId]); // eslint-disable-line

  return (
    <div>
      <OrgById selectedOrg={selectedOrg} />
    </div>
  );
}
