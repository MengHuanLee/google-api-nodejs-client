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
const clouderrorreporting = google.clouderrorreporting('v1beta1');

/*
 * Lists the specified groups.
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
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await clouderrorreporting.projects.groupStats.list({
    // Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`.
    alignment: 'placeholder-value',
    // Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.
    alignmentTime: 'placeholder-value',
    // Optional. List all <code>ErrorGroupStats</code> with these IDs.
    groupId: 'placeholder-value',
    // Optional. The sort order in which the results are returned. Default is `COUNT_DESC`.
    order: 'placeholder-value',
    // Optional. The maximum number of results to return per response. Default is 20.
    pageSize: 'placeholder-value',
    // Optional. A `next_page_token` provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.
    pageToken: 'placeholder-value',
    // Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840).  Example: `projects/my-project-123`.
    projectName: 'projects/my-project',
    // Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
    'serviceFilter.resourceType': 'placeholder-value',
    // Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
    'serviceFilter.service': 'placeholder-value',
    // Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
    'serviceFilter.version': 'placeholder-value',
    // Optional. The preferred duration for a single returned `TimedCount`. If not set, no timed counts are returned.
    timedCountDuration: 'placeholder-value',
    // Restricts the query to the specified time range.
    'timeRange.period': 'placeholder-value',
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
