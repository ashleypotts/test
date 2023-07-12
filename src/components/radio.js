var _ = require('lodash');

function Radio(props){
  var formattedTitle = _.startCase(props.title)
    return(
      <tr>
        <td>
        <label for={props.title + props.activity + props.extra}>{formattedTitle}:</label>
        </td>
        <td>
        {props.options.map(function(option) {
            return (
              <div>
              <input type="radio" id={option + props.activity + props.extra} name={props.title + props.activity + props.extra} value={option + props.activity + props.extra}/>
              <label for={option + props.activity + props.extra}>{option}</label>
              </div>
            )
          })
        }
        </td>
      </tr>
    )
  }

  export default Radio;