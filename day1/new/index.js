// const { abc, bc } = require("./script.js");
import abc from "./script.js";
import fs from "fs";
// how to read file
fs.readFile("example.txt", (err, data) => {
  console.log(data);
});

fs.writeFile("example.txt", "\n hello again", (err, data) => {
  console.log("text written in the file successfully");
});

fs.appendFile("example.txt", "\n my name is shishir bhandari", (err, data) => {
  console.log("file append successfully \n");
});

fs.rm("example.txt", (err, data) => {
  console.log("file deleted successfully");
});

abc();
