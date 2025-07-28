// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveAround: only required params', async () => {
    const responsePromise = client.skynet.search.retrieveAround({
      center: '56.597801,43.967836',
      key: 'key=API_KEY',
      radius: 0,
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
  test.skip('retrieveAround: required and optional params', async () => {
    const response = await client.skynet.search.retrieveAround({
      center: '56.597801,43.967836',
      key: 'key=API_KEY',
      radius: 0,
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveBound: only required params', async () => {
    const responsePromise = client.skynet.search.retrieveBound({
      bound: 'bounds=44.7664,-0.6941|44.9206,-0.4639',
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
  test.skip('retrieveBound: required and optional params', async () => {
    const response = await client.skynet.search.retrieveBound({
      bound: 'bounds=44.7664,-0.6941|44.9206,-0.4639',
      key: 'key=API_KEY',
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
