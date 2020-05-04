import React, { Component, Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import EcoIcon from '@material-ui/icons/Eco';
import ListIcon from '@material-ui/icons/List';

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

const useStyles = makeStyles((theme) => ({}));

const DetailProduct = ({
  products: { products, loading },
  getDetailProduct,
  history,
}) => {
  const [value, setValue] = useState(null);
  const [arrow, setArrow] = useState(false);

  // useEffect(() => {
  //   getDetailProduct(1, history);
  // }, []);

  const classes = useStyles();

  const changeArrowDirection = (id) => {
    console.log(id);
    setValue(id);
    setArrow(!arrow);
  };

  function Layout() {
    return (
      <Fragment>
        <Grid container>
          <Grid item xs={6}>
            {/* {products.map((product) => ( */}
            <Card classes={{ root: classes.elevation }} position="relative">
              <img height="450px" width="450px" src={products.imageUrl}></img>
            </Card>
            {/* ))} */}
          </Grid>
          <Grid item xs={6}>
            right
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
