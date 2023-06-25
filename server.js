const express = require("express");
const app = express();

const posts = [
  { usename: "Kyle", title: "Post 1" },
  { usename: "Jim", title: "Post 2" },
];

app.get("/posts", (req, res) => {
    res.json(posts)
});

app.listen(3000);
