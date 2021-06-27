#!/usr/bin/env node

const program = require("commander");
const helpOptions = require("./lib/core/help");
const createCommands = require("./lib/core/create");

// --version
program.version(require("./package.json").version);
// 这个也是可以改的 简写命令
// program.version(require('./package.json').version,'-v --version')

// 帮助和可选信息
helpOptions();
// create命令
// createCommands();

// 让那些东西生效
program.parse(process.argv);

// 这个按理说能够获取到上面的dest变量，但是现在一直undefined我不知道为什么
console.log(program.dest);
