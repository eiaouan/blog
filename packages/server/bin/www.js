#!/user/bin/env node

/**
*
*/

const app = require('../app')
const debug = require('debug')('demo:server')
const http = require('http')

const config = require('../config')

/**
*get port from environment and store in express
*/


 const port = config.port
let onError = function(error){
    if(error.syscall != 'listen'){
        throw error
    }
    let bind = typeof port ==='string'
        ? 'Pipe ' + port
        :'Port ' + port
    switch(error.code){
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`)
            break
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`)
            break
        default:
            throw error
    }
}

let onListening = function(){
    let address = server.address()
    let bind = typeof address === 'string'
    ?'pipe ' +address
    :'port ' + address.port
    debug(`listing on ${bind}`)
}

let server = http.createServer(app.callback)

app.listen(port)
server.on('error',onError)
server.on('listening',onListening)


