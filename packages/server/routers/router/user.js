const userController = require('../../controller/user')

// user 子路由
const user = require('koa-router')()

user.get('/',(ctx)=>{
    ctx.body = {
        massage: 'user response'
    }
})

user.post('/login', userController.login)
user.get('/getUserInfo',userController.getUserInfo)
user.post('/register',userController.register)
module.exports = user