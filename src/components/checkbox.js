var _ = require('lodash');

function Check(props){
  var formattedTitle = _.startCase(props.title)
    return(
      <tr>
        <td>
          <label for={props.title + props.activity + props.extra}>{formattedTitle}:</label>
        </td>
        <td>
          <input type="checkbox" id={props.title + props.activity + props.extra} name={props.title + props.activity + props.extra}/><br></br>
        </td>
      </tr>
    )
}

export default Check;