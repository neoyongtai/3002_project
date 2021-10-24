import * as React from 'react';
import { useState } from 'react';
import {makeStyles} from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Avatar, Link, Button, Grid, Typography} from '@mui/material';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Edit from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { useSelector } from 'react-redux';

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
    const plants = useSelector((state) => state.plants);
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();

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
                        Name
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography fontWeight = 'bold' color = '#9e9fa4'>
                        Age
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography fontWeight = 'bold' color = '#9e9fa4'>
                        Species
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography fontWeight = 'bold' color = '#9e9fa4'>
                        Date
                    </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                 {!plants.length ? <CircularProgress /> : (
                    plants.map((plant) => (
                        <TableRow component={Link} style={{textDecoration: 'none'}} href="/individual" key={plant._id}>
                        <TableCell > 
                          <Grid container>
                            <Grid item lg = {12}>
                                <Typography fontWeight = 'bold' color = '#2a2a2c'>{plant.plantName} </Typography> 
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell > 
                          <Grid container>
                            <Grid item lg = {12}>
                                <Typography fontWeight = 'bold' color = '#2a2a2c'>{plant.plantAge} </Typography> 
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell > 
                          <Grid container>
                            <Grid item lg = {12}>
                                <Typography fontWeight = 'bold' color = '#2a2a2c'>{plant.plantSpecies} </Typography> 
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell > 
                          <Grid container>
                            <Grid item lg = {12}>
                                <Typography fontWeight = 'bold' color = '#2a2a2c'>{moment(plant.createdAt).fromNow()} </Typography> 
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell > 
                          <Grid container>
                            <Grid item lg = {6}>
                                <Button color="primary" href="/create" onClick={() => {setCurrentId(plant._id)}}>
                                    <Edit />
                                </Button>
                            </Grid>
                            <Grid item lg = {6}>
                                <Button color="secondary" onClick={() => {}}>
                                    <DeleteIcon />
                                </Button>
                            </Grid>
                          </Grid>
                        </TableCell>
                      </TableRow>
                    ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        
      );
}

export default DashboardTable;