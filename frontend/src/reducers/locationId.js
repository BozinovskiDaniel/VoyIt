
const locationIdReducer = (state = 1, action) => {
    switch(action.type) {
        case 'GET_LOCATION_ID':
            return action.payload;
        default:
            return state;
    }
};

export default locationIdReducer;