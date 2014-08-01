var express           = require('express');
var app               = express();
var bodyParser        = require('body-parser');
var mongoose          = require('mongoose');
var hotelsController  = require('./server/controllers/hotels-controller');

mongoose.connect('mongodb://test:test@kahana.mongohq.com:10028/nodetest1');

app.use(bodyParser());

app.get('/', function(req,res) {
  res.sendfile(__dirname + '/client/views/index.html');
});


// server routes
app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/hotels', hotelsController.create);

app.listen(3000, function() {
  console.log('I\'m listening....');
});
