// store high scores in local storage

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var highScoresList = document.getElementById("highScoresList");
var highScoresList = document.getElementById("highScoresList");
var clearButton = document.getElementById("clear");
var mostRecentScore = localStorage.getItem("mostRecentScore");

