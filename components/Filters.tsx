import React, { FunctionComponent } from 'react';

interface FilterProps {
  handleYearClick: (year: string) => void;
  handleSuccessLaunchClick: (success: boolean) => void;
  handleSuccessLandingClick: (success: boolean) => void;
}

const styles = `
  .launch-year-container, .launch-status-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .launch-year {
    background-color: #90EE90;
    width: 40%;
    margin-bottom: 8px;
    padding: 8px 0;
    border-radius: 8px;
    cursor: pointer;
  }
  .launch-year:hover {
    background-color: #006400;
  }
`

const YEARS = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
const SUCCESSFUL_LAUNCHES_OPTION = ['True', 'False'];
export const Filters: FunctionComponent<FilterProps> = (props) => {
  const handleLaunchYearClick = (event: any) => {
    props.handleYearClick(event.target.dataset.year);
  };
  const handleLaunchStatusClick = (event: any) => {
    props.handleSuccessLaunchClick(event.target.dataset.successlaunch === 'True');
  };
  const handleLandingStatusClick = (event: any) => {
    props.handleSuccessLaunchClick(event.target.dataset.successlanding === 'True');
  };
  return <div>
    <div>
      <p>Launch Year</p>
      <div className="launch-year-container">
        {YEARS.map((year) => <button data-year={year} key={year} className="launch-year" onClick={handleLaunchYearClick}>{year}</button>)}
      </div>
    </div>
    <div>
      <p>Successful Launch</p>
      <div className="launch-status-container">
        {SUCCESSFUL_LAUNCHES_OPTION.map((option) => <button data-successlaunch={option} key={option} className="launch-year" onClick={handleLaunchStatusClick}>{option}</button>)}
      </div>
    </div>
    <div>
      <p>Successful Landing</p>
      <div className="launch-status-container">
        {SUCCESSFUL_LAUNCHES_OPTION.map((option) => <button data-successlanding={option} key={option} className="launch-year" onClick={handleLandingStatusClick}>{option}</button>)}
      </div>
    </div>
    <style>{styles}</style>
  </div>
};
