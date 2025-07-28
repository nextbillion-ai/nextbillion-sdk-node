// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NextbillionSDK from 'nextbillion-sdk';

const client = new NextbillionSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v2', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveResult: only required params', async () => {
    const responsePromise = client.optimization.v2.retrieveResult({ id: 'id', key: 'key=API_KEY' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveResult: required and optional params', async () => {
    const response = await client.optimization.v2.retrieveResult({ id: 'id', key: 'key=API_KEY' });
  });

  // skipped: tests are disabled for the time being
  test.skip('submit: only required params', async () => {
    const responsePromise = client.optimization.v2.submit({
      key: 'key=API_KEY',
      locations: { location: ['string'] },
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.optimization.v2.submit({
      key: 'key=API_KEY',
      locations: { location: ['string'], id: 0, approaches: ['`unrestricted`'] },
      vehicles: [
        {
          id: 'id',
          location: { lat: 0, lng: 0 },
          attributes: '"attributes":{\n    "driver_rating": "4.0",\n    "trip_types": "premium"\n  }',
          priority: 0,
          remaining_waypoints: [{ lat: -90, lon: -180 }],
        },
      ],
      cost_matrix: [[0]],
      depots: [
        {
          id: '"id":"depot 1"',
          location_index: 0,
          description: '“description”:”Los_Angeles_depot”',
          service: 0,
          time_windows: [[0]],
        },
      ],
      description: '"description": "Sample Optimization"',
      distance_matrix: [[0]],
      duration_matrix: [[0]],
      existing_solution_id: 'existing_solution_id',
      jobs: [
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
      options: {
        constraint: { max_activity_waiting_time: 0, max_vehicle_overtime: 0, max_visit_lateness: 0 },
        grouping: {
          order_grouping: { grouping_diameter: 0 },
          proximity_factor: 0,
          route_grouping: { penalty_factor: 0, zone_diameter: 0, zone_source: '`system_generated`' },
        },
        objective: {
          allow_early_arrival: true,
          custom: { type: '`min`', value: '`vehicles`' },
          minimise_num_depots: true,
          solver_mode: '`flexible`',
          solving_time_limit: 0,
          travel_cost: '`duration`',
        },
        routing: {
          allow: ['taxi'],
          avoid: ['`toll`'],
          context: '`avgspeed`',
          cross_border: true,
          disable_cache: true,
          hazmat_type: ['`general`'],
          mode: '`car`',
          profiles:
            '"profiles":{\n    "mini-van":{\n        "mode": "car",\n        "avoid":["highway, toll"]\n        },\n    "trailer":{\n        "mode": "truck",\n        "truck_weight":12000,\n        "truck_size":"200, 210, 600",\n        "hazmat_type": ["general", "harmful_to_water"]\n        }\n    }\n',
          traffic_timestamp: 0,
          truck_axle_load: 0,
          truck_size: '"truck_size":"200,210,600"',
          truck_weight: 0,
        },
      },
      relations: [
        {
          steps: [{ type: '`start`', id: '"id":"Job 1"' }],
          type: '`in_same_route`',
          id: 0,
          max_duration: 0,
          min_duration: 0,
          vehicle: '"vehicle": "Vehicle 10"',
        },
      ],
      shipments: [
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
      solution: [
        {
          cost: 0,
          steps: [
            {
              id: '"id": "Job 10"',
              arrival: 0,
              type: '`start`',
              description: 'description',
              distance: 0,
              duration: 0,
              load: [0],
              location: [0],
              location_index: 0,
              service: 0,
              setup: 0,
              waiting_time: 0,
            },
          ],
          vehicle: 'vehicle',
          delivery: [0],
          description: 'description',
          distance: 0,
          duration: 0,
          geometry: '"geometry": "}ebGgcsxRE?CuDOYCYAG???"',
          pickup: [0],
          priority: 0,
          service: 0,
          setup: 0,
          waiting_time: 0,
        },
      ],
      unassigned: { jobs: ['string'], shipments: [['string']] },
      zones: [
        {
          id: 0,
          geofence_id: 'geofence_id',
          geometry: { coordinates: [[0]], description: 'description', type: '`Polygon`' },
        },
      ],
    });
  });
});
