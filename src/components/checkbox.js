function Check(props){
    return(
      <tr>
        <td>
          <label for={props.title + props.activity + props.extra}>{props.title}:</label>
        </td>
        <td>
          <input type="checkbox" id={props.title + props.activity + props.extra} name={props.title + props.activity + props.extra}/><br></br>
        </td>
      </tr>
    )
}

export default Check;