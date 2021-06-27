var moduleBar = require("./bar");
// 对象的解构
// var {name,age,sayHello} = require('./bar')

console.log(moduleBar.name);
console.log(moduleBar.age);
moduleBar.sayHello();
// setTimeout(() => {
//   console.log(moduleBar.name);
// }, 2000);
 