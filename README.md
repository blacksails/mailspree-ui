[![Dockerhub](https://img.shields.io/badge/dockerhub-repo-blue.svg)](https://hub.docker.com/r/blacksails/mailspree-ui)
# mailspree-ui

Instead of integrating the [mailspree](https://github.com/blacksails/mailspree)
service into your own application, mailspree-ui provides a stand-alone webbased
GUI.

The mailspree service it not included in mailspree-ui, but it depends upon it.
Read more about mailspree in its own repository:
[mailspree](https://github.com/blacksails/mailspree)

## Installation

The easiest way to run mailspree-ui is using docker. You can either grab the
latest image from dockerhub
[blacksails/mailspree-ui](https://hub.docker.com/r/blacksails/mailspree-ui), or
build the image from source using the following instructions:

```bash
git clone git@github.com:blacksails/mailspree-ui.git
cd mailspree-ui
npm install
npm run build
docker build -t blacksails/mailspree-ui .
```

When you have the docker image ready, just run it providing the mailspree
service endpoint in the `MAILSPREE_ENDPOINT` environement variable.

```bash
docker run -d --name mailspree-ui --port 80:8080 \
  -e MAILSPREE_ENDPOINT=<Your mailspree endpoint here> \
  blacksails/mailspree-ui
```

Instead of using `docker run` you can save a create an environment varibale
file in the directory, called `mailspree-ui-vars.env`, which contains the
environment variable. See the
[mailspree-ui-vars.env.example](mailspree-ui-vars.env.example) file for an
example. Then run the mailspree-ui container with docker compose.

```base
docker-compose up
```

## Architecture

Mailspree UI is a react application. It uses redux to provide a highly
predictable state store. It has a small express webserver which serves the app.
The express server will at some point also do initial server side rendering of
the app, which means that the end user will have the initial app rendered
faster.

## Credits

Author: Benjamin Nørgaard ([blacksails](https://github.com/blacksails))
