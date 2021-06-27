const EventEmitter = require("events");

// 发射器
const emitter = new EventEmitter();

// click1
const listenr1 = (args) => {
  console.log("监听1到click事件", args);
};
emitter.on("click", listenr1);

// click2
const listenr2 = (args, args2) => {
  console.log("监听2到click事件", args, args2);
};
emitter.on("click", listenr2);

// tap
const listenr3 = (args) => {
  console.log("监听到tap事件", args);
};
emitter.on("tap", listenr3);

// 获取注册的事件
console.log(emitter.eventNames());
console.log(emitter.listenerCount("click"));
console.log(emitter.listeners("click"));
