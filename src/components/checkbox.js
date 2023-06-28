function Check(props){
    return(
      <tr>
        <td>
          <label for={props.title}>{props.title}:</label>
        </td>
        <td>
          <input type="checkbox" id={props.title} name={props.title}/><br></br>
        </td>
      </tr>
    )
}

export default Check;