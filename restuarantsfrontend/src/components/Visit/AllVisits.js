import React, {useEffect,useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getVisits} from '../../redux/actions/getVisits';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {DataGrid} from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridContainer:{
        width:10000
    },

  }));

const AllVisits = () => {

    const classes = useStyles();

    const visits=useSelector(state=>state.getVisitsReducer.visits)
    const loading=useSelector(state =>state.getVisitsReducer.loading);
    const error=useSelector(state =>state.getVisitsReducer.error);
    const dispatch = useDispatch();

    const [snachBarOpen, setSnachBarOpen] = useState(false);

    const closeSnackBar =(event,reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        setSnachBarOpen(false)
    }

    useEffect (() =>{
        setSnachBarOpen(error);
    },[error]);

    useEffect (() =>{
        dispatch(getVisits(visits));
    },[]);

    const columns = [
        { field: 'restaurantName', headerName:'Restaurant Name', width:180},
        { field: 'visitDate', headerName: 'Visit Date', width:180},
      ];

    const rows = visits.map(visit=>({id:visit.vid,restaurantName:visit.restaurantName, visitDate:visit.visitDate}))
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Visits
                    </Typography>
                </Toolbar>
            </AppBar>

            {loading && 
            <Backdrop  open={loading} >
                <CircularProgress color="inherit" />
            </Backdrop>}


            {visits.length>0  &&     <div style={{ height: 600, width: '90%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={7} autoHeight={true} rowCount={Math.ceil((visits.length)/7)*7}/>
            </div>}

            {visits.length===0  && !error &&  !loading &&
            <h1>No Visits</h1>}

            {error &&!loading &&       
            <Snackbar
                open={snachBarOpen}
                autoHideDuration={4000}
                message="Error getting your visits log from the database"
                onClose={closeSnackBar}
                anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
            />}
        </> 
    )
}

export default AllVisits