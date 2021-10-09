import React, { useState, useEffect } from 'react';
import {TextField,Button,Grid,Container,Typography, CardHeader, Tab, Tabs, Box} from '@mui/material/';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,IconButton,Select,MenuItem} from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom';
import {makeStyles} from '@mui/styles';
import {Avatar} from '@mui/material';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

// not used
const userState = {
    username: localStorage.getItem("USERNAME"),
    token: localStorage.getItem("SESSIONTOKEN"),
    userId: localStorage.getItem("USERID"),
    isAdmin: localStorage.getItem("ISADMIN")
}

let suggestion = ['Needs Watering', 'Needs Sunlight', 'Needs Fertilising'];
let reason = ['Due to yellow leaves', 'Due to repotting'];
let status = ['Done'];
let statusdate = ['25.05.2019']
let date = 'May 28, 2021';
let priority = ['HIGH', 'LOW', 'MEDIUM'];
let plantName=['Salad Leaves', 'Radish' , 'Potatoes', 'Peas', 'Spring Onion', 'Onions',
'Garlic', 'tomatoes', 'Spinach', 'Lettuce'];
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

const useStyles = makeStyles((theme) => ({
  table:{
      minWidth: 650,
  },
  tableContainer: {
      borderRadius: 15,
      marginLeft: 350 ,
      marginRight: 30,
      marginBottom: 30,
      marginTop: 150,
      maxWidth: 950
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
}))
 
// maybe for future use to delete notification
const Notificationlist = props => (
  <TableRow>
    <TableCell></TableCell>
    <TableCell></TableCell>
    <TableCell></TableCell>
    <TableCell></TableCell>
    <TableCell></TableCell>
    <TableCell>
      <Link onClick={()=>props.deletenotification(props.notif._id)}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Link>
    </TableCell>
  </TableRow>
)

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container >
          {children}
        </Container>
      )}
    </div>
  );
}
  
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function NotifView(props) {
  const [isLoading, setLoading] = useState(()=>true);
  const [loadtab, setValue] = useState(0);
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

  const [alignment, setAlignment] = useState("123");
   
  useEffect(() => {
    async function  fetchdata()
    {
      if(userState.isAdmin === 'false'){
        props.history.push('/forum')
        props.enqueueSnackbar("You are not allowed to view the page!")
      }
      setLoading(false)
    }
    fetchdata()  

  },[isLoading])

  const handleChange = (event, newValue) =>{
    setValue(newValue)
  }
  
  // maybe for future use to delete notification
  const handleDeleteNotification = (id) =>{
    const data ={
      notifid: id
    }
  }

  if(isLoading) {
    return <div><Typography variant ="h6" data-testid={"Loading"}> Loading </Typography></div>
  }

  return (
    <Container>
      <Tabs onChange={handleChange} value={loadtab}>
          <Tab value={1} label="Dashboard" {...a11yProps(1)} 
              data-testid={"dashboardTab"}/>
          <Tab value={2} label="Notifications" {...a11yProps(2)}
              data-testid={"notificationsTab"}/>
          <Tab value={3} label="Ask Community" {...a11yProps(3)}
              data-testid={"askCommunityTab"}/>
      </Tabs>
      
      <TabPanel value={loadtab} index={1}
            data-testid={"tab1"}>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Typography variant="h5" fontWeight = "bold">Dashboard</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <TextField label="Search for plant"
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
        <Table aria-label="dashboard">
          <TableHead>
            <TableRow>
              <TableCell data-testid={"plantDetailsCell"}>Plant Details</TableCell>
              <TableCell data-testid={"status1Cell"}>Status</TableCell>
              <TableCell data-testid={"date1Cell"}>Date</TableCell>
              <TableCell data-testid={"priority1Cell"}>Priority</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {/*add code here */}
            </TableBody>
        </Table>
      </TableContainer>
      <br/>
      </TabPanel>

      <TabPanel value={loadtab} index={2}
            data-testid={"tab2"}>
      <br/>
      <Grid container spacing={2}>
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
              {Plants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.name}
              >
                <TableCell >
                    <Typography fontWeight = 'bold' color = '#2a2a2c'>
                        {row.Suggestion}
                    </Typography>
                    <Typography color ='textSecondary' variant = 'body2' >{row.Reason} </Typography> 
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
                <TableCell > 
                  <Grid container>
                  <Grid item lg = {10}>
                      <Typography fontWeight = 'bold' color = '#2a2a2c'>{row.PlantName} </Typography>  
                  </Grid>
                  </Grid>
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
      <br/>
      </TabPanel>

      <TabPanel value={loadtab} index={3}
            data-testid={"tab3"}>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Typography variant="h5" fontWeight = "bold">Ask Community</Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <TextField label="Search for topic"
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
        <Table aria-label="ask community">
          <TableHead>
            <TableRow>
              <TableCell data-testid={"topicCell"}>Topic</TableCell>
              <TableCell data-testid={"forumNameCell"}>Forum Name</TableCell>
              <TableCell data-testid={"linkCell"}>Link</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
              {/*add code here */}
            </TableBody>
        </Table>
      </TableContainer>
      <br/>
      </TabPanel>
    </Container>
  )
}

//export default withSnackbar(NotifView)
export default NotifView