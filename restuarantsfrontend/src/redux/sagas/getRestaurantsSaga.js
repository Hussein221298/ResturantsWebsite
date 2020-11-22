import {call,put,takeLatest} from 'redux-saga/effects';
import * as type from '../types';


const apiUrl='http://localhost:8080/Restaurants';


function getApi(){
    return fetch(apiUrl,{
        method:'GET',
        headers:{
            'Content-Type':"application/json",
        }
    }).then( response=>response.json())
    .catch((error)=>{throw error})
    }
    function* fetchRestaurants(actions){
        try{
            const restaurants=yield call(getApi);
            yield put({type:'GET_RESTAURANTS_SUCCESS', restaurants:restaurants});
        }
        catch(e){
            console.log("fail");
            yield put ({type: 'GET_RESTAURANTS_FAILED', message:e.message});
        }
    }
    function* getRestaurantsSaga(){
        yield takeLatest(type.GET_RESTAURANTS_REQUEST, fetchRestaurants);
    }

    export default getRestaurantsSaga;
