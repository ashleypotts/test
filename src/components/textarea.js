function TextArea(props){
    return(
        <tr>
            <td>
                <label for={props.title}>{props.title}:</label>
            </td>
            <td>
                <textarea id={props.title} name={props.title}>{props.content}</textarea>
            </td>
        </tr>
    )
}
export default TextArea;