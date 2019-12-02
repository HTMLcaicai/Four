import React from "react"
import "../css/my.css"
import {withRouter} from "react-router-dom"
 class My extends React.Component {
    render() {
        return (
            <div>
                <header className="navbar">
                    我的
                </header>
                <div className="header">
                    <img src="https://img.meituan.net/maoyanuser/63957f10ae9679c95d4ba26ad1bd29c816882.png" />
                </div>
                <div className="container">
                    <div className="group">
                        <div className="orders">
                            <div className="title">我的订单</div>
                            <div className="mb-outline-b title-line"></div>
                            <div className="list list-two">
                                <div className="order-item show" onClick = {this.goMyMove.bind(this)}>
                                    <p >电影</p>
                                </div>
                                <div className="order-item store">
                                    <p>商城</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group">
                        <div className="mb-outline-tb">
                            <div className="coupon item mb-line-b"><span>在线观影</span><b>></b></div>
                            <div className="coupon item mb-line-b"><span>优惠券</span><b>></b></div>
                            <div className="membercard item mb-line-b"><span>折扣卡</span><b>></b></div>
                            <div className="coupon item mb-line-b" onClick = {this.loginOut.bind(this)}><span>退出登录</span><b>></b></div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    goMyMove(){
        // console.log(a)
        this.props.history.push("/myMove")
    }
    loginOut(){
        localStorage.removeItem("userName")
        alert("您已退出登录，将为您跳转至登录界面")
        this.props.history.push("login")
    }
}
export default withRouter(My)