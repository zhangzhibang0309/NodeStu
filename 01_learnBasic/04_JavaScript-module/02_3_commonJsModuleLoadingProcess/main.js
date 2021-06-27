require('./bar') // ，模块记载过程是同步的
require('./foo')
console.log('main中的代码被执行')

console.log(module)