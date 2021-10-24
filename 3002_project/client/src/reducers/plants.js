const reducer = (plants = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'UPDATE':
            return plants.map((plant) => plant._id === action.payload._id ? action.payload : plant);
        case 'CREATE':
            return [...plants, action.payload];
        default:
            return plants;
    }
}

export default reducer;