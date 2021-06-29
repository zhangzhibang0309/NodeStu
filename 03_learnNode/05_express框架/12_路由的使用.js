const express = require("express");
const userRouter = require("./routers/users.js");

const app = express();

app.use("/users", userRouter);

app.listen(1123, () => {
    console.log("路由服务器启动成功")
})
