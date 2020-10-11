import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducers from "./ducks/reducers";
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [thunkMiddleware];

export default function configureStore(initialState = {}) {
    return createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middleware))
    );
}
