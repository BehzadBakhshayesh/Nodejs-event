const EventEmitter = require('events')
const http = require('http')

// const myEmitter = new EventEmitter()

class Sales extends EventEmitter {
    constructor() {
        super()
    }
}
const myEmitter = new Sales()


myEmitter.on("newSale", () => {
    console.log("newSale 1");
})

myEmitter.on("newSale", () => {
    console.log("newSale 2");
})

myEmitter.on("newSale", (e) => {
    console.log(`newSale ${e}`);
})

myEmitter.emit('newSale', 9)

//////////////////////////////////////////////

const server = http.createServer()

server.on('request', (req, res) => {
    res.end('req recived 1')
})

server.on('request', (req, res) => {
    console.log('req recived 2')
})

server.on('close', (req, res) => {
    console.log("close");
})

server.listen(8000, '127.0.0.1', () => {
    console.log("listen");

})