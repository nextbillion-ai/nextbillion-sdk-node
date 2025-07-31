// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource geofence', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.geofence.create({ key: 'key=API_KEY', type: 'circle' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.geofence.create({
      key: 'key=API_KEY',
      type: 'circle',
      circle: { center: { lat: 0, lon: 0 }, radius: 0 },
      custom_id: 'custom_id',
      isochrone: {
        coordinates: '"coordinates": "13.25805884,77.91083661"',
        contours_meter: 0,
        contours_minute: 0,
        denoise: 0,
        departure_time: 0,
        mode: 'car',
      },
      meta_data: '{\n  "country": "USA",\n  "state": "California"\n}',
      name: '"name":"Los Angeles Downtown"',
      polygon: { geojson: { coordinates: [[0]], type: 'type' } },
      tags: ['"tags":["tags_1", "O69Am2Y4KL8q5Y5JuD-Fy-tdtEpkTRQo_ZYIK7"]'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.geofence.retrieve('id', { key: 'key=API_KEY' });
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
    const response = await client.geofence.retrieve('id', { key: 'key=API_KEY' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.geofence.update('id', { key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.geofence.update('id', {
      key: 'key=API_KEY',
      circle: { center: { lat: 0, lon: 0 }, radius: 0 },
      isochrone: {
        contours_meter: 0,
        contours_minute: 0,
        coordinates: '"coordinates": "13.25805884388484,77.91083661048299"',
        denoise: 0,
        departure_time: 0,
        mode: '“mode”:”car”',
      },
      meta_data: '',
      name: '"name":"Los Angeles Downtown"',
      polygon: { geojson: { geometry: [[0]], type: 'type' } },
      tags: ['"tags":["tags_1", "O69Am2Y4KL8q5Y5JuD-Fy-tdtEpkTRQo_ZYIK7"]'],
      type: 'circle',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.geofence.list({ key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.geofence.list({
      key: 'key=API_KEY',
      pn: 0,
      ps: 100,
      tags: 'tags=tags_1,O69Am2Y4KL8q5Y5JuD-Fy-tdtEpkTRQo_ZYIK7',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.geofence.delete('id', { key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.geofence.delete('id', { key: 'key=API_KEY' });
  });

  // skipped: tests are disabled for the time being
  test.skip('contains: only required params', async () => {
    const responsePromise = client.geofence.contains({
      key: 'key=API_KEY',
      locations: '13.25805884388484,77.91083661048299|13.25805884388484,77.91083661048299',
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
  test.skip('contains: required and optional params', async () => {
    const response = await client.geofence.contains({
      key: 'key=API_KEY',
      locations: '13.25805884388484,77.91083661048299|13.25805884388484,77.91083661048299',
      geofences: 'geofences=80d1fa55-6287-4da0-93ac-2fc162d0a228,70d1fa55-1287-4da0-93ac-2fc162d0a228',
      verbose: 'verbose=true',
    });
  });
});
