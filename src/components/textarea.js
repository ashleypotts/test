// Function called to create a textarea

import {useState, useEffect} from 'react';
import {updateConfigInfo} from './ConfigGen';
var _ = require('lodash');

function TextArea(props){

  // Handles state of textarea
  const [formValue, setFormValue] = useState({});
  const handleInput = (event) => {
    const inputValue = event.target.value;
    setFormValue({[event.target.name]: inputValue});
  };

  // Calls updateConfigInfo in ConfigGen file to send new input
  useEffect(() => {
    updateConfigInfo(formValue);
  }, [formValue]);
  
  // Formats and saves parameters
  var formattedTitle = _.startCase(props.title)
  if(props.title===undefined){var title=""}
  else{var title=props.title}
  if(props.activity===undefined){var activity=""}
  else{var activity=props.activity}
  if(props.extra===undefined){var extra=""}
  else{var extra=props.extra}

  // Returns textarea created with a label
  return(
    <tr>
      <td>
        <label htmlFor={title + activity + extra}>{formattedTitle}:</label>
      </td>
      <td>
        <textarea id={title + activity + extra} name={title + activity + extra}  onChange={(e) => handleInput(e)}>{props.content}</textarea>
      </td>
    </tr>
  )
}
export default TextArea;