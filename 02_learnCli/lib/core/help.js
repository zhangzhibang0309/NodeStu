const { program } = require("commander");

const helpOptions = () => {
  // 增加自己的options
  program.option("-w --wwhy", "a why cli");
  program.option(
    "-d --dest <dest>",
    "a destination folder, -d /src/components"
  );
  // program.option("-f --framework <framework>", "your framework");

  // 监听--help
  // program.on("--help", () => {
  //   console.log(" ");
  //   console.log("Other:");
  //   console.log("  Other options~");
  // });
};

module.exports = helpOptions;
