import * as type from '../types';

const initailState = {
    loading:false,
    error:null,
    saved:false
}


export default function saveVisitReducer(state=initailState, action){
    switch(action.type){
        case type.SAVE_VISIT_REQUEST:
            return{
                ...state,             
                loading: true,
                saved:false,
            }
        case type.SAVE_VISIT_SUCCESS:
            return{
                ...state,             
                loading: false,
                saved:true
            }
        case type.SAVE_VISIT_FAILED:
            return{
                ...state,             
                loading: false,
                saved:false,
                error: action.message,
            }
        default:
            return state;
    }
}