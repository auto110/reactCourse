import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    console.log("Constructor")
  }

  render(){
    return (
      <div className="App">react生命周期</div>
    )
  }
}

export default App;
