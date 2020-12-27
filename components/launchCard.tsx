import React, { FunctionComponent } from 'react';

interface MissionCardProps {
  mission: any;
}

const styles = `
  ul {
    margin: 4px 0;
  }
  li {
    color: grey;
  }
  .bold-text {
    font-weight: bold;
  }
  .section {
    margin: 4px 0;
  }
  .mission-card-container {
    background-color: #FFF;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  .mission-name {
    margin: 0;
    color: darkblue;
    font-size: 20px;
    margin: 4px 0;
    font-weight: bold;
  }
  .mission-image-container {
    background: lightgray;
    padding: 8px;
  }
  @media only screen and (min-width: 768px) {
    .mission-card-container {
      width: 20%;
    }
  }
`;

export const MissionCard: FunctionComponent<MissionCardProps> = (props) => {
  return <div className='mission-card-container'>
    <div className="mission-image-container">
      <img src={props.mission.links.mission_patch_small} alt={props.mission.mission_name} />
    </div>
    <p className="mission-name">
      {props.mission.mission_name}
    </p>
    {props.mission.mission_id.length > 0 && <div className="section">
      <span className="bold-text">Mission Ids:</span>
      <ul>
        {props.mission.mission_id.map((id) => <li key={id}>{id}</li>)}
      </ul>
    </div>}
    <div className="section">
      <span className="bold-text">Launch year: </span>
      <span>{props.mission.launch_year}</span>
    </div>
    <div className="section">
      <span className="bold-text">Successful Launch: </span>
      <span>{props.mission.launch_success ? 'True' : 'False'}</span>
    </div>
    <div className="section">
      <span className="bold-text">Successful Landing: </span>
      <span>{props.mission.rocket?.fairings?.recovered ? 'True' : 'False'}</span>
    </div>
    <style>{styles}</style>
  </div>
}