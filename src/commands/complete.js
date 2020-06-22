const {Command, flags} = require('@oclif/command')

class CompleteCommand extends Command {
  async run() {
    const {flags} = this.parse(CompleteCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/kcavanaugh/checklist-cli/src/commands/complete.js`)
  }
}

CompleteCommand.description = `Describe the command here
...
Extra documentation goes here
`

CompleteCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = CompleteCommand
