import * as api from '../api';

export const getMeasurements = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMeasurements();
        dispatch({type: 'FETCH_ALL_MEASUREMENTS', payload: data});
    }
    catch(error) {
        console.error(error);
    }
}