const fse = require("fs-extra");
const os = require("os");

//routes for api calls
const user = os.userInfo().username;
const fileName = "tododata.json";
const { username, homedir } = os.userInfo();
const dir = `${homedir}/checklist-cli/src/data/tododata.json`;

const putData = (data) => {
  fse.readFile(dir, (err, data_R) => {
    if (err) {
      console.log(err);
    } else {
      let dataRecieved = JSON.parse(data_R); //convets to usable object
      dataRecieved.todos.push({
        title: `${data.nam}`,
        priority: `${data.prior}`,
      });
      let json = JSON.stringify(dataRecieved);
      fse.writeFile(dir, json, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
};

const getData = async () => {
  const data_R = await fse.readFile(dir);
  try {
    let dataRecieved = JSON.parse(data_R);
    return dataRecieved;
  } catch (err) {
    console.log(err);
  }
};

const derelete = async (data) => {
  //delete file
  try {
    await fse.unlink(dir);
    await fse.writeFile(dir, data, (err) => {
      if (err) console.error(err);
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { putData, getData, derelete };
