import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import RestaurantCard from './RestaurantCard';
import {getRestaurants} from '../../redux/actions/getRestaurants';
import RestaurantSearchBar from './RestaurantSearchBar';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Snackbar from '@material-ui/core/Snackbar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    gridContainer:{
        paddingTop:'40px',
        paddingBottom:'20px',
        [theme.breakpoints.up('sm')]: {
            paddingLeft:'70px',
            paddingRight:'70px',
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft:'40px',
            paddingRight:'40px',
        },
    },
    paginateBar:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
  }));
  
const AllRestaurants = props => {

    const classes = useStyles();

    const restaurants=useSelector(state=>state.getRestaurantsReducer.restaurants)
    const loading=useSelector(state =>state.getRestaurantsReducer.loading);
    const error=useSelector(state =>state.getRestaurantsReducer.error);
    const dispatch = useDispatch();
   
    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(6);
    const [search, setSearch] = useState('');
    const [type, setType] = useState('');
    const [snackBarOpen, setSnackBarOpen] = useState(false);

    const changePage=(event,page)=>{
        setCurrentPage(page)
    }

    const getSearchArg=(searchValue)=>{
        setSearch(searchValue);
    }

    const getType=(searchValue)=>{
        setType(searchValue);
        setCurrentPage(1);
    }

    const closeSnackBar =(event,reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false)
    }

    useEffect (() =>{
        dispatch(getRestaurants(restaurants));
    },[]);

    useEffect (() =>{
        setSnackBarOpen(error);
    },[error]);
  
    const restaurantsToShow=restaurants
        .filter(restaurant=>{return restaurant.name.toLowerCase().indexOf(search.toLowerCase())!==-1})
        .filter(restaurant=>{return !type || restaurant.type ===type})

    const nbOfPages=Math.ceil(restaurantsToShow.length/postsPerPage);


    return (
        <>
            <RestaurantSearchBar getSearchArg={getSearchArg} getTypeValue={getType}/>
                <Backdrop  open={loading} >
                    <CircularProgress color="inherit" />
                </Backdrop>

            {restaurants.length>0  && 
                <div>
                    <Grid container spacing={4} className={classes.gridContainer}>
                    {restaurantsToShow
                        .slice((currentPage-1)*postsPerPage,(currentPage-1)*postsPerPage+postsPerPage)
                        .map(Restaurant => (
                            <Grid key={Restaurant.id} item  xs={12} sm={6} md={4}>
                                <RestaurantCard  restaurant={Restaurant}/>
                            </Grid>
                        ))}
                    </Grid> 
                    <Pagination className={classes.paginateBar} color="primary" page={currentPage} count={nbOfPages} onChange={changePage} />
                </div>
            }

            {restaurants.length===0  && !error &&  !loading && <h1>No Restaurants</h1>}
  
            {error && !loading && 
            <Snackbar
            open={snackBarOpen}
            autoHideDuration={4000}
            message="Error getting the list of restaurants from the database"
            onClose={closeSnackBar}
            anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
            />}
        </> 
    )
}

export default AllRestaurants;