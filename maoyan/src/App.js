import React from 'react';
import './App.css';
import {
    BrowserRouter as  Router,
    Route,
        Switch
} from "react-router-dom";
import Movie from "./router/Home"
import Login from "./views/Login.js"
import TheatreDetail from './views/Detail/TheatreDetail'
function App(){
  return(
      <div className="App">
          <Router>
              <Switch>
                  <Route path={"/login"} component={Login}></Route>
                  <Route path={"/theatreDetail/:id"} component={TheatreDetail}></Route>
                  <Route path={"/"} component={Movie}></Route>
                  
              </Switch>
          </Router>

      </div>
  )
}
//一级路由，无导航路由所在地


export default App;
