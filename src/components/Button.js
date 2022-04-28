function Button (props){
    return(
        <button className="customBtn" style={props.color} onClick={props.handler}>{props.btnValue}</button>
    )
}

export default Button