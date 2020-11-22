import * as type from '../types';


export function saveVisit(restaurantId){
    return {
        type: type.SAVE_VISIT_REQUEST,
        payload: restaurantId,
    }
}