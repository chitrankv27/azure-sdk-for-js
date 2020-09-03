let nock = require('nock');

module.exports.hash = "32bf15c8cc93154c7d8ccb9a096ce9a1";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.0/prebuilt/receipt/analyzeResults/26086161-d1aa-4bad-b614-ed11be5df70d',
  'x-envoy-upstream-service-time',
  '1281',
  'apim-request-id',
  '26086161-d1aa-4bad-b614-ed11be5df70d',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 18 Aug 2020 18:46:13 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.0/prebuilt/receipt/analyzeResults/26086161-d1aa-4bad-b614-ed11be5df70d')
  .reply(200, {"status":"running","createdDateTime":"2020-08-18T18:46:13Z","lastUpdatedDateTime":"2020-08-18T18:46:14Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '127',
  'apim-request-id',
  '360c3f24-21ce-408e-978e-adeb3705ca44',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 18 Aug 2020 18:46:13 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.0/prebuilt/receipt/analyzeResults/26086161-d1aa-4bad-b614-ed11be5df70d')
  .reply(200, {"status":"running","createdDateTime":"2020-08-18T18:46:13Z","lastUpdatedDateTime":"2020-08-18T18:46:14Z"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '77',
  'apim-request-id',
  'c107d8be-d40e-4240-ab3d-9b79ef9d341a',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 18 Aug 2020 18:46:13 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.0/prebuilt/receipt/analyzeResults/26086161-d1aa-4bad-b614-ed11be5df70d')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-08-18T18:46:13Z","lastUpdatedDateTime":"2020-08-18T18:46:15Z","analyzeResult":{"version":"2.0.0","readResults":[{"page":1,"angle":0.2511,"width":1688,"height":3000,"unit":"pixel","language":"en"}],"documentResults":[{"docType":"prebuilt:receipt","pageRange":[1,1],"fields":{"ReceiptType":{"type":"string","valueString":"Itemized","confidence":0.659},"MerchantName":{"type":"string","valueString":"Contoso Contoso","text":"Contoso Contoso","boundingBox":[349.3,241.3,1058,284.4,1033.5,687.1,324.8,644],"page":1,"confidence":0.516},"MerchantAddress":{"type":"string","valueString":"123 Main Street Redmond, WA 98052","text":"123 Main Street Redmond, WA 98052","boundingBox":[319.9,689.9,750.7,697.5,747.8,865.6,317,858],"page":1,"confidence":0.986},"MerchantPhoneNumber":{"type":"phoneNumber","text":"123-456-7890","boundingBox":[306,1005,617,1011,615.9,1070,304.9,1064],"page":1,"confidence":0.99},"TransactionDate":{"type":"date","valueDate":"2019-06-10","text":"6/10/2019","boundingBox":[303.2,1223.5,506,1224,505.8,1289,303,1288.5],"page":1,"confidence":0.985},"TransactionTime":{"type":"time","valueTime":"13:59:00","text":"13:59","boundingBox":[518,1225,628.1,1227,627,1291,516.8,1289],"page":1,"confidence":0.968},"Items":{"type":"array","valueArray":[{"type":"object","valueObject":{"Name":{"type":"string","valueString":"8GB RAM (Black)","text":"8GB RAM (Black)","boundingBox":[370.7,1781.5,731,1785,730.3,1854,370,1850.6],"page":1,"confidence":0.916},"TotalPrice":{"type":"number","valueNumber":999,"text":"$999.00","boundingBox":[939,1784.6,1134.4,1788.3,1133,1863,937.6,1859.3],"page":1,"confidence":0.559}}},{"type":"object","valueObject":{"Quantity":{"type":"number","text":"1","boundingBox":[320.8,2020.5,348,2020,349.2,2084,322,2084.5],"page":1,"confidence":0.858},"Name":{"type":"string","valueString":"SurfacePen","text":"SurfacePen","boundingBox":[360,2020,626.6,2014,628,2077,361.4,2083],"page":1,"confidence":0.858},"TotalPrice":{"type":"number","valueNumber":99.99,"text":"99.99","boundingBox":[1007,2028,1127,2028,1127,2091,1007,2091],"page":1,"confidence":0.386}}}]},"Subtotal":{"type":"number","valueNumber":1098.99,"text":"1098.99","boundingBox":[963,2259.5,1136,2254,1138.1,2320,965.1,2325.5],"page":1,"confidence":0.964},"Tax":{"type":"number","valueNumber":104.4,"text":"$104.40","boundingBox":[942.6,2367.5,1132,2363.7,1133.4,2434.2,944,2438],"page":1,"confidence":0.713},"Total":{"type":"number","valueNumber":1203.39,"text":"1203.39","boundingBox":[955,2593.9,1123,2611,1116.2,2678.1,948.2,2661],"page":1,"confidence":0.774}}}]}}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '58',
  'apim-request-id',
  'e3671fb1-e4d0-4954-bc81-74dcb3af317c',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 18 Aug 2020 18:46:18 GMT'
]);