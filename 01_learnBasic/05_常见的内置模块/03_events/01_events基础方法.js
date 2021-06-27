const EventEmitter = require("events");

// 1. 创建发射器
const emitter = new EventEmitter();

// 2. 监听某一个事件
// on alias addListen 这俩互为另种写法
const listen1 = (args) => {
  console.log("监听1到click事件", args);
};
emitter.on("click", listen1);

const listen2 = (args, args2) => {
  console.log("监听2到click事件", args, args2);
};
emitter.on("click", listen2);

setTimeout(() => {
  // emit提交事件，提交了事件之后才能回调那个函数
  emitter.emit("click", "zzb", "kobe");
  // 取消listen2事件
  emitter.off("click", listen2);
  emitter.emit("click", "zzb", "kobe");
}, 2000);
