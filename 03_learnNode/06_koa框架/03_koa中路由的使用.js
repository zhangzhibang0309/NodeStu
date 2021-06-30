const Koa = require("koa");

const userRouter = require("./router/user.js");

const app = new Koa();

// ctx上下文
app.use((ctx, next) => {
  // ctx.respond.body = "hello world";
  next();
});

app.use(userRouter.routes());
// 注册下面这个中间件 当客户端发起后端没有实现的请求时，不会not found 而是会返回一些信息
app.use(userRouter.allowedMethods());

app.listen(1123, () => {
  console.log("koa初体验服务器启动成功");
});
