import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import RestaurantModal from './RestaurantModal';  
import {useDispatch} from 'react-redux';
import {saveVisit} from '../../redux/actions/saveVisit';


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
}));


const RestaurantCard = props => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const openmodal = () => {
    setOpen(true);
  };
  const closemodal = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const saveVisitWithCurrentDate =()=>{dispatch(saveVisit(props.restaurant.id))};
  



  return (
  <Card className={classes.root}>
    <RestaurantModal open={open} close={closemodal} restaurant={props.restaurant} />
      <CardActionArea onClick={openmodal}>
        <CardMedia
            className={classes.media}
            image={props.restaurant.photo}
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.restaurant.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <button type="button" onClick={saveVisitWithCurrentDate}>
        visit
      </button>
      </CardActions>
      
      </Card> 
  );
}
export default RestaurantCard;