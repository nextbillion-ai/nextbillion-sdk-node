// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-ai';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource driverAssignment', () => {
  // skipped: tests are disabled for the time being
  test.skip('assign: only required params', async () => {
    const responsePromise = client.optimization.driverAssignment.assign({
      key: 'key=API_KEY',
      filter: {},
      orders: [{ id: 'id', pickup: {} }],
      vehicles: [{ id: 'id', location: {} }],
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
  test.skip('assign: required and optional params', async () => {
    const response = await client.optimization.driverAssignment.assign({
      key: 'key=API_KEY',
      filter: { driving_distance: 0, pickup_eta: 0, radius: 0 },
      orders: [
        {
          id: 'id',
          pickup: { lat: 0, lng: 0 },
          attributes: {},
          dropoffs: [{ lat: 0, lng: 0 }],
          priority: 0,
          service_time: 0,
          vehicle_preferences: {
            exclude_all_of_attributes: [
              {
                attribute: '"attribute": "driver_rating"',
                operator: '"operator":"<"',
                value: '"value": "4"',
              },
            ],
            required_all_of_attributes: [
              {
                attribute: '"attribute": "driver_rating"',
                operator: '"operator":"=="',
                value: '"value": "4"',
              },
            ],
            required_any_of_attributes: [
              {
                attribute: '"attribute": "driver_rating"',
                operator: '"operator":">"',
                value: '"value": "4"',
              },
            ],
          },
        },
      ],
      vehicles: [
        {
          id: 'id',
          location: { lat: 0, lng: 0 },
          attributes: '"attributes":{\n    "driver_rating": "4.0",\n    "trip_types": "premium"\n  }',
          priority: 0,
          remaining_waypoints: [{ lat: -90, lon: -180 }],
        },
      ],
      options: {
        alternate_assignments: 0,
        dropoff_details: true,
        order_attribute_priority_mappings: [
          {
            attribute: '"attribute": "driver_rating"',
            operator: '"operator":"=="',
            priority: 'priority',
            value: '"value": "4"',
          },
        ],
        travel_cost: 'driving_eta',
        vehicle_attribute_priority_mappings: [
          {
            attribute: '"attribute": "driver_rating"',
            operator: '"operator":"=="',
            priority: 'priority',
            value: '"value": "4"',
          },
        ],
      },
    });
  });
});
