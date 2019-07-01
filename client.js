#!/usr/bin/env node

const Bundler = require('parcel-bundler');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(
  proxy(['/assets', '/graphql', '/graphiql'], {
    target: 'http://localhost:3001/',
  })
);

const bundler = new Bundler('client/index.html');
app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 3000));
