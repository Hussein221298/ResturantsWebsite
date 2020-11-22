import {call,put,takeLatest} from 'redux-saga/effects';
import * as type from '../types';


function getApi(Url){
    return fetch(Url,{
        method:'POST',
        headers:{
            'Content-Type':"text",
        }
    }).then( response=>response.status)
    .catch((error)=>{throw error})
    }
    function* saveVisit(action){
        try{
            const result=yield call(getApi, `http://localhost:8080/Visits/${action.payload}`);
            if (result===200){yield put({type:'SAVE_VISIT_SUCCESS'});}
            else{yield put ({type: 'SAVE_VISIT_FAILED', message:"Invalid restaurant id"});}
        }
        catch(e){
            yield put ({type: 'SAVE_VISIT_FAILED', message:e.message});
        }
    }
    function* saveVisitSaga(){
        yield takeLatest(type.SAVE_VISIT_REQUEST, saveVisit);
    }

    export default saveVisitSaga;
