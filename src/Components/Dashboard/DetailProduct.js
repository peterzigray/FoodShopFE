import React, { Component, Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import EcoIcon from '@material-ui/icons/Eco';
import ListIcon from '@material-ui/icons/List';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { getDetailProduct } from '../../actions/products';
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

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import InputBase from '@material-ui/core/InputBase';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';

import Spinner from '../Layouts/Spinner';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TreeView from '@material-ui/lab/TreeView';
import AppBar from '@material-ui/core/AppBar';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  skuska: { height: '255px' },
  leftItem: {
    marginLeft: 'auto',
  },
  ButtonBuy: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: '#e53935',
    },
  },
  priceArea: {
    display: 'flex',
    marginLeft: 'auto',
    // borderBottom: '1px solid #bdbdbd',
  },
  listArea: {
    paddingTop: 0,
  },

  ButtonSelect: {
    marginRight: '0.5rem',
    '&:hover': {
      backgroundColor: '#e53935',
    },
    '& .MuiButton-startIcon': {
      marginRight: '0',
      marginLeft: '0',
    },
  },
  KeyboardIccon: {
    marginRight: 0,
  },

  textArea: {
    paddingBottom: '1rem',
  },
  cardCont: {
    // display: 'flex',
    paddingBottom: '0px',
    // borderBottom: '1px solid grey',
    paddingTop: '0px',
  },

  cardWrapper: {
    // display: 'inline-block',
    // position: 'relative',
    boxShadow: ' 0px 0px 0px 0px',
    // marginLeft: 'auto',
    // height: '90%',
    // width: '90%',
    // border: '1px solid grey',
    marginTop: '5rem',
    // paddingTop: '1rem',
  },

  cardWrapperRight: {
    // display: 'inline-block',
    position: 'relative',
    boxShadow: ' 0px 0px 0px 0px',
    // marginLeft: 'auto',
    // height: '100%',
    // width: '100%',
    // border: '1px solid grey',
    marginTop: '5rem ',
  },
  elevation: {
    boxShadow: ' 0px 0px 0px 0px',
    // display: 'inline-block',
    // position: 'relative',
  },
  // leftContainer: { paddingLeft: '12rem' },
  leftContainerItem: { width: '100%' },
  rightContainerItem: { padding: '0.5rem 5rem 0rem 0rem' },
  innerRightContainerItem: { borderBottom: '1px solid grey' },
  mainContainer: { marginTop: '0', marginBottom: '10rem' },
  // secondGrid: { height: '25em' },
  icon: {
    height: '1.4em',

    width: '1.8em',
    [theme.breakpoints.down('xs')]: {
      height: '1em',
      width: '1em',
    },
  },
  tabpanelName: {
    '& .MuiBox-root': {
      paddingLeft: 0,
    },
    // backgroundColor: 'black',
    '.MuiBox-root-476': { padding: '0px' },
  },
  containerWithNameAndDescription: {
    paddingTop: '2rem',
    paddingLeft: '12rem',
    paddingBottom: '2rem',
    backgroundColor: '#f5f5f5',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '3.3rem',
    },
  },

  icon: {
    height: '1.4em',

    width: '1.8em',
    [theme.breakpoints.down('xs')]: {
      height: '1em',
      width: '1em',
    },
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function PriceWithoutSale(props) {
  const { product } = props;

  return (
    <Fragment>
      <Typography
        variant="h4"
        fontWeight={800}
        style={{ 'margin-left': 'auto', color: '#e53935' }}
      >
        {product.price}
        {'$'}
      </Typography>
    </Fragment>
  );
}
function PriceWithSale(props) {
  const { product } = props;

  return (
    <Fragment>
      <Typography
        variant="h4"
        fontWeight={800}
        style={{ 'margin-left': 'auto', color: '#e53935' }}
      >
        {`${
          // product.price -
          // (product.discountedPrice * 100 * product.price) / 100
          product.discountedPrice.toFixed(2)
        }$`}
      </Typography>
      <Typography
        variant="caption"
        style={{
          paddingLeft: '1rem',
          paddingBottom: '2rem',
          textDecoration: 'line-through',
          color: 'grey',
        }}
      >
        {product.price}
        {'$'}
      </Typography>
    </Fragment>
  );
}

function Item(props) {
  return (
    <Fragment>
      {/* <h2>{props.item.name}</h2> */}
      <img height="450px" width="450px" src={props.item.imageUrl} />
      {/* <p>{props.item.description}</p>

        <Button className="CheckButton">Check it out!</Button> */}
    </Fragment>
  );
}

const DetailProduct = ({
  products: { product, loading },

  getDetailProduct,
  history,
}) => {
  const [value, setValue] = useState(null);
  const [arrow, setArrow] = useState(false);
  const [carousel, setCarousel] = useState(0);

  useEffect(() => {
    const queryString = window.location.pathname;
    const value = queryString.match(/([1-9][0-9]*)/g)
      ? Number(queryString.match(/([1-9][0-9]*)/g)[0])
      : 1;

    console.log(window.location.pathname);
    console.log(value);
    getDetailProduct(value, history);
  }, []);

  const classes = useStyles();

  const changeArrowDirection = (id) => {
    console.log(id);
    setValue(id);
    setArrow(!arrow);
  };
  function onchange(value) {
    setCarousel(value);
    console.log(value);
  }

  function Layout() {
    return (
      <Fragment>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          className={classes.mainContainer}
        >
          <Grid item md={6}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              // className={classes.leftContainer}
            >
              <Grid item className={classes.leftContainerItem}>
                <div className={classes.cardWrapper}>
                  {/* <img
                    height="650px"
                    width="650px"
                    src={product.imageUrl}
                  ></img> */}
                  <Carousel
                    slidesPerPage={1}
                    // keepDirectionWhenDragging
                    // animationSpeed={1500}
                    // onChange={this.onchange}
                    // autoPlay={3000}
                    draggable={false}
                    value={carousel}
                  >
                    {product
                      ? product.images.map((it) => <Item item={it} />)
                      : null}
                  </Carousel>
                  <Dots
                    thumbnails={product.images.map((it) => (
                      <img width="80px" height="80px" src={it.imageUrl} />
                    ))}
                    value={carousel}
                    onChange={onchange}
                    number={product.images.length}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item className={classes.rightContainerItem}>
                <div className={classes.cardWrapperRight}>
                  <Card classes={{ root: classes.elevation }}>
                    <CardContent className={classes.cardCont}>
                      <Box className={classes.priceArea}>
                        <Typography variant="h4" color="primary" gutterBottom>
                          {product.name.split(' ').slice(0, 2).join(' ')}
                        </Typography>
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
                        </Grid>
                      </Box>
                      <Box borderBottom={1} className={classes.priceArea}>
                        <Rating
                          name="simple-controlled"
                          value={product.rating}
                          // onChange={(event, newValue) => {
                          //   setValue(newValue);
                          // }}
                        />

                        {/* <Box className={classes.priceArea}> */}
                        {product.sale ? (
                          <PriceWithSale product={product} />
                        ) : (
                          <PriceWithoutSale product={product} />
                        )}
                        {/* </Box> */}
                      </Box>
                    </CardContent>
                    <CardContent>
                      <Box borderBottom={1} className={classes.textArea}>
                        <Typography
                          variant="body2"
                          align="justify"
                          style={{ color: 'grey' }}
                        >
                          Cheesecake liquorice sweet roll jujubes dragée
                          liquorice sugar plum. Soufflé dessert tart liquorice
                          cotton candy cheesecake bear claw powder cupcake.
                          Macaroon dessert danish donut jelly-o powder candy
                          marshmallow soufflé. Carrot cake cake marshmallow pie
                          cake pie candy canes topping. Chocolate donut jelly
                          beans. Sweet lollipop topping. Chupa chups wafer candy
                          topping sweet roll toffee halvah. Biscuit gummies
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardContent className={classes.listArea}>
                      <Box borderBottom={1} style={{ paddingBottom: '0.5rem' }}>
                        <List dense={false}>
                          <ListItem>
                            <ListItemIcon>
                              <FiberManualRecordIcon
                                style={{ color: '#e53935', fontSize: 'small' }}
                              />
                            </ListItemIcon>
                            <ListItemText variant="body2">
                              Country:
                              <b> {product.country.name}</b>
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <FiberManualRecordIcon
                                style={{ color: '#e53935', fontSize: 'small' }}
                              />
                            </ListItemIcon>
                            <ListItemText variant="body2">
                              Supplier:<b> {product.supplier.name}</b>
                            </ListItemText>
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <FiberManualRecordIcon
                                style={{ color: '#e53935', fontSize: 'small' }}
                              />
                            </ListItemIcon>
                            <ListItemText variant="body2">
                              Availability: <b>{product.availability.name}</b>
                            </ListItemText>
                          </ListItem>
                        </List>
                      </Box>
                    </CardContent>

                    <CardContent>
                      <Box className={classes.priceArea}>
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          startIcon={
                            <KeyboardArrowUpIcon
                            // style={{ fontSize: 'small' }}
                            />
                          }
                          className={classes.ButtonSelect}
                        ></Button>

                        <Button
                          variant="contained"
                          size="large"
                          color="grey"
                          style={{ marginRight: '0.5rem' }}
                          disableRipple
                        >
                          {' '}
                          0{' '}
                        </Button>
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          startIcon={
                            <KeyboardArrowDownIcon
                            // style={{ fontSize: 'small' }}
                            />
                          }
                          className={classes.ButtonSelect}
                        ></Button>

                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          className={classes.ButtonBuy}
                          startIcon={
                            <ShoppingCartIcon style={{ fontSize: 'medium' }} />
                          }
                          // className={classes.ButtonBuy}
                        >
                          <Typography variant="body2"> Buy</Typography>
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </div>
                {/* </AppBar> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  return loading && product === null ? (
    <Spinner type={'Big'} />
  ) : (
    <Fragment>
      {/* <FormRow /> */}
      <Layout />
    </Fragment>
  );
};

DetailProduct.propTypes = {
  products: PropTypes.func.isRequired,
  getDetailProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getDetailProduct })(DetailProduct);
