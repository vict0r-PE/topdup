const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5000;
const db = require("./queries");
const auth = require("./auth");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (request, response) => {
  response.json({ info: "ABC" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);

app.use("/auth/token", auth.getToken);
