## A very simple and naive example of signing in using Ravencoin NFTs

It uses the simple REDIRECT flow (no server side polling)

### So what is going on?

- When the user click Sign in, the web site requests an authentication order from `idp.ravenrebels.com`.
- The web sites adds an `redirectURL` attribute to the request
- After the user is signed in, she is redirect back to the simple site.
- The web site get the query parameter `orderRef` and use that to fech user information from `idp.ravenrebels.com` and stores that in the user session.

### Stuff to be aware of

The authentication orders on `idp.ravenrebels.com` are short lived. They expire in minutes.
So when the user is redirected back to your site, fetch the information and save it.

Thats it, thats the demo.

You can try this out live on https://simple-ravencoin-signin.herokuapp.com

For more information about `idp.ravenrebels.com`check out the extended demo
https://github.com/ravenrebels/demo-site-with-ravencoin-authentication
