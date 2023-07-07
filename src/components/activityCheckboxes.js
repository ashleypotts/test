import Check from './checkbox';
import Text from './textbox';
import Num from './number';
import Radio from './radio';
import { useState } from 'react';

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

        let ApiPostStatus=false
        let BigPandaAlertStatus=false
        let DatabaseLookupStatus=false
        let DbStagingStatus=false
        let EventGridPostStatus=false
        let ExecuteSqlStatus=false
        let JsonFlattenStatus=false
        let JsonMapStatus=false
        let LoadCsvStatus=false
        let LoadCsvBulkStatus=false
        let LoadExcelStatus=false
        let LogStatus=false
        let SerialNumberConversionStatus=false
        let SleepStatus=false
        let SnsPostStatus=false
        let WriteFileStatus=false
        let WriteToStagingDbStatus=false

function ApiPost(){
    ApiPostStatus=!ApiPostStatus
    let styleValue="display:none"
    if(ApiPostStatus)
        {styleValue="display:block"}
    return(
    <form id="ApiPostform" style={styleValue}>
        <Check title="enabled"/>
        <Text title="connectionId"/>
        <Text title="endpoint"/>
        <Text title="path"/>
        <Text title="headers"/>
        <Text title="payload"/>
        <Text title="blobpath"/>
        <Num title="statusCode"/>
        <Text title="message"/>
        <Check title="raiseException"/>
    </form>

    )
}

function Checkbox(props){
    return(
        <tr>
            <td>
                {/* <input type="checkbox" id={props.title} name={props.title}/> */}
            <input type="checkbox" id={props.title} name={props.title} onChange={ApiPost}/><br></br>
            </td>
            <td>
                <label for={props.title}>{props.title}</label>
            </td>
        </tr>
    )
}

function MakeCheckboxes(){
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
 
    const handleChange = (event, activity) => {
        if(event.target.checked) {
            setSelectedCheckboxes([...selectedCheckboxes, activity]);
        }
        else {
            setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== activity))
        }
    };

    return(
        <div>
            <table>
        {activities.map(activity=> (
            <div key={activity.title}>
                <tr>
                    <td>
                    <input type="checkbox" checked={selectedCheckboxes.includes(activity)} id={activity.title} name={activity.title} onChange={event => handleChange(event, activity.title)}/>
                    </td>
                    <td>
                        <label for={activity.title}>{activity.title}</label>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                {selectedCheckboxes.includes(activity.title) && <Text title="test"/>}
                    </td>
                </tr>
                </div>
        )
        )
        }
        </table>
        </div> 
)
}

export default MakeCheckboxes;