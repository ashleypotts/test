function Check(props){
    return(
      <div>
      <label for={props.title}>{props.title}:</label>
          <input type="checkbox" id={props.title} name={props.title}/><br></br>
      </div>
    )
}

export default Check;