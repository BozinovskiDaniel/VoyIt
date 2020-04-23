
const restaurantsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_RESTAURANTS':
            return [...state, action.payload];
        case 'ADD_RESTAURANTS_START_DATE':
            state.map(res => {
                if (res.res.name === (action.payload.name).split('(')[0].trim()) {
                    console.log('hey');
                    res.res.start = action.payload.start;
                }
            })
            return state;
        case 'REMOVE_RESTAURANTS_START_DATE':
            state.map(res => {
                if (res.res.name === (action.payload).split('(')[0].trim()) {
                    delete res.res.start
                }
            })
            return state;
        case 'DESTROY_ITINERARY':
            return []; 
        default:
            return state;
    }
};

export default restaurantsReducer;