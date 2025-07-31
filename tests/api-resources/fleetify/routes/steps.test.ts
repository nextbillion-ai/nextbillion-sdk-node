// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource steps', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.fleetify.routes.steps.create('routeID', {
      key: 'key',
      arrival: 0,
      location: [0],
      position: 0,
      type: '`start`',
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
    const response = await client.fleetify.routes.steps.create('routeID', {
      key: 'key',
      arrival: 0,
      location: [0],
      position: 0,
      type: '`start`',
      address: '"address": "503, Dublin Drive, Los Angeles, California - 500674",',
      completion_mode: '`manual`',
      document_template_id: 'document_template_id',
      duration: 0,
      geofence_config: { radius: 0, type: 'circle' },
      meta: {
        customer_name: '"customer_name": "Chandler Bing"',
        customer_phone_number: '"customer_phone_number": "+1 707 234 1234"',
        instructions: '"instructions": "Customer asked not to ring the doorbell."',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.fleetify.routes.steps.update('stepID', {
      routeID: 'routeID',
      key: 'key',
      arrival: 0,
      position: 0,
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
  test.skip('update: required and optional params', async () => {
    const response = await client.fleetify.routes.steps.update('stepID', {
      routeID: 'routeID',
      key: 'key',
      arrival: 0,
      position: 0,
      address: '"address": "503, Dublin Drive, Los Angeles, California - 500674",',
      completion_mode: '`manual`',
      document_template_id: 'document_template_id',
      duration: 0,
      geofence_config: { radius: 0, type: 'circle' },
      location: [0],
      meta: {
        customer_name: '"customer_name": "Chandler Bing"',
        customer_phone_number: '"customer_phone_number": "+1 707 234 1234"',
        instructions: '"instructions": "Customer asked not to ring the doorbell."',
      },
      type: '`start`',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.fleetify.routes.steps.delete('stepID', { routeID: 'routeID', key: 'key' });
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
    const response = await client.fleetify.routes.steps.delete('stepID', { routeID: 'routeID', key: 'key' });
  });

  // skipped: tests are disabled for the time being
  test.skip('complete: only required params', async () => {
    const responsePromise = client.fleetify.routes.steps.complete('stepID', {
      routeID: 'routeID',
      key: 'key',
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
  test.skip('complete: required and optional params', async () => {
    const response = await client.fleetify.routes.steps.complete('stepID', {
      routeID: 'routeID',
      key: 'key',
      document: {},
      mode: 'mode',
      status: 'status',
    });
  });
});
