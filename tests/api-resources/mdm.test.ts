// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from '@nbai/sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mdm', () => {
  // skipped: tests are disabled for the time being
  test.skip('createDistanceMatrix: only required params', async () => {
    const responsePromise = client.mdm.createDistanceMatrix({
      key: 'key=API_KEY',
      option: 'flexible',
      origins: 'origins',
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
  test.skip('createDistanceMatrix: required and optional params', async () => {
    const response = await client.mdm.createDistanceMatrix({
      key: 'key=API_KEY',
      option: 'flexible',
      origins: 'origins',
      spliter: 'od_number_spliter',
      area: 'singapore',
      avoid: '`toll`',
      cross_border: true,
      departure_time: 0,
      destinations: 'destinations',
      destinations_approach: '`unrestricted`',
      hazmat_type: '`general`',
      mode: '`car`',
      origins_approach: '`unrestricted`',
      route_type: '`fastest`',
      truck_axle_load: 0,
      truck_size: '"truck_size"=200,210,600',
      truck_weight: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getDistanceMatrixStatus: only required params', async () => {
    const responsePromise = client.mdm.getDistanceMatrixStatus({ id: 'id', key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getDistanceMatrixStatus: required and optional params', async () => {
    const response = await client.mdm.getDistanceMatrixStatus({ id: 'id', key: 'key=API_KEY' });
  });
});
