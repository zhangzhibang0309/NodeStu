const fs = require('fs')

// r+模式 如果不存在会抛出异常
// fs.open('demo1,txt', 'r+', (err, data) => {
//   if (err) {
//     console.error(err)
//   }else {
//     console.log(data);
//   }
// })

// w模式 以写入模式打开文件，如果文件不存在则创建。
// w+模式 是以读写模式 其他和w一样 但是我还没发现什么区别
fs.open('demo1,txt', 'w+', (err, data) => {
  if (err) {
    console.error(err)
  } else {
    console.log('我是刚创建的demo1描述符：',data);
    fs.writeFile('demo1.txt','hello node',err => {
      if (err) {
        console.error(err);
      }else {
        console.log('我是writeFile的回调函数，但是我没有data参数');
        fs.readFile('demo1.txt',(err, data) => {
          if (err) {
            console.error(err)
          }else {
            console.log('我是写入demo1后又读取出来的内容',data.toString());
          }
        })
      }
    })
  }
})
