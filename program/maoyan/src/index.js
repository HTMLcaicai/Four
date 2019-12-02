import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'lib-flexible'
import axios from "axios";
import store from "./store/index"
import {
    Provider
} from 'react-redux';
React.Component.prototype.$axios = axios
axios.interceptors.request.use(config=>{
    // config.url = "/m"+config.url;
    return config;
})
axios.interceptors.response.use((data)=>{
    return data;
})


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

