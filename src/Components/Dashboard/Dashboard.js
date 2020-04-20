import React, { Component, Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { getCategories } from '../../actions/categories';

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

import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
import ListItemText from '@material-ui/core/ListItemText';

import Spinner from '../Layouts/Spinner';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    // maxWidth: 345,
    marginBottom: '1rem',
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
    height: 200,
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
    top: '50%',

    left: '10%',
    // align: 'center',

    display: 'none',
  },
  media: {
    backgroundColor: 'grey',
  },

  // root: {
  //   flexGrow: 1,
  // },
  // paper: {
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
}));
// const Typography = Typography(()=>)

const Dashboard = ({ categories: { categories, loading }, getCategories }) => {
  const [value, setValue] = useState({
    id: 1,
    code: 'FAV',
    name: 'FRUITS & VEGETABLES',
    description: null,
    imageUrl: 'https://foodshopfs.000webhostapp.com/images/category/FAV.jpg',
    order: '1',
    state: 'ACTIVE',
  });
  useEffect(() => {
    console.log(getCategories());
    getCategories();
  }, []);

  // function App() {

  // onClick = () => {
  //   console.log(this.state.isClicked);
  //   this.setState({ isClicked: !this.state.isClicked });
  // };

  // render() {
  const classes = useStyles();

  function FormRow() {
    return loading ? (
      <Spinner />
    ) : (
      <Fragment>
        {/* <div
          component="div"
          variant="body1"
          backgroundColor="green"
          style={{ height: 100, width: '100%', position: 'relative' }}
        >
          <Box
            bgcolor="grey.700"
            color="red"
            p={2}
            position="absolute"
            top={40}
            left="40%"
            zIndex="tooltip"
          >
            z-index tooltip
          </Box>
          <Box
            bgcolor="black"
            color="blue"
            p={2}
            position="absolute"
            top={0}
            left="43%"
            zIndex="modal"
          >
            z-index modal
          </Box> */}
        {/* </div> */}
        <Grid container justify="center" className={classes.title}>
          <Grid item>
            <ListItemText>
              <h1>Shop by category</h1>
            </ListItemText>
          </Grid>
        </Grid>
        <Grid container justify="center" spacing={4}>
          <Grid item>
            <Grid container spacing={4} justify="center">
              {categories.map((category) => (
                <Grid item>
                  <Card
                  // className={classes.root}
                  >
                    <div className={classes.cardWrapper}>
                      <CardMedia
                        alt="My cool img"
                        component="img"
                        className={classes.media}
                        src={category.imageUrl}
                      />
                      <div
                        className={classes.layer}
                        style={{ display: 'block' }}
                      >
                        <ListItemText> {category.name}</ListItemText>
                      </div>
                    </div>

                    {/* <img
                      height="250px"
                      width="250px"
                      alt={category.code}
                      src={category.imageUrl}
                    ></img> */}

                    {/* </Paper> */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }

  return loading && categories === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <FormRow />
    </Fragment>
  );
};

Dashboard.propTypes = {
  categories: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  // profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { getCategories })(Dashboard);
// }
// export default Body;
