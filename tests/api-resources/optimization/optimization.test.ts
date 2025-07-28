// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-ai';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource optimization', () => {
  // skipped: tests are disabled for the time being
  test.skip('compute: only required params', async () => {
    const responsePromise = client.optimization.compute({
      coordinates:
        'coordinates=41.35544869444527,2.0747669962025292|41.37498154684205,2.103705 4530396886|41.38772862000152,2.1311887061315526',
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
  test.skip('compute: required and optional params', async () => {
    const response = await client.optimization.compute({
      coordinates:
        'coordinates=41.35544869444527,2.0747669962025292|41.37498154684205,2.103705 4530396886|41.38772862000152,2.1311887061315526',
      key: 'key=API_KEY',
      approaches: '`unrestricted`',
      destination: '`any`',
      geometries: '`polyline`',
      mode: '`car`',
      roundtrip: true,
      source: '`any`',
      with_geometry: true,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('reOptimize: only required params', async () => {
    const responsePromise = client.optimization.reOptimize({
      key: 'key=API_KEY',
      existing_request_id: 'existing_request_id',
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
  test.skip('reOptimize: required and optional params', async () => {
    const response = await client.optimization.reOptimize({
      key: 'key=API_KEY',
      existing_request_id: 'existing_request_id',
      job_changes: {
        add: [
          {
            id: '"id":"Job 1"',
            location_index: 0,
            delivery: [0],
            depot_ids: ['string'],
            description: 'description',
            follow_lifo_order: true,
            incompatible_load_types: ['string'],
            joint_order: 0,
            load_types: ['string'],
            max_visit_lateness: 0,
            metadata: '{\n  "contact": "212-456-7890",\n  "metaId": 1234\n}',
            outsourcing_cost: 0,
            pickup: [0],
            priority: 0,
            revenue: 0,
            sequence_order: 0,
            service: 0,
            setup: 0,
            skills: [1],
            time_windows: [[0]],
            volume: { alignment: '`strict`', depth: 0, height: 0, width: 0 },
            zones: [0],
          },
        ],
        modify: [
          {
            id: '"id":"Job 1"',
            location_index: 0,
            delivery: [0],
            depot_ids: ['string'],
            description: 'description',
            follow_lifo_order: true,
            incompatible_load_types: ['string'],
            joint_order: 0,
            load_types: ['string'],
            max_visit_lateness: 0,
            metadata: '{\n  "contact": "212-456-7890",\n  "metaId": 1234\n}',
            outsourcing_cost: 0,
            pickup: [0],
            priority: 0,
            revenue: 0,
            sequence_order: 0,
            service: 0,
            setup: 0,
            skills: [1],
            time_windows: [[0]],
            volume: { alignment: '`strict`', depth: 0, height: 0, width: 0 },
            zones: [0],
          },
        ],
        remove: ['string'],
      },
      locations: ['string'],
      shipment_changes: {
        add: [
          {
            delivery: {
              id: '"id":"Shipment Delivery 1"',
              location_index: 0,
              description: 'description',
              max_visit_lateness: 0,
              metadata:
                '{\n  "notes": "dropoff at the patio",\n  "contact": "212-456-7890",\n  "metaId": 1234\n}',
              sequence_order: 0,
              service: 0,
              setup: 0,
              time_windows: [[0]],
            },
            pickup: {
              id: '"id": "Shipment Pickup 1"',
              location_index: 0,
              description: 'description',
              max_visit_lateness: 0,
              metadata:
                '{\n  "notes": "involves fragile items",\n  "contact": "212-456-7890",\n  "metaId": 1234\n}',
              sequence_order: 0,
              service: 0,
              setup: 0,
              time_windows: [[0]],
            },
            amount: [0],
            follow_lifo_order: true,
            incompatible_load_types: ['string'],
            joint_order: 0,
            load_types: ['string'],
            max_time_in_vehicle: 0,
            outsourcing_cost: 0,
            priority: 0,
            revenue: 0,
            skills: [0],
            volume: { alignment: '`strict`', depth: 0, height: 0, width: 0 },
            zones: [0],
          },
        ],
        modify: [
          {
            delivery: {
              id: '"id":"Shipment Delivery 1"',
              location_index: 0,
              description: 'description',
              max_visit_lateness: 0,
              metadata:
                '{\n  "notes": "dropoff at the patio",\n  "contact": "212-456-7890",\n  "metaId": 1234\n}',
              sequence_order: 0,
              service: 0,
              setup: 0,
              time_windows: [[0]],
            },
            pickup: {
              id: '"id": "Shipment Pickup 1"',
              location_index: 0,
              description: 'description',
              max_visit_lateness: 0,
              metadata:
                '{\n  "notes": "involves fragile items",\n  "contact": "212-456-7890",\n  "metaId": 1234\n}',
              sequence_order: 0,
              service: 0,
              setup: 0,
              time_windows: [[0]],
            },
            amount: [0],
            follow_lifo_order: true,
            incompatible_load_types: ['string'],
            joint_order: 0,
            load_types: ['string'],
            max_time_in_vehicle: 0,
            outsourcing_cost: 0,
            priority: 0,
            revenue: 0,
            skills: [0],
            volume: { alignment: '`strict`', depth: 0, height: 0, width: 0 },
            zones: [0],
          },
        ],
        remove: ['string'],
      },
      vehicle_changes: {
        add: [
          {
            id: 'id',
            location: { lat: 0, lng: 0 },
            attributes: '"attributes":{\n    "driver_rating": "4.0",\n    "trip_types": "premium"\n  }',
            priority: 0,
            remaining_waypoints: [{ lat: -90, lon: -180 }],
          },
        ],
        modify: {
          id: 'id',
          location: { lat: 0, lng: 0 },
          attributes: '"attributes":{\n    "driver_rating": "4.0",\n    "trip_types": "premium"\n  }',
          priority: 0,
          remaining_waypoints: [{ lat: -90, lon: -180 }],
        },
        remove: ['string'],
      },
    });
  });
});
