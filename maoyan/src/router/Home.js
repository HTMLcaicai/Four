
//在这里设置你的二级路由带导航的路由
import React from "react";
import {
    NavLink,
    Route
} from "react-router-dom"
import Theatre from "../views/Theatre/Theatre"
import My from "../views/My/My"
import Movie from "../views/Home/Home"
import Hot from "../views/Home/Hot"
import GuardRouter from "./GuardRouter"
import 'lib-flexible'
// import "../assets/nav/nav.css"
import "../assets/router/index.css"
import "../assets/Home/font/iconfont.css"

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <nav className="footerNav">
                    <NavLink className={"App-link"} activeClassName={"App-active"} exact to={"/"}><i className="iconfont icon-dianying"></i>电影</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/theatre"}><i className="iconfont icon-yingyuan"></i>影院</NavLink>
                    <NavLink className={"App-link"} activeClassName={"App-active"} to={"/my"}><i className="iconfont icon-wode"></i>我的</NavLink>
                </nav>
                <Route exact path={"/"}  render={()=><GuardRouter component={Movie}></GuardRouter>}></Route>
                <Route path={"/theatre"} render={()=><GuardRouter component={Theatre}></GuardRouter>}></Route>
                <Route path={"/my"} render={()=><GuardRouter component={My}></GuardRouter>}></Route>
                <Route  path={"/hot"} render={()=><GuardRouter component={Hot}></GuardRouter>}></Route>
            </div>
        )
    }
}