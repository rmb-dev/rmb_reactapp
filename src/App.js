import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Inst" surname=" " link="https://www.instagram.com/"/>
        <SayFullName name="Face" surname=" " link="https://www.facebook.com"/>
        <SayFullName name="Twit" surname=" " link="https://www.twitter.com"/>
      </div>
    );
  }
}

function SayFullName(props) {
  return (
    <div>
    <h1>My name {props.name}, last name - {props.surname}</h1>
    <a href={props.link}> Link to my profile  </a>
    </div>
  )
}

export default App;
