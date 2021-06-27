const path = require("path");

// 1.获取路径的信息
// const filePath = "/User/why/abc.txt";

// console.log(path.basename(filePath));
// console.log(path.extname(filePath));

// 2.join路径的拼接
// join只是傻瓜式拼接
// const basepath = "User/why";
// const filename = "abc.txt";

// const filepath1 = path.join(basepath, filename);
// console.log(filepath1);


// 3.resolve路径的拼接
// 这个跟join有所不同，他会根据你的路径前面是否有/ ./ ../ 来给你在前面加上一下东西
// const basepath = "../User/why";
// const filename = "abc.txt";

// const filepath2 = path.resolve(basepath, filename);
// console.log(filepath2);
// ../是上一级目录 输出结果是
// C:\Users\Lenovo\Desktop\NodeStu\05_常见的内置模块\User\why\abc.txt


