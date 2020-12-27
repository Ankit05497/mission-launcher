import React, { FunctionComponent } from 'react';
import { Filters } from './Filters';
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
  @media only screen and (min-width: 768px) {
    .filter-container {
      width: 20%;
    }
    .main-container {
      display: flex;
    }
  }
  
`;

export const Home: FunctionComponent<LauncherHomeProps> = (props) => {
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
        Space Launch Details
      </div>
    </div>
    <style>{styles}</style>
  </div>
};
