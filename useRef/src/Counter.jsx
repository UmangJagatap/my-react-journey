import {useRef} from 'react'

export default function Counter() {
    console.log("Counter rendered");
    const count = useRef(0);
    function handleChange() {
        count.current = count.current + 1;
        alert("Click count: " + count.current);
    }
    return (
        <button onClick={handleChange}>Count me</button>
    )
}
