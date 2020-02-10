const express = require("express");
const server = express();
const path = require("path");

const router = require("./routes/router");

server.use('/', router);
server.set('view engine', 'ejs');

Promise.resolve(server.listen(process.env.PORT)).then(() => console.log("Server started."));