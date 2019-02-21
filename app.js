const express = require("express");//引入express模块创建web服务器
const bodyPaser = require("body-parser");
const Home = require("./router/Home.router")
//引入自定义模块

var app = express();
app.listen(3000);
app.use(bodyPaser.urlencoded({extended:false}));//使用bodyPaser中间件
app.use(express.static('public'));//托管静态资源到public目录下

//使用路由器来管理路由
app.use("/Home",Home);