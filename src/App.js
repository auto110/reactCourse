// include the React library
import React, { Component } from 'react';

//New Greeting component
const Greeting = props => <p>Hello {props.name}!</p>;

// JSX基础结构
// function App() {
//   return (
//     <div 
//       className="Example"
//       style = {{background:"white", color:"black"}}
//       id="my-element"
//       onClick={() => alert('hello')}
//       >

//       Hello World

//     </div>
//   );
// }

//Declaring a functional component in React is incredibly simple since it is just a function declaration that returns some JSX.
// const App = () => <div>Hello React!</div>;

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: []
    };
  }
  
  displayForm() {
    return (
      <div>
        Username: <input type="text" /><br />
        Password: <input type="text" /><br />
        Password Confirmation: <input type="text" /><br />
        Email: <input type="text" /><br />
        <br />
        <button>Submit</button>
      </div>
    );
  }
  
  render(){
    return (
      <div className = "App">
        Create Account 
        <hr/>
        {this.displayForm()}
      </div>
    )
  }
}

// export the component (named App）
export default App;
