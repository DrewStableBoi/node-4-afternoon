const express = require("express");
const session = require("express-session");
const app = express();
const swagController = require('./controllers/swagController');
const checkForSession = require("./middlewares/checkForSession");

let port = 3001;

app.use(express.json());
app.use(
  session({
    secret: "the one and only",
    resave: false,
    saveUninitialized: true
  })
);

app.use(checkForSession);

app.get("/api/swag", swagController.read);

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
