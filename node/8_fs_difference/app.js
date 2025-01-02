// The difference between async and sync is that with async more than one tasks can be handled at the same time
// with sync it can't
// with readfilesync you need to wait until the program has read the file and only after you can do other stuff
// This can be problematic with user using an your application, if one is using it others can't until that user is done

const { readFileSync } = require('fs');

console.log('Start reading the file...');
const data = readFileSync('./content/text.txt', 'utf8'); // Program waits here until the file is read
console.log('File content:', data); // Runs only after the file is fully read
console.log('Done!');


console.log("start")
const{readFile, writeFile} = require('fs')
readFile('./content/text.txt', 'utf8', (err, result) =>{ //if it is async (readfile instead of readfilesync) you need a callback for the potential error.
    if(err){
        console.log(err)
        return
    }
    const first = result
    writeFile(
        './content/result-async.txt',
        `Here is the result: ${first}`,
        (err) => {
            if(err) {
                console.log(err)
                return
            }
            console.log('Done with this task!')
        }
    )
})
console.log("starting a new task!") 

// As you can see the console.log("starting a new task!") will run before the previous task was finished 