const http = require("http");

const server = http.createServer((req, res) => {
  // 设置响应的header
  // 设置方式一：
  // res.setHeader("Content-Type", "text/plain;charset=utf8");
  // 设置方式二：
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8" // 设置为html 可以直接解析西面的end（标签）
  });

  // 响应结果
  res.end("<h2>hello server</h2>");
});

server.listen(1123, "0.0.0.0", () => {
  console.log("服务器启动成功~");
});
