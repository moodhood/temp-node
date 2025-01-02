// npm node package managerk

//npm i <packagename> to install a package (local dependency, only this particular project)
//npm install -g <packagename> to install package (global dependency, usable in any project)

// package.json is a manifest file that stores important info about the project/package
// how to create 
// manual approach creating package.json in root create properties 
// nmp init step by step 
// nmp init -y everything default

// npm will create a folder for all the dependencies called node_modules after importing a package
// the package.json file is very important because the dependencies property

// npm i nodemon -D or --save-dev it will save it as a devdependency 
// devdependencies are used for testing and creating stuff, but it is not used for the actual thing

// npm start or npm run dev will start the application (look at package.json ad scripts)


const _ = require('lodash')

const items = [1, [2, [3, [4, [5]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

