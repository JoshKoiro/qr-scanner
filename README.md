# QR-Scanner

### Setting http certs
Using a webcam within a browser window requires the use of the WebRTC API which requires the webpage run as HTTPS rather than HTTP. The web server must have HTTPS certificates in order to use the webcam. This can be setup using OpenSSL.

```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
Fill out the information asked for in the prompts and there will be (2) files `server.key` and `server.cert`.
