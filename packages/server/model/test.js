// 测试数据库

// const db = require('../db/index')

// db.query('select * from user_info;')

const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',	//连接的数据库地址。（默认:localhost）
  user     : 'root',		//mysql的连接用户名
  password : '123456',		// 对应用户的密码
  database : 'blog'  		//所需要连接的数据库的名称（可选）
});
connection.connect();
// 插入一条数据
const addSql = 'select * from user_info;';
// const addUserData = ['test','test@qq.com','test','2021-09-16 15:18:13'];
connection.query(addSql,(err,res)=>{
    console.log(res);
});


connection.end();
