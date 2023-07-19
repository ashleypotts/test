var _ = require('lodash');

function TextArea(props){
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
                <textarea id={title + activity + extra} name={title + activity + extra}>{props.content}</textarea>
            </td>
        </tr>
    )
}
export default TextArea;