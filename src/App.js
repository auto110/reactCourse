import React from 'react';

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
