const { Command, flags } = require("@oclif/command");
const chalk = require("chalk");
const todoApi = require("../api/todoAPI");

class AddCommand extends Command {
  async run() {
    const { args, flags } = this.parse(AddCommand);

    try {
      let priority = flags.priority;
      const complete = flags.complete;
      const name = args.addtodo;
      //"api" call
      if (priority && name) {
        if (complete === true) {
          const data = { nam: `${name}` };
          todoApi.putCompleteData(data);
          this.log(
            `${chalk.green("[Success]")} Added new complete todo: ${name}`
          );
        } else {
          const data = { nam: `${name}`, prior: `${priority}` };
          todoApi.putData(data);
          this.log(
            `${chalk.green("[Success]")} Added new todo: ${args.addtodo}`
          );
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
}

AddCommand.description = "Add a todo to the todo list";

//list arguments here
AddCommand.args = [
  {
    name: "addtodo",
    description: "add todo to list",
    required: true,
  },
];

//flags
AddCommand.flags = {
  priority: flags.string({
    char: "p",
    description: "Todo priority level - (urgent, important, normal, low)",
    required: true,
    options: ["low", "normal", "important", "urgent"],
  }),
  complete: flags.boolean({
    char: "c",
    description: "mark as compelete and add to complete list",
    required: false,
  }),
};

//export AddCommand
module.exports = AddCommand;
