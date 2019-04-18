var express = require('express');
var app = express();
app.set('port', 5007);
app.use(express.static(__dirname + '/app'));
app.listen(5007);
