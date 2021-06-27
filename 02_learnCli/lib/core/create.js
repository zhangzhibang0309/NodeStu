const { program } = require("commander")

const createCommands = () => {
    program
    .command('create <project> [others...]')
    .description('clone repository into a folder')
    .action((project, other) => {
        console.log(project,other)
    })
}

module.exports = createCommands