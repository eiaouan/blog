const router = require('koa-router')()
const path = require('path')
const loadFile = require('../utils/autoLoadFile')

/**
 * 
 * @param {array} fileList 需要注册路由的文件列表
 */
let importRouters = function(fileList){
    fileList.forEach(key=>{
        // 嵌套路由，以文件名嵌套
        router.use(`/${key.name}`,key.data.routes(),key.data.allowedMethods())
    })
}

importRouters(loadFile(path.join(__dirname,"./router"),false))

module.exports = router