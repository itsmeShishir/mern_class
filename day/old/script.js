const { abc } = require("./index");
const fs = require("fs");
const http = require("http");
// os , path, http, express
const os = require("os");

abc();

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
fs.writeFile("read.txt", "hello my name is shishir bhadnari", (err, data) => {
  console.log("data enter successfully");
});
fs.appendFile(
  "read.txt",
  "hello my name is shishir bhadnari\n also add the age is 27",
  (err, data) => {
    console.log("data enter successfully");
  }
);
fs.rm("reads.txt", (err, data) => {
  console.log("file deleted successfully");
});

// os
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.machine());
console.log(os.arch());
console.log(os.uptime());

let port = 3000;
// http
const server = http.createServer((req, res, err) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page abwdiubai d adiubawiu d");
  } else if (req.url === "ok") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("error page not found");
  }
});

server.listen(port, () => {
  console.log("website is running on http://localhost:3000");
});
