var path = require('path');
var express = require('express');
var app = express();

app.get('/', (request, response) => response.sendfile(path.join(__dirname, './index.html')));
app.use(express.static(path.join(__dirname, '.')));
app.listen(3000);