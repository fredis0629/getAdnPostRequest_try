const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  var options = {
    root: path.join(__dirname, "/src/htmls"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };
  res.sendFile("/index.html", options);
});

app.get("/getRequest", (req, res) => {
  var options = {
    root: path.join(__dirname, "/src/htmls"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };
  res.sendFile("/index.html", options, e => console.log("get"));
});

app.use(express.static(path.join(__dirname, "/src")));

app.post("/postRequest", function(req, res) {
  //res.send("Got a POST request");
  res.send(JSON.stringify(req));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
