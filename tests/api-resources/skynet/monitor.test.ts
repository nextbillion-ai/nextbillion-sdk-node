// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-ai';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource monitor', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.skynet.monitor.create({
      key: 'key=API_KEY',
      tags: ['string'],
      type: '`enter`',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.skynet.monitor.create({
      key: 'key=API_KEY',
      tags: ['string'],
      type: '`enter`',
      cluster: 'america',
      custom_id: 'custom_id',
      description: 'description',
      geofence_config: { geofence_ids: ['string'] },
      geofence_ids: ['string'],
      idle_config: { distance_tolerance: 0, time_tolerance: 0 },
      match_filter: {
        include_all_of_attributes: '{\n  "asset_type": "delivery",\n  "area": "Los Angeles downtown"\n}',
        include_any_of_attributes: '{\n  "asset_type": "delivery",\n  "area": "Los Angeles downtown"\n}',
      },
      meta_data: {},
      name: 'name',
      speeding_config: { customer_speed_limit: 0, time_tolerance: 0, use_admin_speed_limit: true },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.skynet.monitor.retrieve('id', { key: 'key=API_KEY' });
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
    const response = await client.skynet.monitor.retrieve('id', { key: 'key=API_KEY' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.skynet.monitor.update('id', { key: 'key=API_KEY' });
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
    const response = await client.skynet.monitor.update('id', {
      key: 'key=API_KEY',
      description: 'description',
      geofence_config: { geofence_ids: ['string'] },
      geofence_ids: ['string'],
      idle_config: { distance_tolerance: 0, time_tolerance: 0 },
      match_filter: {
        include_all_of_attributes: '{\n  "asset_type": "delivery",\n  "area": "Los Angeles downtown"\n}',
        include_any_of_attributes: '{\n  "asset_type": "delivery",\n  "area": "Los Angeles downtown"\n}',
      },
      meta_data: {},
      name: '"name":"warehouse_exit"',
      speeding_config: {
        customer_speed_limit: '"customer_speed_limit":8',
        time_tolerance: 0,
        use_admin_speed_limit: true,
      },
      tags: ['string'],
      type: '`enter`',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.skynet.monitor.delete('id', { key: 'key=API_KEY' });
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
    const response = await client.skynet.monitor.delete('id', { key: 'key=API_KEY' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveList: only required params', async () => {
    const responsePromise = client.skynet.monitor.retrieveList({ key: 'key=API_KEY' });
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
    const response = await client.skynet.monitor.retrieveList({
      key: 'key=API_KEY',
      cluster: 'america',
      pn: 0,
      ps: 100,
      sort: 'updated_at:desc',
      tags: 'tags=tag_1,tag_2',
    });
  });
});
