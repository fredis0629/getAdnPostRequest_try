const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());

const infoObjToResponse = {
  Nick: {
    firstName: "Nick",
    lastName: "Smitt",
    age: 34
  },
  Linda: {
    firstName: "Linda",
    lastName: "Ersh",
    age: 18
  },
  Nensy: {
    firstName: "Nensy",
    lastName: "Korn",
    age: 25
  }
};

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

app.get("/getRequest", urlencodedParser, (req, res) => {
  res.send(infoObjToResponse[req.query.name] || `Not Found!`);
});

app.use(express.static(path.join(__dirname, "/src")));

app.post("/postRequest", urlencodedParser, (req, res) => {
  res.send(req.body);
});

app.get("/ajaxGetRequest", urlencodedParser, (req, res) => {
  res.send(infoObjToResponse[req.query.name] || `Not Found!`);
});

app.post("/ajaxPostRequest", urlencodedParser, (req, res) => {
  res.send(`First name: ${req.body.fname} Last name: ${req.body.lname}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
