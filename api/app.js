const express = require("express");
const app = express();
const user_router = require("./routes/user_router");
const cartRouter = require("./routes/cartRouter")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/user", user_router);
app.use("/cart", cartRouter)

mongoose
  .connect("mongodb://localhost:27017/ShoppingCarts")
  .then(() => {
    console.log("connected");
    app.listen(1000);
  })
  .catch((err) => {
    console.log("error", err);
  });
