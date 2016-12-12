import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'
import configureStore  from './store/store'

let store = configureStore() 

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, app);
