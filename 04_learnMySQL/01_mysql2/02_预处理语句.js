const mysql = require("mysql2");

// 1. 创建数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "catalinahub",
  user: "root",
  password: "123",
});

// 2. 执行sql语句
const statement = `
    SELECT * FROM products WHERE price > ? AND score > ?;
`;

// 使用预处理，statement里面只放一个sql模板，然后建立连接的时候再填上具体数据 
connection.execute(statement, [6000, 7], (err, results, fields) => {
  console.log(results);
  // 关闭 两种都可
  // connection.end();
  connection.destroy();
});
