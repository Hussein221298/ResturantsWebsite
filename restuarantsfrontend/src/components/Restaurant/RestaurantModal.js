import React from 'react'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }
));

  const RestaurantModal=props =>{ 


    const classes = useStyles();



      return(
        
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Card className={classes.root}>

    <CardMedia
      className={classes.media}
      image={props.restaurant.photo}
  
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
          Name: {props.restaurant.name}
      </Typography>
      <Typography gutterBottom variant="h6" component="h2">
          Type: {props.restaurant.type}
      </Typography>
      <Typography gutterBottom variant="h6" component="h2">
          Address: {props.restaurant.address}
      </Typography>
      <Typography gutterBottom variant="h6" component="h2">
          Cost for two people: {props.restaurant.costForTwo}
      </Typography>
      <Typography gutterBottom variant="h6" component="h2">
          Phone number: {props.restaurant.phoneNb}
        </Typography>
    </CardContent>


  </Card>
      </Fade>
    </Modal>
);
    }

export default RestaurantModal;