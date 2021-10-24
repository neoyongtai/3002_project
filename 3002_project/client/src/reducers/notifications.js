const reducer = (notifications = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_NOTIFICATIONS':
            return action.payload;
        default:
            return notifications;
    }
}

export default reducer;