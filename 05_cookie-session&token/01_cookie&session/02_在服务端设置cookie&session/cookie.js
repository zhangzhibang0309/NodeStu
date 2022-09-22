const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();

const cookieRouter = new Router();

cookieRouter.get("/cookie", (ctx, next) => {
  ctx.cookies.set("name", "lilei", {
    maxAge: 5 * 1000,
  });

  ctx.body = "cookie";
});

cookieRouter.get("/demo", (ctx, next) => {
  const value = ctx.cookies.get("name");
  ctx.body = `你的cookie是name=${value}`;
});

app.use(cookieRouter.routes());
app.use(cookieRouter.allowedMethods);

app.listen(8080, () => {
  console.log("服务器启动成功");
});
