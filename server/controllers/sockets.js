const config = require("../config/sockets.config");

const listenSocket = (socket) => {
  console.log("nueva conexión");
};

exports.initSockets = (io) => {
  io.on("connection", (data) => {
    console.log(data);
  });
};
