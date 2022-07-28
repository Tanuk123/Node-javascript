// const http = require('http');
// let server = http.createServer((request, response) => {
//     response.writeHead(200);
//     response.end("hello world");
// })

// server.listen(3000, () => {
//     console.log("server start");
// })



// let i = 0;

// function increment() {
//     i++;
//     console.log(i);
// }
// setTimeout(increment, 1000);

setImmediate(function A() {
    console.log("1st immediate");
});

setImmediate(function B() {
    console.log("2nd immediate");
});

process.nextTick(function C() {
    console.log("1st process");
});

process.nextTick(function D() {
    console.log("2nd process");
});

// First event queue ends here
console.log("program started");