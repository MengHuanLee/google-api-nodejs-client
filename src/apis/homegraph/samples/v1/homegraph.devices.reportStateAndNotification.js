// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

const {google} = require('googleapis');
const homegraph = google.homegraph('v1');

/*
 * Reports device state and optionally sends device notifications.
 * Called by your smart home Action when the state of a third-party device
 * changes or you need to send a notification about the device.
 * See [Implement Report
 * State](https://developers.google.com/assistant/smarthome/develop/report-state)
 * for more information.
 *
 * This method updates the device state according to its declared
 * [traits](https://developers.google.com/assistant/smarthome/concepts/devices-traits).
 * Publishing a new state value outside of these traits will result in an
 * `INVALID_ARGUMENT` error response.
 *
 * The third-party user's identity is passed in via the `agent_user_id`
 * (see ReportStateAndNotificationRequest).
 * This request must be authorized using service account credentials from your
 * Actions console project.
 */

async function main() {
  // By default, this method will look for, in order:
  // 1. An environment variable set to `GOOGLE_APPLICATION_CREDENTIALS`
  //    pointing to a service account credential file
  // 2. A GCE metadata server, present in Google Cloud products like
  //    Compute Engine, Kubernetes Engine, Cloud Run, etc
  // 3. A local OAuth token written by the Cloud SDK, obtained by running
  //    `gcloud auth application-default login`.  This is preferred for local
  //    development.
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: [],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await homegraph.devices.reportStateAndNotification({
    // Request body metadata
    requestBody: {
      // request body parameters
    },
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
