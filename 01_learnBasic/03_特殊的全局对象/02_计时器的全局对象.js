setTimeout(() => {
    console.log("setTimeout")
},1000)

setInterval(() => {
    console.log("setInterval")
}, 1000);

// 先不用管具体用法，这个是立即执行
setImmediate(() => {
    console.log("setImmediate")
})

// 先不用管具体用法
process.nextTick(() => {
    console.log("process.nextTick")
})