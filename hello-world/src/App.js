import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import GreetMe from './components/GreetMe';
import { Component } from 'react';

/* function App() {
  return (
    <div className="App">

      <GreetMe />
      {/*
       <ParentComponent /> 
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Counter /> 
      <Welcome age="38" /> 
      <UserGreeting></UserGreeting>
       <Hello />
       <Greet name="KARIM" />
      <Message>
      </Message> }
    </div>
  );
} */

class App extends Component {
  render() {
    return (
      <div className="App">

        <GreetMe />
        {/*
         <ParentComponent /> 
        <EventBind />
        <FunctionClick />
        <ClassClick />
        <Counter /> 
        <Welcome age="38" /> 
        <UserGreeting></UserGreeting>
         <Hello />
         <Greet name="KARIM" />
        <Message>
        </Message> */}
      </div>
    );
  }
}

export default App;
