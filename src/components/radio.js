// Function called to create a radio input

import {useState, useEffect} from 'react';
import {updateConfigInfo} from './ConfigGen';
var _ = require('lodash');

function Radio(props){

  // Handles state of radio buttons
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
  else{title = "_" + props.title}
  if(props.activity===undefined){var activity=""}
  else{activity = "_" + props.activity}
  if(props.extra===undefined){var extra=""}
  else{extra = props.extra}
  
  // Returns radio buttons created with label
  return(
    <tr>
      <td>
        <label htmlFor={extra + activity + title}>{formattedTitle}:</label>
      </td>
      <td>
        {props.options.map(function(option) {
          return (
            <div>
            <input type="radio" id={extra + activity + option} name={extra + activity + title} value={extra + activity + option}  onChange={(e) => handleInput(e)}/>
            <label htmlFor={extra + activity + option}>{option}</label>
            </div>
          )
        })}
      </td>
    </tr>
  )
}

export default Radio;