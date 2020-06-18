const fse = require('fs-extra')
const os = require('os')

//routes for api calls
const user = os.userInfo().username
const data = 'data'
const fileName = 'tododata.json'
const dir = `/home/${user}/checklist-cli/src/${data}/${fileName}`

const putData = (data) => {
    const { username, homedir } = os.userInfo()
    const dir = `${homedir}/checklist-cli/src/data`

    fse.mkdirp(dir, (err) => {
        //console.log('Success')
        if (err) { console.error(err) }
        const fileName = 'tododata.json'
        //rewrites each time
        fse.outputJSON(`${dir}/${fileName}`, data, (err) => {
            if (err) console.error(err)
            console.log('File created successfully')
        })

    })
}

module.exports = { putData }


