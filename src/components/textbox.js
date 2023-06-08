function Text(props){
    return(
      <div>
      <label for={props.title}>{props.title}:</label>
          <input type="text" id={props.title} name={props.title}/><br/>
      </div>
    )
  }

export default Text;