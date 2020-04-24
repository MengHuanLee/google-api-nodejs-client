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
const genomics = google.genomics('v2alpha1');

/*
 * Runs a pipeline.  The returned Operation's metadata field will contain a
 * google.genomics.v2alpha1.Metadata object describing the status of the
 * pipeline execution.  The [response] field will contain a
 * google.genomics.v2alpha1.RunPipelineResponse object if the pipeline
 * completes successfully.
 *
 * **Note:** Before you can use this method, the Genomics Service Agent
 * must have access to your project. This is done automatically when the
 * Cloud Genomics API is first enabled, but if you delete this permission,
 * or if you enabled the Cloud Genomics API before the v2alpha1 API
 * launch, you must disable and re-enable the API to grant the Genomics
 * Service Agent the required permissions.
 * Authorization requires the following [Google
 * IAM](https://cloud.google.com/iam/) permission:
 *
 * * `genomics.operations.create`
 *
 * [1]: /genomics/gsa
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
      'https://www.googleapis.com/auth/genomics',
    ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await genomics.pipelines.run({
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
