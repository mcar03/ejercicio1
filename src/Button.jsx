

const Button = (props) => {
    console.log(props)
    return(
        <div>
            <button 
                onClick = {()=>{props.onClickButton()}} 
                name="Enviar" 
                style={{color: props.color, backgroundColor: props.backgroundColor}}>{props.title}      
            </button>
        </div>
    )
}

export default Button