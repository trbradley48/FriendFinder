var express = require("express");
var path = require("path");
var friendsList = require("../data/friends");


module.exports = function (app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });
  
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var friendScore = 0;
    var bestFriendScore = 50;
    var bestFriendIndex = 0;
    var diff = 0;
    
    friendsList.push(newFriend);
    // res.json(newFriend);
    // console.log(friendsList);

    for (var i = 0; i < friendsList.length - 1; i++) {
      for (var j = 0; j < friendsList[i].scores.length; j++) {
        diff = Math.abs(friendsList[i].scores[j] - newFriend.scores[j]);
        friendScore += diff;
      }
      if (friendScore < bestFriendScore) {
        bestFriendScore = friendScore;
        bestFriendIndex = i;
      }
      friendScore = 0;
    }

    console.log("Best friend: " + friendsList[bestFriendIndex].name);
    res.json(friendsList[bestFriendIndex])

    // res.sendFile(path.join(__dirname, "survey.html"));
  });

  
}






