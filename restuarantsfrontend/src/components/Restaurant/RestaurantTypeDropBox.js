import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const RestaurantTypeDropBox=props=> {
  const classes = useStyles();


  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
    props.getTypeValue(event.target.value);
  };

  

  return (
    
<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="typrDropBox">Type</InputLabel>
        <Select
          native
          value={type}
          onChange={handleChange}
          label="type"
          inputProps={{
            name: 'type',
            id: 'typrDropBox',
          }}
        >
          <option aria-label="None" value="" />
          <option value="Lebanese">Lebanese</option>
          <option value="American">American</option>
          <option value="French">French</option>
          <option value="Chinese">Chinese</option>
          
        </Select>
</FormControl>

  );
}

export default RestaurantTypeDropBox;