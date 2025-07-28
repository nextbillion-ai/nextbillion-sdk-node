// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource skynet', () => {
  // skipped: tests are disabled for the time being
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.skynet.subscribe({ action: '`TRIP_SUBSCRIBE`' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.skynet.subscribe({
      action: '`TRIP_SUBSCRIBE`',
      id: 'id',
      params: { id: 'id' },
    });
  });
});
