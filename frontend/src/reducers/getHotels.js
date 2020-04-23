
const hotelsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_HOTELS':
            return [...state, action.payload];
        case 'ADD_HOTELS_START_DATE':
            state.map(hotel => {
                if (hotel.hotel.name === (action.payload.name).split('(')[0].trim()) {
                    console.log('hey');
                    hotel.hotel.start = action.payload.start;
                }
            })
            return state;
        case 'REMOVE_HOTELS_START_DATE':
            state.map(hotel => {
                if (hotel.hotel.name === (action.payload).split('(')[0].trim()) {
                    delete hotel.hotel.start
                }
            })
            return state;
        case 'DESTROY_ITINERARY':
            return []; 
        default:
            return state;
    }
};

export default hotelsReducer;