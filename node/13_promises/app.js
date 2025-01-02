const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(readFile)

//const { promises: fs } = require('fs');

const start = async () => {
    try {
      const first = await readFile('./content/text.txt', 'utf8')
      await writeFile(
        './content/result-mind-grenade.txt',
        `THIS IS AWESOME : ${first}`,
        { flag: 'a' }
      )
      console.log(first)
    } catch (error) {
      console.log(error)
    }
  }
start();


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }
// getText('./content/text.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
