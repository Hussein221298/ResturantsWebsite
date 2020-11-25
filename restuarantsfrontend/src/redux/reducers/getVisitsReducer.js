import * as type from '../types';

const initailState = {
    visits:[],
    loading:false,
    error:null,
}


export default function getVisitsReducer(state=initailState, action){
    switch(action.type){
        case type.GET_VISITS_REQUEST:
            return{
                ...state,             
                loading: true,
            }
        case type.GET_VISITS_SUCCESS:
            
            return{
                ...state,             
                loading: false,
                visits:action.visits,
            }
        case type.GET_VISITS_FAILED:
            
            return{
                ...state,             
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}