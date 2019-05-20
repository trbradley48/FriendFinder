var express = require("express");
var path = require("path");
var friendsList = require("../data/friends");


module.exports = function (app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });
  
  // app.post("/api/friends", function(req, res) {
  //   res.sendFile(path.join(__dirname, "survey.html"));
  // });

  
}






