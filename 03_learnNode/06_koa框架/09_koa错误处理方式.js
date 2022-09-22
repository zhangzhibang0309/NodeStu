const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  const isLogin = false;
  if (!isLogin) {
    // 发送的错误 第一个参数 就是这个错误的名 也就是在app.on里监听的
    ctx.app.emit("error", new Error("您还没有登录"), ctx);
  }
});

// 这里的error对应上面发送的error
app.on("error", (err, ctx) => {
  ctx.status = 401;
  ctx.body = err.message;
});

app.listen(1123, () => {
  console.log("koa初体验服务器启动成功");
});
