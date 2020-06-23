const { Command, flags } = require("@oclif/command");
const todoApi = require("../api/todoAPI");
const chalk = require("chalk");

class EditCommand extends Command {
  async run() {
    const { flags, args } = this.parse(EditCommand);

    if (flags.index) {
      const editIndex = flags.index;

      const data = await todoApi.getData();
      //console.log(data.todos[editIndex])

      if (flags.todo || flags.priority) {
        if (flags.todo) {
          const newTodo = flags.todo;

          data.todos[editIndex - 1].title = newTodo;

          //console.log(data)

          let dataObj = {
            todos: [],
          };

          data.todos.map((n, j) => {
            //console.log(data.todos[j])
            dataObj.todos.push(data.todos[j]);
          });

          todoApi.derelete(JSON.stringify(dataObj));

          this.log(`${chalk.green("[Success]")}`);
        } else if (flags.priority) {
          const newPrior = flags.priority;

          data.todos[editIndex - 1].priority = newPrior;

          let dataObj = {
            todos: [],
          };

          data.todos.map((n, j) => {
            //console.log(data.todos[j])
            dataObj.todos.push(data.todos[j]);
          });

          todoApi.derelete(JSON.stringify(dataObj));

          this.log(`${chalk.green("[Success]")}`);
        }
      }
    }
  }
}

EditCommand.description = `Edit a todo in your todo list`;

EditCommand.flags = {
  index: flags.integer({
    char: "i",
    description: "index of todo",
    required: true,
  }),
  todo: flags.string({
    string: "td",
    description: "edit todo property",
    required: false,
  }),
  priority: flags.string({
    string: "pr",
    description: "edit priority property",
    required: false,
    options: ["low", "normal", "important", "urgent"],
  }),
};

EditCommand.args = [];

module.exports = EditCommand;
