var express= require('express'); //1
var app= express();//2
var path = require('path'); //6
var port = 5000; //3
//var bodyParser = require('body-parser');//20
//app.use(bodyParser.urlencoded({extended: true})); //21// submitted after client.js

//var product = require('./routes/product.js');

//app.use('/product', product);

// var products = [];
//
// app.post('/product', function(req, res){
//   var product = req.body;
//   products.push(product);
//   console.log(product);
//   res.send({
//     message: 'succesfully added our product!',
//     product : product
//   });
// });
//
// app.get('/product', function(req, res){
//   res.send(products);
// });

app.get('/*', function(req, res){ //7
  var file = req.params[0] || 'views/index.html'; //8
  res.sendFile(path.join(__dirname, 'public', file)); //9
});

app.listen(port, function(){ //4
  console.log('server runing on port ', port );//5
});

//.gitignore # Mac OS .DS_Store
//package.json start node server/server.js
