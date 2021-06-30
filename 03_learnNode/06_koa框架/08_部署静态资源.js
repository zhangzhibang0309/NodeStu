const Koa = require("koa");
const staticAssets = require("koa-static");

const app = new Koa();

app.use(staticAssets("./dist"));

app.listen(1123, () => {
  console.log("koa初体验服务器启动成功");
});
