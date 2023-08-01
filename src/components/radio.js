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
  else{title = props.title}
  if(props.activity===undefined){var activity=""}
  else{activity = props.activity + "_"}
  if(props.extra===undefined){var extra=""}
  else{extra = props.extra + "_"}
  
  // Returns radio buttons created with label
  return(
    <tr>
      <td>
        <label htmlFor={activity + extra + title}>{formattedTitle}:</label>
      </td>
      <td>
        {props.options.map(function(option) {
          return (
            <div>
            <input type="radio" id={activity + extra + option} name={activity + extra + title} value={activity + extra + option}  onChange={(e) => handleInput(e)}/>
            <label htmlFor={activity + extra + option}>{option}</label>
            </div>
          )
        })}
      </td>
    </tr>
  )
}

export default Radio;