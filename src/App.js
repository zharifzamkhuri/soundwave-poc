import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <a-scene markerhandler cursor="rayOrigin: mouse" arjs='detectionMode: mono_and_matrix; matrixCodeType: 4x4; debugUIEnabled: false;'>


          <a-marker emitevents="true" class="markers" type='barcode' value='0'>
            <a-box position='0 0 0' material='color: yellow;'></a-box>
          </a-marker>
          
          <a-marker emitevents="true" class="markers" type='barcode' value='1'>
            <a-box position='0 0 0' material='color: red;'></a-box>
          </a-marker>

          <a-marker emitevents="true" class="markers" type='barcode' value='2'>
            <a-box position='0 0 0' material='color: green;'></a-box>
          </a-marker>

          <a-marker emitevents="true" class="markers" type='barcode' value='3'>
            <a-box position='0 0 0' material='color: blue;'></a-box>
          </a-marker>

          <a-entity camera></a-entity>
        </a-scene>
      </div>
    );
  }
}

export default App;
