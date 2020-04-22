const locationReducer = (state = 0, action) => {
    switch(action.type) {
        case 'GET_LOCATION':
            return action.payload;
        default:
            return state;
    }
};

export default locationReducer;