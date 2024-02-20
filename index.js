const express = require("express");
const bodyParser = require("body-parser");
const { userRouter } = require("./Routes/userRouter");
const { mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/ecommerce", userRouter);

mongoose
  .connect(process.env.dbConnect)
  .then((res) => {
    app.listen(port, () =>
      console.log(`Ecommerce app listening on port https://localhost:${port}`)
    );

    console.log("Database is connected");
  })
  .catch((err) => console.log("Error connecting database", err));
