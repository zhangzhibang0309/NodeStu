const express = require("express");

const app = express();

const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS";
const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS";

app.post("/login", (req, res, next) => {
  // 假如在数据中查询用户名时，发现不存在
  const isLogin = false;
  if (isLogin) {
    res.json("user login success~");
  } else {
    next(new Error(USERNAME_DOES_NOT_EXISTS));
  }
});

app.post("/register", (req, res, next) => {
  // 假如在数据中查询用户名时，发现不存在
  const isExists = false;
  if (isExists) {
    res.json("user register success~");
  } else {
    next(new Error(USERNAME_ALREADY_EXISTS));
  }
});

app.use((err, req, res, next) => {
  let status = 400;
  let message = "";

  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = USERNAME_DOES_NOT_EXISTS;
      break;
    case USERNAME_ALREADY_EXISTS:
      message = err.message;
      break;
    default:
      message = "NOT DOUND";
  }

  res.status(status);
  res.json({
    errCode: status,
    errMessage: message,
  });
});

app.listen(1123, () => {
  console.log("静态资源服务器启动成功");
});
