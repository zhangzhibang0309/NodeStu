console.log(process.argv);

console.log("----")


function foo() {
    bar()
}

function bar() {
    console.trace()
}

foo() // 这个trace可以打印函数的调用栈