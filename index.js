'use strict'

const axios = require('axios');

// for (var i = 0; i < process.argv.length; i++) {
//   console.log("argv[" + i + "] = " + process.argv[i]);
// }

const core = require('@actions/core');
// const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const AMI = core.getInput('ami');
  const URL = core.getInput('webhook'); //各自のWebhook URL
  console.log(`${AMI} is error`);
  axios.post(URL, { text: `${AMI} is error` })
    .then(res => console.log(res.data));
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}


