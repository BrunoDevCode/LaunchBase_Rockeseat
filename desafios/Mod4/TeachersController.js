const fs = require('fs');
const data = require('./teachers')

exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for ( key of keys) {
        if (req.body[key] == "") return res.send("Please fill in all fields")
    }

    let { name, birth, schooling, classType, services } = req.body

    birth = Date.parse(birth)
    const id = Number(data.teachers.length + 1)
    const created_at = Date.now()

    data.teachers.push({
        id,
        name,
        birth,
        schooling,
        classType,
        services,
        created_at
    })
    
    fs.writeFile("teachers.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('Error in write file')

        return res.redirect('/teachers')
    })
}