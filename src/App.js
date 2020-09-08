import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div 
      className="Example"
      style = {{background:"white", color:"black"}}
      id="my-element"
      onClick={() => alert('hello')}
      >

      Hello World

    </div>
  );
}

export default App;
