// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource directions', () => {
  // skipped: tests are disabled for the time being
  test.skip('computeRoute: only required params', async () => {
    const responsePromise = client.directions.computeRoute({
      destination: '41.349302,2.136480',
      key: 'key',
      origin: '41.349302,2.136480',
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
  test.skip('computeRoute: required and optional params', async () => {
    const response = await client.directions.computeRoute({
      destination: '41.349302,2.136480',
      key: 'key',
      origin: '41.349302,2.136480',
      altcount: 1,
      alternatives: true,
      approaches: 'unrestricted;;curb;',
      avoid: 'toll',
      bearings: '0,180;0,180',
      cross_border: true,
      departure_time: 0,
      drive_time_limits: '500,400,400',
      emission_class: 'euro0',
      exclude: 'toll',
      geometry: 'polyline',
      hazmat_type: 'general',
      mode: 'car',
      option: 'fast',
      overview: 'full',
      rest_times: '500,300,100',
      road_info: 'max_speed',
      route_type: 'fastest',
      steps: true,
      truck_axle_load: 0,
      truck_size: '200,210,600',
      truck_weight: 1,
      turn_angle_range: 0,
      waypoints: '41.349302,2.136480|41.349303,2.136481|41.349304,2.136482',
    });
  });
});
