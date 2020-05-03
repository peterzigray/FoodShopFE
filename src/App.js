import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Category from './Components/Dashboard/Category';
import DetailProduct from './Components/Dashboard/DetailProduct';
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
import Order from './Components/Layouts/Order';
import Footer from './Components/Layouts/Footer';
import PrivateRoute from './Components/Routing/PrivateRoute';
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

            <Alert></Alert>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/order" component={Order} />
              <Route
                exact
                path="/product-management/products/:newURL"
                component={(props) => <Category {...props} />}
              />
              />
              <Route exact path="/category/product" component={DetailProduct} />
            </Switch>
            <Footer />
          </ThemeProvider>
          {/* </section> */}
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
