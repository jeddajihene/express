const express = require("express");
const { dirname } = require("path");
const app = express();
const PORT = 5000;
// ........................................
app.use(express.static(__dirname + "/views"));
// .........................................
const path = require("path");
app.listen(PORT, () => console.log(`server is  runing  ${PORT}`));

const middlware = (req, res, next) => {
  const date = new Date();
  if (
    date.getDay() > 0 &&
    date.getDay() <= 5 &&
    date.getHours() >= 9 &&
    date.getHours() <= 17
  ) {
    next();
  }
  res.sendFile(path.join(__dirname, "views", "Closed.html"));
};
app.use(middlware);

// closed

app.get("/closed", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Closed.html"));
});
app.use(express.static("views"));
// HOME
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Home.html"));
});
app.use(express.static("views"));

// contact
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "Contact.html"));
});
app.use(express.static("views"));
// service
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "service.html"));
});
app.use(express.static("views"));
