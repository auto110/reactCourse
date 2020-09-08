// include the React library
import React from 'react';

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
const App = () => <div>Hello React!</div>;
// export the component (named App）
export default App;
