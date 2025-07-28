// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-ai';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource polygon', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.skynet.search.polygon.create({
      key: 'key=API_KEY',
      polygon: { coordinates: [0], type: 'type' },
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
    const response = await client.skynet.search.polygon.create({
      key: 'key=API_KEY',
      polygon: { coordinates: [0], type: 'type' },
      filter: '"tag:delivery,truck"',
      match_filter: {
        include_all_of_attributes: '"shift_timing": "0800-1700","driver_name": "John"',
        include_any_of_attributes: 'include_any_of_attributes',
      },
      max_search_limit: true,
      pn: 0,
      ps: 0,
      sort: { sort_by: '`distance`', sort_destination: { lat: 0, lon: 0 }, sort_driving_mode: '`car`' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.skynet.search.polygon.list({
      key: 'key=API_KEY',
      polygon: 'polygon=17.4239,78.4590|17.4575,78.4624|17.4547,78.5483|17.4076,78.5527|17.4239,78.4590',
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
  test.skip('list: required and optional params', async () => {
    const response = await client.skynet.search.polygon.list({
      key: 'key=API_KEY',
      polygon: 'polygon=17.4239,78.4590|17.4575,78.4624|17.4547,78.5483|17.4076,78.5527|17.4239,78.4590',
      filter: 'filter=tag:delivery,truck',
      include_all_of_attributes: 'include_all_of_attributes=vehicle_type:pickup_truck|driver_name:John',
      include_any_of_attributes: 'include_any_of_attributes=vehicle_type:pickup_truck|driver_name:John',
      max_search_limit: true,
      pn: 0,
      ps: 100,
      sort_by: '`distance`',
      sort_destination: 'sort_destination= 34.0241,-118.2550',
      sort_driving_mode: '`car`',
    });
  });
});
