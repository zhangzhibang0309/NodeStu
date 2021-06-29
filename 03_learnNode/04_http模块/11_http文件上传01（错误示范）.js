const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/upload") {
    if (req.method === "POST") {
      const fileWriter = fs.createWriteStream("./foo.png", { flags: "a+" });
      //   req.pipe(fileWriter);  

      // 这种写法和上面一样，获取的字节流根本不全是图片的，还有一堆别的信息，所以会导致图片根本打不开
      req.on("data", (data) => {
        console.log(data);
        fileWriter.write(data);
      });

      req.on("end", () => {
        console.log("文件上传成功~");
        res.end("success");
      });
    }
  }
});

server.listen(1123, () => {
  console.log("文件上传服务器开启成功~");
});
