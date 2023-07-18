var _ = require('lodash');

function Num(props){
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
          <label for={title + activity + extra}>{formattedTitle}:</label>
        </td>
        <td>
          <input type="number" id={title + activity + extra} name={title + activity + extra}/>
        </td>
      </tr>
    )
  }

  export default Num;