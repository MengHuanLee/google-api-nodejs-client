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
const pubsub = google.pubsub('v1');

/*
 * Gets the configuration details of a snapshot. Snapshots are used in
 * <a href="https://cloud.google.com/pubsub/docs/replay-overview">Seek</a>
 * operations, which allow you to manage message acknowledgments in bulk. That
 * is, you can set the acknowledgment state of messages in an existing
 * subscription to the state captured by a snapshot.
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
      'https://www.googleapis.com/auth/pubsub',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await pubsub.projects.snapshots.get({
    // Required. The name of the snapshot to get. Format is `projects/{project}/snapshots/{snap}`.
    snapshot: 'projects/my-project/snapshots/[^/]+',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
