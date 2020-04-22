import { combineReducers} from 'redux';
import hotelsReducer from './getHotels';
import attractionsReducer from './getAttractions';
import restaurantsReducer from './getRestaurants';
import locationIdReducer from './locationId';
import adultsReducer from './getAdults';
import childrenReducer from './getChildren';
import startDateReducer from './getStartDate';
import endDateReducer from './getEndDate';
import currencyReducer from './getCurrency';
import orderReducer from './getOrder';
import sortReducer from './getSort';
import headerReducer from './getHeader';
import locationReducer from './getLocation';
import extraEventsReducer from './getExtraEvents';

const rootReducer = combineReducers({
    hotels: hotelsReducer,
    attractions: attractionsReducer,
    restaurants: restaurantsReducer,
    id: locationIdReducer,
    adults: adultsReducer,
    children: childrenReducer,
    startDate: startDateReducer,
    endDate: endDateReducer,
    currency: currencyReducer,
    order: orderReducer,
    sort: sortReducer,
    header: headerReducer,
    location: locationReducer,
    extraEvents: extraEventsReducer
});

export default rootReducer;
