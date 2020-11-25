import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import RestaurantTypeDropBox from './RestaurantTypeDropBox';
import {useState} from 'react';
import Button from '@material-ui/core/Button';

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
    marginRight: theme.spacing(0),
    marginLeft: 0,
    width: '14ch',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '22ch',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
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
    paddingLeft: theme.spacing(4),
  },
}));

const RestaurantSearchBar=props=> {

  const classes = useStyles("");

  const [search, setSearch] = useState('');
 
  const saveSearchValue = (event)=>{
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
                onChange={saveSearchValue}
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
          <Button variant="contained"  onClick={getSearchValue}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default RestaurantSearchBar;