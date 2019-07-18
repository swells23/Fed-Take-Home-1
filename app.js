var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.set('Access-Control-Allow-Origin', '*'); //Attempt to resolve CORS issues
  res.render('index');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});