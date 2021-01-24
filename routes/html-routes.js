const app = require("express").Router();
const path = require("path");

// Root page with last workout/create a workout
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Add your exercise page
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
});

// Visuals page
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = app;