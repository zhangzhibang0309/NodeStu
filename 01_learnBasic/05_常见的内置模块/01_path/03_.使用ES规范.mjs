import path from "path";

// 不同系统路径连接符不太一样/ // \等等，用这个path的方法连接会用os下对象的分割符
const basePath = "/User/why";
const filename = "abc.txt";

const filepath = path.resolve(basePath, filename);

console.log(filepath);
