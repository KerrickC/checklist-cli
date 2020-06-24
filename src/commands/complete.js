const { Command, flags } = require("@oclif/command");
const todoApi = require("../api/todoAPI");
const Spinner = require("cli-spinner").Spinner;
const chalk = require("chalk");

class CompleteCommand extends Command {
  async run() {
    const { flags } = this.parse(CompleteCommand);

    try {
      let index = flags.index;
      let title = flags.title;
      if (index) {
        const todosdata = await todoApi.getData();
        const splicableData = todosdata.todos;

        var spinner = new Spinner("completing task.. %s");
        spinner.setSpinnerString(4);
        spinner.start();
        setTimeout(async () => {
          await splicableData.splice(index - 1, 1);
          var dataObj = {
            todos: [],
          };

          splicableData.map((n, i) => {
            dataObj.todos.push(splicableData[i]);
          });

          await todoApi.derelete(JSON.stringify(dataObj));

          //console.log(splicableData)

          console.log("\n");
          console.log("task complete! \n");
          spinner.stop();
        }, 2000);
      } else if (title) {
        const todosdata = await todoApi.getData();
        const splicableData = todosdata.todos;
        const completedData = todosdata.completetodos;
        console.log(splicableData);
        console.log(completedData);
        var spinner = new Spinner("completing task.. %s");
        spinner.setSpinnerString(4);
        spinner.start();
        setTimeout(() => {
          splicableData.find((n, i) => {
            let complete = { title: `${splicableData[i].title}` };

            completedData.push(complete);

            if (splicableData[i].title === title) {
              var dataObj = {
                todos: [],
                completetodos: completedData,
              };

              splicableData.splice(i, 1);

              splicableData.map((n, j) => {
                dataObj.todos.push(splicableData[j]);
              });

              console.log(dataObj);

              todoApi.derelete(JSON.stringify(dataObj));

              //console.log(splicableData)
              let taskcomplete = `${chalk.green(`complete!`)}`;
              console.log("\n task complete! \n");
              spinner.stop();
            } else {
              console.log("\ntodo not found!\n");
              spinner.stop();
            }
          });
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  }
}

CompleteCommand.description = `Removes todo from todo list`;

CompleteCommand.flags = {
  title: flags.string({ char: "t", description: "title of todo" }),
  index: flags.integer({ char: "i", description: "index of todo" }),
};

module.exports = CompleteCommand;
