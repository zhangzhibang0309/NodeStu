const fs = require('fs')

// 查看文件信息
// try {
//   const stat = fs.statSync('demo.txt');
//   console.log(stat)
//   console.log(stat.isFile())
//   console.log(stat.isDirectory())
// }catch (err) {
//   console.log('捕获异常',err);
// }

// 写文件
// try {
//   const data = fs.readFileSync('demo.txt')
//   const number = fs.openSync('demo.txt','w+')
//   fs.writeFileSync(number, data + '22222222') // 这个方法会覆盖原来的内容
// } catch (err) {
//   console.log(err);
// }

// 复制文件
try {
  const data = fs.readFileSync('demo.txt')
  const number = fs.openSync('demo11.txt','w+')
  fs.writeFileSync(number, data) // 这个方法会覆盖原来的内容
  // fs.unlinkSync('demo.txt') //这一行是删除 相当与剪切功能
} catch (err) {
  console.log(err);
}
