import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Hello from './components/Hello';
import HelloPJS from './components/Hello_in_pure_js';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';



class App extends Component {
  render () {
  return (
    <div className="App"> 
    
    <Message/>

      <Greet name="Bruce" heroName = "Batman">
        <p> This is a components</p>
      </Greet>

      <Greet name="Clark" heroName = " Superman">
        
        <button>Action</button> 
        {/* this is possible because of the {props.children} in Greet.js  */}
      </Greet>

      <Greet name="Diana" heroName = " Wonder Woman"/>

      <Welcome name = "Bruce" heroName = "Batman"> </Welcome>
      <Welcome name = "Clark" heroName = "Superman"> </Welcome>
      
    <Welcome name = "Diana" heroName = "WOnder Woman"> </Welcome>
    <Hello/>
    <HelloPJS/>
    <Counter/>
    <FunctionClick/>
    <ClassClick/>
    <EventBind/>
    <ParentComponent/>
    <UserGreeting/>
    </div>

  );
}}

export default App;
