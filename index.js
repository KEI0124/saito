'use strict'

const axios = require('axios');
const URL = `https://sattjp.webhook.office.com/webhookb2/b65fd0a7-58a0-4f96-b109-07ba0f9b6ad6@8c4fbddb-31dd-42ec-b709-917ff3144a77/IncomingWebhook/06911777bba44ccdb90596b862362dfa/7d3fc861-8da4-4895-a426-86a566ed1598`; //各自のWebhook URL

axios.post(URL, { text: 'V2テスト' })
  .then(res => console.log(res.data));

for (var i = 0; i < process.argv.length; i++) {
  console.log("argv[" + i + "] = " + process.argv[i]);
}

// const core = require('@actions/core');
// const github = require('@actions/github');

// try {
//   // `who-to-greet` input defined in action metadata file
//   const nameToGreet = core.getInput('who-to-greet');
//   console.log(`Hello ${nameToGreet}!`);
//   const time = (new Date()).toTimeString();
//   core.setOutput("time", time);
//   // Get the JSON webhook payload for the event that triggered the workflow
//   const payload = JSON.stringify(github.context.payload, undefined, 2)
//   console.log(`The event payload: ${payload}`);
// } catch (error) {
//   core.setFailed(error.message);
// }


