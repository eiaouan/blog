const { SECRET } = require('../config')
const jsonwebtoken = require('jsonwebtoken')
const util = require('util')
// 将jwt.verify函数promise化
const verify = util.promisify(jsonwebtoken.verify)  

module.exports = async function getPayload (ctx) {
  const token = ctx.header.authorization
  const payload = await verify(token.split(' ')[1], SECRET)
  return payload
}
