const express = require("express");
const http = require("http");
const cors = require("cors");
const socketConfig = require("./controllers/sockets");

const testRouter = require("./routes/tesRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1/test", testRouter);

const server = http.createServer(app);
socketConfig.initSockets(server);

module.exports = server;
