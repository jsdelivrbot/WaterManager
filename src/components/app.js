import React, { Component } from 'react';
import WaterGaugeContainer from  '../containers/WaterGaugeContainer'
import ControlPanel from  '../containers/ControlPanel'


export default class App extends Component {
  render() {
    return (
      <div>
     	 <WaterGaugeContainer/>
     	 <ControlPanel/>
      </div>
    );
  }
}
