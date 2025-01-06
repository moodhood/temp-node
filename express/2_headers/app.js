// header is providing meta data (data that provides data about data)
// with response.writeHead()
// response.writeHead(statusCode[, statusMessage][, headers]);

// the statusCode is the code wheather or not it went well
// status message is just a message about the satus 
//  res.writeHead(200, {'content-type':'text/html'}) -> here we are telling the browser that it went well (code 200) and that the text content is in html

//it is very important, you are sending something back, it is your task to specify what that is, css html, image etc