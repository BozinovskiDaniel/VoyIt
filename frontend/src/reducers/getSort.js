const sortReducer = (state = "recommended", action) => {
    switch(action.type) {
        case 'GET_SORT':
            return action.payload;
        default:
            return state;
    }
};

export default sortReducer;