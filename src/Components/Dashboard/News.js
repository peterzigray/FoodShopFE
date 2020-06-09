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

import { getCategories, getSuppliers, getNews } from '../../actions/categories';
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

import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { MenuItem, getContrastRatio } from '@material-ui/core';

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
const useStyles = makeStyles((theme) => ({
  tabpanelNews: {
    '& .MuiBox-root': {
      padding: '0.5rem 0 0.5rem 0',
    },
    // backgroundColor: 'black',
    '.MuiBox-root-476': { padding: '0px' },
  },
}));

const News = (
  // props,
  { categories: { categories, loading, news }, getCategories, getNews }
) => {
  const [timeLeft, setTimeLeft] = useState(0);

  // useEffect(() => {
  //   getCategories();
  //   getNews();
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(news.length - 1 <= timeLeft ? 0 : timeLeft + 1);
    }, 3000);
  });
  const classes = useStyles();
  console.log(news);
  console.log(timeLeft);

  return (
    <Fragment>
      {/* {news
        ? news.map((el) => (
            <TabPanel
              className={classes.tabpanelNews}
              value={timeLeft}
              index={el.id}
            >
              <Typography variant="body2">{el.description}</Typography>
            </TabPanel>
          ))
        : null} */}
    </Fragment>
  );
};

News.propTypes = {
  // products: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getNews: PropTypes.func.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { getCategories, getNews })(News);
