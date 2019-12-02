//这里是路由守卫
import React,{Component} from "react";
import {withRouter} from "react-router-dom";
class GuardRouter extends Component {
    componentWillMount(){
        // console.log("在这里拦截跳入My组件")
        // console.log(this.props.location.pathname)
        if(this.props.location.pathname === "/my"){
            if(!localStorage.userName){
                this.props.history.push({
                    pathname:"/login",
                    state:{
                        goUrl:this.props.location.pathname
                    }
                })
            }
        }
    }
    render(){
        return (
            <this.props.component></this.props.component>
        )
    }
}
export default withRouter(GuardRouter)