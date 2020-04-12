import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Components/Layouts/Body';
import Navbar from './Components/Layouts/Navbar';
import Login from './Components/Auth/LogIn';
import Alert from './Components/Layouts/Alert';
import Registration from './Components/Auth/Registration';
import { loadUser } from './actions/auth';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { ThemeProvider } from '@material-ui/styles';
import theme from './Components/Style/Theme';
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {
  // it is basicaly componentDidMount and [] means just once
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <ThemeProvider theme={theme}>
            {/* <section className="container"> */}
            <Navbar />
            <Route exact path="/" component={Body} />

            <Alert></Alert>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
            </Switch>
          </ThemeProvider>
          {/* </section> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
