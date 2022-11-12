
const db = require('../../db/index') // db.query

// user表格的数据库操作

let getOneByNameAndPassword = async function(formdata){
    let _sql = `SELECT * FROM user_info
        WHERE password="${formdata.password}" and username="${formdata.username}"
        limit 1;`
    
    let res = await db.query(_sql)
    if(Array.isArray(res) && res.length >0){
        res = res[0]
    }else {
        res = null
    }
    return res
}

const getUserById = async function(id){
    const _sql = `
    select * from user_info
        where id="${id};"
    `
    let res = await db.query(_sql)
    return res
}
// register 把内容
const insertUser = async ({email,username,password,nick,detail_info,create_time,modified_time,level})=>{
    const _sql = `insert into user_info
    values(0,"${email}","${username}","${password}","${nick}","${detail_info}","${create_time}","${modified_time}",${level});`
    let res = await db.query(_sql)
    return res
}

module.exports = {
    getOneByNameAndPassword,
    getUserById,
    insertUser
}