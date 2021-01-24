const app = require("express").Router();
const Workout = require("../models/workout.js");

// POST new workout
app.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
    console.log("Added new workout!");
});

module.exports = app;