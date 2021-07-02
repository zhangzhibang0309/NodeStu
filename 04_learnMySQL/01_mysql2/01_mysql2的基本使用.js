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
    SELECT * FROM products;
`;

connection.query(statement, (err, results, fields) => {
  console.log(results);
  // 关闭 两种都可
  // connection.end();
  connection.destroy();
});
