const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname == "/login") {
    if (req.method === "POST") {
      // post请求，所以数据在body里面，要拿到body的数据
      // 下面拿到body中的数据

      // 设置一下编码，不然就需要toString转一下
      req.setEncoding("utf-8");
      req.on("data", (data) => {
        // 二进制操作，转字符串
        // console.log(data.toString());

        // 但是现在得到的是字符串类型
        // console.log(data);

        // 转成对象
        const { username, password } = JSON.parse(data);
        console.log(username, password);
      });

      res.end("success");
    }
  }
});

server.listen(1123, "0.0.0.0", () => {
  console.log("server服务器启动成功~");
});
