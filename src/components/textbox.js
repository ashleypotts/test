// Function called to create a textbox

import {useState, useEffect} from 'react';
import {updateConfigInfo} from './ConfigGen';

var validator = require('validator');
var _ = require('lodash');

function Text(props){

  var validateTime = false;
  var validateURL = false;

  const [errorMessage, setErrorMessage] = useState('')
  // Handles state of textbox
  const [formValue, setFormValue] = useState({});
  const handleInput = (event) => {
    const inputValue = event.target.value;
    setFormValue({[event.target.name]: inputValue});
    if(validateTime){
      if (validator.isTime(event.target.value)) {
        setErrorMessage('')
      } else {
        setErrorMessage('Enter a valid time!')
      }
    }
    if(validateURL){
      if (validator.isURL(event.target.value)) {
        setErrorMessage('')
      } else {
        setErrorMessage('Enter a valid URL!')
      }
    }
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
  

  if(formattedTitle.includes("Time")){validateTime = true;}
  if(formattedTitle.includes("Url")){validateURL = true;}

  // Returns textbox created with a label
  return(
    <tr>
      <td>
        <label htmlFor={activity + extra + title}>{formattedTitle}:</label>
      </td>
      <td>
        <input type="text" id={activity + extra + title} name={activity + extra + title}  onChange={(e) => handleInput(e)}/>
      </td>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
    </tr>
  )
}

export default Text;