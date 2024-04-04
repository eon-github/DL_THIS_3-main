// Install Command:
// npm init
// npm install mongoose
// npm i express express-handlebars body-parser mongodb
// npm i express express-handlebars body-parser mongoose
// npm i express-validator
// npm i install bcrypt 

/*Imports */
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const fs = require("fs");
const app = express();
const PORT = 1122;

const rawData = fs.readFileSync("src/models/Restaurant.json");
const resto = JSON.parse(rawData);

const rawData2 = fs.readFileSync("src/models/user.json");
const users = JSON.parse(rawData2);

const rawData3 = fs.readFileSync("src/models/feedback.json");
const feedbacks = JSON.parse(rawData3);

const rawData4 = fs.readFileSync("src/models/comment.json");
const rawComments = JSON.parse(rawData4);

const uri = "mongodb://127.0.0.1:27017/eggyDB";

const hbs = exphbs.create({
  extname: ".hbs",
  layoutsDir: path.join(__dirname, "src", "views", "layouts"), // layouts directory path
  partialsDir: [path.join(__dirname, "src", "views", "partials")], // partials directory path
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src", "views")); // views directory path

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

// Importing schemas
// Importing schemas from db.js
const { Resto, User, Feedback, Comment } = require("./src/models/db.js");

const app_data = {
    'restoModel'    : Resto,
    'userModel'     : User,
    'feedbackModel' : Feedback,
    'commentModel'  : Comment
}

// Connect to MongoDB using Mongoose
//Inserting Data
mongoose
  .connect(uri)
  .then(() => {
    // Drop database when connected
    mongoose.connection.db
      .dropDatabase()
      .then(() => {
        console.log("Database dropped successfully");

        // Insert documents using mongoose models
        Resto.insertMany(resto)
          .then((result) => {
            console.log(`> ${result.length} new RESTO inserted`);
          })
          .catch((err) => {
            console.error(">> Error MALI inserting restaurants:", err);
          });

        User.insertMany(users)
          .then((result) => {
            console.log(`> ${result.length} new USERS inserted`);
          })
          .catch((err) => {
            console.error("Error inserting users:", err);
          });

        Feedback.insertMany(feedbacks)
          .then((result) => {
            console.log(`> ${result.length} new FEEDBACKS inserted`);
          })
          .catch((err) => {
            console.error("Error inserting feedbacks:", err);
          });

        Comment.insertMany(rawComments)
          .then((result) => {
            console.log(`> ${result.length} new COMMENTS inserted`);
          })
          .catch((err) => {
            console.error("Error inserting comments:", err);
          });

        // Start the server after all inserts are done
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      })
      .catch((err) => {
        console.error("Error dropping database:", err);
      });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

/*Import Controller */
const restaurantController = require("./src/controllers/restaurantController");
restaurantController(app, app_data); // Routes

function finalClose() {
  console.log("Close connection at the end!");
  mongoose.connection.close();
  process.exit();
}

process.on("SIGTERM", finalClose);
process.on("SIGINT", finalClose);
process.on("SIGQUIT", finalClose);
