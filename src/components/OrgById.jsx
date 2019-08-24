import React from 'react';
import styled from 'styled-components';

import back from '../assets/icons/back-thick.svg';

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  width: 100%;
  position: relative;
  background: #fafafa;
`;

const TopPage = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  width: 8%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  margin: 4vh 1.5vw 0 2vw;
`;

const BgTopImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(0, 0, 0, 0.3) 50%
    ),
    url(${(props) => props.image});
  height: 80vh;
  width: 110%;
  background-size: cover;
`;

const Title = styled.h1`
  display: flex;
  padding: 2vh 1vh 2vh 2vh;
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  width: 90%;
  margin-bottom: 10vh;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background: #f9f9f9;
  position: relative;
  top: -5vh;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  height: 60%;
  flex-flow: column wrap;
  padding: 2vh 2vh 0vh 2vh;
  font-size: 16px;
  justify-content: space-between;
  justify-content: flex-start;
`;

const CategoryIcon = styled.div`
  margin-left: ${(props) => (props.category ? '2vh' : '2vh')};
`;

const DescriptionTitle = styled.h3`
  display: flex;
  padding: 2vh 1vw 1vh 0vw;
  font-size: 24px;
  font-weight: 700;
`;

export default function OrgById(props) {
  const { picture, name, mission, category, website } = props.selectedOrg; // eslint-disable-line

  // map projects:
  // function showOrgProjects() {
  //   if (projects) {
  //     const showProjects = projects.map((project) => (
  //       <li key={project.project_id}>
  //         {project.project_name}
  //         on
  //         <Moment format='MMM Do'>{project.project_date}</Moment>
  //       </li>
  //     ));
  //     return <ul>{showProjects}</ul>;
  //   }
  //   return null;
  // }

  return (
    <ColumnWrapper>
      <TopPage onClick={() => props.history.goBack()}>
        <img src={back} alt='back' height='30px' />
      </TopPage>
      <BgTopImage image={picture}>
        <CategoryIcon>
          <img
            src={`/assets/iconsWhite/${category}-picto-grey.png`}
            alt='categoryIcon'
            height='70px'
          />
        </CategoryIcon>
        <Title>{name}</Title>
      </BgTopImage>
      <InfoContainer>
        <Details>
          <DescriptionTitle>About us</DescriptionTitle>
          <p>{mission}</p>
          <DescriptionTitle>Our website</DescriptionTitle>
          <p>{website}</p>
          <DescriptionTitle>Upcoming projects</DescriptionTitle>
        </Details>
      </InfoContainer>
    </ColumnWrapper>
  );
}
