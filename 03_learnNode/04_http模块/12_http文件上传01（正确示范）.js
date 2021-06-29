const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  if (req.url === "/upload") {
    if (req.method === "POST") {
      let body = "";
      // 图片文件必须设置为二进制
      req.setEncoding('binary')
      // headers本身是个对象 里面的content-type值里面包括boundary
      let boundary = req.headers["content-type"]
        .split(";")[1]
        .replace(" boundary=", "");
      // console.log(boundary); // 到此位置 获取了boundary

      req.on("data", (data) => {
        body += data;
      });


      req.on("end", () => {
        //处理body
        //1.获取image/xxx的位置
        const payload = qs.parse(body, "\r\n", ": ");
        const type = payload["Content-Type"];

        //2.开始在image/xxx的位置进行截取
        const typeIndex = body.indexOf(type);
        const typeLength = type.length;
        let imageData = body.substring(typeIndex + typeLength);

        // 3. 将中间的两个空格去掉
        imageData = imageData.replace(/^\s\s*/, "");

        // 4. 将最后的boundary去掉
        imageData = imageData.substring(
          0,
          imageData.indexOf(`--${boundary}--`)
        );

        // 5. 把图片写出来
        fs.writeFile("./foo.png", imageData, "binary", (err) => {
          res.end("文件上传成功");
        });

        console.log("文件上传成功~");
      });
    }
  }
});

server.listen(1123, () => {
  console.log("文件上传服务器开启成功~");
});
