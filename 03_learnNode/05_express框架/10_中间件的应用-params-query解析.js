const express = require("express");

const app = express();

app.get("/products/:id/:name", (req, res, next) => {
  console.log(req.params);
  // req.params => 在数据苦衷查询真实的商品数据
  res.end("商品的数据详情");
});

app.get("/login", (req, res, next) => {
  console.log(req.query);
  res.end("登录成功");
});

app.listen(1123, () => {
  console.log("express初体验服务启动成功");
});
