function TextArea(props){
    return(
        <tr>
            <td>
                <label for={props.title + props.activity + props.extra}>{props.title}:</label>
            </td>
            <td>
                <textarea id={props.title + props.activity + props.extra} name={props.title + props.activity + props.extra}>{props.content}</textarea>
            </td>
        </tr>
    )
}
export default TextArea;