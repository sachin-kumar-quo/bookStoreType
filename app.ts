import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import config from "./config";
import routes from "./api/routes";

const app = express();

const connectToMongo = async () => {
  mongoose.connect(
    `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.db}`
  );
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes());

let server = app.listen(3000, () => {
  console.log("Server started on port 3000");
  connectToMongo()
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB: ", err);
    });
});

export default server;
