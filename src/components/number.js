var _ = require('lodash');

function Num(props){
  var formattedTitle = _.startCase(props.title)
    return(
      <tr>
        <td>
          <label for={props.title + props.activity + props.extra}>{formattedTitle}:</label>
        </td>
        <td>
          <input type="number" id={props.title + props.activity + props.extra} name={props.title + props.activity + props.extra}/>
        </td>
      </tr>
    )
  }

  export default Num;