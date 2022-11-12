// user路由回调函数
// 导入
const { SECRET } = require('../config')
const jsonwebtoken = require('jsonwebtoken')
const user = require('../model/model/user')
const getPayload = require('../utils/payload')
const dateFormat = require('../utils/dateFormat')
let login = async  ctx=>{
    const request = ctx.request.body
    const {username,password} = request
    if(!username || !password){
     ctx.res.$error({msg:"无效输入"},400) 
     return 
    } 
    let res = await user.getOneByNameAndPassword({username,password})
   // 登陆成功
   console.log(res);
if (res!=null) {
    // 存储用户信息
    let info = {
      id: res.id,
      name: res.username,
    }
  
    let data = {
      Bearer: 'Bearer ',
      // 签发 token，1天
      token: jsonwebtoken.sign(
        info,
        SECRET,
        { expiresIn: '1d' }
      )
    }
    // ctx.body = new SuccessModel(data, '登陆成功')
    ctx.res.$success({msg:"登录成功",...data});
  } else { // 没有改信息
    ctx.res.$success({msg:"用户名或密码错误"})
  }
}

const getUserInfo = async ctx =>{
    const payload = await getPayload(ctx) // 解析用户得到用户id
    // console.log(payload) //--> { id: 1, name: 'admin123', iat: 1667722976, exp: 1667809376 }
    let res =  await user.getUserById(payload.id)
    console.log('res',res);
    if(res === null){
      throw new Error('token无效')
    }
    ctx.body = res
}

const register = async ctx =>{
  let formdata = ctx.request.body // 获取数据
  Object.assign(formdata,{email:'',nick:'',detail_info:'',level: 1,create_time: dateFormat(),modified_time:''})
  let res = user.insertUser(formdata)
  ctx.body = res
}

module.exports = {
    login,
    getUserInfo,
    register
}