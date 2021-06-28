const http = require("http");

const server = http.createServer((req, res) => {
  // 设置状态码
  // 方式一：直接给属性复制
  // res.statusCode = 400;
  // 方式二：和head一起设置
  res.writeHead(503);

  // 响应结果
  res.end("响应结果一");
});

server.listen(1123, "0.0.0.0", () => {
  console.log("服务器启动成功~");
});
