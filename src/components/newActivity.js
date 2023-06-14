import Drop from './dropdown';
import { useState } from 'react';
import { Component } from 'react';
import './../App.css';

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

function MakeActivities(){
    const [activityList, setActivityList] = useState([{activity: ""}]);
    
    let handleNew = () => {
        setActivityList([...activityList, {activity: ""}]);
      };
    let handleChange = (e,index) => {
        let list = [...activityList];
        list[index][e.target.activity]=e.target.name;
        setActivityList(list);
    };
    let handleDelete = (index) => {
        let list = [...activityList];
        list.splice(index, 1);
        setActivityList(list);
    };

    function NewActivity(i) {
        return(
            <div>
                <select id="activity" name="activity" onSelect={e=>handleChange(e,i)}>
                <option selected="true" disabled="true" value="Select an activity...">Select an activity...</option>
                {activities.map(function(drop) {
                    return (
                        <Drop title={drop.title}/>
                    )
                })
                }
            </select>
            </div>
        )
    }

    return(
        <form>
        {activityList.map((singleActivity, index) => (
            <div className="App-box">
            <NewActivity i={index}/>
            {activityList.length !== 1 && (<button onClick={()=>handleDelete(index)}>Delete</button>)}
            {activityList.length - 1 === index && 
            <div>
                <br/>
                <button onClick={handleNew}>New</button>
            </div>}
            <br/><br/>
            </div>
      ))}
        </form>
    )
}


export default MakeActivities;