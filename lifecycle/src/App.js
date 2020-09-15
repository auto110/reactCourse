import React, { Component } from 'react';
import './App.css';
import LifecycleTest from "./LifecycleTest";
import Message from './Message';

// The mount lifecycle is called twice: before and immediately after React renders the component into DOM.
// Mounting is where a lot of the functionality will take place specific to initializing a component's state at the time of loading. Mounting happens when your app loads up for the first time, when you navigate to a particular component using something like React router, or it could be something like when you add a component to a page dynamically, like through conditional renders or loops. The first one of these functionalities is one you should be very comfortable with at this point: the constructor.
// When we say that React renders to the DOM, it means that this is when React processes the JSX, converts it to HTML, and shows it on the browser.
class App extends Component{
  // The call to the constructor happens almost immediately before the component is first rendered to a page.
  // Essentially, when our code is loaded, JavaScript will look for the first React component that gets rendered (the root component). Then, each child component below the root is rendered. React starts off each component with the constructor statement which initializes the state and the props for each component along the way and tells React precisely how it needs to handle rendering each of those components.
  constructor(props){
    super(props);
    console.log("Constructor");
    this.state = {
      // start with a value of 0.
      cycle: 0,
      messages: [],
      loading: true,
      list: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Everyone' },
        { id: 3, message: 'What' },
        { id: 4, message: 'Is' },
        { id: 5, message: 'Up' }
      ]
    };
    setInterval(() => {
      this.setState({cycle: this.state.cycle + 1})
    }, 1000);
    this.removeItem = this.removeItem.bind(this)
  }

  renderProfile(){
    if(this.state.loading){
      return (<div>Loading ....</div>)
    }

    if(this.state.messages && this.state.messages.length>0){
      return (
          this.state.messages.map(
            (msg, index)=> <li key={`msg-${index}`}> {msg} </li>
          )
      );
    }else{
      return (<div>No messages!</div>)
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Component Did Update");
    console.log('prevProps:', prevProps);
    console.log('prevState:', prevState);
  }

  // simulate a long-loading profile
  componentDidMount(){
    console.log("Component Did Mount");
    setTimeout(
      ()=> this.setState({ messages: ["Hello World", "How are you?"], loading: false}),
      10000  //10 seconds
    )
  }

  componentWillUnmount(){
    alert("I've been removed!");
    console.log('Removing item', this.props);
  }

  removeItem(id){
    const newList = this.state.list.filter(item => item.id !== id);
    this.setState({ list: newList });
    this.state.list.map(item=>(
      <Message 
        key = {item.id}
        id = {item.id}
        message = {item.message}
        removeItem = {this.removeItem.bind(this)}
      />
    ))
  }


  render(){
    console.log("Render")
    return (
      // show the current value of the cycle state
      <div className="App">react生命周期: Cycle {this.state.cycle}
      {/*  conditional rendering */}
      { false && <LifecycleTest /> }
      {this.renderProfile()}

      <h1>My Items</h1>
      { this.state.list.map(item=>(
        <Message key={item.id}  id = {item.id} message={item.message}/>
        ))}
      </div>
    )
  }
}

export default App;
