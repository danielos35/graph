const socketio = require("socket.io");

const listenSocket = (socket) => {
  console.log("nueva conexión");
};

exports.initSockets = (server) => {
  const io = socketio(server, {
    cors: {
      origin: true,
      credentials: true,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("event", (res) => {
      console.log(res);
    });
  });
};
