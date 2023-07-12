function Num(props){
    return(
      <tr>
        <td>
          <label for={props.title + props.activity + props.extra}>{props.title}:</label>
        </td>
        <td>
          <input type="number" id={props.title + props.activity + props.extra} name={props.title + props.activity + props.extra}/>
        </td>
      </tr>
    )
  }

  export default Num;