const express = require("express")

const app = express()

const middleware1 = (req,res,next) => {
    req.message = 'aaa'
    next()
    res.end(req.message)  // 这样没问题
}

const middleware2 = (req,res,next) => {
    req.message += 'bbb'
    next()
}

const middleware3 = (req,res,next) => {
    req.message += 'ccc'
}

app.use(middleware1,middleware2,middleware3)

app.listen(1123, () => {
    console.log("express服务器启动成功")
})