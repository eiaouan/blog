
/**
 * 测试使用，直接运行该文件
 */

// 测试autoLoadFile
const path = require('path')
const context = require('./autoLoadFile')
const fileList = context(path.join(__dirname,'../routers'),true)
console.log(fileList);