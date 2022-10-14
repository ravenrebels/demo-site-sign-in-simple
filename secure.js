const fs = require("fs");

/*
  What the user sees when she has signed in

*/
async function secure(req, res) {
  const user = getUserFromRequest(req);

  if (!user) {
    const startPage = "/";
    res.redirect(startPage);
    return;
  }

  const nft = user.completionData.nft;

  const encodedNFT = encodeURIComponent(nft);
  const html = `
                <html>
                  <head>
                    <link 
                      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                      rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                      crossorigin="anonymous">
                  </head>
                  <body class="container-sm" style="background: #0981D1">  
                    <div class="card py-4" style="margin: auto; width: 18rem; margin-top: 40px; ">
                      <img src="https://rebel-balance-front.herokuapp.com/thumbnail?assetName=${encodedNFT}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${nft}</h5>
                        <p class="card-text"></p>
                        <a href="/signout" class="btn btn-primary">Sign out</a>
                      </div>
                    </div>
                  </body>
                </html>
`;

  res.send(html);
  return;
}
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

exports.secure = secure;
