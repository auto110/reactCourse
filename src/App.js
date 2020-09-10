// include the React library
import React, { Component } from 'react';
import "./App.css";

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
    // 当调用事件函数时，事件里的this指向的上下文环境会发生变化（指向的不是当前组件），需要在构造器中为事件初始化指向和绑定执行上下文为当前组件
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this)
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
  }
  
  submitForm(event){
    console.log("正在提交表单 ...")
    console.log(event)
  }

  // validateUsernameOnBlur(event){
  //   console.log("I should validate whatever is in ", event.target.value);
  //   // 这里this需要显式绑定到组件，否则会出现 “this is undefined” 错误
  //   this.setState()
  // }

  // arrow function syntax
  validateUsernameOnBlur = (event) => {
    // console.log("I should validate whatever is in ", event.target.value);
    // // 这里this需要显式绑定到组件，否则会出现 “this is undefined” 错误
    // this.setState()

    const username = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Username", username));
    this.setState({username, errors})

  }

  validatePasswordOnBlur(event){
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNotEmpty("Password", password));
    this.setState({ password, errors });
  }

  validateEmailOnBlur(event) {
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateEmailFormat("Email", email));
    this.setState({ email, errors });
  }


  validateEmailFormat(fieldName, value) {
    let [lhs, rhs] = value.split('@');
    lhs = lhs || '';
    rhs = rhs || '';
    if (lhs.length <= 0 || rhs.length <= 0) {
      return `${fieldName} must be in a standard email format.`;
    }
  }

  validatePasswordConfirmationOnBlur(event) {
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;
    if (passwordConfirmation !== this.state.password) {
      errors.push("Password must match password confirmation.");
    }
    this.setState({ passwordConfirmation, errors });
  }

  displayErrors(){
    return (
      <div className="errors">
        {
          this.state.errors.map(
            (err, i) => <p key={`err-${i}`}> {err} </p>
          )
        }
      </div>
    );
  }

  // validate whether the field is blank or not
  validateNotEmpty(fieldName, value) {
    if (value.length <= 0) {
      return `${fieldName} 为必填.`;
    }
   }

  
  displayForm() {
    return (
      <div>
        Username: <input type="text" onBlur = {this.validateUsernameOnBlur} /> <br />
        Password: <input type="text" onBlur={this.validatePasswordOnBlur} /> <br />
        Password Confirmation: <input type="text" onBlur={this.validatePasswordConfirmationOnBlur} /><br />
        Email: <input type="text" onBlur={this.validateEmailOnBlur} /> <br />
        <br />
        {/* <button>Submit</button> */}
        {/* We will call this click handler submitForm and reference it inside our component class since this will be an event handler local to this component. */}
        <button onClick = {this.submitForm}>Submit</button>
      </div>
    );
  }

  renderMessage(show){
    if(show){
      return <p>Hello World</p>
    }else{
      return null;
    }
  }
  
  render(){
    const showMessage = true;
    return (
      <div className = "App">
        Create Account 
        {this.displayErrors()}
        <hr/>
        {this.displayForm()}

        <button>点击该按钮显示剩余内容！</button>
        <div>
        I am the content that should be hidden by default!
        </div>
        {this.renderMessage(showMessage)}
      </div>
    )
  }
}

// export the component (named App）
export default App;