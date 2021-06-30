const Koa = require("koa");

const app = new Koa();
const Router = require("koa-router");

const userRouter = new Router({ prefix: "/users" });

userRouter.get("/:id", (ctx, next) => {
  console.log(ctx.request.params);
  console.log(ctx.request.query);

  ctx.response.body = "hello analysis"
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(1123, () => {
  console.log("参数处理服务器启动成功");
});
