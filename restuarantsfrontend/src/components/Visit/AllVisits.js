import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getVisits} from '../../redux/actions/getVisits';

import VisitTable from './VisitTable';


const AllVisits = props => {

    const visits=useSelector(state=>state.getVisitsReducer.visits)
    const loading=useSelector(state =>state.getVisitsReducer.loading);
    const error=useSelector(state =>state.getVisitsReducer.error);
    const dispatch = useDispatch();

    useEffect (() =>{
        dispatch(getVisits(visits));
    },[]);

    return (
        <>
        {loading &&<h1>'loading...'</h1>}


        {visits.length>0  && <div><VisitTable visits={visits}/></div>}

        {visits.length ===0 && <p> No visits available!</p>}
        {error &&!loading && <p>{error}</p>}
        
        </> 
    )
}

export default AllVisits