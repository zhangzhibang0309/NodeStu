import { name, age } from "./modules/foo.mjs";

console.log(name);
console.log(age);

// 如果你要是想在node端使用es module的话，必须将js文件改成mjs文件，否则是不能运行的，或者是在package.json文件里面修改一些配置，这里就先用mjs。
// 如果你的node版本太低的话，node还没有支持es module规范，那你运行es module的时候命令是 node xxxx --experimental-modules
