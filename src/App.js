import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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


function App() {
  const [showConfig, setShowConfig] = useState(false);
  const [activityList, setActivityList] = useState([{activity1:""}]);
  const handleConfig = () => {
    setShowConfig(true);
  };
  const handleNew = () => {
    setActivityList([...activityList, {[`activity${activityList.length}`]:""}]);
  };
  const handleDelete = (index) => {
    const list = [...activityList];
    list.splice(index, 1);
    setActivityList(list);
  };
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <GenerateHeader/>
          {activityList.map((singleActivity, index) => (
            <div>
            <NewActivity/>
            {activityList.length !== 1 && (<button onClick={()=>handleDelete(index)} >Delete</button>)}
            {activityList.length - 1 === index && 
              <div>
                <br/>
                <button onClick={handleNew} disabled={showConfig}>New</button>
              </div>}
            <br/><br/>
            </div>
          ))}
          <button onClick={setShowConfig} disabled={showConfig}>Generate Config</button><br/>
          {showConfig && GenerateConfig()}
        </form>
      </header>
    </div>
  );
}




export default App;
