import express from "express";
import {clientConfig} from "../webpack.config";

const app = express();
const port = 8080;
app.use(express.static(clientConfig.output.path));
app.use(handleRender);

function handleRender(req, res) {
  res.send(renderFullPage());
}

function renderFullPage() {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Mailspree.io</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta name="viewport" content="width=device-width,initial-scale=1">
      </head>
      <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
}

app.listen(port);
