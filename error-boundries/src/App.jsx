/* eslint-disable no-unused-vars */
// import React from 'react';
import { useState, Component } from 'react'
import './App.css'
import CounterReducer from './CounterReducer';

class ErrorBoundary extends Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { error } = this.state;
    if (error) {
      return <this.props.FallbackComponent error={error} />;
    }
    return this.props.children;
  }
}

function FallbackComponent({ error }) {
  return (
    <div>
      <p>Somthing went wrong</p>
      <pre>{error.message}</pre>
    </div>
  );
}

function Breaker() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(prev => {
      if (prev > 2) {
        throw new Error("Boom💥");
      }
      return prev + 1;
    });
  }
  return <button onClick={handleClick}>{count}</button>
}

function AnotherComponent() {
  return <h1>Component for displaying some other info</h1>
}

function App() {
  return (
      <div className="App">
        {/* <ErrorBoundary FallbackComponent = {FallbackComponent}>
      <Breaker/>
    </ErrorBoundary>
    <AnotherComponent /> */}
        <CounterReducer />

      </div>
    
  );

}

export default App;
