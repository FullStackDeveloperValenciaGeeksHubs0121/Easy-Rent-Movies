import {combineReducers} from 'redux';
import orderReducer from './order-reducer';
import movieReducer from './movie-reducer';
import userReducer from './user-reducer';





const rootReducer = combineReducers({
    orderReducer,
    movieReducer,
    userReducer
});

export default rootReducer;