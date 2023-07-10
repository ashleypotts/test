

// // function ApiPost(){
// //     ApiPostStatus=!ApiPostStatus
// //     let styleValue="display:none"
// //     if(ApiPostStatus)
// //         {styleValue="display:block"}
// //     return(
// //     <form id="ApiPostform" style={styleValue}>
// //         <Check title="enabled"/>
// //         <Text title="connectionId"/>
// //         <Text title="endpoint"/>
// //         <Text title="path"/>
// //         <Text title="headers"/>
// //         <Text title="payload"/>
// //         <Text title="blobpath"/>
// //         <Num title="statusCode"/>
// //         <Text title="message"/>
// //         <Check title="raiseException"/>
// //     </form>






import React, { useState } from 'react';
import Text from './textbox';

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
      <td>
        <input
          type="checkbox"
          checked={checked}
          id={title}
          name={title}
          onChange={onChange}
        /><br></br>
      </td>
      <td>
        <label htmlFor={title}>{title}</label>
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
              <tr>
                <td>
                  <Checkbox
                    title={activity.title}
                    checked={selectedCheckboxes.includes(activity.title)}
                    onChange={event => handleChange(event, activity)}
                  />
                </td>
              </tr>
              {selectedCheckboxes.includes(activity.title) && (
                <tr>
                  <td colSpan="2">
                    <Text title="test" />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MakeCheckboxes;