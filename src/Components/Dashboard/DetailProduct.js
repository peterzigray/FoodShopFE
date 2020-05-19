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

import Autocomplete from '@material-ui/lab/Autocomplete';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';

import Spinner from '../Layouts/Spinner';

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
  ButtonBuy: { width: '100%' },
  priceArea: {
    color: '#f50057',
    display: 'flex',
    borderBottom: '1px solid #bdbdbd',
  },
  cardCont: {
    // display: 'flex',
    paddingBottom: '0px',
    paddingTop: '0px',
  },
  cardCont2: {
    //  display: 'flex',
    paddingTop: '0px',
  },
  cardWrapper: {
    // display: 'inline-block',
    position: 'relative',
    boxShadow: ' 0px 0px 0px 0px',
    // marginLeft: 'auto',
    height: '100%',
    width: '100%',
    border: '1px solid grey',
    marginTop: '5rem',
    paddingTop: '1rem',
  },

  cardWrapperRight: {
    // display: 'inline-block',
    position: 'relative',
    boxShadow: ' 0px 0px 0px 0px',
    // marginLeft: 'auto',
    height: '100%',
    width: '100%',
    // border: '1px solid grey',
    marginTop: '5rem',
  },
  elevation: {
    boxShadow: ' 0px 0px 0px 0px',
    // display: 'inline-block',
    // position: 'relative',
  },
  leftContainer: { paddingLeft: '12rem' },
  leftContainerItem: { width: '100%' },
  rightContainerItem: { paddingLeft: '2rem', paddingRight: '15rem' },
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

const DetailProduct = ({
  products: { product, loading },

  getDetailProduct,
  history,
}) => {
  const [value, setValue] = useState(null);
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    // getDetailProduct(27, history);
  }, []);

  const classes = useStyles();

  const changeArrowDirection = (id) => {
    console.log(id);
    setValue(id);
    setArrow(!arrow);
  };

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
          <Grid item xs={12} className={classes.itemOverview}>
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
                  <Link
                    color="textPrimary"
                    href="/category/products/1"
                    // onClick={handleClick}
                    aria-current="page"
                  >
                    Detail
                  </Link>
                </Breadcrumbs>
              </Grid>

              <Grid item>
                {/* <TabPanel
                  // value={value}
                  // index={element.id}
                  className={classes.tabpanelName}
                > */}
                <div className={classes.tabpanelName}>
                  <Typography variant="h4" color="primary">
                    {product.category.name}
                  </Typography>
                  {/* {element.label} */}
                </div>
                {/* </TabPanel> */}
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

              <Grid item xs={12}>
                <Typography variant="h6" color="primary">
                  🚚 Discount 50% on Bananas
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={5}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              className={classes.leftContainer}
            >
              <Grid item className={classes.leftContainerItem}>
                <div className={classes.cardWrapper}>
                  <img
                    height="650px"
                    width="650px"
                    src={product.imageUrl}
                  ></img>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={7}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              <Grid item className={classes.rightContainerItem}>
                {/* <AppBar position="static"> */}
                <div className={classes.cardWrapperRight}>
                  {/* <Button keepMounted> */}
                  <Card classes={{ root: classes.elevation }}>
                    <CardContent className={classes.cardCont}>
                      <Typography variant="h2" color="primary" gutterBottom>
                        {product.name.split(' ').slice(0, 2).join(' ')}
                      </Typography>
                    </CardContent>
                    <CardContent className={classes.cardCont2}>
                      <Rating
                        name="simple-controlled"
                        value={product.rating}
                        // onChange={(event, newValue) => {
                        //   setValue(newValue);
                        // }}
                      />
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
                    </CardContent>
                    <CardContent>
                      <Box className={classes.priceArea}>
                        <Typography variant="h2">
                          {'Price: '}
                          {product.price}
                          {' $'}
                        </Typography>
                        <Typography
                          variant="h5"
                          // className={classes.leftItem}
                        >
                          {product.price}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardContent>
                      <Typography align="justify">
                        Cheesecake liquorice sweet roll jujubes dragée liquorice
                        sugar plum. Soufflé dessert tart liquorice cotton candy
                        cheesecake bear claw powder cupcake. Macaroon dessert
                        danish donut jelly-o powder candy marshmallow soufflé.
                        Carrot cake cake marshmallow pie cake pie candy canes
                        topping. Chocolate donut jelly beans. Sweet lollipop
                        topping. Chupa chups wafer candy topping sweet roll
                        toffee halvah. Biscuit gummies candy canes icing chupa
                        chups apple pie sesame snaps pie. Wafer donut chocolate
                        candy canes. Marzipan pudding fruitcake jelly beans oat
                        cake cotton candy cake. Muffin marzipan oat cake pudding
                        pudding lemon drops gummi bears. Icing gummies
                        marshmallow cake caramels chocolate cake.
                      </Typography>
                    </CardContent>

                    <CardContent>
                      <Box className={classes.priceArea}>
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          className={classes.ButtonBuy}
                        >
                          <Typography variant="h6"> Buy</Typography>
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
