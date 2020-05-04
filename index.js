//importing node framework
var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
    res.send('hello world,cicd on');
=======
    res.send('hello world,testing build ^^');
>>>>>>> f00057f6fb778a282bf5d376adc0a387806c0c8d
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;
