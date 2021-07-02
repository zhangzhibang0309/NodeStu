const mysql = require("mysql2");

// 1.创建连接池
const connections = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "catalinahub",
  user: "root",
  password: "123",
  // 最大创建连接数量
  connectionLimit: 10,
});

// 2.使用连接池
const statement = `
SELECT * FROM products WHERE price > ? AND score > ?;
`;

connections
  .promise()
  .execute(statement, [6000, 7])
  .then(([results,fields]) => {
    console.log(results);
  })
  .catch((err) => {});
