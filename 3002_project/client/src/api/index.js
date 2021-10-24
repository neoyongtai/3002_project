import axios from 'axios';

const url = 'http://localhost:5000/plants';


export const fetchPlants = () => axios.get(url);
export const createPlant = (newPlant) => axios.post(url, newPlant);
export const updatePlant = (id, updatedPlant) => axios.patch(`${url}/${id}`, updatedPlant);

const notifurl = 'http://localhost:5000/plants/notifications';

export const fetchNotifications = () => axios.get(notifurl);