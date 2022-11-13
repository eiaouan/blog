// 文章的信息
const essayModel = require('../model/model/essay');
const dateFormat = require('../utils/dateFormat')
const getPayload = require('../utils/payload') 
const UE = require('./userEssay')
// 插入文章,post请求,同时建立 user_essay 关系
const insertEssay = async ctx =>{
    const request = ctx.request.body
    let now = dateFormat()// 格式化输出当前时间
    // essay_id 让其自增
    let fault = {
        essay_id:0,
        sort_id:0,
        title:'修改标题',
        create_time:now,
        update_time:now,
        essay_status:'未发布'}
    let insertParam={};
    Object.assign(insertParam,fault,request)
    let res = await essayModel.insertEssay(insertParam)
    const payload =  await getPayload(ctx) // 解析token获取id
    UE.inserUE(payload.id,res.insertId); 
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
// 获取文章列表 （不返回content 查看内容再通过id获取content）
const getEssayList  = async ctx=>{
    const payload =  await getPayload(ctx) // 解析token获取id
    const {limit=20,offset=0} = ctx.query // 从请求中获取参数
    let res = await essayModel.getAllEssay(limit,offset,payload.id)
    // 格式化时间 在连接数据库时添加 timezone:"SYSTEM"
    if(res!=[]){
        ctx.res.$success({data:res});
    }
}

// 删除文章 ， 会如果文章已经发布，也会删除发布的内容
const deleteEssayById = async ctx=>{
    const {id} = ctx.query
    let res = await essayModel.deleteEssayById(id)
    console.log(res);
}
module.exports ={
    insertEssay,
    getEssayById,
    getEssayList
}

