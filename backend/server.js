const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());

app.get("/login", (req, res) => {
  console.log("get: login");
  res.json(login);
});

app.get("/register", (req, res) => {
  console.log("get: reg");
  res.json(register);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.json({ login: "success" });
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ register: "success" });
});
