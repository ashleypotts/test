var _ = require('lodash');

function Check(props){
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
          <input type="checkbox" id={title + activity + extra} name={title + activity + extra}/><br></br>
        </td>
      </tr>
    )
}

export default Check;