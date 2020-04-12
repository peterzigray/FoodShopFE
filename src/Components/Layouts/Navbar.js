import React, { Fragment, useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import FaceIcon from '@material-ui/icons/Face';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import FastfoodIcon from '@material-ui/icons/Fastfood';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));
const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    paddingLeft: '0.2rem',
    paddingBottom: '1rem',
  },
  logoContainer: {
    paddingLeft: '1rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },

    // padding: 0,
  },
  tabContainer: {
    marginLeft: 'auto',
  },

  tab: {
    ...theme.typography.tab,

    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    borderRadius: '50px',
    marginLeft: '25px',
    marginRight: '30px',
  },
}));

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const authLinks = (
    <Fragment>
      {user && (
        <Fragment>
          <FaceIcon />
          <p>
            {' '}
            {user.firstName} {user.lastName}{' '}
          </p>
        </Fragment>
      )}
      {/* <Button color="inherit">
        <Link onClick={logout} to="/" style={{ textDecoration: 'none' }}>
          <i className="fas fa-sign-out-alt"> </i>{' '}
          <span className="hide-sm">Logout</span>
        </Link>
      </Button> */}
      <i className="fas fa-sign-out-alt"> </i>{' '}
      <Tab
        onClick={logout}
        label="Logout"
        className={classes.tab}
        component={Link}
        to="/"
      />
    </Fragment>
  );

  const guesLinks = (
    <Fragment>
      {/* <Button color="white">
        <Link color="white" to="/login" style={{ textDecoration: 'none' }}>
          Login
        </Link>
      </Button>
      <Button color="inherit">
        <Link
          color="white"
          to="/registration"
          style={{ textDecoration: 'none' }}
        >
          SignUp
        </Link>
      </Button> */}
      <Tab
        className={classes.tab}
        component={Link}
        to="/login"
        label="Login"
      ></Tab>
      <Tab
        className={classes.tab}
        component={Link}
        to="/registration"
        label="SignUp"
      ></Tab>
    </Fragment>
  );
  console.log('');

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/login' && value !== 0) {
      setValue(0);
    } else if (path === '/registration' && value !== 1) {
      setValue(1);
    }
  }, [value]);
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}
            onClick={() => setValue(null)}
          >
            <Typography variant="h5" className={classes.title}>
              Food Shop
            </Typography>
            <img alt="company logo" className={classes.logo} src={logo} />
          </Button>

          {!loading && (
            <Fragment>
              {/* <Tabs
                value={value}n
                onChange={handleChange}
                className={classes.tabContainer}
              > */}
              {isAuthenticated ? (
                authLinks
              ) : (
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className={classes.tabContainer}
                  indicatorColor="primary"
                >
                  <Tab
                    className={classes.tab}
                    component={Link}
                    to="/login"
                    label="Login"
                  ></Tab>
                  <Tab
                    className={classes.tab}
                    component={Link}
                    to="/registration"
                    label="SignUp"
                  ></Tab>
                </Tabs>
              )}
              {/* </Tabs> */}
            </Fragment>
          )}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ShoppingBasketIcon />}
            className={classes.button}
          >
            Cart
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
