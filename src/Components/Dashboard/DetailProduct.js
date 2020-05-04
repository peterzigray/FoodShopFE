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

import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';

import Spinner from '../Layouts/Spinner';

import TreeView from '@material-ui/lab/TreeView';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  leftItem: {
    alignSelf: 'flex-end',
  },
  priceArea: { backgroundColor: '#fff59d', display: 'flex' },
  cardCont: { display: 'flex', paddingBottom: '0px', paddingTop: '0px' },
  cardCont2: { display: 'flex', paddingTop: '0px' },
  elevation: { boxShadow: ' 0px 0px 0px 0px' },
  mainContainer: { marginTop: '5rem', marginBottom: '10rem' },
  secondGrid: { height: '25em' },
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
  products: { products, loading },
  getDetailProduct,
  history,
}) => {
  const [value, setValue] = useState(null);
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    getDetailProduct(1, history);
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
          justify="center"
          alignItems="center"
          className={classes.mainContainer}
        >
          <Grid item xs={6}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.secondGrid}
            >
              <Grid item xs={5}>
                {/* {products.map((product) => ( */}

                <img height="500em" width="500em" src={products.imageUrl}></img>

                {/* ))} */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.secondGrid}
            >
              <Grid item>
                <Card classes={{ root: classes.elevation }}>
                  <CardContent className={classes.cardCont}>
                    <Typography variant="h2" color="primary" gutterBottom>
                      {products.name}
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.cardCont2}>
                    <Rating
                      name="simple-controlled"
                      value={products.rating}
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
                    <Typography>
                      Cheesecake liquorice sweet roll jujubes dragée liquorice
                      sugar plum. Soufflé dessert tart liquorice cotton candy
                      cheesecake bear claw powder cupcake. Macaroon dessert
                      danish donut jelly-o powder candy marshmallow soufflé.
                      Carrot cake cake marshmallow pie cake pie candy canes
                      topping. Chocolate donut jelly beans. Sweet lollipop
                      topping. Chupa chups wafer candy topping sweet roll toffee
                      halvah. Biscuit gummies candy canes icing chupa chups
                      apple pie sesame snaps pie. Wafer donut chocolate candy
                      canes. Marzipan pudding fruitcake jelly beans oat cake
                      cotton candy cake. Muffin marzipan oat cake pudding
                      pudding lemon drops gummi bears. Icing gummies marshmallow
                      cake caramels chocolate cake.
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Box className={classes.priceArea}>
                      <Typography variant="h2">{'Price: '}</Typography>
                      <Typography variant="h2">
                        {products.price}
                        {'$'}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardContent>
                    <Box>
                      <Button variant="contained" size="large" color="primary">
                        Buy
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
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
