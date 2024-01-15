import React from 'react'
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // Updater function
        
        setCount((prevConunt) => prevConunt +1);
        setCount((prevConunt) => prevConunt +1);
        setCount((prevConunt) => prevConunt +1);
        setCount((prevConunt) => prevConunt +1);
    }
    return (
        <div>
            <button onClick={handleClick}>Count:{count}</button>
        </div>
    )
}

export default Counter;