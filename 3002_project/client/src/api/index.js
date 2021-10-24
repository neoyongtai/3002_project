import axios from 'axios';

const getAllUrl = 'http://localhost:5000/plants';
const createUrl = 'http://localhost:5000/plant/add';
const updateUrl = 'http://localhost:5000//plant/:id';


export const fetchPlants = () => axios.get(getAllUrl);
export const createPlant = (newPlant) => axios.post(createUrl, newPlant);
export const updatePlant = (id, updatedPlant) => axios.patch(`${updateUrl}`, updatedPlant);