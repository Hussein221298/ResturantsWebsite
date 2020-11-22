import {call,put,takeLatest} from 'redux-saga/effects';
import * as type from '../types';


const apiUrl='http://localhost:8080/Visits';


function getApi(){
    return fetch(apiUrl,{
        method:'GET',
        headers:{
            'Content-Type':"application/json",
        }
    }).then(  response=>response.json())
    .catch((error)=>{throw error})
    }
    function* fetchVisits(){
        try{
            const visits=yield call(getApi);
            yield put({type:'GET_VISITS_SUCCESS', visits:visits});
        }
        catch(e){
            yield put ({type: 'GET_VISITS_FAILED', message:e.message});
        }
    }
    function* getVisitsSaga(){
        yield takeLatest(type.GET_VISITS_REQUEST, fetchVisits);
    }

    export default getVisitsSaga;
