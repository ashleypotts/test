import {useState, useEffect} from 'react';
import {updateConfigInfo} from './ConfigGen';
var _ = require('lodash');

function TextArea(props){

  const [formValue, setFormValue] = useState({});
  const handleInput = (event) => {
    const inputValue = event.target.value;
    setFormValue({[event.target.name]: inputValue});
  };

  useEffect(() => {
    updateConfigInfo(formValue);
  }, [formValue]);
  
  var formattedTitle = _.startCase(props.title)
  if(props.title===undefined){var title=""}
  else{var title=props.title}
  if(props.activity===undefined){var activity=""}
  else{var activity=props.activity}
  if(props.extra===undefined){var extra=""}
  else{var extra=props.extra}
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