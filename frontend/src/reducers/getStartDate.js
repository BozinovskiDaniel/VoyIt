const startDateReducer = (state = new Date(), action) => {
    switch(action.type) {
        case 'GET_START_DATE':
            return action.payload;
        default:
            return state;
    }
};

export default startDateReducer;