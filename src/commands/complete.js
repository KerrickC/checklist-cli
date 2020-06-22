const { Command, flags } = require('@oclif/command')
const todoApi = require('../api/todoAPI')
const Spinner = require('cli-spinner').Spinner



class CompleteCommand extends Command {

  async run() {
    const { flags } = this.parse(CompleteCommand)

    try {

      let index = flags.index
      let title = flags.title
      if (index) {

        const todosdata = await todoApi.getData()
        const splicableData = todosdata.todos


        var spinner = new Spinner('completing task.. %s')
        spinner.setSpinnerString(4)
        spinner.start()
        setTimeout(async () => {
          await splicableData.splice(index - 1, 1)
          var dataObj = {
            todos: []
          };

          splicableData.map((n, i) => {
            dataObj.todos.push(splicableData[i])
          })

          await todoApi.derelete(JSON.stringify(dataObj))

          //console.log(splicableData)

          console.log('\n')
          console.log('task complete! \n')
          spinner.stop()
        }, 2000)


      } else if (title) {



      }


    } catch (err) {
      console.log(err)
    }
  }
}

CompleteCommand.description = `Removes todo from todo list`

CompleteCommand.flags = {
  title: flags.string({ char: 't', description: 'title of todo' }),
  index: flags.integer({ char: 'i', description: 'index of todo' })
}

module.exports = CompleteCommand
