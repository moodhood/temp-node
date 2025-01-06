const logger = (req, res, next) => { // with middleware you need to pass it on or terminate the cycle by responding
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    next() // passing it on    
}

module.exports = logger