// 插入user_essay

const userEssay = require('../model/model/userEssay')
const dateFormat = require('../utils/dateFormat')
const getPayload = require('../utils/payload') 

// 插入userEssay关系
const inserUE = async (userId,essayId)=>{
   
    userEssay.insertUE(userId,essayId);
}
module.exports ={
    inserUE
}