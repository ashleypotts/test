function Num(props){
    return(
      <div>
      <label for={props.title}>{props.title}:</label>
          <input type="number" id={props.title} name={props.title}/><br/>
      </div>
    )
  }

  export default Num;