// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource location', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveLast: only required params', async () => {
    const responsePromise = client.skynet.asset.location.retrieveLast('id', { key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLast: required and optional params', async () => {
    const response = await client.skynet.asset.location.retrieveLast('id', {
      key: 'key=API_KEY',
      cluster: 'america',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveList: only required params', async () => {
    const responsePromise = client.skynet.asset.location.retrieveList('id', { key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveList: required and optional params', async () => {
    const response = await client.skynet.asset.location.retrieveList('id', {
      key: 'key=API_KEY',
      cluster: 'america',
      correction: 'correction=mapmatch=1,interpolate=0,mode=`car`',
      end_time: 0,
      geometry_type: '`polyline`',
      pn: 0,
      ps: 500,
      start_time: 0,
    });
  });
});
