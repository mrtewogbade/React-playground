import React, { useState } from 'react';


function Counter(){
    const [count, setCount ] = useState(0);


    return (
        <>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button>Reset</button>
            <button>Increment</button>
        
        </>
    )

}


export default Counter;