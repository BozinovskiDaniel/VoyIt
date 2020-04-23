export const getHotels = (hotels) => {
    return {
        type: 'GET_HOTELS',
        payload: hotels
    };
};

export const getExtraEvents = (event) => {
    return {
        type: 'GET_EXTRA_EVENTS',
        payload: event
    };
};

export const getAttractions = (attractions) => {
    return {
        type: 'GET_ATTRACTIONS',
        payload: attractions
    };
};

export const getRestaurants = (res) => {
    return {
        type: 'GET_RESTAURANTS',
        payload: res
    };
};

export const getLocationId = (id) => {
    return {
        type: 'GET_LOCATION_ID',
        payload: id
    };
};

export const getAdults = (adults) => {
    return {
        type: 'GET_ADULTS',
        payload: adults
    };
};

export const getChildren = (children) => {
    return {
        type: 'GET_CHILDREN',
        payload: children
    };
};

export const getStartDate = (startDate) => {
    return {
        type: 'GET_START_DATE',
        payload: startDate
    };
};

export const getEndDate = (endDate) => {
    return {
        type: 'GET_END_DATE',
        payload: endDate
    };
};

export const getCurrency = (currency) => {
    return {
        type: 'GET_CURRENCY',
        payload: currency
    };
};

export const getOrder = (order) => {
    return {
        type: 'GET_ORDER',
        payload: order
    };
};

export const getSort = (sort) => {
    return {
        type: 'GET_SORT',
        payload: sort
    };
};

export const getHeader = (header) => {
    return {
        type: 'GET_HEADER',
        payload: header
    };
};

export const destroyItinerary = () => {
    return {
        type: 'DESTROY_ITINERARY',
    };
};

export const getLocation = (location) => {
    return {
        type: 'GET_LOCATION',
        payload: location
    };
};

export const addHotelStartDate = data => {
    return {
        type: 'ADD_HOTELS_START_DATE',
        payload: data
    };
};

export const removeHotelStartDate = data => {
    return {
        type: 'REMOVE_HOTELS_START_DATE',
        payload: data
    };
};

export const addAttractionStartDate = data => {
    return {
        type: 'ADD_ATTRACTIONS_START_DATE',
        payload: data
    };
};

export const removeAttractionStartDate = data => {
    return {
        type: 'REMOVE_ATTRACTIONS_START_DATE',
        payload: data
    };
};

export const addRestaurantStartDate = data => {
    return {
        type: 'ADD_RESTAURANTS_START_DATE',
        payload: data
    };
};

export const removeRestaurantStartDate = data => {
    return {
        type: 'REMOVE_RESTAURANTS_START_DATE',
        payload: data
    };
};

export const addExtraEventStartDate = data => {
    return {
        type: 'ADD_EXTRAEVENT_START_DATE',
        payload: data
    };
};

export const removeExtraEventStartDate = data => {
    return {
        type: 'REMOVE_EXTRAEVENT_START_DATE',
        payload: data
    };
};
