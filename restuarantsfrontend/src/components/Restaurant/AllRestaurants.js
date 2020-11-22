import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import RestaurantCard from './RestaurantCard';
import {getRestaurants} from '../../redux/actions/getRestaurants';
import RestaurantSearchBar from './RestaurantSearchBar';


const AllRestaurants = props => {

    const [search, setSearch] = useState('');
    const getSearchArg=(searchValue)=>{
        setSearch(searchValue);
    }



    const [type, setType] = useState('');
    const getType=(searchValue)=>{
        setType(searchValue);
    }


    const restaurants=useSelector(state=>state.getRestaurantsReducer.restaurants)
    const loading=useSelector(state =>state.getRestaurantsReducer.loading);
    const error=useSelector(state =>state.getRestaurantsReducer.error);
    const dispatch = useDispatch();

    useEffect (() =>{
        dispatch(getRestaurants(restaurants));
    },[]);



    return (
        <>
        <RestaurantSearchBar getSearchArg={getSearchArg} getTypeValue={getType}/>
        {loading &&<h1>'loading...'</h1>}

        {restaurants.length>0  &&  restaurants
        .filter(restaurant=>{return restaurant.name.toLowerCase().indexOf(search.toLowerCase())!==-1})
        .filter(restaurant=>{return !type || restaurant.type ==type})
        .map(Restaurant => {
             return <RestaurantCard key={Restaurant.id} restaurant={Restaurant}/>})} 


        {restaurants.length ===0 && <p> No users available!</p>}
        {error &&!loading && <p>{error}</p>}
        </> 
    )
}

export default AllRestaurants;