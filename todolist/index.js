const express = require("express");
const app = express();

const session = require("express-session");
app.use(session({
  secret: '12345',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

const body = require("body-parser");
app.use(body.urlencoded({ extended: true }));
app.use(body.json());

const PORT = 5000;
app.listen(PORT, (req, res) => {
  console.log(`Server Start Port:${PORT}`);
});

app.use("/api", require("./routes/todoListRouter"));
