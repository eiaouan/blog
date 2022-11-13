
const port = 3002

// 数据库
const sqlConfig = {
    host: 'localhost',
    port : '3306',
    user: 'root',
    password : '123456',
    database: 'blog',
    timezone:"SYSTEM"
}

// 密钥设置
const SECRET = 'eiaouan'
module.exports= {
    port,
    sqlConfig,
    SECRET
}