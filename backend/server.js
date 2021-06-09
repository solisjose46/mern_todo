const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/login", (req, res) => {
  res.send("login");
});

app.get("/register", (req, res) => {
  res.send("register");
});
