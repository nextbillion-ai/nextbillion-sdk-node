// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-ai';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource asset', () => {
  // skipped: tests are disabled for the time being
  test.skip('bind: only required params', async () => {
    const responsePromise = client.skynet.skynet.asset.bind('id', {
      key: 'key=API_KEY',
      device_id: 'device_id',
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
  test.skip('bind: required and optional params', async () => {
    const response = await client.skynet.skynet.asset.bind('id', {
      key: 'key=API_KEY',
      device_id: 'device_id',
    });
  });
});
