# wizards-web-craft-page

## Deployment
This application is intended to be run via docker.
Make sure to set the following variables in the `.env` file in the projects root directory:

NGINX_HOST: The hostname the server will listen on
NGINX_PORT: The port to use for nginx INSIDE the container. Can be any port and you can leave it as it is, but it's need to be set.
EXTERNAL_PORT: The port number to be externally exposed. Make sure it matches the forwarding of your reverse proxy.

### Deployment - Remarks
This application is intended to be run behind a reverse proxy that terminates the actual ssl connection. For the further communication between the rpx and the bundled webserver a snakeoil cert is applied, so make sure the app is only reachable via your proxy and isn't exposed to the web directly.
