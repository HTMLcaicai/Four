const proxy = require("http-proxy-middleware");
module.exports = function (app) {
    app.use("/m",proxy({
        target:"http://127.0.0.1",
        changeOrigin:true,
        pathRewrite:{
            "^/m":""
        }
    }))
    app.use("/y",proxy({
        target:"http://m.maoyan.com/",
        changeOrigin:true,
        pathRewrite:{
            "^/y":""
        }
    }))
}