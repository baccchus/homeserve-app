var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//app.get('/', (request, response) => response.sendFile(__dirname +'index.html'));
app.use(express.static(__dirname));
app.listen(port);