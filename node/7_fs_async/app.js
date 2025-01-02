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
            console.log('Successfull!')
        }
    )
})


