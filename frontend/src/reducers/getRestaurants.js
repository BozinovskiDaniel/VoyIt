
const restaurantsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_RESTAURANTS':
            return [...state, action.payload];
        case 'DESTROY_ITINERARY':
            return []; 
        default:
            return state;
    }
};

export default restaurantsReducer;