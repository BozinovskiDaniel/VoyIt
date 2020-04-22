const adultsReducer = (state = "1", action) => {
    switch(action.type) {
        case 'GET_ADULTS':
            return action.payload;
        default:
            return state;
    }
};

export default adultsReducer;