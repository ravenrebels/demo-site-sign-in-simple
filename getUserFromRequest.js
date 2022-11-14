const fs = require("fs");

function getUserFromRequest(request) {
  if (!request.cookies) {
    return null;
  }
  if (!request.cookies.sessionCookie) {
    return null;
  }
  const cookieValue = request.cookies.sessionCookie;
  const fileName = "./sessions/" + cookieValue + ".json";
  if (cookieValue && fs.existsSync(fileName) === true) {
    const user = fs.readFileSync(fileName, { encoding: "utf8", flag: "r" });
    return JSON.parse(user);
  }
  return null;
}
exports.getUserFromRequest = getUserFromRequest;
