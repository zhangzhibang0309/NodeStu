const Koa = require("koa");
const axios = require("axios");

const app = new Koa();

// koa可以用async await实现 非常简单合理 但是express不可以
const middleware1 = async (ctx, next) => {
  ctx.message = "aaa";
  // 这个地方next（）必须返回值是promise才能用这种写法 而express返回的不是promise
  await next();
  ctx.body = ctx.message;
};

const middleware2 = async (ctx, next) => {
  ctx.message += "bbb";
  await next();
};

const middleware3 = async (ctx, next) => {
  const result = await axios.get("http://123.207.32.32:9001/lyric?id=167876");
  ctx.message += result.data.lrc.lyric;
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);



app.listen(1123, () => {
  console.log("koa同步数据服务器启动成功");
});
