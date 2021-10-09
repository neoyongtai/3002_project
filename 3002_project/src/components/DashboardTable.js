import * as React from 'react';
import {makeStyles} from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import {Avatar} from '@mui/material';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

//fake data
let status = ['Needs Watering','Needs Sunlight', 'Needs Fertilising'];
let priority = ['HIGH', 'LOW', 'MEDIUM'];
let plantName=['Salad Leaves','Radish' , 'Potatoes', 'Peas', 'Spring Onion', 'Onions',
'Garlic', 'tomatoes','Spinach','Lettuce'];
let date = 'May 28, 2021';
let Plants = [];
for (let i = 0; i< plantName.length; i++) {
    Plants[i] = {
        PlantName : plantName[i],
        Status : status[Math.floor(Math.random()* status.length)],
        Date : date,
        Priority: priority[Math.floor(Math.random()* priority.length)],
    }
};

const useStyles = makeStyles((theme) => ({
    table:{
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        marginRight: 30,
        marginBottom: 30,
        marginTop: 50,
        maxWidth: 1000
    },
    // tableHeaderCell: {
    //     fontWeight:'bold',
    //     color : 'grey'
    // },
    // subText: {
    //     fontSize: 12,
    //     color :'#c8cad1',
    //     fontWeight: 'bold',
    // }, 
    priority: {
        fontWeight: 'bold',
        color:'white',
        fontSize: '0.75rem',
        backgroundColor: 'grey',
        borderRadius: 15,
        padding:'3px 10px',
        display: 'inline-block',
        textAlign: 'center'

    },
    page:{
        alignContent:'right'
    }
}));

function DashboardTable() {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TableContainer component={Paper} className = {classes.tableContainer}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" colSpan={2} height='60' >
                    <Typography fontWeight = 'bold' variant = 'h6' >
                        All Plants
                    </Typography>
                </TableCell>
                </TableRow>
              <TableRow>
                <TableCell>
                    <Typography fontWeight = 'bold' color = '#9e9fa4'>
                        Plant Details
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography fontWeight = 'bold' color = '#9e9fa4'>
                        Status
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography fontWeight = 'bold' color = '#9e9fa4'>
                        Date
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography fontWeight = 'bold' color = '#9e9fa4'>
                        Priority
                    </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Plants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.name} 
                >
                  <TableCell > 
                    <Grid container>
                    <Grid item lg = {2}>
                        <Avatar alt ={row.PlantName} src= '.'/> 
                    </Grid>
                    <Grid item lg = {10}>
                        <Typography fontWeight = 'bold' color = '#2a2a2c'>{row.PlantName} </Typography> 
                        <Typography color ='textSecondary' variant = 'body2'>{'updated 5 days ago'}</Typography> 
                    </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell >
                      <Typography fontWeight = 'bold' color = '#2a2a2c'>
                          {row.Status}
                      </Typography>
                      <Typography color ='textSecondary' variant = 'body2' >{'on 24.05.2019'} </Typography> 
                  </TableCell>
                  <TableCell >
                      <Typography fontWeight = 'bold' color = '#2a2a2c'>
                          {row.Date}
                      </Typography>
                      <Typography color ='textSecondary' variant = 'body2'>{'5.00 PM'} </Typography> 
                  </TableCell>
                  <TableCell >
                      <Typography 
                        className={classes.priority}
                        style={{
                            backgroundColor:
                            ((row.Priority === 'HIGH' && 'red') ||
                            (row.Priority === 'MEDIUM' && 'orange') ||
                            (row.Priority === 'LOW' && 'green'))
                        }}
                        >{row.Priority}
                      </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={Plants.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}/> 
            </TableFooter>
          </Table>
        </TableContainer>
        
      );
}

export default DashboardTable;