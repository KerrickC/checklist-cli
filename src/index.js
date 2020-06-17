const fse = require('fs-extra');
const os = require('os')

const user = os.userInfo().username
const data = 'data'

const dir = `/home/${user}/checklist-cli/src/${data}`

fse.mkdirp(dir, (err) => {
    console.log('Success')
})

const fileName = 'tododata.js'
fse.appendFile(`/home/${user}/checklist-cli/src/${data}/${fileName}`, '', (err) => {
    if (err) throw err;
    console.log('File created successfully')
})

module.exports = require('@oclif/command')
