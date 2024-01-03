import {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);

    const updateName = () => {

        setName("Spongebob");

        
    }

    const decrementAge = () => {
        setAge(()=>{
            return age - 1;
        })
    }

    const reset  = () => {
        setAge(0)
    }


    const incrementAge = () => {

        setAge(() => {
            return age + 4;
        });
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName }> Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}> Increment Age</button>

            <button onClick={decrementAge}> Decrement Age</button>

            <button onClick={reset}> Reset Age</button>
        </div>
    )

}

export default MyComponent;