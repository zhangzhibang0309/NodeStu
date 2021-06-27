const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const { vueRepo } = require('../config/repo-config')


const createProjectionAction = async (project) => {
  // 1.clone项目
  await download(vueRepo);

  // 2.执行 npm install
  // 3.运行npm run serve
  // 4.打开浏览器
};

module.export = {
  createProjectionAction,
};
