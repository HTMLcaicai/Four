import React from "react"
import "./css/login.css"
export default class Login extends React.Component{
    render(){
        return(
            <div className = "baoguo">
                <div className="Login-Header">
                    <p onClick={()=>this.props.history.push("/")} className="Login-Header-Left">《</p>
                    <p className="Login-Header-Right">猫眼电影</p>
                </div>
                <div className="Login-Method">
                    <div className="Login-Method-Left" onClick = {()=>this.changeStyle.call(this,1)}>
                        美团账号登录
                    </div>
                    <div className="Login-Method-Right" onClick = {()=>this.changeStyle.call(this,2)}>
                        手机验证登录
                    </div>
                    <div className="Login-Method-Move-Left"></div>
                    <div className="Login-Method-Move-Right"></div>

                </div>
                <div className="Login-Meituan">
                    <p className="Login-Meituan-Name">
                        <input type="text" placeholder="账户名/手机号/邮箱" ref={"userName"} onFocus={()=>this.focus.call(this,1)} onBlur={()=>this.blur.call(this,1)}/>
                    </p>
                    <p className="Login-Meituan-PassWord">
                        <input type="passWord" placeholder="请输入您的密码" ref={"passWord"} onFocus={()=>this.focus.call(this,2)} onBlur={()=>this.blur.call(this,2)}  />
                    </p>
                     <input type="button" value="登录" className="Login-Botton" onClick = {()=>this.login.call(this)} />
                </div>
                <div className="Login-Phone">
                    <p className="Login-Phone-Name">
                        <input type="text" placeholder="手机号" ref={"Phone"} onFocus={()=>this.focus.call(this,3)} onBlur={()=>this.blur.call(this,3)}/>
                    </p>
                    <p className="Login-Phone-PassWord">
                        <input type="passWord" placeholder="请输入您的密码" ref={"PhonePassWord"} onFocus={()=>this.focus.call(this,4)} onBlur={()=>this.blur.call(this,4)}  />
                    </p>
                     <input type="button" value="登录" className="Login-Phone-Botton" onClick = {()=>this.phoneLogin.call(this)} />
                </div>
                <div className="Login-UseLess">

                     <p className="Register-Retrieve">
                         <span className="Register" onClick = {()=>this.props.history.push("/register")}>立即注册</span>
                         <span className="Retrieve-PassWord">找回密码</span>
                     </p>
                     <p className="Service">
                         <span>©猫眼电影 客服电话：</span>
                         <span className="PhoneNum">400-670-5335</span>
                     </p>
                </div>
            </div>
        )
    }
    focus(num){
        if(num === 1)
            this.refs.userName.style.background="#dcdcdc";
        else if(num ===2)
            this.refs.passWord.style.background = "#dcdcdc"
        else if(num ===3)
            this.refs.Phone.style.background = "#dcdcdc"
        else if(num ===4)
            this.refs.PhonePassWord.style.background = "#dcdcdc"
    }
    blur(num){
        if(num === 1)
            this.refs.userName.style.background="#fff";
        else if(num ===2)
            this.refs.passWord.style.background = "#fff"
        else if(num ===3)
            this.refs.Phone.style.background = "#fff"
        else if(num ===4)
            this.refs.PhonePassWord.style.background = "#fff"
    }
    changeStyle(num){
        if(num === 1){
            document.querySelector(".Login-Method-Move-Right").style.display = "none"
            document.querySelector(".Login-Method-Move-Left").style.display = "block"
            document.querySelector(".Login-Meituan").style.display = "block"
            document.querySelector(".Login-Phone").style.display = "none"
        }else if(num === 2){
            document.querySelector(".Login-Method-Move-Right").style.display = "block"
            document.querySelector(".Login-Method-Move-Left").style.display = "none"
            document.querySelector(".Login-Meituan").style.display = "none"
            document.querySelector(".Login-Phone").style.display = "block"
        }
    }
    async login(){
        // console.log(this)
        const regularUser = /(^[A-Za-z]{1}[A-Za-z0-9_-]{3,15}$)|(^1[34578]\d{9}$)|(^[a-z0-9]{1}[a-z0-9_-]{1,}@[a-z0-9]{1,}(\.[a-z]{2,})*\.[a-z]{2,}$)/
        const regularPass = /^(\w){6,20}$/
        const userName = this.refs.userName.value.trim();
        const passWord = this.refs.passWord.value.trim();
        if(userName === ""){
            alert("请填写账号")
            return false
        }
        if(passWord === ""){
            alert("请填写密码");
            return false;
        }

        if(!regularUser.test(userName)){
            alert("请输入正确格式的用户名");
            return false
        }
        if(!regularPass.test(passWord)){
            alert("请输入正确格式的密码");
            return false;
        }
        //登录验证
        const {data} = await this.$axios.post("/m/meiTuanLogin",{userName,passWord})
        // console.log(data)
        if(data.ok === -1)
            alert(data.msg)
        if(data.ok === 0)
            alert(data.msg)
        if(data.ok === 1){
            localStorage.userName = data.userName;
            this.props.history.push("/my")
        }
    }
    async phoneLogin(){
        const regPhone = /^1[34578]\d{9}$/;
        const regPass = /^[A-Za-z]{1}[A-Za-z0-9_-]{5,15}$/;
        const phoneNum = this.refs.Phone.value.trim();
        const passWord = this.refs.PhonePassWord.value.trim();
        if(!regPhone.test(phoneNum)){
             alert("请输入正确的手机号")
            return false;
        }
        if(!regPass.test(passWord)){
             alert("请输入6~16位的常规密码")
            return false;
        }
        const {data} = await this.$axios.post("/m/phoneLogin",{
            phoneNum,
            passWord
        })
        console.log(data)
        if(data.ok === 1){
            localStorage.userName = data.phoneNum;
            alert("恭喜您登录成功，将为您跳转到首页");
            this.props.history.push("/");
        }else{
            alert("手机号或密码输入错误");
        }
    }
}