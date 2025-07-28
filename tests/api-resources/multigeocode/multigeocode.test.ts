// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource multigeocode', () => {
  // skipped: tests are disabled for the time being
  test.skip('search: only required params', async () => {
    const responsePromise = client.multigeocode.search({
      key: 'key=API_KEY',
      at: { lat: 0, lng: 0 },
      query: '“query”: “Taj Mahal”',
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
  test.skip('search: required and optional params', async () => {
    const response = await client.multigeocode.search({
      key: 'key=API_KEY',
      at: { lat: 0, lng: 0 },
      query: '“query”: “Taj Mahal”',
      city: '“city”: “Glendale”',
      country: '“country”:”IND”',
      district: '“district”: “City Center”',
      limit: 0,
      radius: '“radius”: “10m”',
      state: '“state”: “California”',
      street: '“street”: “Americana Way”',
      subDistrict: '“subDistrict”: “Golkonda”',
    });
  });
});
