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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/manifest.json">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="theme-color" content="#ffffff">
      </head>
      <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
      </body>
    </html>
    `;
}

app.listen(port);
