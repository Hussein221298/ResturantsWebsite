import * as type from '../types';


export function getRestaurants(restaurants){
    return {
        type: type.GET_RESTAURANTS_REQUEST,
        payload: restaurants,
    }
}