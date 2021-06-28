const http = require("http");

const server = http.createServer((req, res) => {
  // 响应结果
  res.write("响应结果一");
  res.end();
  // 相当于直接res.end("响应结果一")
});

server.listen(1123, "0.0.0.0 ", () => {
  console.log("服务器启动成功~");
});
