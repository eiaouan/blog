/**
 * 
 * @param {*} ctx 
 * @param {*} next 
 * 全局捕获错误处理
 */
module.exports= async (ctx,next)=>{
try{
  await next()
}catch(err){
      ctx.body = { message: err.message }
      ctx.status = err.status || 500
}
}
