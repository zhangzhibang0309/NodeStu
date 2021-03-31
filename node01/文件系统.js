var fs = require('fs')

// 理解异步不会产生阻塞 同步会有阻塞 阻塞函数

// 异步读取
fs.readFile('demo.txt', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('异步', data.toString());
  }
})

// 同步读取
console.log('同步之前1111');
try {
  const data = fs.readFileSync('demo.txt')
  console.log('同步', data.toString());
} catch (err) {
  console.log(err);
}

console.log('同步之后1111') // 这个先打印 因为上面是异步执行 这行代码 不会等待上面那个回调函数结束再执行

