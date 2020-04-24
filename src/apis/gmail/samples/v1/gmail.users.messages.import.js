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
const gmail = google.gmail('v1');

/*
 * Imports a message into only this user's mailbox, with standard
 * email delivery scanning and classification similar to receiving via SMTP.
 * Does not send a message.
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
      'https://mail.google.com/',
      'https://www.googleapis.com/auth/gmail.insert',
      'https://www.googleapis.com/auth/gmail.modify',
          ],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.getClient();
  google.options('auth', authClient);

  // Do the magic
  const res = await gmail.users.messages.import({
             // Mark the email as permanently deleted (not TRASH) and only visible in <a href="http://support.google.com/vault/">Google Vault</a> to a Vault administrator. Only used for G Suite accounts.    
    deleted: 'placeholder-value',
         // Source for Gmail's internal date of the message.    
    internalDateSource: 'placeholder-value',
         // Ignore the Gmail spam classifier decision and never mark this email as SPAM in the mailbox.    
    neverMarkSpam: 'placeholder-value',
         // Process calendar invites in the email and add any extracted meetings to the Google Calendar for this user.    
    processForCalendar: 'placeholder-value',
         // The user's email address. The special value <code>me</code> can be used to indicate the authenticated user.    
    userId: 'placeholder-value',
            
    // Request body metadata
    requestBody: {
      // request body parameters
    },
            media: {
      mimeType: 'placeholder-value';
      body: 'placeholder-value';
    },
    
  });
  console.log(res.data);
}

main().catch(e => {
  console.error(e);
  throw e;
});
