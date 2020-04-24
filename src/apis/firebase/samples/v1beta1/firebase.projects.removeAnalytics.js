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
const firebase = google.firebase('v1beta1');

/*
 * Unlinks the specified `FirebaseProject` from its Google Analytics account.
 * <br>
 * <br>This call removes the association of the specified `FirebaseProject`
 * with its current Google Analytics property. However, this call does not
 * delete the Google Analytics resources, such as the Google Analytics
 * property or any data streams.
 * <br>
 * <br>These resources may be re-associated later to the `FirebaseProject` by
 * calling
 * [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and
 * specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps,
 * this call re-links data streams with their corresponding apps. However,
 * for Web Apps, this call provisions a <em>new</em> data stream for each Web
 * App.
 * <br>
 * <br>To call `RemoveAnalytics`, a member must be an Owner for
 * the `FirebaseProject`.
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
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/firebase',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firebase.projects.removeAnalytics({
    // The parent `FirebaseProject` to unlink from its Google Analytics account, in the format: <br><code>projects/<var>projectId</var></code>
    parent: 'projects/my-project',

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
