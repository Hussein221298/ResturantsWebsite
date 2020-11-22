import * as type from '../types';


export function getVisits(visits){
    return {
        type: type.GET_VISITS_REQUEST,
        payload: visits,
    }
}