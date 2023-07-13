import React, { useState } from 'react';
import ApiPost from './activityForms/ApiPost';
import BigPandaAlert from './activityForms/BigPandaAlert';
import DatabaseLookup from './activityForms/DatabaseLookup';
import DbStaging from './activityForms/DbStaging';
import EventGridPost from './activityForms/EventGridPost';
import ExecuteSql from './activityForms/ExecuteSql';
import JsonFlatten from './activityForms/JsonFlatten';
import JsonMap from './activityForms/JsonMap';
import LoadCsv from './activityForms/LoadCsv';
import LoadCsvBulk from './activityForms/LoadCsvBulk';
import LoadExcel from './activityForms/LoadExcel';
import Log from './activityForms/Log';
import SerialNumberConversion from './activityForms/SerialNumberConversion';
import Sleep from './activityForms/Sleep';
import SnsPost from './activityForms/SnsPost';
import WriteFile from './activityForms/WriteFile';
import WriteToStagingDb from './activityForms/WriteToStagingDb';

const activities = [
  { title: "ApiPost" },
  { title: "BigPandaAlert" },
  { title: "DatabaseLookup" },
  { title: "DbStaging" },
  { title: "EventGridPost" },
  { title: "ExecuteSql" },
  { title: "JsonFlatten" },
  { title: "JsonMap" },
  { title: "LoadCsv" },
  { title: "LoadCsvBulk" },
  { title: "LoadExcel" },
  { title: "Log" },
  { title: "SerialNumberConversion" },
  { title: "Sleep" },
  { title: "SnsPost" },
  { title: "WriteFile" },
  { title: "WriteToStagingDb" }
];

function Checkbox({ title, checked, onChange }) {
  return (
    <tr>
      <td width={10}>
        <input
          type="checkbox"
          checked={checked}
          id={title}
          name={title}
          onChange={onChange}
        />
      </td>
      <td>
         <label for={title}>{title}</label>
      </td>
    </tr>
  );
}

function MakeCheckboxes() {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleChange = (event, activity) => {
        const isChecked = event.target.checked;
        if (isChecked) {
        setSelectedCheckboxes(prevCheckboxes => [...prevCheckboxes, activity.title]);
        } else {
        setSelectedCheckboxes(prevCheckboxes => prevCheckboxes.filter(item => item !== activity.title));
        }
    };

    return (
    <div>
      <table>
        <tbody>
          {activities.map(activity => (
            <React.Fragment key={activity.title}>
                <Checkbox
                title={activity.title}
                checked={selectedCheckboxes.includes(activity.title)}
                onChange={event => handleChange(event, activity)}
                />
                    {selectedCheckboxes.includes(activity.title) && activity.title==='ApiPost' && <ApiPost/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='BigPandaAlert' && <BigPandaAlert/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='DatabaseLookup' && <DatabaseLookup/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='DbStaging' && <DbStaging/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='EventGridPost' && <EventGridPost/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='ExecuteSql' && <ExecuteSql/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='JsonFlatten' && <JsonFlatten/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='JsonMap' && <JsonMap/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='LoadCsv' && <LoadCsv/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='LoadCsvBulk' && <LoadCsvBulk/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='LoadExcel' && <LoadExcel/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='Log' && <Log/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='SerialNumberConversion' && <SerialNumberConversion/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='Sleep' && <Sleep/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='SnsPost' && <SnsPost/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='WriteFile' && <WriteFile/>}
                    {selectedCheckboxes.includes(activity.title) && activity.title==='WriteToStagingDb' && <WriteToStagingDb/>}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    );
}

export default MakeCheckboxes;