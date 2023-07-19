import {useState} from 'react';
var _ = require('lodash');

function Text(props){  
  // const [formValues, setFormValues] = useState({});
  if(props.title===undefined){var title=""}
  else{var title=props.title}
  if(props.activity===undefined){var activity=""}
  else{var activity=props.activity}
  if(props.extra===undefined){var extra=""}
  else{var extra=props.extra}
  
  var formattedTitle = _.startCase(props.title)
    return(
      <tr>
        <td>
          <label htmlFor={title + activity + extra}>{formattedTitle}:</label>
        </td>
        <td>
          <input type="text" id={title + activity + extra} name={title + activity + extra} onChange={props.onChange}/>
        </td>
      </tr>
    )
  }

export default Text;