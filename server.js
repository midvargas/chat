const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", function(socket) {
    console.log("a user connected");

    socket.on("disconnect", function() {
        console.log("user disconnected");
    });

    socket.on("chat message", function(message) {
        console.log("message: " + message);
        io.emit("chat message", message);
    });
});

http.listen(3000, function() {
    console.log("listening on *:3000");
});
