const express = require("express");
const bodyParser = require('body-parser');
const db = require("./module/db");

const mongodb = require("mongodb")
const app = express();
const tools = require("./module/tools")
app.use(bodyParser.json());
app.get("/cityList",async function(req,res){
    const cityList = await db.find("cityList",{})
    res.json({
        ok:1,
        cityList
    })
})

//美团登陆验证
app.post("/meiTuanLogin", async function (req, res) {
    let { userName, passWord } = req.body
    passWord = tools.enMd5(passWord)
    // console.log(userName,passWord)
    const results = await db.findOne("meituan", {
        userName,
        // passWord:tools.
    })
    // console.log(results)
    if (results) {
        if (passWord === results.passWord) {
            res.json({
                ok: 1,
                userName: results.userName,
            })
        } else {

            res.json({
                ok: 0,
                msg: "密码输入错误，请重新输入"
            })
        }
    } else {
        res.json({
            ok: -1,
            msg: "该用户还未注册，请先注册"
        })
    }
})

//获取短信验证码
app.get("/autoCode", async function (req, res) {
    const phoneNum = req.query.phoneNum
    // console.log(phoneNum)
    const code = tools.getRandom(100000, 999999);
    //判断是否注册过
    const phone = await db.findOne("phoneUser", { phoneNum })
    if (phone) {
        res.json({
            ok: 0,
            msg: "该用户已注册，请前往登录"
        })
    } else {
        //没有注册，判断之前是否发送过验证码
        const info = await db.findOne("phoneCode", { phoneNum })
        if (info) {
            if (Date.now() - info.sendTime > 5 * 60 * 1000) {
                await db.updateOne("phoneCode", { _id: info._id }, { $set: { sendTime: Date.now(), code } });
                res.json({
                    ok: 1,
                    msg: "成功",
                    code
                })
            } else {
                tools.json(res, -1, "时间未到还差" + Number.parseInt((1000 * 60 * 5 - (Date.now() - info.sendTime)) / 1000) + "秒")
            }
        } else {
            await db.insertOne("phoneCode", {
                phoneNum,
                code,
                sendTime: Date.now()
            })
            res.json({
                ok: 1,
                msg: "成功",
                code
            })
        }
    }
})
//提交注册
app.post("/register",async function (req,res) {
    console.log(req.body,"注册接口")
    const {phoneNum,code,passWord} = req.body;
    const info = await db.findOne("phoneCode",{
        phoneNum,
        code
    })
    if(info){
        if(Date.now()-info.sendTime>1000*60*5){
            tools.json(res,-1,"验证过期了，请重新发送")
        }else{
            await db.insertOne("phoneUser",{
                phoneNum,
                passWord,
                regTime:Date.now(),
            })
            res.json({
                ok:1,
                msg:"成功",
            })
        }
    }
})
//手机号登录
app.post("/phoneLogin",async function (req,res) {

    const {phoneNum,passWord} = req.body;

    const info = await db.findOne("phoneUser",{
        phoneNum,
        passWord
    })
    if(info){
        res.json({
            ok:1,
            msg:"登录成功",
            phoneNum:info.phoneNum
        })
    }else{
        res.json({
            ok:-1,
            msg:"手机号或密码错误"
        })
    }
})
app.listen(80,function () {
    console.log("success");
})