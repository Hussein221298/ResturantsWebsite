import * as type from '../types';

const initailState = {
    loading:false,
    error:null,

}


export default function saveVisitReducer(state=initailState, action){
    switch(action.type){
        case type.SAVE_VISIT_REQUEST:
            return{
                ...state,             
                loading: true,
            }
        case type.SAVE_VISIT_SUCCESS:
            return{
                ...state,             
                loading: false,
                visits:action.visits,
            }
        case type.SAVE_VISIT_FAILED:
            return{
                ...state,             
                loading: false,
                error: action.message,
            }
        default:
            return state;
    }
}