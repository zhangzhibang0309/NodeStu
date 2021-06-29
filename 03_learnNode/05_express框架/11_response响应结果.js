const express = require("express");

const app = express();

app.get("/products/:id/:name", (req, res, next) => {
  console.log(req.params);
  // req.params => 在数据苦衷查询真实的商品数据
  res.end("商品的数据详情");
});

app.get("/login", (req, res, next) => {
  console.log(req.query);

  // 设置响应码
  res.status(204);

  // 这样会崩掉
  //   res.end({
  //     name: "zzb",
  //     password: 123,
  //   });
  // 设置内容
  res.json({
    name: "zzb",
    password: 123,
  }); 
});

app.listen(1123, () => {
  console.log("express初体验服务启动成功");
});
