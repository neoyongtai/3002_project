import * as api from '../api';

export const getNotifications = () => async (dispatch) => {
    try {
        const { data } = await api.fetchNotifications();
        dispatch({type: 'FETCH_ALL_NOTIFICATIONS', payload: data});
    }
    catch(error) {
        console.error(error);
    }
}