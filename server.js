const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
  { usename: "Kyle", title: "Post 1" },
  { usename: "Jim", title: "Post 2" },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/login", (req, res) => {
  //Authenticate User

  const username = req.body.usename;
});

app.listen(3000);
