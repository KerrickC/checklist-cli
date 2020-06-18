const { Command, flags } = require('@oclif/command')
const chalk = require('chalk')
const fs = require('fs')
const todoApi = require('../api/todoAPI')


class AddCommand extends Command {


  async run() {
    const { args } = this.parse(AddCommand)

    try {
      //if command = "add" && argument = <name>, log message && make API call to add todo to file 
      this.log(`${chalk.green('[Success]')} Added new todo: ${args.addtodo}`)
      //format to JSON
      const data = { name: args.addtodo }
      //"api" call
      todoApi.putData(data)
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

//export AddCommand
module.exports = AddCommand
