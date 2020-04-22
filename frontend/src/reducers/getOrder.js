const orderReducer = (state = "asc", action) => {
    switch(action.type) {
        case 'GET_ORDER':
            return action.payload;
        default:
            return state;
    }
};

export default orderReducer;