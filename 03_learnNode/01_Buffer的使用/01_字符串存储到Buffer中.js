const message = "hello"
// 用十六进制表示的，两位十六进制正好是八位二进制
{/* <Buffer 68 65 6c 6c 6f> */}


// 创建buffer

// 2.创建方式1，不过已经弃用
// const buffer = new Buffer(message)

// 2. 创建方式2
const buffer = Buffer.from(message)

console.log(buffer)