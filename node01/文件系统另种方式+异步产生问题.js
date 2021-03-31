const fs = require('fs')

// 下面是出现问题的写法 这个问题要改正的话得异步改同步 用到async await
// var number = 0
// fs.open('demo.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }else {
//     console.log(data.toString());
//     number = data
//   }
// })
// fs.readFile(number,(err, data) => {
//   if (err) {
//     console.log(err);
//   }else {
//     console.log(data.toString());
//   }
// })

// 下面是这种方式的改正
// 这种也是异步
fs.open('demo.txt', (errOpen, dataOpen) => {
  if (errOpen) {
    console.log(errOpen);
  } else {
    fs.readFile(dataOpen, (errRead, dataRead) => {
      if (errRead) {
        console.log(errRead);
      } else {
        console.log('异步', dataRead.toString());
      }
    })
  }
})

// 下面是同步 注意open那个函数也不一样（跟异步比较）
try {
  const number = fs.openSync('demo.txt')
  const data = fs.readFileSync(number)
  console.log('同步', data.toString())
  fs.closeSync(number)
  // 关闭之后就无法再读取了
  // const data2 = fs.readFileSync(number)
  // console.log('同步', data2.toString())
} catch (err) {
  console.error(err)
}


