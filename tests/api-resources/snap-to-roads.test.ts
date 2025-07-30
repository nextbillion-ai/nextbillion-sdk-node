// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource snapToRoads', () => {
  // skipped: tests are disabled for the time being
  test.skip('snap: only required params', async () => {
    const responsePromise = client.snapToRoads.snap({
      key: 'key=API_KEY',
      path: 'path=41.38602272,2.17621539|41.38312885,2.17207083|41.38157854,2.17906668|41.38288511,2.18186215',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('snap: required and optional params', async () => {
    const response = await client.snapToRoads.snap({
      key: 'key=API_KEY',
      path: 'path=41.38602272,2.17621539|41.38312885,2.17207083|41.38157854,2.17906668|41.38288511,2.18186215',
      approaches: 'unrestricted',
      avoid: 'toll',
      geometry: 'polyline',
      mode: 'car',
      option: 'flexible',
      radiuses: 'radiuses=14|16|14',
      road_info: 'max_speed',
      timestamps: 'timestamps=1656570000|1656570015|1656570030',
      tolerate_outlier: true,
    });
  });
});
