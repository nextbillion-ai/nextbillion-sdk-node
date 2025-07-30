// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource navigation', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveRoute: only required params', async () => {
    const responsePromise = client.navigation.retrieveRoute({ key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRoute: required and optional params', async () => {
    const response = await client.navigation.retrieveRoute({
      key: 'key=API_KEY',
      altcount: 1,
      alternatives: true,
      approaches: '`unrestricted`',
      avoid: 'toll',
      bearings: 'bearings=0,180;0,180',
      destination: 'destination=41.349302,2.136480',
      geometry: '`polyline`',
      lang: 'lang=en',
      mode: '`car`',
      origin: 'origin=41.349302,2.136480',
      original_shape: 'original_shape=sbp}_Almgp`FnLuToKmKviB{eDlcGhpFvj@qbAwoA_mA',
      original_shape_type: 'polyline',
      overview: '`full`',
      waypoints: 'waypoints=41.349302,2.136480|41.349303,2.136481|41.349304,2.136482',
    });
  });
});
