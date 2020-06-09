import React, { Component, Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import {
  getCategories,
  getSuppliers,
  getCarousel,
} from '../../actions/categories';
import { getCategoryProducts } from '../../actions/products';
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
import Registration from '../../Components/Auth/Registration';

import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';
import { loadUser } from '../../actions/auth';
import Spinner from '../Layouts/Spinner';

//carusel
// import Carousel from 'react-material-ui-carousel';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  carusel: {
    // height: '50em',
    width: '100%',
    // marginTop: '2rem',
    // paddingLeft: '10%',
    // paddingRight: '10%',

    '& .MuiGrid-grid-xs-10': {
      width: '100%',
    },
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
  root: {
    flexGrow: 1,
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
  categoryContainer: {
    paddingLeft: '6rem',
    paddingRight: '10rem',
  },
  registration: {
    width: '22rem',
    height: '15rem',
    position: 'absolute',
    top: '30px',
    left: '180px',

    zIndex: 2,
  },
  dicount: {
    // backgroundColor: '#212121',
    // opacity: 0.3,

    color: 'white',
    width: '45rem',
    height: '15rem',
    position: 'absolute',
    top: '200px',
    left: '720px',
    zIndex: 3,
  },
}));
// const Typography = Typography(()=>)

const Dashboard = ({
  // products: { loading },
  categories: { categories, loading, carousel },
  getCategories,
  getCarousel,
  getCategoryProducts,
  getSuppliers,
  loadUser,
  history,
}) => {
  useEffect(() => {
    loadUser();
    getCategories();
    getCarousel();
  }, []);

  // function App() {

  // onClick = () => {
  //   console.log(this.state.isClicked);
  //   this.setState({ isClicked: !this.state.isClicked });
  // };

  // render() {
  const classes = useStyles();

  const getProducts = (id) => {
    // history.push(
    //   `/product-management/products/browse/?query=category.id==(${id})`
    // );
    getCategoryProducts(id, null, null, null, null, history);
    getSuppliers(id);
  };

  // var items = [
  //   {
  //     name: 'Random Name #1',
  //     description: 'Probably the most random thing you have ever seen!',
  //     img:
  //       'https://s3.amazonaws.com/fooda-wordpress/blog2/wp-content/uploads/2016/09/11183017/blog-inline-fullwidth_catering.jpg',
  //   },
  //   {
  //     name: 'Random Name #2',
  //     description: 'Hello World!',
  //     img:
  //       'https://s3.amazonaws.com/fooda-wordpress/blog2/wp-content/uploads/2016/09/11183052/blog-inline-fullwidth_japanese.jpg',
  //   },
  //   {
  //     name: 'Random Name #2',
  //     description: 'Hello World!',
  //     img:
  //       'https://s3.amazonaws.com/fooda-wordpress/blog2/wp-content/uploads/2016/09/11183128/blog-inline-fullwidth_deli.jpg',
  //   },
  // ];

  function Item(props) {
    return (
      <Paper className={classes.itemCarusel}>
        {/* <h2>{props.item.name}</h2> */}
        <img height="100%" width="100%" src={props.item.imageUrl} />
        {/* <p>{props.item.description}</p>

        <Button className="CheckButton">Check it out!</Button> */}
      </Paper>
    );
  }

  function FormRow() {
    console.log(carousel);
    return loading && categories !== null ? (
      <Spinner type={'Big'} />
    ) : (
      <Fragment>
        <Grid container justify="center" alignItems="center" spacing={4}>
          <Grid item xs={12} style={{ height: 'calc(100vh)' }}>
            {/* <Grid container justify="center" alignItems="center">
              <Grid item className={classes.carusel}> */}
            {/* <Carousel
                  infinite
                  slidesPerPage={1}
                  keepDirectionWhenDragging
                  animationSpeed={1900}
                  autoPlay={5000}
                >
                  {carousel ? carousel.map((it) => <Item item={it} />) : null}
                </Carousel> */}
            <div className={classes.registration}>
              <Registration />
            </div>
            <div className={classes.dicount}>
              <h2
                // variant="h2"
                // fontWeight="fontWeightBold"
                style={{
                  'text-shadow': '1 1 1rem #000',
                  'font-weight': '900',
                  'font-size': '4.5rem',
                }}
              >
                Sign Up and get your 5% discount off
              </h2>
            </div>
            <img
              height="100%"
              width="100%"
              src="https://media.bizj.us/view/img/10778326/inside-giant-store-photo-2*1200xx6480-3652-0-642.jpg"
              // {carousel[0] ? carousel[1].imageUrl : null}
              style={{
                'clip-path': 'polygon(51% 0, 100% 0, 100% 100%, 34% 100%)',
                'z-index': '1',
                filter: 'brightness(75%)',
              }}
            ></img>
          </Grid>
          {/* <Grid item xs={6}>
           
          </Grid> */}
          {/* <Grid item xs={12}>
            <img
              style={{
                'clip-path': 'polygon(28% 0, 100% 0%, 100% 100%, 0 100%)',
              }}
              height="100%"
              width="100%"
              src={carousel[0] ? carousel[1].imageUrl : null}
            ></img>
          </Grid> */}
          <Grid item xs={3}>
            <ListItemText>
              <h1>Shop by category</h1>
            </ListItemText>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={4}
              justify="center"
              className={classes.categoryContainer}
            >
              {categories
                ? categories.map((category) => (
                    <Grid item>
                      <Card
                        key={category.id}
                        elevation={0}

                        // onClick={openCategoryDetail()}
                        // className={classes.root}
                      >
                        <Button
                          keepMounted
                          onClick={() => getProducts(category.id)}
                        >
                          <div className={classes.cardWrapper}>
                            {/* <CardMedia
                        alt={category.name}
                        component="img"
                        className={classes.media}
                        src={category.imageUrl}
                      /> */}

                            <img
                              height="250px"
                              width="250px"
                              alt={category.code}
                              src={category.imageUrl}
                              style={{ 'border-radius': '50%' }}
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
                                    'text-shadow': '0 0 5rem #000',
                                    'font-weight': '600',
                                    // 'font-size': '1.5rem',
                                  }}
                                  variant="h5"
                                >
                                  {category.name}
                                </Typography>{' '}
                              </ListItemText>
                            </div>
                          </div>
                        </Button>
                        {/* <img
                      height="250px"
                      width="250px"
                      alt={category.code}
                      src={category.imageUrl}
                    ></img> */}

                        {/* </Paper> */}
                      </Card>
                    </Grid>
                  ))
                : null}
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  return loading && categories === null ? (
    <Spinner type={'Big'} />
  ) : (
    <Fragment>
      <FormRow />
    </Fragment>
  );
};

Dashboard.propTypes = {
  products: PropTypes.func.isRequired,
  categories: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  // products: state.products,
  categories: state.categories,
});

export default connect(mapStateToProps, {
  getCategories,
  getCategoryProducts,
  getSuppliers,
  loadUser,
  getCarousel,
})(Dashboard);
// }
// export default Body;
