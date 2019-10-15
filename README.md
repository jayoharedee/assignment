# COMP3104 Assignment Project

[![Build Status](https://travis-ci.com/jayoharedee/assignment.svg?branch=master)](https://travis-ci.com/jayoharedee/assignment)

> This repository contains the base project we will be using for our assignment.

To get the project up and running please ensure you have the following installed on your machine:

1. Git
2. Node & NPM

Once it's been determined that you have the pre-requisites to install the application, please see the scripts block below taken from the package.json which shows how to build and start the application.

```javascript
"scripts": {
  "format": "prettier \"src/**/*.{js,html}\" --write",
  "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
  "test": "npm run format && npm run lint",
  "start": "webpack-dev-server --mode development --open",
  "dev": "webpack --mode development --module-bind js=babel-loader",
  "build": "webpack --mode production --module-bind js=babel-loader",
  "mock:api": "./node_modules/.bin/json-server --watch ./src/js/services/api/mockDb.json --port 4000 & npm run start"
}
```

In the above, you'll notice a "scripts" object. Inside this object contains some commands: format, lint, test, start,dev and build.

Before the application can be started, we must first install the projects dependencies. This is done by running `npm install` from the command line, in the project directory.

After the dependencies are installed, you can run `npm run build`; notice the build key. This will produce a production ready build of the application.

`npm run start` will then start a local development server and the application will be hosted on port 8080.

After the application is started, you should be able to request localhost:8080 to see the application.
