var name = "catalina";

var age = 18;

var message = "hello nodejs";

function sayHello(name) {
  console.log("hello" + name);
}

// setTimeout(() => {
//     exports.name = 'Janmes'
// },1000)

module.exports = {
    name: "abc",
    age: 123,
    sayHello() {
        console.log('我只输出hello')
    }
}


exports.name = name;
exports.age = age;
exports.sayHello = sayHello;

