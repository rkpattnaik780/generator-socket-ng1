var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));


var server = app.listen(process.env.PORT || '8080',() => {
  console.log("App Listening for Connections..");
  console.log("Open localhost:8080 in your browser");
});

var io = require('socket.io')(server);

io.on("connection", function (socket) {
  console.log("Client connected with socket id : " + socket.id);
});