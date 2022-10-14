const fs = require("fs");
const { fetchUserInfo } = require("./fetchUserInfo");

//SUPER NAIVE DEMO OF SIGNING IN WITH RAVENCOIN NFTS
//With as few lines of code as possible.
async function authenticate(req, res) {
  const orderRef = req.query.orderRef;
  const data = await fetchUserInfo(orderRef);

  //Write the result to file and set a cookie
  const random = "" + Math.random() * 10000000;
  if (data) {
    const folder = "./sessions";
    fs.mkdirSync(folder, { recursive: true });
    fs.writeFileSync(folder + "/" + random + ".json", JSON.stringify(data));

    console.log("Setting cookie");
    res.cookie("sessionCookie", random, {
      expires: new Date(Date.now() + 1900000),
    });
    //Seems like we cant redirect, so we do it with location/javascript
    res.send(`<html><body>
                            <script>
                            setTimeout( () => {window.location.href="/secure";},1000);</script>
                </body></html>`);
    return;
  }

  res.status(500).send({ error: "Something went wrong" });
}
exports.authenticate = authenticate;
