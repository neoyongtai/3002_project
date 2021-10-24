import * as React from 'react';
import {Container, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import {Link} from '@mui/material';
import {TextField, CardHeader, Tab, Tabs} from '@mui/material/';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton,Select,MenuItem} from '@mui/material/';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import houseplant from '../images/houseplant.jpg';
import moment from 'moment';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';


// Data 

const useStyles = makeStyles((theme) => ({
    table:{
        minWidth: 650,
    },
    Container: {
        marginTop: 50,
        maxWidth: 1000,
    },
    page:{
        alignContent:'right'
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

  } 
}));

let suggestion = ['Needs Watering', 'Needs Sunlight', 'Needs Fertilising'];
let reason = ['Due to yellow leaves', 'Due to repotting'];
let status = ['Done'];
let statusdate = ['25.05.2019']
let date = 'May 28, 2021';
let priority = ['HIGH', 'LOW', 'MEDIUM'];
let plantName=['Salad Leaves', 'Salad Leaves' , 'Salad Leaves', 'Salad Leaves', 'Salad Leaves', 'Salad Leaves',
'Salad Leaves', 'Salad Leaves', 'Salad Leaves', 'Salad Leaves'];
let Plants = [];

for (let i = 0; i < plantName.length; i++) {
    Plants[i] = {
        Suggestion: suggestion[Math.floor(Math.random()* suggestion.length)],
        Reason: reason[Math.floor(Math.random()* reason.length)],
        Status : status,
        StatusDate : statusdate,
        Date : date,
        Priority: priority[Math.floor(Math.random()* priority.length)],
        PlantName : plantName[i]
    }
};

function createData(height, leave_color, exposure, temperature, humidity) {
    return {height, leave_color, exposure, temperature, humidity};
  }

  const rows = [
    createData('15cm', 'Green', 'Medium', "35'C", "57%"),
    createData('13cm', 'Green', 'Medium', "35'C", "57%"),
  ];

const Input = styled('input')({
    display: 'none',
  });

function Individual(plant, setCurrentId) {
  const notifications = useSelector((state) => state.notifications);
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

  console.log(notifications);

    return (
        <Container className={classes.Container}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Typography variant="h5" fontWeight = "bold">Salad Leaves</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span">
                              + Upload
                            </Button>
                        </label>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop: "2rem", padding: "20px"}}>
                    <Card sx={{ maxWidth: 400 }} style={{marginRight: "1.5rem"}}>
                        <CardActionArea>
                            <CardMedia
                              component="img"
                              height="200"
                              image={houseplant}
                              alt="salad leaves"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h8" component="div">
                                  Date: 05-05-2021
                                </Typography>
                            </CardContent>
                      </CardActionArea>
                    </Card>
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                            <CardMedia
                              component="img"
                              height="200"
                              image={houseplant}
                              alt="salad leaves"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h8" component="div">
                                  Date: 15-04-2021
                                </Typography>
                            </CardContent>
                      </CardActionArea>
                    </Card>
                </Grid>
            </Box>

            <Grid container spacing={2} style={{marginTop: "2rem"}}>
              <Grid item xs={6} md={8}>
                <Typography variant="h5" fontWeight = "bold">Notifications</Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <TextField label="Search for notification"
                  InputProps={{
                  startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>
                  )
                }}
                />
              </Grid>
            </Grid>
            <TableContainer component={Paper}>
              <Table aria-label="notifications">
                <TableHead>
                  <TableRow>
                    <TableCell data-testid={"suggestionCell"}>Suggestion</TableCell>
                    <TableCell data-testid={"status2Cell"}>Status</TableCell>
                    <TableCell data-testid={"date2Cell"}>Date</TableCell>
                    <TableCell data-testid={"priority2Cell"}>Priority</TableCell>
                    <TableCell data-testid={"plantNameCell"}>Name</TableCell>
                  </TableRow>
                </TableHead>
                  <TableBody>
                  {!notifications.length ? <CircularProgress /> : (
                    notifications.map((notification) => (
                    <TableRow component={Link} style={{textDecoration: 'none'}}>
                      <TableCell >
                          <Typography fontWeight = 'bold' color = '#2a2a2c'>
                              {notification.suggestionTitle}
                          </Typography>
                          <Typography color ='textSecondary' variant = 'body2' >{notification.suggestionSubText} </Typography>
                      </TableCell>
                      <TableCell >
                          <Typography fontWeight = 'bold' color = '#2a2a2c'>
                              {notification.status}
                          </Typography>
                      </TableCell>
                      <TableCell >
                          <Typography fontWeight = 'bold' color = '#2a2a2c'>
                              {notification.date}
                          </Typography>
                      </TableCell>
                      <TableCell >
                          <Typography
                            className={classes.priority}
                            style={{
                                backgroundColor:
                                ((notification.priority === 'HIGH' && 'red') ||
                                (notification.priority === 'MEDIUM' && 'orange') ||
                                (notification.priority === 'LOW' && 'green'))
                            }}
                            >{notification.priority}
                          </Typography>
                      </TableCell>
                      <TableCell >
                        <Grid container>
                        <Grid item lg = {10}>
                            <Typography fontWeight = 'bold' color = '#2a2a2c'>{notification.plantName} </Typography>
                        </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                    ))
                  )}
                  </TableBody>
              </Table>
            </TableContainer>
            <br/>

            <Box sx={{ flexGrow: 1 }} style={{marginTop: '2rem', marginBottom: '2rem'}}>
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <Typography variant="h5" fontWeight = "bold">Details</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginTop: '2rem'}} align='center'>
                    <Grid item xs={3}>
                        <TextField id="filled-basic" label="Height (cm)" variant="filled" style={{width: '15rem'}}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="filled-basic" label="Color" variant="filled" style={{width: '15rem'}}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="filled-basic" label="Sunlight Exposure Level" variant="filled" style={{width: '15rem'}}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="filled-basic" label="Average Temperature" variant="filled" style={{width: '15rem'}}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="filled-basic" label="Humidity Level" variant="filled" style={{width: '15rem'}}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="filled-basic" label="Root Mass" variant="filled" style={{width: '15rem'}}/>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="filled-basic" label="Plant Weight" variant="filled" style={{width: '15rem'}}/>
                    </Grid>
                </Grid>
                <Button variant="contained" style={{marginTop: '2rem', marginLeft: "1.5rem"}}>Add New Entry</Button>
            </Box>

            <Box sx={{ flexGrow: 1 }} style={{marginTop: '5rem', marginBottom: '5rem'}}>
                <Grid container spacing={2}>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Height</TableCell>
                            <TableCell align="right">Leaf Color</TableCell>
                            <TableCell align="right">Exposure</TableCell>
                            <TableCell align="right">Temperature</TableCell>
                            <TableCell align="right">Humidity</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.height}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.height}
                              </TableCell>
                              <TableCell align="right">{row.leave_color}</TableCell>
                              <TableCell align="right">{row.exposure}</TableCell>
                              <TableCell align="right">{row.temperature}</TableCell>
                              <TableCell align="right">{row.humidity}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </Grid>
            </Box>

        </Container>
    );
}


export default Individual;