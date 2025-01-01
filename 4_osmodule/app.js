// Build in module called os (operating system)

const os = require('os')

// info about user
const user = os.userInfo()
console.log(user)

//up time of system
console.log(`Uptime is: ${os.uptime()}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS)