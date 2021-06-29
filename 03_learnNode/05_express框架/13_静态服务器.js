const express = require("express");

const app = express();

app.use(express.static('./dist'))

app.listen(1123, () => {
  console.log("静态资源服务器启动成功");
});
