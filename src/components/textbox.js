// Function called to create a textbox

import {useState, useEffect} from 'react';
import {updateConfigInfo} from './ConfigGen';
var _ = require('lodash');

function Text(props){

  // Handles state of textbox
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
  
  // Returns textbox created with a label
  return(
    <tr>
      <td>
        <label htmlFor={extra + activity + title}>{formattedTitle}:</label>
      </td>
      <td>
        <input type="text" id={extra + activity + title} name={extra + activity + title}  onChange={(e) => handleInput(e)}/>
      </td>
    </tr>
  )
}

export default Text;