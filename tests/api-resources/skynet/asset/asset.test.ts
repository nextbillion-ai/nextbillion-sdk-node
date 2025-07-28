// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource asset', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.skynet.asset.create({ key: 'key=API_KEY' });
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
    const response = await client.skynet.asset.create({
      key: 'key=API_KEY',
      cluster: 'america',
      attributes: '{\n  "shift_timing": "0800-1700",\n  "driver_name": "John"\n}',
      custom_id: 'custom_id',
      description: 'description',
      meta_data: {},
      name: 'name',
      tags: ['string'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.skynet.asset.retrieve('id', { key: 'key=API_KEY' });
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
    const response = await client.skynet.asset.retrieve('id', { key: 'key=API_KEY', cluster: 'america' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.skynet.asset.update('id', { key: 'key=API_KEY' });
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
    const response = await client.skynet.asset.update('id', {
      key: 'key=API_KEY',
      cluster: 'america',
      attributes: '{\n  "shift_timing": "0800-1700",\n  "driver_name": "John"\n}',
      description: 'description',
      meta_data: {},
      name: 'name',
      tags: ['string'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.skynet.asset.list({ key: 'key=API_KEY' });
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
    const response = await client.skynet.asset.list({
      key: 'key=API_KEY',
      cluster: 'america',
      include_all_of_attributes: 'include_all_of_attributes=vehicle_type:pickup_truck|driver_name:John',
      include_any_of_attributes: 'include_any_of_attributes=vehicle_type:pickup_truck|driver_name:John',
      pn: 0,
      ps: 100,
      sort: 'updated_at:desc',
      tags: 'tags=tag_1,tag_2',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.skynet.asset.delete('id', { key: 'key=API_KEY' });
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
    const response = await client.skynet.asset.delete('id', { key: 'key=API_KEY', cluster: 'america' });
  });

  // skipped: tests are disabled for the time being
  test.skip('bind: only required params', async () => {
    const responsePromise = client.skynet.asset.bind('id', { key: 'key=API_KEY', device_id: 'device_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('bind: required and optional params', async () => {
    const response = await client.skynet.asset.bind('id', { key: 'key=API_KEY', device_id: 'device_id' });
  });

  // skipped: tests are disabled for the time being
  test.skip('track: only required params', async () => {
    const responsePromise = client.skynet.asset.track('id', {
      key: 'key=API_KEY',
      device_id: 'device_id',
      locations: { location: { lat: 0, lon: 0 }, timestamp: 0 },
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
  test.skip('track: required and optional params', async () => {
    const response = await client.skynet.asset.track('id', {
      key: 'key=API_KEY',
      device_id: 'device_id',
      locations: {
        location: { lat: 0, lon: 0 },
        timestamp: 0,
        accuracy: 0,
        altitude: 0,
        battery_level: 0,
        bearing: 0,
        meta_data: '{\n  "driver_name": "Tyler Durden",\n  "type": "parcel"\n}',
        speed: 0,
        tracking_mode: 'tracking_mode',
      },
      cluster: 'america',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateAttributes: only required params', async () => {
    const responsePromise = client.skynet.asset.updateAttributes('id', {
      key: 'key=API_KEY',
      attributes: '{\n  "shift_timing": "0800-1700",\n  "driver_name": "John"\n}',
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
  test.skip('updateAttributes: required and optional params', async () => {
    const response = await client.skynet.asset.updateAttributes('id', {
      key: 'key=API_KEY',
      attributes: '{\n  "shift_timing": "0800-1700",\n  "driver_name": "John"\n}',
    });
  });
});
