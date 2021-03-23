import {applyMiddleware, createStore} from 'redux';
import { save, load } from "redux-localstorage-simple";
import reducer from './reducers/route-reducer';

const createStoreWithMiddleware = applyMiddleware(
	save({ state: ["userData","popular","latest"] })
)(createStore);

const store = createStoreWithMiddleware(
    reducer,
    load({
        preloadState : {
            datosUser : ''
        },
        states: ["userData","popular","latest"]
    })
    /* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    }) */
);

export default store;