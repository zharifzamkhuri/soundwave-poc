import React, { Component } from 'react';
import './App.css';
//import logo from './logo.svg';


class App extends Component {


  render() {
    return (
      <div>
        <div className="overlay"> </div>

        <div className="loading">
          <p>Loading</p>
          <div className="lds-dual-ring">
          </div>
        </div>

        <div className="container">
          <div className="popup">
            <p>Welcome to EY Soundwave</p>
            <button class="test">
              Proceed
            </button>
          </div>
        </div>


        <a-scene markerhandler cursor="rayOrigin: mouse" vr-mode-ui="enabled: false" arjs='detectionMode: mono_and_matrix; matrixCodeType: 4x4; debugUIEnabled: false;'>
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

          <a-marker-camera preset='hiro'></a-marker-camera>
        </a-scene>
      </div>
    );
  }
}

export default App;
