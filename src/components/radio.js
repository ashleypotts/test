var _ = require('lodash');

function Radio(props){
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
        {props.options.map(function(option) {
            return (
              <div>
              <input type="radio" id={option + activity + extra} name={title + activity + extra} value={option + activity + extra}/>
              <label for={option + activity + extra}>{option}</label>
              </div>
            )
          })
        }
        </td>
      </tr>
    )
  }

  export default Radio;