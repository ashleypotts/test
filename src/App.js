import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import GenerateConfig from './components/ConfigGen';
import GenerateHeader from './components/header';
import MakeActivities from './components/newActivity';
import Check from './components/checkbox';
import Text from './components/textbox';
import Num from './components/number';
import Radio from './components/radio';
import { Component } from 'react';


function ApiPost(){
  const ifTableExists=["fail", "replace", "append"];
  return(
    <div>
    <Check title="enabled"/>
    <Text title="connectionId"/>
    <Num title="statusCode"/>
    <Radio title="ifTableExists" options={ifTableExists}/>
    </div>
  )
}


function App() {
  const [showConfig, setShowConfig] = useState(false);
  const handleConfig = () => {
    setShowConfig(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <GenerateHeader/>
          <MakeActivities/>
          <button onClick={setShowConfig} disabled={showConfig}>Generate Config</button><br/>
          {showConfig && GenerateConfig()}
        </form>
      </header>
    </div>
  );
}




export default App;
