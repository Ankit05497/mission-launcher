import React, { FunctionComponent, useState } from 'react';
import { Filters } from './Filters';
import { MissionCard } from './launchCard';
interface LauncherHomeProps {
  missions: any;
}

const styles = `
  body {
    background: lightgray;
  }
  .filter-container {
    background-color: #FFF;
    padding: 8px;
    border-radius: 8px;
  }
  .author-container {
    display: flex;
    justify-content: center;
  }
  .launch-container {
    margin: 8px 0;
  }
  @media only screen and (min-width: 768px) {
    .filter-container {
      width: 20%;
    }
    .main-container {
      display: flex;
    }
    .launch-container {
      width: 80%;
      margin: 0 8px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
  
`;

export const Home: FunctionComponent<LauncherHomeProps> = (props) => {
  const [ missions, setMissions ] = useState(props.missions);
  console.log(missions);
  const handleYearClick = (year: string) => {
    console.log(year);
  }
  const handleSuccessLaunchClick = (success: boolean) => {
    console.log(success);
  }
  const handleSuccessLandingClick = (success: boolean) => {
    console.log(success);
  }
  return <div>
    <h1>SpaceX Launch Programs</h1>
    <div className='main-container'>
      <div className='filter-container'>
        <Filters handleYearClick={handleYearClick} handleSuccessLaunchClick={handleSuccessLaunchClick} handleSuccessLandingClick={handleSuccessLandingClick}/>
      </div>
      <div className='launch-container'>
        {props.missions.map((mission, index) => <MissionCard key={index} mission={mission} />)}
      </div>
    </div>
    <div className='author-container'>
      <h3>Developed by:</h3>
      <h3>Ankit Gupta</h3>
    </div>
    <style>{styles}</style>
  </div>
};
