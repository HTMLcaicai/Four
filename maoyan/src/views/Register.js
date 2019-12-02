import React from "react";
import "./css/register.css"
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            disabled: true,
            code: 0,
            buttonValue: "获取验证码",
            phoneNum:0
        }
    }
    render() {
        return (
            <div className = "baoguo">
                <div className="Register-Header">
                    <p onClick={() => this.props.history.go(-1)} className="Register-Header-Left">《</p>
                    <p className="Register-Header-Right">猫眼电影</p>
                </div>
                <div className="navR">
                    <span className="EnterPhone">输入手机号</span> >
                    <span className="InputAuthCode">输入验证码</span> >
                    <span className="InputCode">输入密码</span>
                </div>
                <div className="Register-Meituan phoneNum">
                    <p className="Register-Meituan-Name">
                        <input type="text" placeholder="请输入您的手机号"  ref={"userName"} maxLength="11" onChange={() => this.getAuthCode.call(this, 1)} onFocus={() => this.focus.call(this, 1)} onBlur={() => this.blur.call(this, 1)} />
                    </p>
                </div>
                <div className="Register-Meituan authCode">
                    <p className="Register-Meituan-Name">
                        <input type="text" placeholder="请输入您的验证码" ref={"authCode"} maxLength="6" onFocus={() => this.focus.call(this, 2)} onBlur={() => this.blur.call(this, 2)}  />
                    </p>
                </div>
                <div className="Register-Meituan passWord">
                    <p className="Register-Meituan-Name">
                        <input type="passWord" placeholder="请输入您的密码" ref={"passWord"}  onFocus={() => this.focus.call(this, 3)} onBlur={() => this.blur.call(this, 3)} />
                    </p>
                </div>
                <div className="agreeProcoal">
                    <span className="counter">√</span>
                    <span> 我已阅读并同意</span>
                    <span className="userAgreeMent">《美团网用户协议》</span>
                </div>
                <div className="Register-UseLess">
                    <input type="button" value={this.state.buttonValue} ref={"button"} disabled={this.state.disabled} className="Register-Botton" onClick={() => this.submit.call(this)} />
                    <p className="Service">
                        <span>©猫眼电影 客服电话：</span>
                        <span className="PhoneNum">400-670-5335</span>
                    </p>
                </div>
            </div>
        )
    }
    focus(num) {
        if (num === 1)
            this.refs.userName.style.background = "#dcdcdc";
        if (num === 2)
            this.refs.authCode.style.background = "#dcdcdc";
        if (num === 3)
            this.refs.passWord.style.background = "#dcdcdc";
    }
    blur(num) {
        if (num === 1)
            this.refs.userName.style.background = "#fff";
        if (num === 2)
            this.refs.authCode.style.background = "#fff";
        if (num === 3)
            this.refs.passWord.style.background = "#fff";
    }
    getAuthCode() {
        if (this.refs.userName.value.length === 11) {
            this.setState({
                disabled: false
            })
            this.refs.button.style.background = "#df2d2d";
            this.refs.button.style.color = "#fff"
        } else {
            this.setState({
                disabled: true
            })
            this.refs.button.style.background = "#dcdcdc";
            this.refs.button.style.color = "#9f9f9f"
        }

    }
    async submit() {
        if (this.state.buttonValue === "获取验证码") {
            const phoneNum = this.refs.userName.value.trim()
            const reg = /^1[34578]\d{9}$/
            if (!reg.test(phoneNum)) {
                alert("请输入正确的手机号");
                return false;
            }
            const {data} = await this.$axios.get("/m/autoCode", {
                params: {
                    phoneNum
                }
            })
            console.log(data)
            if (data.ok === 0) {
                alert(data.msg)
                this.props.history.push("/login")
                return false;
            }
            if (data.ok === -1) {
                alert(data.msg)
                return false;
            }
            if (data.ok === 1) {
                this.setState({
                    code: data.code,
                    buttonValue: "提交验证码",
                    phoneNum:phoneNum
                },function(){
                    this.refs.authCode.value = this.state.code;
                })
                document.querySelector(".phoneNum").style.display = "none";
                document.querySelector(".authCode").style.display = "block";
                document.querySelector(".InputAuthCode").style.color = "#df2d2d";
                console.log(this.state.code,"1234567")
            }
        }else if(this.state.buttonValue === "提交验证码"){
           if(this.refs.authCode.value.trim()/1 !==this.state.code){
               alert("请重新输入验证码");
           }else{
            document.querySelector(".authCode").style.display = "none";
            document.querySelector(".passWord").style.display = "block";
            document.querySelector(".InputCode").style.color = "#df2d2d";
            this.setState({
                buttonValue: "提交密码"
            })
           }

        }else if(this.state.buttonValue === "提交密码"){
            const passWord = this.refs.passWord.value.trim();
            const reg = /^[A-Za-z]{1}[A-Za-z0-9_-]{5,15}$/
            if(!reg.test(passWord)){
                alert("请输入6~16位的常规密码")
                return false
            }
            const phoneNum = this.state.phoneNum;
            const code = this.state.code;
            console.log(passWord,phoneNum,code,9521)
            const {data} = await this.$axios.post("/m/register",{
                phoneNum,
                code,
                passWord
            })
            if(data.ok === 1){
                alert("恭喜您，注册成功。即将为您跳转至首页");
                localStorage.userName = phoneNum;
                this.props.history.push("/");
            }
        }
    }


}
export default Register