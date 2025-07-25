// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource geocode', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.geocode.retrieve({ key: 'key=API_KEY', q: 'q=125, Berliner, berlin' });
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
    const response = await client.geocode.retrieve({
      key: 'key=API_KEY',
      q: 'q=125, Berliner, berlin',
      at: 'at=52.5308,13.3856',
      in: 'in=countryCode:CAN,MEX,USA',
      lang: 'lang=en',
      limit: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('batchCreate: only required params', async () => {
    const responsePromise = client.geocode.batchCreate({
      key: 'key=API_KEY',
      body: [{ q: '"q":"125, Berliner, berlin"' }],
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
  test.skip('batchCreate: required and optional params', async () => {
    const response = await client.geocode.batchCreate({
      key: 'key=API_KEY',
      body: [
        {
          q: '"q":"125, Berliner, berlin"',
          at: '"at": "52.5308,13.3856"',
          in: '"in":"countryCode:CAN,MEX,USA"',
          lang: '"lang":"en"',
          limit: 0,
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('structuredRetrieve: only required params', async () => {
    const responsePromise = client.geocode.structuredRetrieve({
      countryCode: 'countryCode',
      key: 'key=API_KEY',
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
  test.skip('structuredRetrieve: required and optional params', async () => {
    const response = await client.geocode.structuredRetrieve({
      countryCode: 'countryCode',
      key: 'key=API_KEY',
      at: 'at=52.5308,13.3856',
      city: 'city',
      county: 'county',
      houseNumber: 'houseNumber',
      in: 'in=circle:52.53,13.38;r=10000',
      limit: 0,
      postalCode: 'postalCode',
      state: 'state',
      street: 'street',
    });
  });
});
