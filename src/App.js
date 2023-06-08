import logo from './logo.svg';
import './App.css';

import GenerateConfig from './components/ConfigGen';
import GenerateHeader from './components/header';
import NewActivity from './components/newActivity';
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

function testFunc() {
    return(<p>hi</p>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <GenerateHeader/>
          <button onClick={NewActivity}>New</button><br/>
          <button onClick={GenerateConfig}>Generate Config</button><br/>
        </form>
      </header>
    </div>
  );
}




export default App;
