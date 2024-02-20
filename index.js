const express = require("express");
const bodyParser = require("body-parser");
const { userRouter } = require("./Routes/userRouter");
const { mongoose } = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/ecommerce", userRouter);

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce-Project API Documentation",
      version: "1.0.0",
      description:
        "This Ecommerce-Project API Documentation is designed to provide basics of how this API functions.",
    },
    servers: [
      {
        url: "https://ecommerce-bn24.onrender.com",
      },
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJSDoc(options);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

mongoose
  .connect(process.env.dbConnect)
  .then((res) => {
    app.listen(port, () =>
      console.log(`Ecommerce app listening on port https://localhost:${port}`)
    );

    console.log("Database is connected");
  })
  .catch((err) => console.log("Error connecting database", err));
