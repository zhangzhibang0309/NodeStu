const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("catalinahub", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("连接数据库失败", err);
  });
