// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource directions', () => {
  // skipped: tests are disabled for the time being
  test.skip('computeRoute: only required params', async () => {
    const responsePromise = client.directions.computeRoute({
      destination: '41.349302,2.136480',
      origin: '41.349302,2.136480',
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
  test.skip('computeRoute: required and optional params', async () => {
    const response = await client.directions.computeRoute({
      destination: '41.349302,2.136480',
      origin: '41.349302,2.136480',
      waypoints: 'waypoints',
    });
  });
});
