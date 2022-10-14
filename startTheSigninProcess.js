const axios = require("axios");

async function startTheSigninProcess(req, res) {
  //Create an authentication/sign order using Raven Rebels Identity Provider

  //since we are redirected here we have to add the /signin part
  const redirectURL = (req.get("Referer") + "/signin").replace(
    "//signin",
    "/signin"
  ); //In case we get double / just replace //signin with /signin
  const payload = {
    userVisibleData: Buffer.from(
      "Sign in to Demo site using Ravencoin NFT " + new Date()
    ).toString("base64"),
    endUserIp: "127.0.0.1",
    redirectURL,
  };
  const { data } = await axios.post(
    "https://idp.ravenrebels.com/rp/v5.1/sign",
    payload
  );

  res.redirect(data.endUserURL);
}
exports.startTheSigninProcess = startTheSigninProcess;
