import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adorement: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              {' '}
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/services" className={classes.link}>
              {' '}
              Services
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              {' '}
              Custom SW development
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              {' '}
              Mobile App Development
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              {' '}
              Webside Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              {' '}
              The revolution
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              {' '}
              Vision
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              {' '}
              Technology
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              {' '}
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              About Us
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              History
            </Grid>
            <Grid item component={Link} to="/" className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img alt="icecone" className={classes.adorement} src={logo}></img>
    </footer>
  );
}
