import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPlant } from '../actions/plants';

const PlantCreationForm = () => {

    const [plantData, setPlantData] = useState({plantName: '', plantAge: 0, plantSpecies: '', plantImage: ''});
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPlant(plantData));
    }

    const clear = () => {

    }

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Add a plant</Typography>
                <TextField name="plantName" variant="outlined" label="Name" fullWidth value={plantData.plantName} onChange={(e) => setPlantData({ ...plantData, plantName: e.target.value })} />
                <TextField name="plantAge" variant="outlined" label="Age" type="number" fullWidth value={plantData.plantAge} onChange={(e) => setPlantData({ ...plantData, plantAge: e.target.value })} />
                <TextField name="plantSpecies" variant="outlined" label="Species" fullWidth value={plantData.plantSpecies} onChange={(e) => setPlantData({ ...plantData, plantSpecies: e.target.value })} />
                <div><FileBase type="file" multiple={false} onDone={({base64}) => setPlantData({ ...plantData, plantImage: base64 })} /></div>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Add</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default PlantCreationForm;