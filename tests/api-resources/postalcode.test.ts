// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource postalcode', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveCoordinates: only required params', async () => {
    const responsePromise = client.postalcode.retrieveCoordinates({ key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveCoordinates: required and optional params', async () => {
    const response = await client.postalcode.retrieveCoordinates({
      key: 'key=API_KEY',
      at: { lat: 0, lng: 0 },
      country: 'country',
      format: '`geojson`',
      postalcode: 'postalcode',
    });
  });
});
