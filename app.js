var express=require('express')
var bodyParser = require('body-parser')
var app=express();
var router=require('./router.js')
var fs=require('fs')
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))
app.engine('html', require('express-art-template'));
// 配置模板引擎和 body-parser 一定要在 app.use(router) 挂载路由之前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(router)


app.listen(3000,function(){
    console.log("running....");
    
})
module.exports=app;