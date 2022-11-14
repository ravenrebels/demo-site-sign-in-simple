const { getUserFromRequest } = require("./getUserFromRequest");

/*
  What the user sees when she has signed in

*/
async function secure(req, res, next) {
  const user = getUserFromRequest(req);
  //Validate that user is sign in, otherwise redirect to start page
  if (!user) {
    const startPage = "/";
    res.redirect(startPage);
    return;
  }

  next();
}
exports.secure = secure;
