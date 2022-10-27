const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const courses = require("./data/courses.json");
const coursesCategories = require("./data/courses-categories.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcom!");
});
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/categories/:id", (req, res) => {
  const filterData = courses.filter(
    (data) => data.categories_id === req.params.id
  );
  res.send(filterData);
});
app.get("/courses/categories/details/:id", (req, res) => {
  const findData = courses.find((data) => data.id === req.params.id);
  res.send(findData);
});
app.get("/courses_categories", (req, res) => {
  res.send(coursesCategories);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
