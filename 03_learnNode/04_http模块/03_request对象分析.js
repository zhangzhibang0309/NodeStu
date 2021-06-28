const http = require("http");

// 创建第一台web服务器
const server = http.createServer((req, res) => {
  // request对象封装了客户端给我们服务器传递过来的所有信息
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  res.end("helle server");
});

server.listen(1123, "localhost", () => {
  console.log("server服务器启动成功~");
});

// /

// GET

// {
//   host: 'localhost:1123',
//   connection: 'keep-alive',
//   'cache-control': 'max-age=0',
//   'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
//   'sec-ch-ua-mobile': '?0',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br',
//   'accept-language': 'zh-CN,zh;q=0.9',
//   cookie: 'Webstorm-5dc33a40=246b1783-9765-4256-a914-55570facd596; Webstorm-5dc33dff=28e23c61-3d75-4296-9309-65349fb36653' 
// }