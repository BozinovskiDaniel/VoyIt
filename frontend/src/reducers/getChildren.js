const childrenReducer = (state = "0", action) => {
    switch(action.type) {
        case 'GET_CHILDREN':
            return action.payload;
        default:
            return state;
    }
};

export default childrenReducer;