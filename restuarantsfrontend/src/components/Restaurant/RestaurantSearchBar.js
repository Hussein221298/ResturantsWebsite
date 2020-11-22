import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RestaurantTypeDropBox from './RestaurantTypeDropBox';
import {useState} from 'react';
// import NativeSelects from './dropBox'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },


}));






const RestaurantSearchBar=props=> {
  const classes = useStyles("");

  const [search, setSearch] = useState('');
  const fetchSearchValue = (event)=>{
      setSearch(event.target.value);
  }

  const getSearchValue=(event)=>
  {
      props.getSearchArg(search)
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                onChange={fetchSearchValue}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                
                />
            </div>
            <div>
            <RestaurantTypeDropBox getTypeValue={props.getTypeValue}/>
            </div>
            <button type="button" onClick={getSearchValue}>
                Search
            </button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default RestaurantSearchBar;