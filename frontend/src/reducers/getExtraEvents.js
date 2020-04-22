

const extraEventsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_EXTRA_EVENTS':
            return [...state, action.payload];
        case 'DESTROY_ITINERARY':
            return []; 
        default:
            return state;
    }
};

export default extraEventsReducer;