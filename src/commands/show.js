const { Command, flags } = require("@oclif/command");
const todoApi = require("../api/todoAPI");
const Table = require("cli-table");
const chalk = require("chalk");
const Spinner = require("cli-spinner").Spinner;

class ShowCommand extends Command {
  async run() {
    const { args, flags } = this.parse(ShowCommand);
    try {
      if (args.list === "all") {
        const todosdata = await todoApi.getData();
        //console.log(todosdata)

        const table = new Table({
          head: [
            chalk.blueBright("index"),
            chalk.blueBright("todo"),
            chalk.greenBright("priority"),
          ],
        });

        // console.log(todosdata.todos[0].title)

        todosdata.todos.map((n, i) => {
          const todoName = todosdata.todos[i].title;
          const priority = todosdata.todos[i].priority;
          table.push([i + 1, todoName, priority]);
        });

        var spinner = new Spinner("processing.. %s");
        spinner.setSpinnerString(4);
        spinner.start();
        setTimeout(() => {
          console.log("");
          console.log(table.toString());
          spinner.stop();
        }, 2000);
      } else if (args.list === "completed") {
        const todosdata = await todoApi.getData();

        const table = new Table({
          head: [chalk.blueBright("index"), chalk.blueBright("completed todo")],
        });

        // console.log(todosdata.todos[0].title)

        todosdata.completetodos.map((n, i) => {
          const todoName = todosdata.completetodos[i].title;
          table.push([i + 1, todoName]);
        });

        var spinner = new Spinner("processing.. %s");
        spinner.setSpinnerString(4);
        spinner.start();
        setTimeout(() => {
          console.log("");
          console.log(table.toString());
          spinner.stop();
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

ShowCommand.description = `Displays the list of todos`;

ShowCommand.args = [
  {
    name: "list",
    description: "List of todos",
    required: true,
    option: ["all", "completed"],
  },
];

module.exports = ShowCommand;
