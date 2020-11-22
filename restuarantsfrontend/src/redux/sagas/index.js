import {all} from 'redux-saga/effects';
import getRestaurantsSaga from './getRestaurantsSaga';
import saveVisitSaga from './saveVisitSaga';
import getVisitsSaga from './getVisitsSaga';


export default function* rootSaga(){
    yield all([
        getRestaurantsSaga(),
        saveVisitSaga(),
        getVisitsSaga(),
    ])
}

