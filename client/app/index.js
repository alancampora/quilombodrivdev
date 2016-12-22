import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
import configureStore  from './store/store';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './containers/App';
import MainView from './view/MainView';
import routes from './routes'

let store = configureStore(); 
const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>{routes}</Router>
    </Provider>
,app);
