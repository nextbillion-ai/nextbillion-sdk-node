// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource autocomplete', () => {
  // skipped: tests are disabled for the time being
  test.skip('suggest: only required params', async () => {
    const responsePromise = client.autocomplete.suggest({ key: 'key=API_KEY', q: 'q=125, Berliner, berlin' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('suggest: required and optional params', async () => {
    const response = await client.autocomplete.suggest({
      key: 'key=API_KEY',
      q: 'q=125, Berliner, berlin',
      at: 'at=52.5308,13.3856',
      in: 'in=countryCode:CAN,MEX,USA',
      lang: 'lang=en',
      limit: 0,
    });
  });
});
