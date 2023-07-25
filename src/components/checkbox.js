// Function called to create a checkbox

import {useState, useEffect} from 'react';
import {updateConfigInfo} from './ConfigGen';
var _ = require('lodash');

function Check(props){

  // Handles state of checkbox
  const [formValue, setFormValue] = useState({});
  const handleInput = (event) => {
    let inputValue=false;
    if(event.target.value==="on"){
      inputValue=true;
    }
    setFormValue({[event.target.name]: inputValue});
  };

  // Calls updateConfigInfo in ConfigGen file to send new input
  useEffect(() => {
    updateConfigInfo(formValue);
  }, [formValue]);

  // Formats and saves parameters
  var formattedTitle = _.startCase(props.title)
  if(props.title===undefined){var title=""}
  else{title = "_" + props.title}
  if(props.activity===undefined){var activity=""}
  else{activity = "_" + props.activity}
  if(props.extra===undefined){var extra=""}
  else{extra = props.extra}

  // Returns checkbox created with a label
  return(
    <tr>
      <td>
        <label htmlFor={extra + activity + title}>{formattedTitle}:</label>
      </td>
      <td>
        <input type="checkbox" id={extra + activity + title} name={extra + activity + title}  onChange={(e) => handleInput(e)}/><br></br>
      </td>
    </tr>
  )
}

export default Check;