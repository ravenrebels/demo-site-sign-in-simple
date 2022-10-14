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

/* start page */
app.get("/", startpage);

/* sign in page has two "states", 
1) When the user wants to sign in (no orderRef query parameter)
2) We are redirected back from the Identity Provider, we have a orderRef query parameter
*/
app.get("/signin", async (req, res) => {
  if (req.query.orderRef) {
    authenticate(req, res);
  } else {
    startTheSigninProcess(req, res);
  }
});

/* secure - when the user has signed in */
app.get("/secure", secure);

/* well, sign out, clear the session cookie */
app.get("/signout", function (req, res) {
  res.cookie("sessionCookie", null);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
