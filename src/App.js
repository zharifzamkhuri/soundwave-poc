import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <a-scene markerhandler arjs='detectionMode: mono_and_matrix; matrixCodeType: 4x4; debugUIEnabled: false;'>

        <a-marker emitevents="true" id="temp" class="markers" type='barcode' value='0'>
          <a-box position='0 0 0' material='color: yellow;'></a-box>
        </a-marker>
        <a-marker emitevents="true" id="temp2" class="markers" type='barcode' value='1'>
          <a-box position='0 0 0' material='color: red;'></a-box>
        </a-marker>

        <a-entity camera></a-entity>
    </a-scene>
    );
  }
}

export default App;
