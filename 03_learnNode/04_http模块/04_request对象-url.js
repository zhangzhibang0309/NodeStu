const http = require("http");
const url = require("url");
const qs = require("querystring");

// url基本用法，当你的路径很简单的时候
// const server = http.createServer((req, res) => {
//   if (req.url === "/login") {
//     res.end("welcome back");
//   } else if (req.url === "/user") {
//     res.end("userlist");
//   } else {
//     res.end("error");
//   }
// });

// 如果要是url比较复杂，/login?username=why&password=123
const server = http.createServer((req, res) => {
  //req.url能拿到一个对象，把里面的pathname, query解构出来
  const { pathname, query } = url.parse(req.url);
  // 当pathname是什么的时候，做出一些判断
  if (pathname == "/login") {
    // query还是？后面的东西
    console.log(query);
    console.log(qs.parse(query));
    // 通过qs模块的parse方法，再把具体的值给解构出来
    const { username, password } = qs.parse(query);
    console.log(username, password);
    res.end("success");
  }
});

server.listen(1123, "localhost", () => {
  console.log("server服务器启动成功~");
});
