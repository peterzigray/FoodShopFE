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
import { getCategories, getSuppliers } from '../../actions/categories';
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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Icon } from 'react-fa';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import FormGroup from '@material-ui/core/FormGroup';

import MenuList from '@material-ui/core/MenuList';
import Autocomplete from '@material-ui/lab/Autocomplete';

import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';

import Spinner from '../Layouts/Spinner';

import TreeView from '@material-ui/lab/TreeView';
import Link from '@material-ui/core/Link';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { MenuItem, getContrastRatio } from '@material-ui/core';
import CategoryName from './CategoryName';
import Hidden from '@material-ui/core/Hidden';
// responsive design
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chipItem: { marginLeft: '5rem' },
  chip: { margin: '0.3rem' },
  spinnerProducts: { marginLeft: '35rem' },
  spiner: { width: '110px', height: '100px', backgroundColor: 'red' },
  advertismentBarr: {
    // borderBottom: '1px solid grey',
    // height: '10rem',
    // paddingTop: '4.5rem',
  },
  tabpanelName: {
    '& .MuiBox-root': {
      paddingLeft: 0,
    },
    // backgroundColor: 'black',
    '.MuiBox-root-476': { padding: '0px' },
  },
  AppBarSort: {
    backgroundColor: 'white',
    height: '5rem',
    // '&:focus, &:hover, &$active': {
    //   backgroundColor: '#26a69a',
    // },
  },
  AppBarSortButton: {
    height: '4rem',
    marginLeft: '3.5rem',
    marginRight: '3.5rem',
    borderBottom: '1.5px solid',
    borderTop: '1.5px solid',
    color: '#26a69a',
    position: 'relative',
    zIndex: 1,
    fontSize: '1.1rem',
    borderRadius: 0,
    '&:hover': {
      backgroundColor: '#b2dfdb',
      color: 'white',
    },
  },
  AppBarSortButtonBorder: {
    // position: 'absolute',
    // left: '58px',
    // bottom: 0,
    // height: '5px',
    // width: '50%',
    // borderBottom: '1px solid magenta',
  },
  MuiBox: { padding: '0rem' },
  tabOfBarOnTop: {
    height: '5rem',
    '&:hover': {
      backgroundColor: '#4db6ac',
      color: 'white',
    },
  },
  appBarOnTop: {
    paddingLeft: '8.5rem',
    paddingRight: '17rem',
    backgroundColor: 'white',
    height: '5rem',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '0rem',
      paddingRight: '1.5rem',
    },
  },
  sortBar: {
    paddingRight: '17rem',
    backgroundColor: 'white',
    height: '5rem',
  },
  containerQueryProductsSort: {
    paddingLeft: '10rem',
    paddingRight: '7rem',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '0rem',
      paddingRight: '1rem',
    },
  },
  itemWithNameAndDescription: { borderBottom: ' 1.5px solid #bdbdbd' },
  containerWithNameAndDescription: {
    paddingTop: '2rem',
    paddingLeft: '12rem',
    backgroundColor: '#f5f5f5',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '3.3rem',
    },
  },
  LeftGrid: {
    direction: 'column',

    paddingLeft: '2em',
    paddingRight: '5em',
  },
  icon: {
    height: '1.4em',

    width: '1.8em',
    [theme.breakpoints.down('xs')]: {
      height: '1em',
      width: '1em',
    },
  },
  title: {
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: '4em',
  },
  sortBarItem: {
    backgroundColor: 'white',
    borderBottom: '1.5px solid #bdbdbd',
  },
  queryLeftNavbar: {
    paddingTop: '2em',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '2rem',
    },
  },
  priceQuery: { width: '65%', marginLeft: '1.7rem', marginBottom: '2rem' },
  hiddenWrapper: { backgroundColor: 'red' },
  sliderItem: { width: '80%' },
  priceTextBox: { width: 210, marginTop: '1rem' },
  formGrup: { marginLeft: '0.3rem' },

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
  formControl: {
    margin: '2rem',
    // borderBottom:'1px solid grey'
  },
  slider: { paddingTop: '1.8rem', paddingLeft: '0.4rem' },
  imgforAdvertisment: { borderRadius: '2%', paddingRight: '1rem' },
  productsRightContainer: { paddingTop: '2.5rem' },
}));

