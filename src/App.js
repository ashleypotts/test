import logo from './logo.svg';
import './App.css';

import GenerateConfig from './components/ConfigGen';

const activities = [
{title: "ApiPost"},
{title: "BigPandaAlert"},
{title: "DatabaseLookup"},
{title: "DbStaging"},
{title: "EventGridPost"},
{title: "ExecuteSql"},
{title: "JsonFlatten"},
{title: "JsonMap"},
{title: "LoadCsv"},
{title: "LoadCsvBulk"},
{title: "LoadExcel"},
{title: "Log"},
{title: "SerialNumberConversion"},
{title: "Sleep"},
{title: "SnsPost"},
{title: "WriteFile"},
{title: "WriteToStagingDb"}
]

function Drop(props){
  return(<option value={props.title}>{props.title}</option>)
}

function Check(props){
  return(
    <div>
    <label for={props.title}>{props.title}:</label>
		<input type="checkbox" id={props.title} name={props.title}/><br></br>
    </div>
  )
}

function Text(props){
  return(
    <div>
    <label for={props.title}>{props.title}:</label>
		<input type="text" id={props.title} name={props.title}/><br/>
    </div>
  )
}

function Num(props){
  return(
    <div>
    <label for={props.title}>{props.title}:</label>
		<input type="number" id={props.title} name={props.title}/><br/>
    </div>
  )
}

function Radio(props){
  return(
    <div>
      <label for={props.title}>{props.title}:</label>
      {props.options.map(function(option) {
          return (
            <div>
            <input type="radio" id={option} name={props.title} value={option}/>
            <label for={option}>{option}</label>
            </div>
          )
        })
      }
    </div>
  )
}

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form>
          <label for="configName">Config name:</label>
          <input type="text" id="configName" name="configName"/><br/>
          <label for="client">Client:</label>
          <input type="text" id="client" name="client"/><br/>
          <label for="process">Process:</label>
          <input type="text" id="process" name="process"/><br/>
          <button type="button" class="right">New</button><br/>
          <select id="activity" name="activity">
            <option selected="true" disabled="true" value="Select an activity...">Select an activity...</option>
            {activities.map(function(drop) {
              return (
                <Drop title={drop.title}/>
              )
            })
            }
          </select><br/><br/>
          <ApiPost/>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GenerateConfig />
    </div>
  );
}




export default App;
