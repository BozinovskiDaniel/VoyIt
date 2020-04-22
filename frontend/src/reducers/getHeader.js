const headerReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_HEADER':
            return action.payload;
        default:
            return state;
    }
};

export default headerReducer;