const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());

let login = {
  name: "login",
  alt: "register",
};

let register = {
  name: "register",
  alt: "login",
};

app.get("/login", (req, res) => {
  console.log("log");
  res.json(login);
});

app.get("/register", (req, res) => {
  console.log("reg");
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
