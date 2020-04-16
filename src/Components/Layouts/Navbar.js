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
    paddingTop: '3rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
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
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerCart: {
    backgroundColor: theme.palette.secondary.main,
  },
  drawerItemSelected: {
    opacity: 1,
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

  // const handleClick = (e, value) => {
  //   setAnchorEl(e.currentTarget);
  //   setOpen(true);
  // };

  // const handleClose = (e) => {
  //   setAnchorEl(null);
  //   setOpen(false);
  // };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/login' && value !== 0) {
      setValue(0);
    } else if (path === '/registration' && value !== 1) {
      setValue(1);
    } else if (path === '/' && value !== 3) {
      setValue(3);
    } else if (path === '/order' && value !== 4) {
      setValue(4);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
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
                  <Button
                    // aria-owns={anchorEl ? 'simple-menu' : undefined}
                    // aria-haspopup={anchorEl ? 'true' : undefined}
                    // onMouseOver={(e) => handleClick(e)}
                    // disableRipple
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    // variant="contained"
                    onClick={handleClick}
                    className={classes.logoContainer}
                    onMouseOver={(e) => handleClick(e)}
                    disableRipple
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
                  {/* <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}
                      >
                        <MenuItem onClick={handleClose}>Settings</MenuItem>
                        <MenuItem
                          onClick={logoutfun}
                          label="Logout"
                          className={classes.tab}
                          component={Link}
                          to="/"
                          onClick={handleClose}
                        >
                          Logout
                        </MenuItem>
                      </Menu> */}
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

                  {/* <Tab
                        onClick={logoutfun}
                        label="Logout"
                        className={classes.tab}
                        component={Link}
                        to="/"
                      ></Tab> */}
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
    </React.Fragment>
  );
  const drawer = (
    <React.Fragment>
      {user && isAuthenticated ? (
        <h3>
          {user.firstName} {user.lastName}{' '}
        </h3>
      ) : null}

      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
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
            <ListItem
              onClick={() => {
                setOpenDrawer(false);
                setValue(0);
              }}
              divider
              button
              component={Link}
              to="/login"
              selected={value === 0}
            >
              <ListItemText
                className={
                  value === 0
                    ? [classes.drawerItem, classes.drawerItemSelected]
                    : classes.drawerItem
                }
                disableTypography
              >
                Login
              </ListItemText>
            </ListItem>
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

          {!isAuthenticated ? (
            <ListItem
              onClick={() => {
                setOpenDrawer(false);
                setValue(1);
              }}
              selected={value === 1}
              divider
              button
              component={Link}
              to="/registration"
            >
              <ListItemText
                className={
                  value === 1
                    ? [classes.drawerItem, classes.drawerItemSelected]
                    : classes.drawerItem
                }
                disableTypography
              >
                SignUp
              </ListItemText>
            </ListItem>
          ) : null}

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
          {/* <ListItem component={Link} to="/about">
            <ListItemText>about</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/contact">
            <ListItemText>contact</ListItemText>
          </ListItem>
          <ListItem component={Link} to="/estimate">
            <ListItemText>estimate</ListItemText>
          </ListItem> */}
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
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            disableRipple
            className={classes.logoContainer}
            onClick={() => setValue(3)}
          >
            {matches ? (
              <Typography variant="h5" className={classes.title}>
                FS
              </Typography>
            ) : (
              <Typography variant="h5" className={classes.title}>
                Food Shop
              </Typography>
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