function valuetext(value) {
  return `${value}°C`;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index - 1}
      id={`scrollable-auto-tabpanel-${index - 1}`}
      aria-labelledby={`scrollable-auto-tab-${index - 1}`}
      {...other}
    >
      {value === index - 1 && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index - 1}`,
    'aria-controls': `scrollable-auto-tabpanel-${index - 1}`,
  };
}

const Category = ({
  products: { products, loading },
  categories: { categories, suppliers },
  getDetailProduct,
  getCategoryProducts,
  getCategories,
  getSuppliers,
  history,

  props,
}) => {
  // Responsive UI
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [value, setValue] = React.useState(0);
  const [checkboxValue, setcheckboxValue] = React.useState({
    checkedValues: [],
  });
  const [apiValue, setApiValue] = React.useState({
    query: [],
    filter: [],
    category: 1,
  });
  const [valueText, setValueText] = React.useState(0);
  const [arrow, setArrow] = useState(false);
  const [valueSlider, setValueSlider] = useState([0, 100]);

  useEffect(() => {
    console.log('apiValueCategory ' + apiValue.category);
    const nieco = apiValue.query.toString();
    const nieco2 = [];
    nieco2.push(nieco);

    console.log('apiValueQuery ' + typeof nieco2);

    console.log('apiValueFilter ' + apiValue.filter);
    getCategoryProducts(
      apiValue.category,
      null,
      apiValue.query.length > 0 ? apiValue.query : null,
      history
    );
  }, [apiValue]);

  useEffect(() => {
    // console.log('checkbox' + checkboxValue);
  }, [checkboxValue]);

  useEffect(() => {
    getCategories();
    getSuppliers(1);
    getCategoryProducts(1, null, null, history);
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

  function FormRow() {
    return loading ? (
      <Spinner type={'Big'} />
    ) : (
      <Fragment>
        {products.content.map((product) => (
          <p>{product.name}</p>
        ))}
      </Fragment>
    );
  }

  const getProduct = (id) => {
    getDetailProduct(id, history);

    console.log('toto id som poslal: ' + id);
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

  // const getCurrentSort = (id) => {
  //   switch (id) {
  //     case 4:
  //       return 'sort=rating,asc&';
  //     case 3:
  //       return 'sort=rating,desc&';
  //     //   case 2:
  //     //     return {
  //     // 		'sort=rating,desc&',
  //     //     };
  //     default:
  //       return null;
  //   }
  // };

  //----------------API-----------------------------------------------------------
  const handleSort = (id) => {
    // .substring(1);
    // .match(/^\(([^\)]+)\)$/))
    //   var query = window.location.search.toString();
    //   var matched = query.match(/^[a]$/);
    //   console.log(query);

    // const { query } = apiValue;
    // const newSort = getCurrentSort(id);
    setApiValue({
      ...apiValue,
      filter: id,
    });
    // getCategoryProducts(1, newSort, query, history);
  };

  const handleCategoryChange = (event, newValue) => {
    setApiValue({
      ...apiValue,
      category: newValue + 1,
      query: [],
      filter: [],
    });
    // CleanUP checkbox
    setcheckboxValue({
      ...checkboxValue,
      checkedValues: [],
    });
    getSuppliers(newValue + 1);
    // Set Value for Category
    setValue(newValue);
    // getCategoryProducts(newValue + 1, null, null, history);
  };

  const handleDeleteCheckboxValue = (event) => {
    // console.log(event.target.label)
  };

  // QUERY API CALL + SET current checkbox values to state.
  const handleQueryChange = (event) => {
    // SET ACTUAL CHECKED VALUES PICKED CHECKBOX for render purposes

    setcheckboxValue({
      ...checkboxValue,
      checkedValues: checkboxValue.checkedValues.includes(event.target.name)
        ? checkboxValue.checkedValues.filter((c) => c !== event.target.name)
        : [...checkboxValue.checkedValues, event.target.name],
    });

    // SET ACTUAL CHECKED VALUES PICKED CHECKBOX for API purposes
    setApiValue({
      ...apiValue,
      query: apiValue.query.includes(event.target.name)
        ? apiValue.query.filter((c) => c !== event.target.name)
        : [...apiValue.query, event.target.name],
    });
  };

  const text = [
    { text: '🚚Free shipping on order 15$ +', id: 1 },
    { text: '5 % Off on First Order', id: 2 },
    { text: 'discount for nothing 3', id: 3 },
  ];

  // setTimeout(() => {
  //   setValueText(
  //     valueText > 1 && valueText !== 0 ? 0 : (valueText) => valueText + 1
  //   ); // count is 0 here
  //   console.log(valueText);
  // }, 2000);

  function Layout() {
    const { Jablanor, Chiquita, Banaras } = checkboxValue;

    return (
      <Fragment>
        <Grid container>
          <Grid item xs={12} spacing={3}>
            <div className={classes.root}>
              <AppBar
                position="static"
                color="default"
                className={classes.appBarOnTop}
              >
                <Tabs
                  value={value}
                  onChange={handleCategoryChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  {categories ? (
                    categories.map((element) => (
                      <Tab
                        className={classes.tabOfBarOnTop}
                        label={element.name}
                        {...a11yProps(element.id)}
                      />
                    ))
                  ) : (
                    <Spinner type={'Small'} />
                  )}
                </Tabs>
              </AppBar>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            spacing={3}
            className={classes.itemWithNameAndDescription}
          >
            <Grid container className={classes.containerWithNameAndDescription}>
              <Grid item xs={12}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    color="inherit"
                    href="/"
                    // onClick={handleClick}
                  >
                    Home
                  </Link>
                  <Link
                    color="inherit"
                    href="/product-management/products/browse/?query=category.id==(1)"
                    // onClick={handleClick}
                  >
                    Products
                  </Link>
                  {/* <Link
                    color="textPrimary"
                    href="/components/breadcrumbs/"
                    // onClick={handleClick}
                    aria-current="page"
                  >
                    Breadcrumb
                  </Link> */}
                </Breadcrumbs>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  {/* <CategoryName
                    // categories={categories}
                    // classes={classes}
                    value={value}
                  /> */}
                  <Grid item>
                    {categories ? (
                      categories.map((element) => (
                        <TabPanel
                          value={value}
                          index={element.id}
                          className={classes.tabpanelName}
                          // classes={{ root: classes.tabpanelName }}
                          // classes={{ root: 'MenuItem', selected: 'selected' }}
                        >
                          <Typography variant="h4" color="primary">
                            {element.name}
                          </Typography>
                          {/* {element.label} */}
                        </TabPanel>
                      ))
                    ) : (
                      <Spinner type={'Small'} />
                    )}
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

                  <Grid item xs={4} className={classes.chipItem}>
                    {checkboxValue.checkedValues.length < 1
                      ? null
                      : checkboxValue.checkedValues.map((value) => (
                          <Chip
                            key={value}
                            // onDelete={handleDeleteCheckboxValue(value)}

                            label={value}
                            clickable
                            color="primary"
                            // onDelete={handleDelete}
                            icon={<HighlightOffIcon />}
                            variant="outlined"
                            className={classes.chip}
                          />
                        ))}
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                      🚚 Discount 50% on Bananas
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container className={classes.title}>
                  {/* <Grid item xs={8}>
                    <Typography variant="body2" align="justify">
                      Jujubes marshmallow danish bonbon jelly beans tart lemon
                      drops toffee. Jujubes pudding pudding. Powder toffee
                      caramels cotton candy liquorice candy gingerbread pudding.
                    </Typography>
                  </Grid> */}
                  {
                    // text.map((t) => (
                    //   <TabPanel value={valueText} index={t.id}>
                    //     <Typography variant="h5" align="justify">
                    //       {t.text}
                    //     </Typography>
                    //     {/* {element.label} */}
                    //   </TabPanel>
                    // ))
                  }
                </Grid>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container className={classes.containerQueryProductsSort}>
              <Grid
                item
                xs={12}
                md={12}
                lg={2}
                className={classes.queryLeftNavbar}
                spacing={3}
              >
                <FormControl
                  component="fieldset"
                  // className={classes.formControl}
                  className={classes.priceQuery}
                >
                  {/* <Typography id="range-slider" gutterBottom>
                          Price
                        </Typography> */}
                  <FormLabel component="legend">Price</FormLabel>
                  <FormGroup>
                    <Slider
                      className={classes.slider}
                      // value={valueSlider}
                      // defaultValue={value}
                      // onChange={handleChange}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      getAriaValueText={valuetext}
                    />
                  </FormGroup>
                  <div className={classes.priceTextBox}>
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        <TextField
                          label="from"
                          id="outlined-size-small"
                          defaultValue={value}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={2}>
                        {'-'}
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          label="to"
                          id="outlined-size-small"
                          defaultValue="100"
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </div>
                </FormControl>

                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Suplier</FormLabel>
                  {suppliers ? (
                    suppliers.map((supplier) => (
                      <Fragment>
                        <FormGroup className={classes.formGrup}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                key={supplier.name.toString()}
                                checked={
                                  checkboxValue.checkedValues.length < 1
                                    ? ''
                                    : checkboxValue.checkedValues.includes(
                                        supplier.name
                                      )
                                }
                                onChange={handleQueryChange}
                                name={supplier.name}
                              />
                            }
                            label={supplier.name}
                          />
                        </FormGroup>
                        {/* <FormHelperText>Next 20</FormHelperText> */}
                      </Fragment>
                    ))
                  ) : (
                    <Spinner type={'Small'} />
                  )}
                </FormControl>

                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Country</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={gilad}
                          // onChange={handleChange}
                          name="Slovakia"
                        />
                      }
                      label="Slovakia"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name="Hungary"
                        />
                      }
                      label="Hungary"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={antoine}
                          // onChange={handleChange}
                          name="Czech republic"
                        />
                      }
                      label="Czech republic"
                    />
                  </FormGroup>
                  <FormHelperText>Next 20</FormHelperText>
                </FormControl>

                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Name</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={gilad}
                          // onChange={handleChange}
                          name="Apple"
                        />
                      }
                      label="Apple"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name="Banana"
                        />
                      }
                      label="Banana"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={antoine}
                          // onChange={handleChange}
                          name="Pear"
                        />
                      }
                      label="Pear"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={antoine}
                          // onChange={handleChange}
                          name="Pineaple"
                        />
                      }
                      label="Pineaple"
                    />
                  </FormGroup>
                  <FormHelperText>Next 20</FormHelperText>
                </FormControl>

                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Others</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={gilad}
                          // onChange={handleChange}
                          name="Seasonal"
                        />
                      }
                      label="Seasonal"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          // checked={jason}
                          // onChange={handleChange}
                          name="Availability"
                        />
                      }
                      label="Availability"
                    />
                  </FormGroup>
                  {/* <FormHelperText>Next 20</FormHelperText> */}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={10} spacing={3}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  className={classes.productsRightContainer}
                >
                  <Grid item xs={12} md={12} lg={6}>
                    {/* <div className={classes.advertismentBarr}> */}
                    {/* <TabPanel
                      value={'dsaidhasuhdjiashdjis'}
                      // index={element.id}
                      className={classes.tabpanelName}
                  
                
                    > */}
                    {/* <Typography variant="h6" color="primary">
                      🚚 Discount 50% on Bananas
                    </Typography> */}

                    <img
                      className={classes.imgforAdvertisment}
                      height="250px"
                      width="780px"
                      src="https://cdn.dedoles.sk/buxus/images/cache/identity/top_bannery/ponozky_2_99/SK_Vesele_ponozky_uz_od_2_99%E2%82%AC_950x300px.jpg.webp"
                    ></img>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <img
                      className={classes.imgforAdvertisment}
                      height="250px"
                      width="780px"
                      src="https://cdn.dedoles.sk/buxus/images/cache/identity/zlata_ponozka/2020/SK_ZlataPonozka_TopKategoria.jpg.webp"
                    ></img>
                    {/* </div> */}
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container className={classes.title}>
                      <Grid item xs={12}>
                        <Fragment>
                          {/* <Button
                              onClick={() => handleSort(option.selectedIndex)}
                              className={classes.AppBarSortButton}
                            >
                              <Typography variant="button">
                                {option.name}
                              </Typography>
                            </Button>
                            <div
                              className={classes.AppBarSortButtonBorder}
                            ></div> */}
                          <AppBar
                            position="static"
                            color="default"
                            elevation={0}
                            className={classes.sortBarItem}
                          >
                            <Tabs
                              value={value}
                              // onChange={handleCategoryChange}
                              indicatorColor="primary"
                              textColor="primary"
                              variant="scrollable"
                              scrollButtons="auto"
                              aria-label="scrollable auto tabs example"
                            >
                              {sortOptions.map((option) => (
                                <Tab
                                  className={classes.tabOfBarOnTop}
                                  label={option.name}
                                  // {...a11yProps(element.id)}
                                />
                              ))}
                            </Tabs>
                          </AppBar>
                        </Fragment>
                      </Grid>

                      <Grid item xs={2}></Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      {products.content.length > 0 ? (
                        products.content.map((product) => (
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
                                  <Typography variant="caption">
                                    {` (${product.supplier.name})`}
                                  </Typography>
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
                                        product.price -
                                        (product.sale * 100 * product.price) /
                                          100
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
                      ) : (
                        <Fragment>
                          <Grid
                            item
                            xs={12}
                            className={classes.spinnerProducts}
                          >
                            <Spinner type={'Big'} />
                          </Grid>
                        </Fragment>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  return loading && products === null ? (
    <Spinner type={'Big'} />
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
  getCategories: PropTypes.func.isRequired,
  getSuppliers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
});

export default connect(mapStateToProps, {
  getDetailProduct,
  getCategoryProducts,
  getCategories,
  getSuppliers,
})(Category);
