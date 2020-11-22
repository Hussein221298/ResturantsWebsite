import * as type from '../types';

const initailState = {
    restaurants:[],
    loading:false,
    error:null,
}


export default function getRestaurantsReducer(state=initailState, action){
    switch(action.type){
        case type.GET_RESTAURANTS_REQUEST:
            return{
                ...state,             
                loading: true,
            }
        case type.GET_RESTAURANTS_SUCCESS:
            return{
                ...state,             
                loading: false,
                restaurants:action.restaurants,
            }
        case type.GET_RESTAURANTS_FAILED:
            return{
                ...state,             
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}