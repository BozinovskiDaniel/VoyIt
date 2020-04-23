

const extraEventsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_EXTRA_EVENTS':
            return [...state, action.payload];
        case 'ADD_EXTRAEVENT_START_DATE':
            state.map(event => {
                console.log(event);
                if (event.title === (action.payload.name).split('(')[0].trim()) {
                    event.start = action.payload.start;
                }
            })
            return state;
        case 'REMOVE_EXTRAEVENT_START_DATE':
            state.map(event => {
                if (event.title === (action.payload).split('(')[0].trim()) {
                    delete event.start
                }
            })
            return state;
        case 'DESTROY_ITINERARY':
            return []; 
        default:
            return state;
    }
};

export default extraEventsReducer;