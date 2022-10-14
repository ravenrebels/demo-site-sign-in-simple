function startpage(_, res) {
  const html = `<html>
                  <body class="container " style="background: #0981D1">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                      rel="stylesheet" 
                      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                      crossorigin="anonymous">
    
                    <div style="margin: auto; width: 200px; margin-top: 40px; " class="alert alert-success my-4" role="alert">
                      <a href="/signin"  class="btn btn-primary">Sign in</a>
                    </div> 
                  </body>
              </html>`;
  res.send(html);
}
exports.startpage = startpage;
