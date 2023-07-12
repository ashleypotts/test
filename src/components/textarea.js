var _ = require('lodash');

function TextArea(props){
  var formattedTitle = _.startCase(props.title)
    return(
        <tr>
            <td>
                <label for={props.title + props.activity + props.extra}>{formattedTitle}:</label>
            </td>
            <td>
                <textarea id={props.title + props.activity + props.extra} name={props.title + props.activity + props.extra}>{props.content}</textarea>
            </td>
        </tr>
    )
}
export default TextArea;