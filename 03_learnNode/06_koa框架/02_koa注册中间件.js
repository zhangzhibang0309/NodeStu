const Koa = require("koa");

const app = new Koa();

// ctx上下文
app.use((ctx, next) => {
  if (ctx.request.url === "/login") {
    if (ctx.request.method === "GET") {
      ctx.response.body = "login success";
    }
  } else {
    ctx.response.body = "other request";
  }
});

// koa没有提供下面的注册方式
// methods: app.get()/.post()
// path: app.use('/home',(ctx,next) => {})
// 连续注册
// app.use(
//   (ctx, next) => {},
//   (ctx, next) => {}
// );

app.listen(1123, () => {
  console.log("koa初体验服务器启动成功");
});
