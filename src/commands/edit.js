const { Command, flags } = require('@oclif/command')
const todoApi = require('../api/todoAPI')


class EditCommand extends Command {
  async run() {

    const { flags, args } = this.parse(EditCommand)

    if (flags.index) {

      const editIndex = flags.index

      const data = await todoApi.getData()
      console.log(data.todos[editIndex])

      if (args.type === 'todo') {

        console.log('here')

      } else if (args.type === 'priority') {

      }
    }

  }
}

EditCommand.description = `NOT YET WORKING`

EditCommand.flags = {
  index: flags.integer({ char: 'i', description: 'index of todo', required: true }),

}

EditCommand.args = [{
  name: 'type',
  description: 'type you want to edit',
  required: true,
  options: ['priority', 'todo']
}]

module.exports = EditCommand
