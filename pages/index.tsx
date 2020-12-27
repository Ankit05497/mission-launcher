import React from 'react';
import { Home } from '../components/home';
import { fetch } from './../utils/httpUtils';

interface Launcher {
  missions: any;
}

export async function getServerSideProps() {
  const launchUrl = 'https://api.spacexdata.com/v3/launches?limit=100';
  const missionResponse = await fetch(launchUrl);
  return {
    props: {
      missions: missionResponse
    }
  }
}
class HomePage extends React.Component<Launcher>{
  render() {
    console.log(this.props.missions);
    return (
      <Home missions={this.props.missions} />
    );
  };
}

export default HomePage;
