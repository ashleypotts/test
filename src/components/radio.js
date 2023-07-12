function Radio(props){
    return(
      <div>
        <label for={props.title + props.activity + props.extra}>{props.title}:</label>
        {props.options.map(function(option) {
            return (
              <div>
              <input type="radio" id={option + props.activity + props.extra} name={props.title + props.activity + props.extra} value={option + props.activity + props.extra}/>
              <label for={option + props.activity + props.extra}>{option}</label>
              </div>
            )
          })
        }
      </div>
    )
  }

  export default Radio;