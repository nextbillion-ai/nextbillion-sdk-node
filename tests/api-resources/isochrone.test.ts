// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource isochrone', () => {
  // skipped: tests are disabled for the time being
  test.skip('compute: only required params', async () => {
    const responsePromise = client.isochrone.compute({
      contours_meters: 0,
      contours_minutes: 0,
      coordinates: 'coordinates=1.29363713,103.8383112',
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
  test.skip('compute: required and optional params', async () => {
    const response = await client.isochrone.compute({
      contours_meters: 0,
      contours_minutes: 0,
      coordinates: 'coordinates=1.29363713,103.8383112',
      key: 'key=API_KEY',
      contours_colors: 'contours_colors=ff0000,bf4040',
      denoise: 0,
      departure_time: 0,
      generalize: 0,
      mode: '`car`',
      polygons: true,
    });
  });
});
