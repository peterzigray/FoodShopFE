import React, { Component, Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';

import Rating from '@material-ui/lab/Rating';

import { getCategoryProducts } from '../../actions/products';
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

import Autocomplete from '@material-ui/lab/Autocomplete';

import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';

import Spinner from '../Layouts/Spinner';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

const Category = ({
  products: { products, loading },
  getCategoryProducts,
  history,
}) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    getCategoryProducts(1, history);
  }, []);

  const classes = useStyles();

  const titles = ['fruits', 'vegetables', 'vegan & vegetarian'];
  const subtitles = [
    {
      categoryname: 'fruits',
      name: 'Apples & Pears',
    },
    {
      categoryname: 'vegetables',
      name: 'Advocadoes & Exotic Fruits',
    },
    {
      categoryname: 'vegan & vegetarian',
      name: 'Bananas & Plantains',
    },
  ];

  // const getCategoriesByName = () => {
  //   const muscles = ['fruits', 'vegetables', 'vegan & vegetarian'];
  //   const exercises = [
  //     {
  //       categoryname: 'fruits',
  //       muscles: 'Apples & Pears',
  //     },
  //     {
  //       categoryname: 'vegetables',
  //       muscles: 'Advocadoes & Exotic Fruits',
  //     },
  //     {
  //       categoryname: 'vegan & vegetarian',
  //       muscles: 'Bananas & Plantains',
  //     },
  //   ];

  //   return Object.entries(
  //     exercises.reduce((exercises, exercise) => {
  //       const { muscles } = exercise;
  //       console.log(muscles);
  //       console.log(exercises[muscles]);

  //       exercises[muscles] = exercises[muscles]
  //         ? [...exercises[muscles], exercise]
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
        {products.map((product) => (
          <p>{product.name}</p>
        ))}
      </Fragment>
    );
  }

  function Layout() {
    return (
      <Fragment>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} spacing={3}>
            <Grid container spacing={4} justify="center">
              <Grid item spacing={4}>
                <Button
                  // onClick={getCategoriesByName}
                  variant="contained"
                  color="secondary"
                >
                  click
                </Button>
                <Button variant="contained" color="secondary">
                  asdsd
                </Button>
                <Button variant="contained" color="secondary">
                  nsdns
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="center"
            >
              <Paper
                //  className={classes.Paper}
                classes={{ root: classes.elevation }}
              >
                {titles
                  ? titles.map((category) => (
                      <Fragment>
                        <Typography variant="h6">{category}</Typography>
                        <List component="ul">
                          {subtitles.map(({ name }) => (
                            <ListItem button>
                              <ListItemText primary={name} />
                            </ListItem>
                          ))}
                        </List>
                      </Fragment>
                    ))
                  : null}
              </Paper>
              {/* <h3>Fruits & Vegetables</h3>
              <Grid item spacing={4} alignItems="start">
                <Button>Fruits</Button>
              </Grid>
              <Grid item spacing={4}>
                <Button>Vegetables</Button>
              </Grid>
              <Grid item spacing={4}>
                <Button>Vegan & Vegetarian</Button>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item xs={9} spacing={3}>
            <Grid container spacing={4} justify="flex-start">
              {products.map((product) => (
                <Grid item>
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
                        badgeContent={`-${(
                          product.sale * product.price
                        ).toFixed(2)}%`}
                        // variant="dot"
                      ></Badge>
                    ) : null}
                    <div className={classes.cardWrapper}>
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
                              'text-shadow': '0 0 1rem #000',
                              'font-weight': '600',
                              // 'font-size': '1.5rem',
                            }}
                            variant="h5"
                          ></Typography>{' '}
                        </ListItemText>
                      </div>
                    </div>

                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Typography component="legend">{product.name}</Typography>
                      <Typography component="legend">
                        {'$'}
                        {product.price}
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        value={product.rating}
                        // onChange={(event, newValue) => {
                        //   setValue(newValue);
                        // }}
                      />
                    </Box>
                  </Card>
                </Grid>
              ))}
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

export default connect(mapStateToProps, { getCategoryProducts })(Category);
