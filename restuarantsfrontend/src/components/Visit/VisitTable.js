import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const VisitTable = props =>{

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Restaurant Name</TableCell>
            <TableCell align="left">Visit Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.visits.map((visit) => (
            <TableRow key={visit.vid}>
              <TableCell align="left">{visit.restaurantName}</TableCell>
              <TableCell align="left">{visit.visitDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VisitTable;