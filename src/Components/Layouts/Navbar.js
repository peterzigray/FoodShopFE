import React, { Fragment } from 'react';

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

import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const classes = useStyles();
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

      <Button color="inherit">
        <Link onClick={logout} to="/" style={{ textDecoration: 'none' }}>
          <i className="fas fa-sign-out-alt"> </i>{' '}
          <span className="hide-sm">Logout</span>
        </Link>
      </Button>
    </Fragment>
  );

  const guesLinks = (
    <Fragment>
      <Button color="white">
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
      </Button>
    </Fragment>
  );
  console.log('');

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            Food Shop <FastfoodIcon />
          </Typography>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guesLinks}</Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
