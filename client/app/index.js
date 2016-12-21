import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {fetchPosts} from './actions/actions';
import reducer from './reducers/index';
import configureStore  from './store/store';
import {Router, Route, browserHistory} from 'react-router';

let store = configureStore(); 
store.dispatch(fetchPosts());

const app = document.getElementById('app');
const prefix = process.env.ROUTE_PREFIX || '/'; 
console.log(process.env);
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={prefix} component={App} />
        </Router>
    </Provider>
,app);
