function Text(props){
    return(
      <tr>
        <td>
          <label for={props.title}>{props.title}:</label>
        </td>
        <td>
          <input type="text" id={props.title} name={props.title}/>
        </td>
      </tr>
    )
  }

export default Text;