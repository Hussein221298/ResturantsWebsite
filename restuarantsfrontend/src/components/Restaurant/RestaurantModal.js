import React from 'react'
import Modal from '@material-ui/core/Modal';
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
      paddingTop: '56.75%', 
    },
    content:{
      [theme.breakpoints.up('sm')]: {      
        minWidth:400,
        maxWidth:400,
        minHeight:200,
        maxHeight:200,
        variant:"h1"
      },
      [theme.breakpoints.down('md')]: {      
        minWidth:270,
        maxWidth:270,
        minHeight:200,
        maxHeight:200,
        variant:"h9"
      }
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
    >
      <Fade in={props.open}>
        <Card >
          <CardMedia
            className={classes.media}
            image={props.restaurant.photo}/>
          <CardContent className={classes.content}>
            <Typography gutterBottom component="h2">
              {props.restaurant.name}
            </Typography>
            <Typography gutterBottom  component="h2">
              Type: {props.restaurant.type}
            </Typography>
            <Typography gutterBottom  component="h2">
              Address: {props.restaurant.address}
            </Typography>
            <Typography gutterBottom  component="h2">
              Cost for two people: {props.restaurant.costForTwo}
            </Typography>
            <Typography gutterBottom  component="h2">
              Phone number: {props.restaurant.phoneNb}
            </Typography>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  );
}

export default RestaurantModal;