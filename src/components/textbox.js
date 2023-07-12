var _ = require('lodash');

function Text(props){
  var formattedTitle = _.startCase(props.title)
    return(
      <tr>
        <td>
          <label for={props.title + props.activity + props.extra}>{formattedTitle}:</label>
        </td>
        <td>
          <input type="text" id={props.title + props.activity + props.extra} name={props.title + props.activity + props.extra}/>
        </td>
      </tr>
    )
  }

export default Text;