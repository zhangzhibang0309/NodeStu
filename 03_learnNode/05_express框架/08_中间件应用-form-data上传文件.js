// 系统模块
const path = require("path");
// 第三方模块
const express = require("express");
const multer = require("multer");
// 最后导入自己写的模块，这是一些规范，但是这里并没有导入自己写的模块

// 用express框架
const app = express();

// 1. 解析json
app.use(express.json());
// 2. 解析urlencoded
app.use(express.urlencoded({ extended: true }));

// 这只是为了上传文件的时候给他命名 以及 规定路径
const storage = multer.diskStorage({
  // 搞路径
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  // 搞名字
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// 3. 解析form-data
const upload = multer({
  //   dest: "./upoloads/", // 这种方式只能设置路径，所以就用storage设置一下路径和名字
  storage,
});

// 这个是登录接口，body只能收到非文件的text
// 这里面第二个参数就是一个回调函数，也就是个中间件，这样是为了不把any()搞成个全局的，只有这个post这个中间件使用，估计里面是有next跳到下一个然后最后end
// 而上面的json和urlencoded就直接全局就可以了，因为这并不会起冲突
app.post("/login", upload.any(), (req, res, next) => {
  console.log(req.body); // 直接这样搞是undefined 没有解析
  // 然后你要是自己解析又有点麻烦 官方提供了一个库解析这种格式
  res.end("用户登录成功");
});

// 这个就是专门的文件上传接口 好像不能接收到表单其他的数据 可能是因为file对应key了，所以收不到别的
// 这个 upload也没有搞成全局，估计也是全局容易出事，容易和别的起冲突
app.post("/upload", upload.array("file"), (req, res, next) => {
  console.log(req.files);

  res.end("文件上传成功~");
});

app.listen(1123, () => {
  console.log("form-data解析服务器启动成功~");
});
