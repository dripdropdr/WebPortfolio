var express = require('express');
var mysql = require('mysql');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express( );


app.get('/',function(req, res){
  res.sendFile(__dirname+'/index.html');
})

// ______________work page

app.get('/work', function(req, res){
  res.sendFile(__dirname+'/작업중.html');
})
app.get('/work/issay', function(req, res){
  res.sendFile(__dirname+'/work-issay.html');
})
app.get('/work/gentle', function(req, res){
  res.sendFile(__dirname+'/work-gentle.html');
})
app.get('/work/cp', function(req, res){
  res.sendFile(__dirname+'/work-cp.html');
})
// ______________contact page

app.post('/', function(req,res){
  var body = req.body;

  //
  // res.redirect('/')
})




app.use(express.static(__dirname));

var server = app.listen(8088, function(){
  // var host = app.address().address
  // var port = app.address().port
  console.log("Example app listening at http://127.0.0.1");
})
