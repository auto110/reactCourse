// include the React library
import React, { Component } from 'react';
import "./App.css";
import MyForm from './FormDemo';

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
      errors: [],

      showSecret: false,

      playerScore: 0,

      questions: [
        {
          question: "What animal barks?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a tiger?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Cat",
          playerChoice: null
        },
        {
          question: "What animal is more closely related to a wolf?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        },
        {
          question: "What animal is best known for playing fetch?",
          possibleAnswers: ["Dog", "Cat"],
          rightAnswer: "Dog",
          playerChoice: null
        }
      ]
    };
    // 当调用事件函数时，事件里的this指向的上下文环境会发生变化（指向的不是当前组件），需要在构造器中为事件初始化指向和绑定执行上下文为当前组件
    this.validateUsernameOnBlur = this.validateUsernameOnBlur.bind(this)
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
    this.toggleSecretMessage = this.toggleSecretMessage.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
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
    this.setState({username, errors});
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

  secretMessage(){
    // quick conditional that checks the state for showSecret
    if(!this.state.showSecret){
      return;
    }

    return (
      <div className="secret-message">
       I am the secret message!
      </div>
    )
  }

  // add a new function called toggleSecretMessage() to start modifying the state
  // We will want to call this function from our button since that will act as the trigger to show and hide the secret message.
  toggleSecretMessage(){
    this.setState({
      showSecret: !this.state.showSecret
    })
  }

  displayQuestion(index){
    // playerScore
    // if (this.state.playerScore < index) { return; }
    const questionObj = this.state.questions[index];
    return (
      <div className="question-display" key={`q-${index}`}>
       <p className="question">
        {questionObj.question}
       </p>
       <button className="question-choice" onClick={()=>this.answerQuestion(index, questionObj.possibleAnswers[0])}>
         {questionObj.possibleAnswers[0]}
       </button>
       <button className="question-choice" onClick={()=>this.answerQuestion(index,questionObj.possibleAnswers[1])}>
         {questionObj.possibleAnswers[1]}
       </button>
       <br/>

       <p className="result-correct">
        答案正确！
       </p>
       <p className="result-incorrect">
         答案错误！
       </p>
      </div>
    ) 
  }

  // 回答问题(入参index为选择回答问题的索引；choice为回答的答案选项值)
  answerQuestion(index, choice) {
    // if (this.state.playerScore < index) { return; }
    const answeredQuestion = this.state.questions[index];
    // 问题回答内容
    answeredQuestion.playerChoice = choice;
    const allQuestions = this.state.questions;
    allQuestions[index] = this.answeredQuestion;
    this.setState(
      {
        questions: allQuestions
      }, ()=> {
        this.updatePlayerScore()
      }
    )
  }

  updatePlayerScore(){
    // 回答结果正确的问题个数
    const playerScore = this.state.questions.filter(q=>q.rightAnswer === q.playerChoice).length;
    this.setState({playerScore});
    console.log("New player score:", playerScore);
  }

  renderQuestions(){
    return this.state.questions.map((question, index)=> this.displayQuestion(index));
  }

  render(){
    const showMessage = true;
    return (
      <div className = "App">
        Create Account 
        {this.displayErrors()}
        <hr/>
        {this.displayForm()}

        <button onClick = {this.toggleSecretMessage}>点击该按钮显示剩余内容！</button>
        {this.secretMessage()}

        {/* <div>
        I am the content that should be hidden by default!
        </div> */}

        {this.renderMessage(showMessage)}
    
      <br/>
      <h1>Quiz Show!</h1>
      <br/>

      {/* { this.displayQuestion(0) } */}
      {/* { this.displayQuestion(1) }
      { this.displayQuestion(2) }
      { this.displayQuestion(3) } */}

      <hr/>
      {this.renderQuestions()}

      <MyForm></MyForm>
      </div>
    )
  }
}

// export the component (named App）
export default App;