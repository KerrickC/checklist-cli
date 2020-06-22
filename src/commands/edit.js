const {Command, flags} = require('@oclif/command')

class EditCommand extends Command {
  async run() {
    const {flags} = this.parse(EditCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/kcavanaugh/checklist-cli/src/commands/edit.js`)
  }
}

EditCommand.description = `Describe the command here
...
Extra documentation goes here
`

EditCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = EditCommand
