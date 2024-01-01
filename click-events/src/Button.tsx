

function Button(){
    const handleClick = () => console.log("Ok I'm here");
    

    return(
        <button onClick={handleClick}>Click Me</button>
    )
}

export default Button