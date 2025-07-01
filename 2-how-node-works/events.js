const events = require('events');
const http = require('http')
const name = 'Dima'

// class MyEmitter extends events.EventEmitter {
//     constructor() {
//         super();
//     }
// }
//
// const myEmitter = new MyEmitter();
//
// myEmitter.on('customEvent', () => {
//     console.log('Hello');
// });
//
// myEmitter.on('customEvent', (name) => {
//     console.log('My name is ' + name + '');
// })
//
// myEmitter.emit('customEvent', name);


const server = http.createServer()

server.on('request', (req, res) => {
    console.log('Request received');
    res.end('End');
})


server.on('request', (req, res) => {
    console.log('Another request');
})

server.on('close', () => {
    console.log('Server closed finished');
})

server.listen(8000, () => {
    console.log('Server listening');
})