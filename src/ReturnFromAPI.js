import React, { Component } from 'react';
import axios from 'axios';
// import { makeStyles } from "@material-ui/core/styles";

// const mockData = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

class ReturnFromAPI extends Component {
  constructor(){
    super();
    this.state = {
      pictures: '',
    };
  }


  componentDidMount() {
    // const mockData = mockData();
 
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ pictures: data.title});
      });
      
  }

  render(){
    return(
      <div>
        <div>
          {this.state.pictures}
        </div>
      </div>
    )

  }









}
export default ReturnFromAPI;