import React, { Component, Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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

import Spinner from '../Layouts/Spinner';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 345,
  //   marginBottom: '1rem',
  // },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
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
  // root: {
  //   flexGrow: 1,
  // },
  // paper: {
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
}));

const count1 = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

// class Body extends Component {
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

  const style = {
    Paper: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
    },
  };

  function FormRow() {
    return loading ? (
      <Spinner />
    ) : (
      <Fragment>
        {categories.map((category) => (
          <Fragment>
            <Grid
              container
              direction="row"
              className={classes.root}
              spacing={2}
            >
              <Grid
                item
                // lg={12}
              >
                <Grid container direction="row" justify="center" spacing={2}>
                  <Grid key={category.id} item>
                    <Paper className={classes.paper}>{category.name}</Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Fragment>
        ))}
      </Fragment>
    );
  }

  // function FormRow() {
  //   return (
  //     <React.Fragment>
  //       <Grid item xs={4}>
  //         <img
  //           width="300px"
  //           alt="icecone"
  //           src="https://image.shutterstock.com/z/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg"
  //         ></img>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <img
  //           width="300px"
  //           alt="icecone"
  //           src="https://image.shutterstock.com/z/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg"
  //         ></img>
  //       </Grid>
  //       <Grid item xs={4}>
  //         <img
  //           width="300px"
  //           alt="icecone"
  //           src="https://image.shutterstock.com/z/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg"
  //         ></img>
  //       </Grid>
  //     </React.Fragment>
  //   );
  // }

  return loading && categories === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <FormRow />
      {/* <Grid container justify="center">
        <Grid item className={classes.gridItem}>
          <Paper>
            <FormRow />
          </Paper>
        </Grid> */}
      {/* <Grid item className={classes.gridItem}>
          <Paper>
            <FormRow />
          </Paper>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Paper>
            <FormRow />
          </Paper>
        </Grid> */}
      {/* </Grid> */}
    </Fragment>
  );
  // <div>
  //   <Grid container justify="center" spacing={1}>
  //     <Grid container item xs={12} spacing={2}>
  //       <FormRow />
  //     </Grid>
  //     <Grid container item xs={12} spacing={2}>
  //       <FormRow />
  //     </Grid>
  //     <Grid container item xs={12} spacing={2}>
  //       <FormRow />
  //     </Grid>
  //   </Grid>
  // </div>
  // return (
  // <Grid container className={classes.root} spacing={2}>
  //   <Grid item xs={12}>
  //     <Grid container justify="center">
  //       <div>{count}</div>;
  //     </Grid>
  //   </Grid>
  // </Grid>

  // <div className={classes.root}>
  //   <Grid container spacing={1}>
  //     <Grid container item xs={12} spacing={3}>
  //       <p>s</p>
  //     </Grid>
  //     <Grid container item xs={12} spacing={3}>
  //       <p>s</p>
  //     </Grid>
  //     <Grid container item xs={12} spacing={3}>
  //       <p>s</p>
  //     </Grid>
  //   </Grid>
  // </div>
  // );
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
