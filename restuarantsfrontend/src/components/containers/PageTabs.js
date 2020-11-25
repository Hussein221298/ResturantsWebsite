import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AllRestaurants from "../Restaurant/AllRestaurants";
import AllVisits from '../Visit/AllVisits';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}




const PageTabs = () =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Page 1" />
        <Tab label="Page 2" />      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      <AllRestaurants/>
    </TabPanel>
    <TabPanel value={value} index={1}>
        
        <AllVisits/>
    </TabPanel>
  </div>
  );
}
export default PageTabs;