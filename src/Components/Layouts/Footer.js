import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Grid from '@material-ui/core/Grid';
// icons
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adorement: {
    width: '15em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '10em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '9em',
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
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
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
              <Grid
                item
                component={Link}
                to="/services"
                className={classes.link}
              >
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
      </Hidden>
      <img alt="icecone" className={classes.adorement} src={logo}></img>
      <Grid
        container
        className={classes.socialContainer}
        spacing={2}
        justify="flex-end"
      >
        <Grid
          item
          component={'a'}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
