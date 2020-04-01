import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Components/Layouts/Body';
import Navbar from './Components/Layouts/Navbar';
import Login from './Components/Auth/LogIn';
import Alert from './Components/Layouts/Alert';
import Registration from './Components/Auth/Registration';
// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Body} />
        <section className="container">
          <Alert></Alert>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/registration" component={Registration} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
