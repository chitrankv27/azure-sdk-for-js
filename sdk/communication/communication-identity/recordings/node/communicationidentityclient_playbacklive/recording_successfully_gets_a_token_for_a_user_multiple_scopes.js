let nock = require('nock');

module.exports.hash = "05fb528454353b85a4d5155338f95afc";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/identities/sanitized/:issueAccessToken', {"scopes":["chat","voip"]})
  .query(true)
  .reply(200, {"token":"sanitized","expiresOn":"2021-02-18T00:54:33.8317257+00:00"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'MS-CV',
  '42VWxS+IiEqWCEU9wS6StQ.0',
  'Strict-Transport-Security',
  'max-age=2592000',
  'x-ms-client-request-id',
  'sanitized',
  'api-supported-versions',
  '2020-07-20-preview2, 2021-03-07',
  'X-Processing-Time',
  '22ms',
  'X-Azure-Ref',
  '0SmksYAAAAAB4f+1xHxp9Sq86GFu5XDXLWVZSMzBFREdFMDMwOQA5ZmM3YjUxOS1hOGNjLTRmODktOTM1ZS1jOTE0OGFlMDllODE=',
  'Date',
  'Wed, 17 Feb 2021 00:54:34 GMT'
]);
