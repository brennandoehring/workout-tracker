// Dependencies
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    });

// Listen
app.listen(PORT, () => {
    console.log("App is listening at: http://localhost:" + PORT);
});