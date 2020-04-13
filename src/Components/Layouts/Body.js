import React, { Component, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

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
import Button from '@material-ui/core/Button';
import { loadUser } from '../../actions/auth';
import { getUsers } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import './App.css';
// import ReturnFromAPI from './API/ReturnFromAPI';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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

  buttons: {
    margin: '2rem',
  },
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
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
];

// class Body extends Component {

const Body = ({ auth: { users }, loadUser, getUsers }) => {
  // function App() {

  // onClick = () => {
  //   console.log(this.state.isClicked);
  //   this.setState({ isClicked: !this.state.isClicked });
  // };

  const getUserVerify = () => {
    loadUser();
    console.log('jedna');
  };

  const getAllUsers = () => {
    getUsers();
  };

  // render() {
  const classes = useStyles();

  const style = {
    Paper: {
      padding: 20,
      marginTop: 10,
      marginBottom: 10,
    },
  };

  const count = count1.map((e) => {
    // <div key={e.id}>dd</div>

    return (
      <Fragment>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="https://image.shutterstock.com/z/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg"
            title="Paella dish"
          />
          <CardContent>
            {/* <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography> */}
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
            // className={clsx(classes.expand, {
            //   [classes.expandOpen]: expanded
            // })}
            // onClick={handleExpandClick}
            // aria-expanded={expanded}
            // aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse
          //  in={expanded} timeout="auto" unmountOnExit
          >
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Fragment>
    );
  });
  // );

  function FormRow() {
    return <React.Fragment>{count}</React.Fragment>;
  }

  return (
    <div>
      <Grid container>
        {/* <Grid item xs={2}>
          <Paper style={style}>left pannel</Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper style={style}>
            <FormRow />
          </Paper>
        </Grid> */}
        <p className={classes.buttons}>
          Instrukcie: najprv sa prihlas a potom stukaj butoniky :D
        </p>

        <Button
          className={classes.buttons}
          onClick={getUserVerify}
          variant="contained"
          color="primary"
        >
          /api/security/verify - az po logine
        </Button>

        <Button
          className={classes.buttons}
          onClick={getAllUsers}
          variant="contained"
          color="secondary"
        >
          /api/internal/user-management/users
        </Button>
        <p className={classes.buttons}>
          Ak bude request na verifikaciu usera ok, nezobrazi sa ziadna error
          hlaska
        </p>
        {users ? (
          users.map((user) => <p>{user}</p>)
        ) : (
          <p className={classes.buttons}>
            Ak bude request na get users ok, zobrazia sa tu
          </p>
        )}
      </Grid>
    </div>
  );
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
// }
// export default Body;
Body.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getUsers: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, getUsers })(Body);
