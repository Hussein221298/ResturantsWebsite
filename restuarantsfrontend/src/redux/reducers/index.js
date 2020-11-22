import {combineReducers} from 'redux';
import getRestaurantsReducer from './getRestaurantsReducer';
import saveVisitReducer from './saveVisitReducer';
import getVisitsReducer from './getVisitsReducer';


const rootReducer = combineReducers({
    getRestaurantsReducer,
    saveVisitReducer,
    getVisitsReducer,
});

export default rootReducer;