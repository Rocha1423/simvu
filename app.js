var express = require('express');
var app = express();
var path = require('path')
const __PORT__= 7000;
app.set('view engine', 'ejs');

app.listen(__PORT__, function () {
    console.log('App on port ' + __PORT__);
  });

  app.use(express.static(path.join(__dirname, 'src')));

  app.get('/', function (req, res) {
    res.render('dashboard', {});
  });
  

  app.get('/login', function (req, res) {
    res.render('login', {});
  });