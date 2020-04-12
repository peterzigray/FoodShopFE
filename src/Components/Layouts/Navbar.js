import React, { Fragment, useState, useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
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
//Avatar MatarialUI
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

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
    paddingTop: '1rem',
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
    marginLeft: '-5px',
    // marginRight: '-8px',
  },
  button: {
    borderRadius: '50px',
    marginLeft: '25px',
    marginRight: '30px',
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const classes = useStyles();
  const [value, setValue] = useState(null);

  const handleChange = (e, value) => {
    console.log(value);
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
              {isAuthenticated ? (
                <Fragment>
                  <Fragment>
                    <Tabs
                      value={value}
                      // onChange={handleChange}
                      className={classes.tabContainer}
                      indicatorColor="primary"
                    >
                      <Button disableRipple className={classes.logoContainer}>
                        <div className={classes.root}>
                          <StyledBadge
                            overlap="circle"
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right',
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt="Remy Sharp"
                              src={user.imageUrl}
                              // "/static/images/avatar/1.jpg"
                            />
                          </StyledBadge>
                        </div>
                        {user ? (
                          <p>
                            {user.firstName} {user.lastName}{' '}
                          </p>
                        ) : (
                          <p>UNDEFINED USER</p>
                        )}
                      </Button>

                      <Tab
                        onClick={logout}
                        label="Logout"
                        className={classes.tab}
                        component={Link}
                        to="/"
                      ></Tab>
                    </Tabs>
                  </Fragment>
                </Fragment>
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
