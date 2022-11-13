// 封装数据库操作
const mysql =  require('mysql')
const  config = require('../config/index.js')
// const connection = mysql.createConnection(config.sqlConfig)
// Cannot enqueue Handshake after invoking quit. 解决方法用连接池
const pool = mysql.createPool(config.sqlConfig)
  
  let query = function( sql, values ) {
  
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          resolve( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            connection.release()
          })
        }
      })
    })
  
  }

module.exports = {
    query
}