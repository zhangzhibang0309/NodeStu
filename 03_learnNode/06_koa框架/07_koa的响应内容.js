const Koa = require("koa");

const app = new Koa();

app.use((ctx, next) => {
  // 设置内容
  // ctx.response.body = "hello world"

  // ctx.response.body = {
  //   name: "xxx",
  //   age: 11,
  // };

  // 设置状态码
  // ctx.response.status = 404
  // ctx.response.body = "hello world"

  // koa中 response里面的一些属性做了一些代理
  // 做过代理的 可以直接ctx.出来
  ctx.status = 200
  ctx .body = "hello world"

});

app.listen(1123, () => {
  console.log("koa初体验服务器启动成功");
});
