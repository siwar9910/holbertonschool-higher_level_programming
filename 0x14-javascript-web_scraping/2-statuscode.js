#!/usr/bin/node
const request = require('axios');
const url = process.argv[2];
request(url, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
