const Koa = require("koa");
const Router = require("koa-router");
const Session = require("koa-session");

const app = new Koa();

const sessionRouter = new Router();

//创建session配置
const session = Session(
  {
    key: "sessionid",
    maxAge: 10 * 1000,
    signed: false,// 是否开启签名 默认true
  },
  app
);

app.use(session);

// 登录接口
sessionRouter.get("/session", (ctx, next) => {
  // name/password -> id/name

  const id = 110;
  const name = "catalina";

  // 其实就是一个加密的cookie
  ctx.session.user = { id, name };

  ctx.body = "session";
});

sessionRouter.get("/demo", (ctx, next) => {
  // 这是解码后的
  ctx.body = ctx.session.user;
});

app.use(sessionRouter.routes());
app.use(sessionRouter.allowedMethods);

app.listen(8080, () => {
  console.log("服务器启动成功");
});
