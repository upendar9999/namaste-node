const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end("Hello World Upendar");
});

server.listen(9999);