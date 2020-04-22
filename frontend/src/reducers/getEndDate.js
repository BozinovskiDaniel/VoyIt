const endDateReducer = (state = new Date(), action) => {
    switch(action.type) {
        case 'GET_END_DATE':
            return action.payload;
        default:
            return state;
    }
};

export default endDateReducer;