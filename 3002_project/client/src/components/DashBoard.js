import * as React from 'react';
import DashboardTable from './DashboardTable';
import { Typography} from '@mui/material';   
import { Container, TextField,IconButton } from '@mui/material';
//import search from './Search';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles((theme) => ({
    table:{
        minWidth: 650,
    },
    Container: {
        marginTop: 50,
        maxWidth: 1000,
    },
}));

function DashBoard(){
const classes = useStyles();
 return(
     <Container className= {classes.Container}>
        
        <Grid container spacing={12}>
        <Grid item xs={5}>
          <Typography variant="h5" fontWeight = "bold">Dashboard</Typography>
        </Grid>
        <Grid item xs={1}>
          <Button
                href="/create"
                type="submit"
                variant="contained"
              >
                <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField label="Search for Plant" 
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
        
         <DashboardTable/>
     </Container>
 );
}

export default DashBoard;