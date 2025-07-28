// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource browse', () => {
  // skipped: tests are disabled for the time being
  test.skip('search: only required params', async () => {
    const responsePromise = client.browse.search({ key: 'key=API_KEY' });
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
    const response = await client.browse.search({
      key: 'key=API_KEY',
      at: 'at=52.5308,13.3856',
      categories: 'categories: schools',
      in: 'in=countryCode:CAN,MEX,USA',
      lang: 'lang=en',
      limit: 0,
    });
  });
});
