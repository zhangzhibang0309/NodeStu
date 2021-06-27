const name = "catalina";
const age = 18;
const sayHello = function (name) {
  console.log("你好啊" + name);
};

// 导出方式三种

//方式1
// export const name = "catalina";
// export const age = 18;
// export const sayHello = function (name) {
//   console.log("你好啊" + name);
// };

//方式2
// {}不是对象
export { name, age, sayHello };

//方式3
// 导出时，可以给变量起别名
// export {
//     name as fName,
//     age as fAge,
//     sayHello as fSayHello
// }


// default format
// function format() {
//   console.log("对某一个东西进行格式化");
// }
// export default format;
