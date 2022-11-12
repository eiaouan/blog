const Koa = require('koa');

const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')
const static = require('koa-static')

const config = require('./config')
const router = require("./routers")
const mw = require('./middlewares') // 自定义中间件
const koajwt = require('koa-jwt')

const app = new Koa()
// 注册自定义中间件
mw(app)
// onerror(app) //错误处理方式 只做接口，不考虑页面问题

// 拦截请求，操作响应
app.use(logger())

app.use(bodyparser())

app.use(cors())

app.use(static(__dirname + "/static"))


// app.use(async (ctx)=>{
//     ctx.body = `<h1>hello koa</h1>`
// })

// logger
app.use( async (ctx,next)=>{
    const start = new Date();// 开始时间
    await next()
    const ms = new Date()-start
    console.log(`${ctx.method} ${ctx.URL} ->${ms}ms`);
})

app.on("err",(err,ctx)=>{
    console.error(`server error`,err,ctx)
})
// 登录验证白名单
app.use(koajwt({ secret: config.SECRET }).unless({
    path: [
      /^\/user\/login/, // 登陆接口
      /^\/user\/register/ // 注册
    ]
}))

app.use(router.routes(),router.allowedMethods())
// app.listen(config.port,(err)=>{
//     console.log(`server start at port ${config.port}`);
// })

module.exports= app

