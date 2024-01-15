
import './App.css';
import { useState } from "react";
import Counter from "./counter";
import List from './list';
import UseEffectExample from './useeffect-example';
import Products from './Products';

function App() {
  let localVariable = "adc";
  const [text, setText] = useState("Hello World!");
  console.log("initial value of local variable ", { localVariable });

  console.log("app component rendered");
  const handleChange = (event) => {
    localVariable = event.target.value;
    setText(event.target.value);
    // triggers a rerendered
    // it update state variable
    console.log({ localVariable });
    console.log("Updated value of text");
  }
  return (
    // <div className="App">
    // <input type="text" name="content" id="content" onChange={handleChange} />
    //   {text}
    // </div>
    // <Counter />
    // <List/>
    // <UseEffectExample />
    <Products />
  );
}

export default App;
