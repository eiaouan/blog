//  中间件
const path = require("path")
const loadFile = require('../utils/autoLoadFile')

// 注册中间件

const install = (app)=>{
    const fileList = loadFile(path.join(__dirname,'./middleware'),false)
    fileList.forEach((item)=>{
        app.use(item.data)
    })
}

module.exports = install

// 使用install(app)



