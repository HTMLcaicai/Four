import React from 'react';
import './App.css';
import {
    BrowserRouter as  Router,
    Route,
    Switch
} from "react-router-dom";
import Movie from "./router/Home"
import Login from "./views/Login.js"
import Register from "./views/Register"
import MyMove from "./views/My/MyMove"
import Search from "./views/search/search.js"
function App(){
  return(
      <div className="App">
          <Router>
              <Switch>
                  <Route path={"/login"} component={Login}></Route>
                  <Route path={"/register"} component={Register}></Route>
                  <Route path={"/myMove"} component={MyMove}></Route>
                  <Route path={"/search"} component={Search}></Route>
                  <Route path={"/"} component={Movie}></Route>
              </Switch>
          </Router>

      </div>
  )
}
//一级路由，无导航路由所在地


export default App;
