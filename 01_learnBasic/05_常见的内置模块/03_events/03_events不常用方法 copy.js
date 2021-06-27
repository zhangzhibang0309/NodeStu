const EventEmitter = require("events");

// 1. 创建发射器
const emitter = new EventEmitter();

// 2. 监听某一个事件
// on alias addListen 这俩互为另种写法
// 第一次监听
const listen1 = (args) => {
  console.log("监听1到click事件", args);
};
// once只监听一次
emitter.once("click", listen1);

// 第二次监听
const listen2 = (args, args2) => {
  console.log("监听2到click事件", args, args2);
};
emitter.on("click", listen2);

// 第三次监听
const listen3 = (args, args2) => {
  console.log("监听3到click事件", args, args2);
};
// 这个prependListener是把这个监听放到最前面
emitter.prependListener("click", listen3);


setTimeout(() => {
  // 溢出所有监听器
  // 参数可选，没有的话就取消全部监听器。
  emitter.removeAllListeners("click");

  // emit提交事件，提交了事件之后才能回调那个函数
  emitter.emit("click", "zzb", "kobe");
  // 取消listen2事件
  emitter.off("click", listen2);
  emitter.emit("click", "zzb", "kobe");
}, 2000);
