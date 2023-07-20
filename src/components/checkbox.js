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
  else{var title = props.title}
  if(props.activity===undefined){var activity=""}
  else{var activity = "_" + props.activity}
  if(props.extra===undefined){var extra=""}
  else{var extra = "_" + props.extra}

  // Returns checkbox created with a label
  return(
    <tr>
      <td>
        <label htmlFor={title + extra + activity}>{formattedTitle}:</label>
      </td>
      <td>
        <input type="checkbox" id={title + extra + activity} name={title + extra + activity}  onChange={(e) => handleInput(e)}/><br></br>
      </td>
    </tr>
  )
}

export default Check;