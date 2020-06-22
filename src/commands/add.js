const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const todoApi = require('../api/todoAPI')


class AddCommand extends Command {

  async run() {
    const { args, flags } = this.parse(AddCommand)

    try {
      //if command = "add" && argument = <name>, log message && make API call to add todo to file 
      this.log(`${chalk.green('[Success]')} Added new todo: ${args.addtodo}`)

      let priority = flags.priority

      // if (priority != 'low' || priority != 'normal' || priority != 'important' || priority != 'urgent') {
      //   console.log('invalid priority, setting to default (low)')
      //   priority = 'low'
      // }

      const name = args.addtodo
      //"api" call
      if (priority && name) {
        const data = { nam: `${name}`, prior: `${priority}` }
        todoApi.putData(data)
      }
    } catch (err) {
      console.error(err)
    }
  }
}

//list arguments here
AddCommand.args = [{
  name: 'addtodo',
  description: 'add todo to list',
  required: true,
}]

//flags
AddCommand.flags = {
  priority: flags.string({ char: 'p', description: 'Todo priority level - (urgent, important, normal, low)', required: true })
}

//export AddCommand
module.exports = AddCommand
