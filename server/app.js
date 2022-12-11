const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: true,
    credentials: true,
    methods: ["GET", "POST"],
  },
});

// <<<<<<< DRAW >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

io.on("connection", (socket) => {
  socket.on("event", (res) => {
    console.log(res);
  });
});

http.listen(3000, () => {
  console.log("escuchando en puerto 3000");
});

// const express = require("express");
// const app = express();
// const http = require("http").Server(app);
// const io = require("socket.io")(http, {
//   cors: {
//     origin: 'http://localhost:4200',
//     credentials: true,
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//     socket.on("event", (res) => {
//         console.log(res);
//     });
// })

// const socket = require("./controllers/sockets");
// // socket.initSockets(io);

// const testRouter = require("./routes/tesRoute");

// app.use(express.json());
// app.use(express.json());
// app.use("/api/v1/test", testRouter);

// module.exports = app;
