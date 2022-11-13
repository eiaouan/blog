// 操作表格 user_essay 的内容
const db = require('../../db/index')
const insertUE = async (userId,essayId)=>{
    let _sql = `insert into user_essay 
    values(${essayId},${userId});`
    const res = await db.query(_sql)
    return res
}

const getEssaysByUserId = ctx=> {
    const _sql = `select * from user_essay where user_id=${userId}`

}

// const getUserByEssayId{

// }

module.exports = {
    insertUE
}