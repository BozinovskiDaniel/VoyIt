
const hotelsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_HOTELS':
            return [...state, action.payload];
        case 'DESTROY_ITINERARY':
            return []; 
        default:
            return state;
    }
};

export default hotelsReducer;