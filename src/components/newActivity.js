import Drop from './dropdown';
import ChangeActivity from './changeActivity';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

    const [activityList, setActivityList] = useState([{id: uuidv4(), activity: ""}]);
    
    let handleChange = (e,id) => {
        const { name, value } = e.target;
        setActivityList(prevList => {
            return (
                prevList.map(activity=> {
                    if (activity.id === id) {
                        return {...activity, [name]: value};
                    }
                    return activity;
                })
            )
        })
    };
    let handleNew = () => {
        setActivityList(prevList=>[...prevList, {id:uuidv4(), activity:""}]);
    };
    let handleDelete = (id) => {
        setActivityList(prevList => prevList.filter(activity => activity.id !== id));
    };

    function NewActivity({id, activity}) {
        return(
            <div>
                <select id='{activity${i}}' name="activity" value={activity || ''} onChange={(e)=>handleChange(e,id)}>
                <option disabled value="">Select an activity...</option>
                {activities.map(function(drop, index) {
                    return (
                        <Drop key={index} title={drop.title}/>
                    );
                })
                }
            </select>
            {activityList.length !== 1 && (<button onClick={()=>handleDelete(id)}>Delete</button>)}
            </div>
        )
    }

    return(
        <form>
        {activityList.map((singleActivity) => (
            <div className="App-box" key={singleActivity.id}>
            <NewActivity id={singleActivity.id} activity={singleActivity.activity}/>
            </div>
        ))}            
        <br/>
        <div key={activityList.length}>
            <button onClick={handleNew}>New</button>
        </div>
        <br/>
        </form>
    )
}


export default MakeActivities;