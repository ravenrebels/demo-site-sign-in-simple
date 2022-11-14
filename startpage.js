function startpage(_, res) {
  const html = `<html>
                <head>
                   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                   <style>
                        #signIn{
                          margin-top: 30px;
                          display: block;
                        }
                        #image{
                          
                          width: 100%;
                          display:block;
                        }
                   </style>
                </head>
                  <body class="container " style="background: #0981D1">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
                      rel="stylesheet" 
                      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                      crossorigin="anonymous">
    
                    <div style="margin: auto; width: 350px; margin-top: 40px; " class="alert alert-success my-4" role="alert">
                    <h1>Sign in to unlock content</h1>  
                    <img id="image" src="https://cdn.pixabay.com/photo/2018/09/25/21/14/safe-3703193__480.jpg"/>
                    <a href="/signin" class="btn btn-primary" id="signIn">Sign in</a>
                    </div> 
                  </body>
              </html>`;
  res.send(html);
}
exports.startpage = startpage;
