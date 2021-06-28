const http = require("http");

// 创建第一台web服务器
const server1 = http.createServer((req, res) => {
  res.end("helle server1");
});

server1.listen(1123, "localhost", () => {
  console.log("server1服务器启动成功~");
});

// // 创建第二台web服务器
const server2 = new http.Server((req, res) => {
  res.end("hello server2");
});

server2.listen(11235, "localhost", () => {
  console.log("server2服务器启动成功~");
});
 
// 监听方法的使用
server1.listen( () => {
  console.log("server1服务器启动成功~");
  console.log(server1.address().port())
});