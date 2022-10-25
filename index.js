const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors({ origin: `*` }));

const courses = require("./data/courses.json");
const coursesCategories = require("./data/courses-categories.json");

app.get("/", (req, res) => {
  res.send("Welcom!");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses-categories", (req, res) => {
  res.send(coursesCategories);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
