
// Filename: server.js

require("dotenv").config();
const express = require("express");// declare variable and assign the package to it
const app = express();
const cors = require("cors");    // cross origin resource sharing . use to share data between server and react
const mongoose = require("mongoose");  // we can use these functions to use functionalities of each packages


// Middlewares
app.use(express.json());
app.use(cors());
app.disable('x-powered-by');

app.use(express.static("uploads"));

// Database connection
const connectionParams = {

};

try {
    mongoose.connect("mongodb+srv://malkithamanda:99Mathematics@cluster0.qvv4jwk.mongodb.net/jobBank_db?retryWrites=true&w=majority"
        , connectionParams);
    console.log("Connected to the database successfully");
} catch (error) {
    console.log(error);
    console.log("Could not connect to the database!");
}





const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const vacancyRoutes = require("./routes/vacancies");
const studentVacancyRoutes = require("./routes/StudentVacancies");
const responseRoutes = require("./routes/Responses");
const recomendationRoutes = require("./routes/Recomondations");
const applicationRoutes = require("./routes/applications");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vacancies", vacancyRoutes);
app.use("/api/studentVacancies", studentVacancyRoutes);
app.use("/api/responses", responseRoutes);
app.use("/api/recommendations", recomendationRoutes);
app.use("/api/applications",applicationRoutes);

const port = process.env.PORT || 4000;  // (||-logical or operation)
app.listen(port, () => console.log(`Listening on port ${port}...`));

