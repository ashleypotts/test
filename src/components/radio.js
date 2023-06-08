function Radio(props){
    return(
      <div>
        <label for={props.title}>{props.title}:</label>
        {props.options.map(function(option) {
            return (
              <div>
              <input type="radio" id={option} name={props.title} value={option}/>
              <label for={option}>{option}</label>
              </div>
            )
          })
        }
      </div>
    )
  }

  export default Radio;