// Modules, splitting code into parts, encapsulated code
//CommonJS, every file is a module by default

const {john, peter} = require('./names') // retrieving the data from the names file which is in the export object 
const sayHi = require('./utils')
require('./mind_grenade')

sayHi('susan')
sayHi(john)
sayHi(peter)

