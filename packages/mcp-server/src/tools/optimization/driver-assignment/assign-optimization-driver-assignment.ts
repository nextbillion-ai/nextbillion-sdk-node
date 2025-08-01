// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'optimization.driver_assignment',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/optimization/driver-assignment/v1',
  operationId: 'assignDriversToOrders',
};

export const tool: Tool = {
  name: 'assign_optimization_driver_assignment',
  description:
    'Assigns available drivers (vehicles) to open orders based on specified criteria and constraints.',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      filter: {
        type: 'object',
        description:
          "Specify the filtering criterion for the vehicles with respect to each order's location. filter is a mandatory input for all requests.",
        properties: {
          driving_distance: {
            type: 'number',
            description:
              'Defines a driving_distance filter, in meters. If a vehicle needs to drive further than this distance to reach a pickup location, it will not be assigned to that order. Valid range of values for this filter is \\[1, 10000\\].',
          },
          pickup_eta: {
            type: 'integer',
            description:
              'Specify a duration, in seconds, which will be used to filter out ineligible vehicles for each order. Any vehicle which would take more time than specified here, to reach the pickup location of a given order, will be ruled out for assignment for that particular order. Valid values for pickup_eta are \\[1, 3600\\].',
          },
          radius: {
            type: 'number',
            description:
              'Specify a radius, in meters, which will be used to filter out ineligible vehicles for each order. The pickup location of an order will act as the center of the circle when identifying eligible vehicles. Valid values for radius are \\[1, 10000\\].',
          },
        },
      },
      orders: {
        type: 'array',
        description:
          'Collects the details of open orders to be fulfilled. Each object represents one order. All requests must include orders as a mandatory input. A maximum of 200 orders is allowed per request.',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Specify a unique ID for the order.',
            },
            pickup: {
              type: 'object',
              description:
                'Specify the location coordinates of the pickup location of the order. This input is mandatory for each order.',
              properties: {
                lat: {
                  type: 'number',
                  description: 'Latitude of the pickup location.',
                },
                lng: {
                  type: 'number',
                  description: 'Longitude of the pickup location.',
                },
              },
            },
            attributes: {
              type: 'object',
              description:
                'Specify custom attributes for the orders. Each attribute should be created as a key:value pair. The **keys** provided can be used in options.order_attribute_priority_mappings to assign a custom priority for this order based on its attributes.\n\nThe maximum number of key:value pairs that can be specified under attributes for a given order, is limited to 30.',
            },
            dropoffs: {
              type: 'array',
              description:
                'Use this parameter to specify the location coordinates of the destination of the trip or the intermediate stops to be completed before it.\n\nPlease note\n\n*   The last location provided is treated as the destination of the trip.\n    \n*   dropoffs is mandatory when dropoff_details is set to **true**.',
              items: {
                type: 'object',
                properties: {
                  lat: {
                    type: 'number',
                    description: 'Latitude of the stop location.',
                  },
                  lng: {
                    type: 'number',
                    description: 'Longitude of the stop location.',
                  },
                },
              },
            },
            priority: {
              type: 'integer',
              description:
                'Specify the priority for this order. A higher value indicates a higher priority. When specified, it will override any priority score deduced from order_attribute_priority_mappings for this order. Valid values are \\[1, 10\\] and default is 0.',
            },
            service_time: {
              type: 'integer',
              description:
                'Specify the service time, in seconds, for the order. Service time is the duration that the driver is likely to wait at the pickup location after arriving. The impact of the service time is realized in the ETA for the "dropoff" type step.',
            },
            vehicle_preferences: {
              type: 'object',
              description:
                "Define custom preferences for task assignment based on vehicle's attributes. If multiple criteria are provided, they are evaluated using an AND condition—meaning all specified criteria must be met individually for a vehicle to be considered.\n\nFor example, if required_all_of_attributes, required_any_of_attributes, and exclude_all_of_attributes are all provided, an eligible vehicle must satisfy the following to be considered for assignments:\n\n1.  Meet all conditions specified in required_all_of_attributes.\n    \n2.  Meet at least one of the conditions listed in required_any_of_attributes.\n    \n3.  Not meet any conditions mentioned in exclude_all_of_attributes.\n    \n\nConsequently, a vehicle which does not have any attributes defined can't be assigned to an order which has vehicle_preferences configured.",
              properties: {
                exclude_all_of_attributes: {
                  type: 'array',
                  description:
                    'An array of objects to add exclusion requirements for the order. A vehicle must **not meet any of the conditions** specified here to be considered for assignment. Each object represents a single condition. Please note that a maximum of 10 conditions can be added here for a given order.',
                  items: {
                    type: 'object',
                    properties: {
                      attribute: {
                        type: 'string',
                        description:
                          'Specify the name of the attribute. The attribute is compared to the keys (of each key:value pair) in vehicles.attributes during evaluation.',
                      },
                      operator: {
                        type: 'string',
                        description:
                          'Specify the operator to denote the relation between attribute and the value specified above. The attribute , operator and value together constitute the condition that a vehicle must meet to be eligible for assignment. Currently, we support following operators currently:\n\n*   Equal to (==)\n    \n*   Less than (<)\n    \n*   Less tha equal to (<=)\n    \n*   Greater than (>)\n    \n*   Greater than equal to (>=)\n    \n*   Contains (contains)\n    \n\nPlease note that when using "contains" operator only one value can be specified and the corresponding attribute must contain multiple values when defined for a vehicle.',
                      },
                      value: {
                        type: 'string',
                        description:
                          'Specify the desired value of the attribute to be applied for this order. value provided here is compared to the values (of each key:value pair) in vehicles.attributes during evaluation.',
                      },
                    },
                    required: ['attribute', 'operator', 'value'],
                  },
                },
                required_all_of_attributes: {
                  type: 'array',
                  description:
                    'An array of objects to add mandatory requirements for the order. A vehicle must **meet** **all conditions** specified here to be considered for assignment. Each object represents a single condition. Please note that a maximum of 10 conditions can be added here for a given order.',
                  items: {
                    type: 'object',
                    properties: {
                      attribute: {
                        type: 'string',
                        description:
                          'Specify the name of the attribute. The attribute is compared to the keys (of each key:value pair) in vehicles.attributes during evaluation.',
                      },
                      operator: {
                        type: 'string',
                        description:
                          'Specify the operator to denote the relation between attribute and the value specified above. The attribute , operator and value together constitute the condition that a vehicle must meet to be eligible for assignment. Currently, we support following operators currently:\n\n*   Equal to (==)\n    \n*   Less than (<)\n    \n*   Less tha equal to (<=)\n    \n*   Greater than (>)\n    \n*   Greater than equal to (>=)\n    \n*   Contains (contains)\n    \n\nPlease note that when using "contains" operator only one value can be specified and the corresponding attribute must contain multiple values when defined for a vehicle.',
                      },
                      value: {
                        type: 'string',
                        description:
                          'Specify the desired value of the attribute to be applied for this order. value provided here is compared to the values (of each key:value pair) in vehicles.attributes during evaluation.',
                      },
                    },
                    required: ['attribute', 'operator', 'value'],
                  },
                },
                required_any_of_attributes: {
                  type: 'array',
                  description:
                    'An array of objects to add optional requirements for the order. A vehicle must **meet** **at least one of the conditions** specified here to be considered for assignment. Each object represents a single condition. Please note that a maximum of 10 conditions can be added here for a given order.',
                  items: {
                    type: 'object',
                    properties: {
                      attribute: {
                        type: 'string',
                        description:
                          'Specify the name of the attribute. The attribute is compared to the keys (of each key:value pair) in vehicles.attributes during evaluation.',
                      },
                      operator: {
                        type: 'string',
                        description:
                          'Specify the operator to denote the relation between attribute and the value specified above. The attribute , operator and value together constitute the condition that a vehicle must meet to be eligible for assignment. Currently, we support following operators currently:\n\n*   Equal to (==)\n    \n*   Less than (<)\n    \n*   Less tha equal to (<=)\n    \n*   Greater than (>)\n    \n*   Greater than equal to (>=)\n    \n*   Contains (contains)\n    \n\nPlease note that when using "contains" operator only one value can be specified and the corresponding attribute must contain multiple values when defined for a vehicle.',
                      },
                      value: {
                        type: 'string',
                        description:
                          'Specify the desired value of the attribute to be applied for this order. value provided here is compared to the values (of each key:value pair) in vehicles.attributes during evaluation.',
                      },
                    },
                    required: ['attribute', 'operator', 'value'],
                  },
                },
              },
            },
          },
          required: ['id', 'pickup'],
        },
      },
      vehicles: {
        type: 'array',
        description:
          'Collects the details of vehicles available to fulfill the orders. Each object represents one vehicle. All requests must include vehicles as a mandatory input. A maximum of 100 vehicles is allowed per request.',
        items: {
          $ref: '#/$defs/vehicle',
        },
      },
      options: {
        type: 'object',
        description: 'Configure the assignment constraints and response settings.',
        properties: {
          alternate_assignments: {
            type: 'integer',
            description:
              'Specify the maximum number of potential, alternate vehicle assignments to be returned for each order, apart from the vehicle which was assigned as recommended. Please note that:\n\n*   The maximum number of alternate assignments that can be requested are 3.\n    \n*   It is not necessary that the service will return the specified number of alternate assignments for each order. The number of alternate assignments returned will depend on the number of vehicles provided in the input.\n    \n*   Order which could not be assigned to any vehicles due to their filter or attribute matching criteria will not be eligible for alternate assignments as well.',
          },
          dropoff_details: {
            type: 'boolean',
            description:
              'When **true**, the service returns the drop-off steps for each trip and related details in the response. Defaults to **false**.',
          },
          order_attribute_priority_mappings: {
            type: 'array',
            description:
              'Collection of rules for assigning custom priority to orders based on their attributes. In case an order satisfies more than one rule, the highest priority score from all the rules satisfied, would be the effective priority score for such an order.',
            items: {
              type: 'object',
              properties: {
                attribute: {
                  type: 'string',
                  description:
                    'Specify the name of the attribute. The attribute is compared to the keys (of each key:value pair) in orders.attributes during evaluation.',
                },
                operator: {
                  type: 'string',
                  description:
                    'Specify the operator to denote the relation between attribute and the value specified above. The attribute , operator and value together constitute the condition that an order must meet to assume the specified priority. We support the following operators currently:\n\n*   Equal to (==)\n    \n*   Less than (<)\n    \n*   Less tha equal to (<=)\n    \n*   Greater than (>)\n    \n*   Greater than equal to (>=)\n    \n*   Contains (contains)\n    \n\nPlease note that when using "contains" operator only one value can be specified and the corresponding attribute must contain multiple values when defined for an order.',
                },
                priority: {
                  type: 'string',
                  description:
                    'Specify the priority score that should be assigned when an order qualifies the criteria specified above. A higher value indicates a higher priority. Valid values are \\[1,10\\].',
                },
                value: {
                  type: 'string',
                  description:
                    'Specify the desired value of the attribute to be applied for this order. value provided here is compared to the values (of each key:value pair) in orders.attributes during evaluation.',
                },
              },
              required: ['attribute', 'operator', 'priority', 'value'],
            },
          },
          travel_cost: {
            type: 'string',
            description:
              'Choose a travel cost that will be used by the service for assigning vehicles efficiently from a set of qualifying ones.',
            enum: ['driving_eta', 'driving_distance', 'straight_line_distance'],
          },
          vehicle_attribute_priority_mappings: {
            type: 'array',
            description:
              'Collection of rules for assigning custom priority to vehicles based on their attributes. In case a vehicle satisfies more than one rule, the highest priority score from all the rules satisfied, would be the effective priority score for such a vehicle.',
            items: {
              type: 'object',
              properties: {
                attribute: {
                  type: 'string',
                  description:
                    'Specify the name of the attribute. The attribute is compared to the keys (of each key:value pair) in vehicles.attributes during evaluation.',
                },
                operator: {
                  type: 'string',
                  description:
                    'Specify the operator to denote the relation between attribute and the value specified above. The attribute , operator and value together constitute the condition that a vehicle must meet to assume the specified priority. We support the following operators currently:\n\n*   Equal to (==)\n    \n*   Less than (<)\n    \n*   Less tha equal to (<=)\n    \n*   Greater than (>)\n    \n*   Greater than equal to (>=)\n    \n*   Contains (contains)\n    \n\nPlease note that when using "contains" operator only one value can be specified and the corresponding attribute must contain multiple values when defined for a vehicle.',
                },
                priority: {
                  type: 'string',
                  description:
                    'Specify the priority score that should be assigned when a vehicle qualifies the criteria specified above. A higher value indicates a higher priority. Valid values are \\[1,10\\].',
                },
                value: {
                  type: 'string',
                  description:
                    'Specify the desired value of the attribute to be applied for this vehicle. value provided here is compared to the values (of each key:value pair) in vehicles.attributes during evaluation.',
                },
              },
              required: ['attribute', 'operator', 'priority', 'value'],
            },
          },
        },
      },
    },
    required: ['key', 'filter', 'orders', 'vehicles'],
    $defs: {
      vehicle: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Specify a unique ID for the vehicle.',
          },
          location: {
            $ref: '#/$defs/location',
          },
          attributes: {
            type: 'object',
            description:
              'Specify custom attributes for the vehicle. Each attribute should be created as a key:value pair. These attributes can be used in the orders.vehicle_preferences input to refine the search of vehicles for each order.\n\nThe maximum number of key:value pairs that can be specified under attributes for a given vehicle, is limited to 30.',
          },
          priority: {
            type: 'integer',
            description:
              'Specify the priority for this vehicle. A higher value indicates a higher priority. When specified, it will override any priority score deduced from vehicle_attribute_priority_mappings for this vehicle. Valid values are \\[1, 10\\] and default is 0.',
          },
          remaining_waypoints: {
            type: 'array',
            description:
              'An array of objects to collect the location coordinates of the stops remaining on an ongoing trip of the vehicle. The service can assign new orders to the vehicle if they are cost-effective. Once a new order is assigned, the vehicle must complete all the steps in the ongoing trip before proceeding to pickup the newly assigned order.\n\nPlease note that a maximum of 10 waypoints can be specified for a given vehicle.',
            items: {
              $ref: '#/$defs/location',
            },
          },
        },
        required: ['id', 'location'],
      },
      location: {
        type: 'object',
        description: 'Location info.',
        properties: {
          lat: {
            type: 'number',
            description: 'Latitude of location.',
          },
          lon: {
            type: 'number',
            description: 'Longitude of location.',
          },
        },
        required: ['lat', 'lon'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.optimization.driverAssignment.assign(body));
};

export default { metadata, tool, handler };
