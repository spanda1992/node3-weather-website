const casual = require('casual')

const userdata = () =>{
    return {
        name : casual.name,
        address : casual.address
    }
}

module.exports = {
    userdata : userdata
}
