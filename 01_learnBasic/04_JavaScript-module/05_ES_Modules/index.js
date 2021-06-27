// 常见的导入方式三种
// {}不是对象
// 没有webpack这种打包工具的化，后面的js文件必须加上，用脚手架之类的工具经过打包之后就不需要加了。
// import { name, age, sayHello } from "./modules/foo.js";

// 方式2
// 导入变量可以起别名
// import {
//   name as wName,
//   age as wAge,
//   sayHello as wSayHello,
// } from "./modules/foo.js";

// 方式3
// import * as foo from './modules/foo.js'

// console.log(foo.name)
// console.log(foo.age)
// foo.sayHello(foo.name)

// 演练：export和import的结合使用
// import { name, age, sayHello } from "./modules/bar.js";

// console.log(name);
// console.log(age);
// sayHello(name);

// 导入default export导出的
// import xxFormat from "./modules/foo.js";

// xxFormat();

// 这个代码是错的，会产生依赖问题。
// let flag = true;
// if (true) {
//   import * as foo from "./modules/foo.js";
// }

// 如果像把导入写在代码里面，用import（）函数
import("./modules/foo.js")
  .then((res) => {
    console.log(res.name);
    console.log(res.age);
    res.sayHello(res.name);
  })
  .catch((err) => {});
