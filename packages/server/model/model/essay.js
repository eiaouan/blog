// 封装对文章的数据库操作
const db = require('../../db/index')
/**
 * 
 {
    essay_id: ,
    sort_id=0,
    title='修改标题',
    content:string,
    create_time=new Date()
    update_time=new Date()
    essay_status='未发布'
 }
 */

// 把内容存进数据库
// 在controll中已经做出了默认处理，此处不再设置默认值
const insertEssay= async ({essay_id,sort_id,title,content,create_time,update_time,essay_status})=>{
    let _sql = `insert into essay (sort_id,title,content,create_time,update_time,essay_status)
    values(${sort_id},"${title}","${content}","${create_time}","${update_time}","${essay_status}");`
    let result = {
        sort_id,title,content,create_time,update_time,essay_status
    }
    // db.query(_sql,(err,res)=>{
    //     let t = db.query('SELECT LAST_INSERT_ID();',(terr,tres)=>{
    //         let id = tres[0]['LAST_INSERT_ID()']
    //         getContentById(id)
    //     })
    // });
    let insertId =0;
    try{
       let data =  await db.query(_sql)
    //    获取主键
       insertId = data.insertId

    }catch(err) {
        console.log(err);
        throw new Error(err) 
    }
    
    return {'insertId':insertId, ...result}
}


const getContentById = (essay_id)=>{
let _sql = `select * from essay
where essay_id=${essay_id};`
let res =''
db.query(_sql, (err,res)=>{
    console.log(res);
});
return res
}

// 分页获取数据,通过用户id获取文章信息
const getAllEssay=async (limit,offset,id)=>{
    let _sql = `select essay_id ,sort_id, title, update_time ,essay_status from essay 
    where essay_id in 
    (select essay_id from user_essay where user_id=${id}) 
    limit ${offset},${limit};`
    let res =  db.query(_sql)
    return res;
}

// 删除数据


const deleteEssayById = async (id)=>{
    const _sql = `delete from essay where essay_id="${id}";`
    let res = db.query(_sql)
    return res
}



module.exports ={
    insertEssay,
    getContentById,
    getAllEssay,
    deleteEssayById
}