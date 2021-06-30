const Koa = require("koa");
const Router = require("koa-router");
// 文件上传核心库
const multer = require("koa-multer");

const app = new Koa();

const uploadRouter = new Router({ prefix: "/upload" });

// 设置上传文件夹
const upload = multer({
    dest: './upload'
})

uploadRouter.post("/avatar", upload.single("avatar"), (ctx, next) => {
// 获取文件信息 multer库的信息获取都在req中
  console.log(ctx.req.file);
  ctx.response.body = "上传头像成功";
});

app.use(uploadRouter.routes());

app.listen(1123, () => {
  console.log("文件上传服务器启动成功");
});