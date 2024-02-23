const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const users = [];

app.get("/users", (req, res) => {
  if (users.length === 0) {
    res.status(401).send("No users");
    return;
  }
  res.status(201).send(users);
});
app.post("/users", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send("created");
});

app.listen(port, () => {
  console.log(port);
});
