// Function called to create a number input

import {useState, useEffect} from 'react';
import {updateConfigInfo} from './ConfigGen';
var _ = require('lodash');

function Num(props){

  // Handles state of number
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
  
  // Returns number input created with a label
  return(
    <tr>
      <td>
        <label htmlFor={title + extra + activity}>{formattedTitle}:</label>
      </td>
      <td>
        <input type="number" id={title + extra + activity} name={title + extra + activity}  onChange={(e) => handleInput(e)}/>
      </td>
    </tr>
  )
}

export default Num;