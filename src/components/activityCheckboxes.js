import React, {useState} from 'react';
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
];

function Checkbox({title, checked, onChange}) {
  return (
    <tr>
      <td width={10}>
        <input type="checkbox" checked={checked} id={title} name={title} onChange={onChange}/>
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
            onChange={event => handleChange(event, activity)}/>
            {selectedCheckboxes.includes(activity.title) && (
              (activity.title==='ApiPost' && <ApiPost/>) ||
              (activity.title==='BigPandaAlert' && <BigPandaAlert/>) ||
              (activity.title==='DatabaseLookup' && <DatabaseLookup/>)||
              (activity.title==='DbStaging' && <DbStaging/>) ||
              (activity.title==='EventGridPost' && <EventGridPost/>) ||
              (activity.title==='ExecuteSql' && <ExecuteSql/>) ||
              (activity.title==='JsonFlatten' && <JsonFlatten/>) ||
              (activity.title==='JsonMap' && <JsonMap/>) ||
              (activity.title==='LoadCsv' && <LoadCsv/>) ||
              (activity.title==='LoadCsvBulk' && <LoadCsvBulk/>) ||
              (activity.title==='LoadExcel' && <LoadExcel/>) ||
              (activity.title==='Log' && <Log/>) ||
              (activity.title==='SerialNumberConversion' && <SerialNumberConversion/>) ||
              (activity.title==='Sleep' && <Sleep/>) ||
              (activity.title==='SnsPost' && <SnsPost/>) ||
              (activity.title==='WriteFile' && <WriteFile/>) ||
              (activity.title==='WriteToStagingDb' && <WriteToStagingDb/>)
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default MakeCheckboxes;