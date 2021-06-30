const Koa = require("koa");

const app = new Koa();

// ctx上下文
app.use((ctx, next) => {
  console.log("中间件被执行");
  ctx.response.body = "hello koa"
});

app.listen(1123, () => {
  console.log("koa初体验服务器启动成功");
});
