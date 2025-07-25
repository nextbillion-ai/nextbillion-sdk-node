// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trip', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.skynet.trip.retrieve('id', { key: 'key=API_KEY' });
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
    const response = await client.skynet.trip.retrieve('id', { key: 'key=API_KEY', cluster: 'america' });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.skynet.trip.update('id', { key: 'key=API_KEY', asset_id: 'asset_id' });
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
    const response = await client.skynet.trip.update('id', {
      key: 'key=API_KEY',
      asset_id: 'asset_id',
      cluster: 'america',
      attributes: '{\n  "shift_timing": "0800-1700",\n  "driver_name": "John"\n}',
      description: 'description',
      meta_data: '"meta_data":["Scheduled Trip", "Custom Deliveries"]',
      name: '"name": "Employee Pickup"',
      stops: [
        {
          geofence_id: 'geofence_id',
          meta_data: '"meta_data":["Staff Entry Point", "Biometric checkpoint"]',
          name: '"name":"Head Office"',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.skynet.trip.delete('id', { key: 'key=API_KEY' });
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
    const response = await client.skynet.trip.delete('id', { key: 'key=API_KEY', cluster: 'america' });
  });

  // skipped: tests are disabled for the time being
  test.skip('end: only required params', async () => {
    const responsePromise = client.skynet.trip.end({ key: 'key=API_KEY', id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('end: required and optional params', async () => {
    const response = await client.skynet.trip.end({ key: 'key=API_KEY', id: 'id', cluster: 'america' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSummary: only required params', async () => {
    const responsePromise = client.skynet.trip.retrieveSummary('id', { key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveSummary: required and optional params', async () => {
    const response = await client.skynet.trip.retrieveSummary('id', {
      key: 'key=API_KEY',
      cluster: 'america',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('start: only required params', async () => {
    const responsePromise = client.skynet.trip.start({ key: 'key=API_KEY', asset_id: 'asset_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('start: required and optional params', async () => {
    const response = await client.skynet.trip.start({
      key: 'key=API_KEY',
      asset_id: 'asset_id',
      cluster: 'america',
      attributes: '{\n  "shift_timing": "0800-1700",\n  "driver_name": "John"\n}',
      custom_id: 'custom_id',
      description: 'description',
      meta_data: '"meta_data":["Scheduled Trip", "Custom Deliveries"]',
      name: '"name": "Employee Pickup"',
      stops: [
        {
          geofence_id: 'geofence_id',
          meta_data: '"meta_data":["Staff Entry Point", "Biometric checkpoint"]',
          name: '"name":"Head Office"',
        },
      ],
    });
  });
});
