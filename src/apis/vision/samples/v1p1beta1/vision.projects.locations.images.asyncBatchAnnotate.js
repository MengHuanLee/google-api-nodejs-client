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
const vision = google.vision('v1p1beta1');

/*
 * Run asynchronous image detection and annotation for a list of images.
 * 
 * Progress and results can be retrieved through the
 * `google.longrunning.Operations` interface.
 * `Operation.metadata` contains `OperationMetadata` (metadata).
 * `Operation.response` contains `AsyncBatchAnnotateImagesResponse` (results).
 * 
 * This service will write image annotation outputs to json files in customer
 * GCS bucket, each json file containing BatchAnnotateImagesResponse proto.
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
      'https://www.googleapis.com/auth/cloud-vision',
          ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await vision.projects.locations.images.asyncBatchAnnotate({
             // Optional. Target project and location to make a call.
// 
// Format: `projects/{project-id}/locations/{location-id}`.
// 
// If no parent is specified, a region will be chosen automatically.
// 
// Supported location-ids:
//     `us`: USA country only,
//     `asia`: East asia areas, like Japan, Taiwan,
//     `eu`: The European Union.
// 
// Example: `projects/project-A/locations/eu`.    
    parent: 'projects/my-project/locations/my-location',
            
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
