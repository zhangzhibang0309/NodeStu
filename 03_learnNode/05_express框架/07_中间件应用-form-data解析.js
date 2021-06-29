const express = require("express");
const multer = require("multer");

const app = express();

// 解析json
app.use(express.json());
// 解析urlencoded
app.use(express.urlencoded({ extended: true }));

// 解析form-data
const upload = multer();

app.post("/login",upload.any(), (req, res, next) => {
  console.log(req.body); // 直接这样搞是undefined 没有解析
  // 然后你要是自己解析又有点麻烦 官方提供了一个库解析这种格式
  res.end("用户登录成功");
});

app.listen(1123, () => {
  console.log("form-data解析服务器启动成功~");
});
