import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'lib-flexible';
import App from './App';
import axios from 'axios';
import store from './store';
import {
    Provider
} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as  Router
} from "react-router-dom"


React.Component.prototype.$axios=axios;
ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
serviceWorker.unregister();
