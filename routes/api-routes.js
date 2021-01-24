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

// GET last workout
app.get("/api/workout", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
    console.log("Got last workout!");
});

// PUT an exercise in 
app.put("/api/workout/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: {exercises: req.body}},
        { new: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
    console.log("Added an exercise!");
});

// GETs workouts for the graphs and charts
app.get("/api/workout/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
    console.log("Displaying visuals!");
});

module.exports = app;