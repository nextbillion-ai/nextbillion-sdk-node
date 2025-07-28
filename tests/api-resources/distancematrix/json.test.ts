// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-ai';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource json', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.distancematrix.json.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.distancematrix.json.retrieve({
      destinations: 'destinations=41.349302,2.136480|41.389925,2.136258|41.357961,2.097878',
      key: 'key=API_KEY',
      origins: 'origins:41.349302,2.136480|41.389925,2.136258|41.357961,2.097878',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.distancematrix.json.retrieve({
      destinations: 'destinations=41.349302,2.136480|41.389925,2.136258|41.357961,2.097878',
      key: 'key=API_KEY',
      origins: 'origins:41.349302,2.136480|41.389925,2.136258|41.357961,2.097878',
      approaches: '`unrestricted`',
      avoid: 'toll',
      bearings: 'bearings=0,180;0,180',
      mode: '`car`',
      route_failed_prompt: true,
    });
  });
});
