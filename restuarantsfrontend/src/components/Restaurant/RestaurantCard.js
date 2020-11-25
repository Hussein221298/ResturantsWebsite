import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import RestaurantModal from './RestaurantModal';  
import {useDispatch,useSelector} from 'react-redux';
import {saveVisit} from '../../redux/actions/saveVisit';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';


const useStyles = makeStyles((theme) => ({

  root: {
    maxWidth: 400,
    maxHeight:350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  }, 
}));

const RestaurantCard = props => {
  
  const classes = useStyles();

  const loading=useSelector(state =>state.saveVisitReducer.loading);
  const saved=useSelector(state =>state.saveVisitReducer.saved);
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false); 
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const closeSnackBar =()=>{
    setSnackBarOpen(false)
  };

  const saveVisitWithCurrentDate =()=>{
    dispatch(saveVisit(props.restaurant.id))
  };
  
  useEffect (() =>{
    setSnackBarOpen(saved);
  },[saved]);

  return (
  <>
    <Card className={classes.root}>
      <RestaurantModal open={openModal} close={closeModal} restaurant={props.restaurant} />
      <CardActionArea onClick={showModal} >
        <CardMedia
          className={classes.media}
          image={props.restaurant.photo}
        />
        <CardContent>
          <Typography variant="h5" component="h2" fontWeight='bold' align='left'>
            {props.restaurant.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>    
        <Button   variant="contained" color="primary"  onClick={saveVisitWithCurrentDate} disableElevation={true}>
          Visit Restaurant
        </Button>
      </CardActions>
    </Card> 
    
    {<Snackbar
      open={snackBarOpen}
      autoHideDuration={1000}
      message="your visit has been saved"
      onClose={closeSnackBar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    />}

    {loading && 
    <Backdrop  open={loading} >
      <CircularProgress color="inherit" />
    </Backdrop>}
  </>
  );
}
export default RestaurantCard;