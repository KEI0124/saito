'use strict'

const axios = require('axios');

// process.argv[i]でjsを呼び出した時の引数を参照出来る

const core = require('@actions/core');
// const github = require('@actions/github');

try {
  const MESSAGE = core.getInput('message');
  const URL = core.getInput('webhook'); //各自のWebhook URL
  console.log(`${MESSAGE}`);
  axios.post(URL, { text: `${MESSAGE}` })
    .then(res => console.log(res.data));
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
