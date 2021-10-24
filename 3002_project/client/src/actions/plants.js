import * as api from '../api';

export const getPlants = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPlants();
        dispatch({type: 'FETCH_ALL', payload: data});
    }
    catch(error) {
        console.error(error);
    }
}

export const createPlant = (plant) => async (dispatch) => {
    try {
        const { data } = await api.createPlant(plant);
        dispatch({type: 'CREATE', payload: data});
    }
    catch(error) {
        console.error(error);
    }
}

export const updatePlant = (id, plant) => async (dispatch) => {
    try {
        const { data } = await api.updatePlant(id, plant);
        dispatch({type: 'UPDATE', payload: data});
    }
    catch(error) {
        console.error(error);
    }
}