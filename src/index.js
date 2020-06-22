module.exports = require('@oclif/command')

const fse = require('fs-extra')
const os = require('os')

const { username, homedir } = os.userInfo()
const dir = `${homedir}/checklist-cli/src/data`

var dataObj = {
    todos: []
};

dataObj.todos.push({ title: "Sample todo" })

var json = JSON.stringify(dataObj)

fse.mkdirp(dir, (err) => {
    //console.log('Success')
    if (err) { console.error(err) }
    const fileName = 'tododata.json'
    //rewrites each time
    fse.writeFile(`${dir}/${fileName}`, json, (err) => {
        if (err) console.error(err)
        console.log('File created successfully')
    })
})

