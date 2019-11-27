
//在这里设置你的二级路由带导航的路由
import React from "react";
import {
    NavLink,
    Route
} from "react-router-dom"
import Theatre from "../views/Theatre/Theatre"
import My from "../views/My/My"
import Movie from "../views/Home/Home"
export default class Home extends React.Component{
    render(){
        return (
            <div>
                <nav>
                    <NavLink className={"App-link"} activeClassName={"App-active"} exact to={"/"}>电影</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/theatre"}>影院</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}>我的</NavLink>
                </nav>
                <Route exact path={"/"} component={Movie}></Route>
                <Route path={"/theatre"} component={Theatre}></Route>
                <Route path={"/my"} component={My}></Route>
            </div>
        )
    }
}