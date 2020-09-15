import React, { Component } from 'react';
import './App.css';

// The mount lifecycle is called twice: before and immediately after React renders the component into DOM.
// Mounting is where a lot of the functionality will take place specific to initializing a component's state at the time of loading. Mounting happens when your app loads up for the first time, when you navigate to a particular component using something like React router, or it could be something like when you add a component to a page dynamically, like through conditional renders or loops. The first one of these functionalities is one you should be very comfortable with at this point: the constructor.
// When we say that React renders to the DOM, it means that this is when React processes the JSX, converts it to HTML, and shows it on the browser.
class App extends Component{
  // The call to the constructor happens almost immediately before the component is first rendered to a page.
  // Essentially, when our code is loaded, JavaScript will look for the first React component that gets rendered (the root component). Then, each child component below the root is rendered. React starts off each component with the constructor statement which initializes the state and the props for each component along the way and tells React precisely how it needs to handle rendering each of those components.
  constructor(props){
    super(props);
    console.log("Constructor");
    this.state = {cycle: 0};
    setInterval(() => {
      this.setState({cycle: this.state.cycle +1})
    }, 1000);
  }

  // 在第一次渲染后调用
  componentDidMount(){
    console.log("Component Did Mount");
  }

  // this.state更新时该函数被触发
  componentDidUpdate(){
    console.log("Component Did Update");
  }

  render(){
    console.log("Render")
    return (
      <div className="App">react生命周期: Cycle {this.state.cycle}</div>
    )
  }
}

export default App;
