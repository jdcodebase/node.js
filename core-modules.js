const fs = require("fs");
const path = require("path");
const os = require("os");

fs.writeFileSync("hello.txt", "Hello World");
fs.writeFileSync("temp.js", "console.log('Hello World')");

const data = fs.readFileSync("hello.txt", "utf8");

console.log(data);

const filePath = path.join("folder", "file.txt");
console.log(filePath);

console.log(path.basename("folder/file.txt"));
console.log(path.extname("file.js"));

console.log(os.platform());
console.log(os.arch());

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello user");
});

emitter.emit("greet");
