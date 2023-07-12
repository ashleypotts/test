import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import MakeCheckboxes from './components/activityCheckboxes';
import GenerateConfig from './components/ConfigGen';
import GenerateHeader from './components/header';
import asurionLogo from './asurion_logo_black.png'
import MakeActivities from './components/newActivity';
import { Component } from 'react';


function App() {
  const [showConfig, setShowConfig] = useState(false);
  const handleConfig = () => {
    setShowConfig(true);
  };
  return (
    <div className="App">
      <div className="App-logo">
      <img src={asurionLogo} height={80} style={{alignSelf:'right'}}/></div>
      <header className="App-header">
        <form>
          <GenerateHeader/>
          {/* <MakeActivities/> */}
          <MakeCheckboxes/>
          <button onClick={setShowConfig} disabled={showConfig}>Generate Config</button><br/>
          {showConfig && GenerateConfig()}
        </form>
      </header>
    </div>
  );
}




export default App;
