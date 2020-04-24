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
 * Returns a list of [Google Cloud Platform (GCP) `Projects`]
 * (https://cloud.google.com/resource-manager/reference/rest/v1/projects)
 * that are available to have Firebase resources added to them.
 * <br>
 * <br>A GCP `Project` will only be returned if:
 * <ol>
 *   <li><p>The caller has sufficient
 *          [Google IAM](https://cloud.google.com/iam) permissions to call
 *          AddFirebase.</p></li>
 *   <li><p>The GCP `Project` is not already a FirebaseProject.</p></li>
 *   <li><p>The GCP `Project` is not in an Organization which has policies
 *          that prevent Firebase resources from being added.</p></li>
 * </ol>
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
      'https://www.googleapis.com/auth/cloud-platform.read-only',
      'https://www.googleapis.com/auth/firebase',
      'https://www.googleapis.com/auth/firebase.readonly',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await firebase.availableProjects.list({
    // The maximum number of GCP `Projects` to return in the response. <br> <br>The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. <br> <br>This value cannot be negative.
    pageSize: 'placeholder-value',
    // Token returned from a previous call to `ListAvailableProjects` indicating where in the set of GCP `Projects` to resume listing.
    pageToken: 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
