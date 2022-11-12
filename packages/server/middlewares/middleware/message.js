
module.exports = async (ctx,next)=>{
    ctx.res.$success = (data,code=200)=>{
        let _body ={}
        if (typeof(data) == "object"){ // 如果是对象
            _body = {...data} // 直接放入body
        }else {
            _body.data = data // 
        }
        ctx.body = _body || {msg:"success"}
        ctx.statusText = "success" // 提示信息
        ctx.status = code
    }
    
    ctx.res.$error = (err,code=500)=>{
        let _body ={}
        if (typeof(err) == "object"){ // 如果是对象
            _body = {...err} // 直接放入body
        }else {
            _body.data = err // 
        }
        ctx.body = err || {msg:"error"}
        ctx.statusText = "error" // 提示信息
        ctx.status = code
    }
    await next()
}