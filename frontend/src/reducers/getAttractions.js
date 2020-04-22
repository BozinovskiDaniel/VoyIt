
const attractionsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ATTRACTIONS':
            return [...state, action.payload];
        case 'DESTROY_ITINERARY':
            return []; 
        default:
            return state;
    }
};

export default attractionsReducer;