function Text(props){
    return(
      <tr>
        <td>
          <label for={props.title + props.activity + props.extra}>{props.title}:</label>
        </td>
        <td>
          <input type="text" id={props.title + props.activity + props.extra} name={props.title + props.activity + props.extra}/>
        </td>
      </tr>
    )
  }

export default Text;