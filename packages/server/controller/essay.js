// 文章的信息
const essayModel = require('../model/model/essay');
const dateFormat = require('../utils/dateFormat')
// 插入文章,post请求
const insertEssay = async ctx =>{
    const request = ctx.request.body
    console.log('request',request);
    let now = dateFormat()// 格式化输出当前时间
    // essay_id 让其自增
    let fault = {
        essay_id:0,
        sort_id:0,
        title:'修改标题',
        create_time:now,
        update_time:now,
        essay_satus:'未发布'}
    let insertParam={};
    Object.assign(insertParam,fault,request)
    let res = await essayModel.insertEssay(insertParam)
    console.log('controll',res);
    if(res){
        ctx.res.$success({...res});
    }
    
    // 处理结果
    ctx.res.$success({...res});
}

// 获取文章
const getEssayById = async ctx=>{
    const request = ctx.request.body
    console.log(request);
    if(request.id !=null){
        essayModel.getContentById(request.id)
        
    }
}
// 获取文章列表
const getEssayList  = async ctx=>{
    const {limit=20,offset=0} = ctx.query // 从请求中获取参数
    let res = await essayModel.getAllEssay(limit,offset)
    console.log(res);
    if(res!=[]){
        ctx.res.$success({...res});
    }
}

module.exports ={
    insertEssay,
    getEssayById,
    getEssayList
}

