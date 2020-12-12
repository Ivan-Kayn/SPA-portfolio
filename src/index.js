import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {HashRouter as Router} from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.1.0";
import "./assets/demo/demo.css";

import store from "./store";
import {Provider} from "react-redux";


ReactDOM.render(

        <Provider store={store}>
            <Router
                basename='/'
            >
                <App/>
            </Router>
        </Provider>,
    document.getElementById('root')
);
