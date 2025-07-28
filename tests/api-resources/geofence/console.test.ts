// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource console', () => {
  // skipped: tests are disabled for the time being
  test.skip('preview: only required params', async () => {
    const responsePromise = client.geofence.console.preview({ type: '`circle`' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('preview: required and optional params', async () => {
    const response = await client.geofence.console.preview({
      type: '`circle`',
      circle: { center: { lat: 0, lon: 0 }, radius: 0 },
      custom_id: 'custom_id',
      isochrone: {
        coordinates: '"coordinates": "13.25805884,77.91083661"',
        contours_meter: 0,
        contours_minute: 0,
        denoise: 0,
        departure_time: 0,
        mode: '`car`',
      },
      meta_data: '{\n  "country": "USA",\n  "state": "California"\n}',
      name: '"name":"Los Angeles Downtown"',
      polygon: { geojson: { coordinates: [[0]], type: 'type' } },
      tags: ['"tags":["tags_1", "O69Am2Y4KL8q5Y5JuD-Fy-tdtEpkTRQo_ZYIK7"]'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('search: only required params', async () => {
    const responsePromise = client.geofence.console.search({ query: 'query' });
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
    const response = await client.geofence.console.search({ query: 'query' });
  });
});
