// const  buff = Buffer.from("hello nodejs")
const buff =  Buffer.from('A','ascii')
// console.log(buff.toString()); // A
// console.log(buff.toString('utf8')); 里面可以放编码

const buff2 = Buffer.alloc(20,10)
// console.log(buff2);

const buff3 = Buffer.alloc(20)
buff3.write('Hello,')
// console.log(buff3.toString());

const buff4 = Buffer.alloc(20)
buff3.write('Nodejs')
buff3.concat()
