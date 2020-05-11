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
// Material Ui menu list Items
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//*************************************************** */
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
// responsive design
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
// Drawer
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Inbox';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
    paddingTop: '0.02rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '0.4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '0.05em',
    },
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
    // color: 'white',

    minWidth: 10,
    marginLeft: '-5px',
    // marginRight: '-8px',
  },
  button: {
    borderRadius: '50px',
    marginLeft: '10px',
    marginRight: '15px',
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  draweIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  draweIconIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
  },
  // drawer2: {
  //   ...root,
  //   color: 'white',
  // },

  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  logo: {
    ...theme.typography.tab,
    color: 'white',
  },

  headerItems: {
    ...theme.typography.tab,
    color: 'white',
    marginLeft: 'auto',
  },
  drawerCart: {
    backgroundColor: theme.palette.secondary.main,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const StyledBadgeCart = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

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

//variant 2 dropdown on hover
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const classes = useStyles();
  // Responsive UI
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //****************************************************** */
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(null);

  //****************************************************** */
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //****************************************************** */
  const logoutfun = async (e) => {
    // e.preventDefault();
    //User email
    logout(user.username);
    handleClose();
  };

  const handleChange = (e, value) => {
    console.log(value);
    setValue(value);
  };

  // smaller switch for setting value of clicked button in header
  const routesLogin = [
    { name: 'home', link: '/', activeIndex: 3 },
    { name: 'order', link: '/order', activeIndex: 4 },
  ];
  const routesLogout = [
    { name: 'Login', link: '/login', activeIndex: 0 },
    { name: 'SignUp', link: '/registration', activeIndex: 1 },
  ];

  useEffect(() => {
    console.log(user);
    [...routesLogin, ...routesLogout].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
      }
    });
  }, [value, routesLogin]);

  const tabs = (
    <React.Fragment>
      {!loading && (
        <Fragment>
          {isAuthenticated ? (
            <Fragment>
              <Tabs
                value={value}
                className={classes.tabContainer}
                indicatorColor="primary"
              >
                <Button
                  aria-controls="customized-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  className={classes.logoContainer}
                  onMouseOver={(e) => handleClick(e)}
                  disableRipple
                  keepMounted
                >
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
                    <h3>
                      {user.firstName} {user.lastName}{' '}
                    </h3>
                  ) : (
                    <p>UNDEFINED USER</p>
                  )}
                </Button>
                <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  // onClose={handleClose}
                  // onClose={handleClose}
                  MenuListProps={{ onMouseLeave: handleClose }}
                >
                  <StyledMenuItem>
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Your profile" />
                  </StyledMenuItem>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </StyledMenuItem>
                  <StyledMenuItem component={Link} to="/" onClick={logoutfun}>
                    <ListItemIcon>
                      <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </StyledMenuItem>
                </StyledMenu>
              </Tabs>
            </Fragment>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              {routesLogout.map((route) => (
                <Tab
                  className={classes.tab}
                  component={Link}
                  to={route.link}
                  label={route.name}
                />
              ))}
            </Tabs>
          )}
          {/* </Tabs> */}
        </Fragment>
      )}
      <Button
        // variant="contained"
        // color="secondary"
        // startIcon={<ShoppingBasketIcon />}
        className={classes.button}
      >
        <IconButton aria-label="cart">
          <StyledBadgeCart badgeContent={1} color="secondary">
            <ShoppingCartIcon />
          </StyledBadgeCart>
        </IconButton>
      </Button>
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      {user && isAuthenticated ? (
        <Typography className={classes.headerItems}>
          {user.firstName} {user.lastName}{' '}
        </Typography>
      ) : null}

      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 3}
          >
            {/* <ListItemIcon>
              <HomeIcon />
            </ListItemIcon> */}
            <ListItemText
              className={
                value === 3
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>
          {!isAuthenticated ? (
            <Fragment>
              {routesLogout.map((route) => (
                <ListItem
                  onClick={() => {
                    setOpenDrawer(false);
                    setValue(route.activeIndex);
                  }}
                  selected={value === route.activeIndex}
                  divider
                  button
                  component={Link}
                  to={route.link}
                >
                  <ListItemText
                    className={
                      value === route.activeIndex
                        ? [classes.drawerItem, classes.drawerItemSelected]
                        : classes.drawerItem
                    }
                    disableTypography
                  >
                    {route.name}
                  </ListItemText>
                </ListItem>
              ))}
            </Fragment>
          ) : (
            <ListItem
              onClick={() => {
                setOpenDrawer(false);

                logoutfun();
              }}
              divider
              button
              component={Link}
              to="/"
            >
              <ListItemText
                className={[classes.drawerItem, classes.drawerItemSelected]}
                disableTypography
              >
                Logout
              </ListItemText>
            </ListItem>
          )}

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            // selected={value === null}
            selected={value === 4}
            divider
            button
            component={Link}
            to="/order"
            className={classes.drawerCart}
          >
            <ListItemText
              className={
                value === 4
                  ? [classes.drawerItem, classes.drawerItemSelected]
                  : classes.drawerItem
              }
              disableTypography
            >
              Cart
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.draweIconContainer}>
        <MenuIcon
          className={classes.draweIconIcon}
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
        ></MenuIcon>
      </IconButton>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}
            onClick={() => setValue(3)}
          >
            {matches ? null : (
              // <Typography className={classes.logo}>FS</Typography>
              <Typography className={classes.logo}>Food Shop</Typography>
            )}

            <img alt="company logo" className={classes.logo} src={logo} />
          </Button>
          {matches ? drawer : tabs}
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
