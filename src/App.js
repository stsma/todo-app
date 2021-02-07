import React, { useState, useEffect  } from "react"; 
import randomColor from 'randomcolor';

// Convert the class below to a functional component that uses the useState hook to initalize a count vartiable to 0 and display the count on the screen.
// Don't worry about the part where the button changes the count quite yet, that's what you're here to learn about!

function App(){
    const [ count, setCount ] = useState(0);
    const [ color, setColor ] = useState("")

    // 

    function increment(){
        setCount(prevCount => prevCount + 1);
    }

    function decrement(){
        setCount(prevCount => prevCount - 1);
    }

    useEffect(() =>{
        setColor(prevColor => prevColor = randomColor());
    }, [])

    return(
        <div>
            <h1 style={{color:color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App;