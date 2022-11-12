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
    essay_satus='未发布'
 }
 */

// 把内容存进数据库
// 在controll中已经做出了默认处理，此处不再设置默认值
const insertEssay= async ({essay_id,sort_id,title,content,create_time,update_time,essay_satus})=>{
    let _sql = `insert into essay
    values(0,${sort_id},"${title}","${content}","${create_time}","${update_time}","${essay_satus}")`
    let result = {
        sort_id,title,content,create_time,update_time,essay_satus
    }
    // db.query(_sql,(err,res)=>{
    //     let t = db.query('SELECT LAST_INSERT_ID();',(terr,tres)=>{
    //         let id = tres[0]['LAST_INSERT_ID()']
    //         getContentById(id)
    //     })
    // });
    await db.query(_sql)
    return result
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

// 分页获取数据
const getAllEssay=async (limit,offset)=>{
    let _sql = `select * from essay limit ${offset},${limit};`
    let res =  db.query(_sql)
    return res;
}

module.exports ={
    insertEssay,
    getContentById,
    getAllEssay
}