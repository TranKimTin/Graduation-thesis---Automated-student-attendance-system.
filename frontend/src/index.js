import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
import * as serviceWorker from './serviceWorker';
import './assets/css/custom.css';
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';
import configureStore from './state/store';

const initialState = {};
const store = configureStore(initialState);
const rootElement = (
    <CookiesProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </CookiesProvider>
);

ReactDOM.render(rootElement, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
