import React, { Component, Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import EcoIcon from '@material-ui/icons/Eco';
import ListIcon from '@material-ui/icons/List';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import { getDetailProduct, getCategoryProducts } from '../../actions/products';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Autocomplete from '@material-ui/lab/Autocomplete';

import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';

import Spinner from '../Layouts/Spinner';

import TreeView from '@material-ui/lab/TreeView';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { MenuItem, getContrastRatio } from '@material-ui/core';

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0px 2px 2px',
    '&:focus, &:hover, &$active': {
      '& .bar': {
        // display: inline-block !important;
        height: 9,
        width: 1,
        paddingTop: '35px',
        //   backgroundColor: 'currentColor',
        //   marginLeft: 1,
        //   marginRight: 1,
      },
      boxShadow: '#ccc 0px 2px 3px 1px',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      '& .PrivateValueLabel-label-347': { color: 'red' },
      height: 9,
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function AirbnbThumbComponent(props) {
  return (
    <span {...props}>
      <span className="bar">EUR</span>
    </span>
  );
}
const defaultProps = {
  //   strike: {
  //     textDecoration: 'line-through',
  //   },
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '10rem', height: '3rem' },
  borderColor: 'text.primary',
};
const useStyles = makeStyles((theme) => ({
  LeftGrid: { paddingLeft: '2em', paddingRight: '5em' },
  icon: {
    height: '1.4em',

    width: '1.8em',
    [theme.breakpoints.down('xs')]: {
      height: '1em',
      width: '1em',
    },
  },
  title: {
    paddingBottom: '4em',
  },
  mainItems: {
    paddingTop: '2em',
  },
  SelectPanelBroder: {
    flexBasis: '0',
    // borderBottom: '0.07rem solid',
    // backgroundColor: 'red',
  },
  selectPanel: {
    marginBottom: '1rem',
    paddingBottom: '1rem',
    paddingTop: '1.5rem',
    backgroundColor: '#f5f5f5',
    // theme.palette.primary.main,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  badge: {
    bottom: 210,
    left: 33,
    right: 0,
  },
  MuiPaper: {
    backgroundColor: 'red',
  },
  Paper: {
    // padding: '20px',
    // marginTop: '10px',
    // marginBottom: '10px',
  },
  title: {
    // maxWidth: 345,
    marginBottom: '2.5rem',
  },
  tab: {
    ...theme.typography.tab,
    // color: 'white',

    minWidth: 10,
    marginLeft: '-5px',
    // marginRight: '-8px',
  },
  elevation: {
    boxShadow: ' 0px 0px 0px 0px',

    // zIndex: 1,
  },
  root: {
    flexGrow: 1,
    // width: 300,
    // boxShadow: 0,
    // backgroundColor: 'red',
  },
  paper: {
    height: 230,
    width: 230,
    // margin: '5rem',
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  gridItem: {
    margin: '3em',
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  cardWrapper: {
    display: 'inline-block',
    position: 'relative',
    boxShadow: ' 0px 0px 0px 0px',
  },
  layer: {
    position: 'absolute',
    color: 'white',
    top: '25%',
    borderBottom: '4px',
    left: '10%',
    right: '10%',
    bottom: '25%',
    // backgroundColor: 'grey',
    display: 'none',
    // opacity: 0.5,
  },
  media: {
    backgroundColor: 'grey',
  },
  inline: {
    display: 'inline',
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

const Category = ({
  products: { products, loading },
  getDetailProduct,
  getCategoryProducts,
  history,
  props,
}) => {
  const [value, setValue] = React.useState([0, 100]);
  const [arrow, setArrow] = useState(false);
  const [valueSlider, setValueSlider] = useState([0, 100]);

  useEffect(() => {
    // getCategoryProducts(1, history);
    var query = window.location.search;
    // window.location.search.toString();
    var matched = query.match(/\(([^\)]+)\)/g);
    console.log(matched.toString());
    console.log('Category');
  }, []);

  const classes = useStyles();

  const titles = [
    { name: 'fruits', id: 1, categoryname: 'Apples & Pears' },
    { name: 'vegetables', id: 2, categoryname: 'Advocadoes & Exotic Fruits' },
    { name: 'vegan & vegetarian', id: 3, categoryname: 'Bananas & Plantains' },
  ];
  const subtitles = [
    {
      id: 1,
      categoryname: 'fruits',
      names: 'Apples & Pears',
    },
    {
      id: 2,
      categoryname: 'vegetables',
      names: 'Advocadoes & Exotic Fruits',
    },
    {
      id: 3,
      categoryname: 'vegan & vegetarian',
      names: 'Bananas & Plantains',
    },
  ];
  // const getCategoriesByName = (names) => {
  //   const names = ['fruits', 'vegetables', 'vegan & vegetarian'];
  //   const subnames = [
  //     {
  //       categoryname: 'fruits',
  //       names: 'Apples & Pears',
  //     },
  //     {
  //       categoryname: 'vegetables',
  //       names: 'Advocadoes & Exotic Fruits',
  //     },
  //     {
  //       categoryname: 'vegan & vegetarian',
  //       names: 'Bananas & Plantains',
  //     },
  //   ];

  //   return Object.entries(
  //     exercises.reduce((acc, value) => {
  //       const { categoryname } = value;

  //       acc[categoryname] = value[categoryname]
  //         ? [...exercises[categoryname], exercise]
  //         : [exercise];
  //       console.log(exercises);
  //       return exercises;
  //     }, {})
  //   );
  // };
  function FormRow() {
    return loading ? (
      <Spinner />
    ) : (
      <Fragment>
        {products.content.map((product) => (
          <p>{product.name}</p>
        ))}
      </Fragment>
    );
  }
  //   const changeArrowDirection = (id) => {
  //     console.log(id);
  //     setValue(id);
  //     setArrow(!arrow);
  //   };

  const getProduct = (id) => {
    getDetailProduct(id, history);
    console.log(id);
  };

  const handleChange = (e) => {
    // frontValue = 's';
    // console.log(e);
    // var frontValue = document.getElementsByClassName(
    //   'MuiSlider-thumb MuiSlider-thumbColorPrimary PrivateValueLabel-thumb-343'
    // )[1].innerText;
    // var backValue = document.getElementsByClassName(
    //   'MuiSlider-thumb MuiSlider-thumbColorPrimary PrivateValueLabel-thumb-343'
    // )[0].innerText;
    // // e.type === 'mousemove'
    // //   ? setValueSlider([Number(backValue), Number(frontValue)])
    // //   : console.log(null);
    // console.log([Number(backValue), Number(frontValue)]);
    // // setValue(newValue);
    // // setValueSlider(w);
  };

  const sortOptions = [
    { name: 'Price High to Low', activeIndex: 1, selectedIndex: 0 },
    {
      name: 'Price Low to High',

      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'Favourite',

      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'A-Z',

      activeIndex: 1,
      selectedIndex: 3,
    },
    {
      name: 'Z-A',

      activeIndex: 1,
      selectedIndex: 4,
    },
  ];

  const getCurrentSort = (id) => {
    switch (id) {
      case 3:
        return 'sort=rating,asc&';
      case 4:
        return 'sort=rating,desc&';
      //   case 2:
      //     return {
      // 		'sort=rating,desc&',
      //     };
      default:
        return null;
    }
  };

  const handleSort = (id) => {
    // .substring(1);
    // .match(/^\(([^\)]+)\)$/))
    //   var query = window.location.search.toString();
    //   var matched = query.match(/^[a]$/);
    //   console.log(query);

    const newSort = getCurrentSort(id);
    getCategoryProducts(1, newSort, history);
  };

  function Layout() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={2} className={classes.mainItems} spacing={3}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.LeftGrid}
            >
              <Grid item xs={12}>
                <div className={classes.root}>
                  <Typography id="range-slider" gutterBottom>
                    Price
                  </Typography>

                  <Slider
                    // value={valueSlider}
                    defaultValue={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    // ThumbComponent={AirbnbThumbComponent}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                {' '}
                <Box display="flex" justifyContent="center">
                  <Box borderBottom={1} {...defaultProps}>
                    {' '}
                    <Button>Categories</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Box borderBottom={1} {...defaultProps}>
                    {' '}
                    <Button>Season</Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Box borderBottom={1} {...defaultProps}>
                    {' '}
                    <Button
                    //   variant="contained"
                    //   color="primary"
                    //   disableElevation
                    >
                      Discounted
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center">
                  <Box borderBottom={1} {...defaultProps}>
                    {' '}
                    <Button>Dodavatel</Button>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Fragment>
                  {titles.map(({ name, categoryname }) => (
                    <TreeView
                      // className={classes.capitalize}
                      className={classes.root}
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpandIcon={<ChevronRightIcon />}
                    >
                      <TreeItem
                        className={classes.capitalize}
                        nodeId="1"
                        label={name}
                      >
                        <TreeItem nodeId="2" label={categoryname} />
                      </TreeItem>
                      {/* <TreeItem nodeId="5" label="Documents">
                        <TreeItem nodeId="10" label="OSS" />
                        <TreeItem nodeId="6" label="Material-UI">
                          <TreeItem nodeId="7" label="src">
                            <TreeItem nodeId="8" label="index.js" />
                            <TreeItem nodeId="9" label="tree-view.js" />
                          </TreeItem>
                        </TreeItem>
                      </TreeItem> */}
                    </TreeView>
                  ))}
                </Fragment>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} className={classes.mainItems} spacing={3}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <Grid container>
                  <Grid item>
                    <Typography variant="h4">Fruits & Vegetables</Typography>
                  </Grid>
                  <Grid
                    item
                    component={'a'}
                    href="https://www.facebook.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="facebook logo"
                      src={facebook}
                      className={classes.icon}
                    />
                  </Grid>
                  <Grid
                    item
                    component={'a'}
                    href="https://www.twitter.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="twitter logo"
                      src={twitter}
                      className={classes.icon}
                    />
                  </Grid>
                  <Grid
                    item
                    component={'a'}
                    href="https://www.instagram.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="instagram logo"
                      src={instagram}
                      className={classes.icon}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.title}>
                  <Grid item xs={8}>
                    <Typography variant="body2">
                      Jujubes marshmallow danish bonbon jelly beans tart lemon
                      drops toffee. Jujubes pudding pudding. Powder toffee
                      caramels cotton candy liquorice candy gingerbread pudding.
                    </Typography>
                  </Grid>
                  <Grid item xs={4}></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.title}>
                  {sortOptions.map((option) => (
                    <Grid item xs={2}>
                      <div className={classes.root}>
                        <AppBar position="static">
                          <Button
                            onClick={() => handleSort(option.selectedIndex)}
                          >
                            {option.name}
                          </Button>
                        </AppBar>
                      </div>
                    </Grid>
                  ))}
                  <Grid item xs={2}></Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container>
                  {products.content
                    ? products.content.map((product) => (
                        <Grid item onClick={() => getProduct(product.id)}>
                          {/* <Button> */}
                          <Card
                            classes={{ root: classes.elevation }}
                            position="relative"
                          >
                            {product.sale ? (
                              <Badge
                                position="absolute"
                                className={classes.badge}
                                color="secondary"
                                overlap="circle"
                                badgeContent={`-${product.sale * 100}%`}
                                // variant="dot"
                              ></Badge>
                            ) : null}
                            <div className={classes.cardWrapper}>
                              {/* <Button keepMounted> */}
                              <img
                                height="250px"
                                width="250px"
                                src={product.imageUrl}
                              ></img>
                              <div
                                className={classes.layer}
                                style={{ display: 'block' }}
                              >
                                <ListItemText>
                                  <Typography
                                    style={{
                                      'text-align': 'center',
                                      'vertical-align': 'middle',
                                      padding: '25px',
                                      // 'text-shadow': '0 0 1rem #000',
                                      'font-weight': '600',
                                      // 'font-size': '1.5rem',
                                    }}
                                    variant="h5"
                                  ></Typography>{' '}
                                </ListItemText>
                              </div>
                              {/* </Button> */}
                            </div>

                            <Box
                              component="fieldset"
                              mb={3}
                              borderColor="transparent"
                            >
                              <Typography component="legend">
                                {product.name}
                              </Typography>
                              <CardActions padding="3px">
                                {product.sale ? (
                                  <Fragment>
                                    <Typography
                                      variant="caption"
                                      color="error"
                                      style={{
                                        textDecoration: 'line-through',
                                      }}
                                    >
                                      {' '}
                                      {`${product.price}$`}
                                    </Typography>
                                    <Typography>{`${(
                                      product.price * product.sale
                                    ).toFixed(2)}$`}</Typography>
                                  </Fragment>
                                ) : (
                                  <Typography>
                                    {' '}
                                    {`${product.price}$`}
                                  </Typography>
                                )}
                              </CardActions>
                              <Rating
                                name="simple-controlled"
                                value={product.rating}
                                // onChange={(event, newValue) => {
                                //   setValue(newValue);
                                // }}
                              />
                            </Box>
                          </Card>
                          {/* </Button> */}
                        </Grid>
                      ))
                    : null}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  return loading && products === null ? (
    <Spinner />
  ) : (
    <Fragment>
      {/* <FormRow /> */}
      <Layout />
    </Fragment>
  );
};

Category.propTypes = {
  products: PropTypes.func.isRequired,
  getCategoryProducts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, {
  getDetailProduct,
  getCategoryProducts,
})(Category);
