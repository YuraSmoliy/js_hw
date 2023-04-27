var http = require("http");
let cors = require("cors");
const fs = require("fs");

http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/books") {
      fs.readFile("./books.json", (err, data) => {
        if (err) {
          // Якщо сталась помилка зчитування файлу, відправляємо відповідь з кодом 500
          res.writeHead(500);
          res.end("Error reading books file");
          return;
        }
        const books = JSON.parse(data);
        res.setHeader("Content-Type", "application/json");
        res.end(data);
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      let response = "Your vote is accepted: " + Date();
      res.end(response);
    }
  })
  .listen(5500);
