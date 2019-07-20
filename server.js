/*
 *  Write a server that will respond with the appropriate JSON blob
 *  for the given rendering
 */
var express = require("express");
var app = express();
var albums = require("./abstractions/albums.js");
var circles = require("./abstractions/circles.js");
var movies = require("./abstractions/movies.js");
var nameTags = require("./abstractions/nameTags.js");
var poker = require("./abstractions/poker.js");
var rectangle = require("./abstractions/rectangle.js");
var restaurants = require("./abstractions/restaurants.js");
var students = require("./abstractions/students.js");
var surveys = require("./abstractions/surveys.js");
var tweets = require("./abstractions/tweets.js");

app.use(express.static(__dirname + "/public"));

// GET /api/albums
app.get("/api/albums", (rec, res) => {
  res.json(albums);
});

// GET /api/circles
app.get("/api/circles", (rec, res) => {
  res.json(circles);
});

// GET /api/movies
app.get("/api/movies", (rec, res) => {
  res.json(movies);
});

// GET /api/nameTags
app.get("/api/nameTags", (rec, res) => {
  res.json(nameTags);
});

// GET /api/poker
app.get("/api/poker", (rec, res) => {
  res.json(poker);
});

// GET /api/rectangle
app.get("/api/rectangle", (rec, res) => {
  res.json(rectangle);
});

// GET /api/restaurants
app.get("/api/restaurants", (rec, res) => {
  res.json(restaurants);
});

// GET /api/students
app.get("/api/students", (rec, res) => {
  res.json(students);
});

// GET /api/surveys
app.get("/api/surveys", (rec, res) => {
  res.json(surveys);
});

// GET /api/tweets
app.get("/api/tweets", (rec, res) => {
  res.json(tweets);
});

app.listen(3000, function() {
  console.log("rendering-api is now listening on port 3000...");
});
