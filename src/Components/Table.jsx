import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#2196f3',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, nationality, dob, phoneNumber, email, id) {
  return { name, nationality, dob, phoneNumber, email, id };
}

const rows = [
  createData('Mayowa Bello', 'Nigerian', '1990-01-01', '08123258600', 'bmayowa25@gmail.com', 'id'),
  createData('Mayowa Bello', 'Nigerian', '1990-01-01', '08123258600', 'bmayowa25@gmail.com', 'id'),
  createData('Mayowa Bello', 'Nigerian', '1990-01-01', '08123258600', 'bmayowa25@gmail.com', 'id'),
  createData('Mayowa Bello', 'Nigerian', '1990-01-01', '08123258600', 'bmayowa25@gmail.com', 'id'),
  createData('Mayowa Bello', 'Nigerian', '1990-01-01', '08123258600', 'bmayowa25@gmail.com', 'id'),
  createData('Mayowa Bello', 'Nigerian', '1990-01-01', '08123258600', 'bmayowa25@gmail.com', 'id'),
];

const useStyles = makeStyles({
  table: {
    minWidth: '100%',
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Full Names</StyledTableCell>
            <StyledTableCell >Nationality</StyledTableCell>
            <StyledTableCell >Date of Birth</StyledTableCell>
            <StyledTableCell >Mobile Number</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.nationality}</StyledTableCell>
              <StyledTableCell >{row.dob}</StyledTableCell>
              <StyledTableCell >{row.phoneNumber}</StyledTableCell>
              <StyledTableCell >{row.email}</StyledTableCell>
              <StyledTableCell ><Link to={'/sponsor/'+row.id}>view</Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
