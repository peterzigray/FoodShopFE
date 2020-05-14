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
import { getCategories } from '../../actions/categories';
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

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { MenuItem, getContrastRatio } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   skuska: { height: '255px' },
//   leftItem: {
//     marginLeft: 'auto',
//   },
//   ButtonBuy: { width: '100%' },
//   priceArea: { backgroundColor: '#fff59d', display: 'flex' },
//   cardCont: {
//     // display: 'flex',
//     paddingBottom: '0px',
//     paddingTop: '0px',
//   },
//   cardCont2: {
//     //  display: 'flex',
//     paddingTop: '0px',
//   },
//   cardWrapper: {
//     // display: 'inline-block',
//     position: 'relative',
//     boxShadow: ' 0px 0px 0px 0px',
//     // marginLeft: 'auto',
//     height: '555px',
//     width: '500px',
//   },
//   elevation: {
//     boxShadow: ' 0px 0px 0px 0px',
//     // display: 'inline-block',
//     // position: 'relative',
//   },
//   mainContainer: { marginTop: '5rem', marginBottom: '10rem' },
//   // secondGrid: { height: '25em' },
//   icon: {
//     height: '1.4em',

//     width: '1.8em',
//     [theme.breakpoints.down('xs')]: {
//       height: '1em',
//       width: '1em',
//     },
//   },
// }));
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index - 1}
//       id={`scrollable-auto-tabpanel-${index - 1}`}
//       aria-labelledby={`scrollable-auto-tab-${index - 1}`}
//       {...other}
//     >
//       {value === index - 1 && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

const CategoryName = (
  // props,
  { categories: { categories, loading }, getCategories }
) => {
  // const { value } = props;

  // const [value, setValue] = useState(null);
  // const [arrow, setArrow] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  // const classes = useStyles();

  console.log('totohladam' + categories);
  return loading && categories === null ? (
    <Spinner type={'Big'} />
  ) : (
    <Fragment>
      <Grid item>
        {categories.map((element) => (
          <div
            // value={value}
            index={element.id}
            // className={classes.tabpanelName}
            // classes={{ root: classes.tabpanelName }}
            // classes={{ root: 'MenuItem', selected: 'selected' }}
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Typography variant="h4" color="primary">
              {element.name}
            </Typography>
            {/* {element.label} */}
          </div>
        ))}
      </Grid>
    </Fragment>
  );
};

CategoryName.propTypes = {
  // products: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { getCategories })(CategoryName);
