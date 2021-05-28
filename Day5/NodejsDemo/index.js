var http = require('http')

var myUpper = require('upper-case')

http.createServer((req,res)=>{
   if(req.url == '/'){
    res.end(myUpper.upperCase('mike'))
   }
    

}).listen(3000)