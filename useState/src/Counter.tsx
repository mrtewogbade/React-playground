import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const increment = () => {
         setCount(count + 1);
    }
    const decrement = () => {
         setCount(count - 1);
    }

    const reset = function(){
        setCount(0)
    }




    return(
        <>
            <p>{count}</p>

            <button onClick={increment}>Increment</button>

            <button onClick={decrement}>Decrement</button>

            <button onClick={reset}>Reset</button>
        
        
        </>
    )


}


export default Counter;
