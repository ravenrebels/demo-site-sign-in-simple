const fs = require("fs");
const cookieParser = require("cookie-parser");
const express = require("express");

const { startTheSigninProcess } = require("./startTheSigninProcess");
const { authenticate } = require("./authenticate");
const { secure } = require("./secure");
const { startpage } = require("./startpage");

const app = express();
const port = process.env.PORT || 80;

app.use(cookieParser());

app.get("/", startpage);

app.get("/secure", secure);

app.get("/signin", async (req, res) => {
  if (req.query.orderRef) {
    authenticate(req, res);
  } else {
    startTheSigninProcess(req, res);
  }
});

app.get("/signout", function (req, res) {
  res.cookie("sessionCookie", null);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
