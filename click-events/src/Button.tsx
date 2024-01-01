interface Button{
    count: number,
    name: string,
    e: string
}

// function Button(){
//     // const handleClick = () => console.log("Ok I'm here");
//     let count = 0;
    
//     const handleClick = (name) => {
//         if(count < 3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`);
            
//         }else{
//             alert('You reached the limit of clicks');
//         }
//     }
    

//     return(
//         <button onClick={() => handleClick("tewogbade")}>Click Me</button>
//     )
// }

// export default Button

function Button(){
    const handleClick = (e) => e.target.textContent = "OUCH";

    return (
        <button onClick={(e) => handleClick(e)}> Click me</button>
    )
    
}

export default Button