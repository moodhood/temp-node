//local
const secret = "SUPER SECRET"

//shareable
const john = "john"
const peter = "peter"

console.log(module)

// exports: {} is an object in the module that will allow for sharing of information across files
module.exports = {john, peter} // now we added the falues WE wanted to share and it can be accessed in other files