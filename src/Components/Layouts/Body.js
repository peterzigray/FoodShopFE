import React, { Component, Fragment } from 'react';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';

import { makeStyles } from '@material-ui/core/styles';

import LogIn from '../Auth/LogIn';

class Body extends Component {
  constructor() {
    super();
    this.state = {
      makeStyles,
      isClicked: false
    };
  }

  // function App() {

  onClick = () => {
    console.log(this.state.isClicked);
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <Fragment>
        <p>This is gonna be the first page try/login</p>
      </Fragment>
    );
  }
}
export default Body;
