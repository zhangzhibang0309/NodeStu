const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const multer = require("koa-multer");

const app = new Koa();

const upload = multer();

// 装两个库 并且注册中间件
// npm install koa-bodyparser 解析json和urlencoded
app.use(bodyParser());
// npm install koa-multer 解析form-data的数据（非文件）
// 当然这个还是最好不要全局 但是你不能直接搞成局部，因为koa不支持连续注册中间件，只能在路由的时候搞成局部
app.use(upload.any());

app.use((ctx, nex) => {
  // 然后这里request里面的body可以返回出来json和urlencode格式
  console.log(ctx.request.body);
  // 但是上面那个时返回不到form-data格式的
  // koa里面用ctx.req里面的body来接收到form-data的数据
  console.log(ctx.req.body);
  ctx.response.body = "hello world";
});

app.listen(1123, () => {
  console.log("参数处理服务器启动成功");
});
