const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else if (req.url === "/api/users") {
    res.setHeader("Content-Type", "application/json");

    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "jane" },
    ];

    res.end(JSON.stringify(users));
  } else {
    res.end("Page Not Found");
  }
});

server.listen(3000);
