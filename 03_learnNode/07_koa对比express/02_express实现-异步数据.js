const express = require("express");
const axios = require("axios");

const app = express();

const middleware1 = (req, res, next) => {
  req.message = "aaa";
  next();
  res.end(req.message); // 这样没问题
};

const middleware2 = (req, res, next) => {
  req.message += "bbb";
  next();
};

const middleware3 = (req, res, next) => {
  // 这一段搞成了个异步 这里不会管你这个req.message有没有拼接上这个lyric
  // 这个中间件直接王辉走了 然后还想再第一个中间件中把结果返回给客户端 是不可以的
  axios
    .get("http://123.207.32.32:9001/lyric?id=167876")
    .then((result) => {
      req.message += result.data.lrc.lyric;

      // 这样是可以的 但是现在的需求是再第一个中间件返回 所以用express实现这个功能 有些复杂
    //   res.end(req.message)
    })
};

app.use(middleware1, middleware2, middleware3);

app.listen(1123, () => {
  console.log("express服务器启动成功");
});
