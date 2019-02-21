const mysql = require("mysql");
//创建mysql连接池
var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'hudie',
    connectionLimit:10,
});
//导出连接池模块
module.exports = pool;