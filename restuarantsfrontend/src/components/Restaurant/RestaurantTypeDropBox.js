import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
    paddingLeft:'8px',
    paddingRight:'2px',
    
  },
  typeLabel:{
    paddingLeft:'9px',
    color:'white',
  },
  SelectLabel:{
    color:'white',
  },
  optionLabel:{
    color:'black',
  },
}));

const types=["Lebanese","American","French","Chinese","Italian",]

const RestaurantTypeDropBox = props=> {

  const classes = useStyles();

  const [type, setType] = useState('');

  const handleChange = (event) => {
    setType(event.target.value);
    props.getTypeValue(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel className={classes.typeLabel}>Type</InputLabel>
      <Select native value={type} onChange={handleChange} label="type" inputProps={{name: 'type'}} className={classes.SelectLabel}>
        <option  aria-label="None" value="" />
        {types.map((type) => ( <option key={type} value={type} className={classes.optionLabel} >{type}</option> ))}          
      </Select>
    </FormControl>
  );
}

export default RestaurantTypeDropBox;