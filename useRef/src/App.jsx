import './App.css'
import { useState, useEffect } from 'react';
// import Counter from './Counter'
// import Stopwatch from './Stopwatch'
// import KittyGallery from './kittyGallery'
import DemoCounter from './DemoCounter';
import useLocalStorage from './useLocalStorage';
import Header from "./header";

function App() {

  const [username, setUsername] = useLocalStorage("username", "");
  const [showHeader, setShowHeader] = useState(false)

  console.log("%c App: useState", "color:coral");
  const [showCounter, setShowCounter] = useState(() => {
    return false;
  });

  useEffect(() => {
    console.log("%c App:useEffect no deps called", "color:royalblue");

    return () => {
      console.log("%c App:useEffect no deps clean up", "color:darked");
    }
  });
  useEffect(() => {
    console.log("%c App:useEffect empty deps called", "color:royalblue");

    return () => {
      console.log("%c App:useEffect empty deps clean up", "color:darked");
    }
  }, []);
  useEffect(() => {
    console.log("%c App:useEffect with deps called", "color:royalblue");

    return () => {
      console.log("%c App:useEffect with deps clean up", "color:darked");
    }
  }, [showCounter]);

  function submitForm(e){
    e.preventDefault();
    setShowHeader(prev => !prev);
  }

  const element = (

    <>
      { showHeader && <Header />} 
      <main className='App'>
        <label htmlFor="showCounter">showCounter</label>
        <input type="checkbox" name='showCounter' id='showCounter' onChange={(e) => setShowCounter(e.target.checked)} />
        {showCounter && <DemoCounter />}
        {/* <Stopwatch/> */}
        {/* <KittyGallery /> */}

        <form action="" onSubmit={submitForm}>
          <fieldset>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </fieldset>
          <button type='submit'>login</button>
        </form>
      </main>
    </>
  );
  console.log("%c App : render end", "color:hotpink");
  return element;
}

export default App
