
const attractionsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_ATTRACTIONS':
            return [...state, action.payload];
        case 'ADD_ATTRACTIONS_START_DATE':
            console.log(state);
            state.map(attraction => {
                if (attraction.attraction.name === (action.payload.name).split('(')[0].trim()) {
                    attraction.attraction.start = action.payload.start;
                }
            })
            return state;
        case 'REMOVE_ATTRACTIONS_START_DATE':
            state.map(attraction => {
                if (attraction.attraction.name === (action.payload).split('(')[0].trim()) {
                    delete attraction.attraction.start
                }
            })
            return state;
        case 'DESTROY_ITINERARY':
            return []; 
        default:
            return state;
    }
};

export default attractionsReducer;