const reducer = (measurements = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_MEASUREMENTS':
            return action.payload;
        default:
            return measurements;
    }
}

export default reducer;