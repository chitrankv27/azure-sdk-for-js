let nock = require('nock');

module.exports.hash = "667e36199fbef7a6e7d3b10b6e56af9a";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/metricsadvisor/v1.0/metrics/189ff959-d9f4-45c7-a1e0-f87c9c7ca80f/data/query', {"startTime":"2020-08-05T00:00:00.000Z","endTime":"2020-09-05T00:00:00.000Z","series":[{"city":"Manila","category":"Shoes Handbags & Sunglasses"},{"city":"Cairo","category":"Home & Garden"}]})
  .reply(200, {"value":[{"id":{"metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","dimension":{"city":"Manila","category":"Shoes Handbags & Sunglasses"}},"timestampList":["2020-08-05T00:00:00Z","2020-08-06T00:00:00Z","2020-08-07T00:00:00Z","2020-08-08T00:00:00Z","2020-08-09T00:00:00Z","2020-08-10T00:00:00Z","2020-08-11T00:00:00Z","2020-08-12T00:00:00Z","2020-08-13T00:00:00Z","2020-08-14T00:00:00Z","2020-08-15T00:00:00Z","2020-08-16T00:00:00Z","2020-08-17T00:00:00Z","2020-08-18T00:00:00Z","2020-08-19T00:00:00Z","2020-08-20T00:00:00Z","2020-08-21T00:00:00Z","2020-08-22T00:00:00Z","2020-08-23T00:00:00Z","2020-08-24T00:00:00Z","2020-08-25T00:00:00Z","2020-08-26T00:00:00Z","2020-08-27T00:00:00Z","2020-08-28T00:00:00Z","2020-08-29T00:00:00Z","2020-08-30T00:00:00Z","2020-08-31T00:00:00Z","2020-09-01T00:00:00Z","2020-09-02T00:00:00Z","2020-09-03T00:00:00Z","2020-09-04T00:00:00Z"],"valueList":[6264455,6143905.2,4201741.2,3425373.8000000003,3656562,5064309.4,5237066.800000001,4631166.600000001,4382529.2,3578532.8000000003,3285258.6,5501434,6234598.2,6182013,6142358.600000001,6086747.800000001,4135463.4000000004,3398402.8000000003,5624620,6302798.2,6235636,6227662,6183055.800000001,4140718.6,3406581.2,5622781.4,6279117,6336467,6332000.800000001,6287129.2,4197455.8]},{"id":{"metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","dimension":{"city":"Cairo","category":"Home & Garden"}},"timestampList":["2020-08-05T00:00:00Z","2020-08-06T00:00:00Z","2020-08-07T00:00:00Z","2020-08-08T00:00:00Z","2020-08-09T00:00:00Z","2020-08-10T00:00:00Z","2020-08-11T00:00:00Z","2020-08-12T00:00:00Z","2020-08-13T00:00:00Z","2020-08-14T00:00:00Z","2020-08-15T00:00:00Z","2020-08-16T00:00:00Z","2020-08-17T00:00:00Z","2020-08-18T00:00:00Z","2020-08-19T00:00:00Z","2020-08-20T00:00:00Z","2020-08-21T00:00:00Z","2020-08-22T00:00:00Z","2020-08-23T00:00:00Z","2020-08-24T00:00:00Z","2020-08-25T00:00:00Z","2020-08-26T00:00:00Z","2020-08-27T00:00:00Z","2020-08-28T00:00:00Z","2020-08-29T00:00:00Z","2020-08-30T00:00:00Z","2020-08-31T00:00:00Z","2020-09-01T00:00:00Z","2020-09-02T00:00:00Z","2020-09-03T00:00:00Z","2020-09-04T00:00:00Z"],"valueList":[4694.2,4741.400000000001,4060.2000000000003,2324,2783.8,4648,4862.6,4685.2,4578.6,3682,2327.8,2983,4783.2,4997.6,5108,4773.2,3915.6000000000004,2638.4,3182,5056,5200.200000000001,5022.400000000001,5359.6,4518.2,2684.8,3235.6000000000004,4845.2,4821,5200,5068,4024.4]}]}, [
  'Content-Length',
  '2426',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '881a9bd4-a104-4080-a063-efd4eb4f6dde',
  'x-envoy-upstream-service-time',
  '345',
  'apim-request-id',
  '881a9bd4-a104-4080-a063-efd4eb4f6dde',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 15 Jan 2021 08:41:22 GMT'
]);