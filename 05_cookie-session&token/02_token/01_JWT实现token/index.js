const Koa = require("koa");
const Router = require("koa-router");
const jwt = require("jsonwebtoken");

const app = new Koa();
const testRouter = new Router();

const SERCET_KEY = "asddas123321";

// 登录接口
testRouter.get("/test", (ctx, next) => {
  // 登录成功下
  const user = { id: 110, name: "zzb" };
  const token = jwt.sign(user, SERCET_KEY, {
    expiresIn: 100, // 过期时间
  });

  ctx.body = token;
});

// 验证接口
testRouter.get("/demo", (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");
  console.log(token)
  try {
    const result = jwt.verify(token, SERCET_KEY);
    ctx.body = result;
  } catch (error) {
    ctx.body = "token是无效的"
  }
});

app.use(testRouter.routes());
app.use(testRouter.allowedMethods);

app.listen(1123, () => {
  console.log("服务器启动成功");
});
