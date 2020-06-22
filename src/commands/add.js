const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const todoApi = require('../api/todoAPI')


class AddCommand extends Command {

  async run() {
    const { args, flags } = this.parse(AddCommand)

    try {

      let priority = flags.priority


      const name = args.addtodo
      //"api" call
      if (priority && name) {
        const data = { nam: `${name}`, prior: `${priority}` }
        todoApi.putData(data)
        this.log(`${chalk.green('[Success]')} Added new todo: ${args.addtodo}`)
      }
    } catch (err) {
      console.error(err)
    }
  }
}

AddCommand.description = 'Add a todo to the todo list'

//list arguments here
AddCommand.args = [{
  name: 'addtodo',
  description: 'add todo to list',
  required: true,
}]

//flags
AddCommand.flags = {
  priority: flags.string({
    char: 'p', description: 'Todo priority level - (urgent, important, normal, low)', required: true,
    options: [
      'low', 'normal', 'important', 'urgent'
    ]
  })
}

//export AddCommand
module.exports = AddCommand
