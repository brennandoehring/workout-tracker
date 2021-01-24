// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan(dev));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    });

// Routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Listen
app.listen(PORT, () => {
    console.log("App is listening at: http://localhost:" + PORT);
});