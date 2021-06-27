const message = "你好啊"
// utf-8每个中文占据三个子节
/* <Buffer e4 bd a0 e5 a5 bd e5 95 8a>    --utf-8*/
/* <Buffer 60 4f 7d 59 4a 55>   --utf16*/ 


// 创建buffer

// 1.创建方式1，不过已经弃用
// const buffer = new Buffer(message)

// 2. 创建方式2
const buffer = Buffer.from(message,'utf16le')


console.log(buffer)
// 解码
console.log(buffer.toString()) //默认utf8
console.log(buffer.toString('utf16le'))