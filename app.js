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
  const index = users.findIndex((user) => user.id === req.body.id);
  if (index !== -1) {
    res.status(400).send("User already exists");
    return;
  }
  users.push(req.body);
  res.status(201).send("User added");
});
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) {
    res.status(404).send("User not found");
    return;
  }
  users.splice(index, 1);
  res.send("deleted");
});

app.listen(port, (res) => {
  console.log("Server is running");
});
