// 关于essay的接口
const eassayController = require('../../controller/essay')

const eRouter = require('koa-router')()

eRouter.post('/insert',eassayController.insertEssay)
eRouter.post('/getEssayById',eassayController.getEssayById)
eRouter.get('/getEssayList',eassayController.getEssayList)

module.exports = eRouter