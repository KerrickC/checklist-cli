const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')

class AddCommand extends Command {


  async run() {
    const { args } = this.parse(AddCommand)

    const addtodo = args.addtodo

    if (addtodo) {
      this.log(`${chalk.green('[Success]')} Added new todo: ${addtodo}`)
    } else {
      this.error(`${chalk.red('Missing name argument')}`)
    }
  }
}

AddCommand.args = [{
  name: 'addtodo',
  description: 'add todo to list',
  required: true,
}]


module.exports = AddCommand
