const express = require("express");
const app = express();

const testRouter = require("./routes/tesRoute");

app.use(express.json());
app.use(express.json());
app.use("/api/v1/test", testRouter);

module.exports = app;
