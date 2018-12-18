import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello() {
  let phrase = "React"
  return (
    <h1> This is {phrase} App </h1>
  )
}

function SayFullName(props) {
  return (
    <div>
    <h1> My name {props.name}, last name - {props.surname} </h1>
    <a href={props.link}> Link to my profile  </a>
    </div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiseWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
