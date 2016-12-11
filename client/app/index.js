import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers/index'

let store = createStore(reducer)

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, app);
