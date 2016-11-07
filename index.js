var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    
    console.log(req.query);

    var a = +req.query.a || 0;
    var b = +req.query.b || 0;
    var summ = a+b;
    res.send('a+b = ' + summ);

}).listen(3000, () => {
    console.log('app started');
});