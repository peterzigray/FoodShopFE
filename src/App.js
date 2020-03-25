
import React, { Component, Fragment } from 'react';

import './App.css';
import ReturnFromAPI from './API/ReturnFromAPI';


import { makeStyles } from '@material-ui/core/styles';


import Header from '../src/Components/Layouts/Header';
import LogIn from '../src/Components/Auth/LogIn';



class App extends Component {
  constructor() {
    super();
    this.state = {
      makeStyles,
      isClicked: false,
    };
  }

// function App() {

  onClick = () => {
    console.log(this.state.isClicked)
    this.setState({isClicked: !this.state.isClicked});
  }
  
  render() {
    
  return (
  <Fragment>
      <Header/>
      <LogIn/>
  </Fragment>
     
  
    
  );
}
}
export default App;
