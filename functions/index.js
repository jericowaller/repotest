/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const { setGlobalOptions } = require("firebase-functions/v2/options");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

setGlobalOptions({ maxInstances: 10 });

exports.flashBriefing = onRequest({ timeoutSeconds: 15, cors: true, maxInstances: 10 }, async (request, response) => {

  logger.info("Flash Briefing Requested!", { structuredData: true });

  response.set('Content-Type', 'application/json').json([

    {

      "uid": crypto.randomUUID(),

      "updateDate": new Date().toISOString(),

      "titleText": "What kind of test will I do today?",

      "mainText": "The quick brown fox jumped over the lazy dog's back 1234567890.",

      "streamUrl": null,

      "redirectionUrl": https://example.com

    }

  ]);

});
