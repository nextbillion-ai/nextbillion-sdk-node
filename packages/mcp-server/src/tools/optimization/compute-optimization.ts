// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'optimization',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/optimization/json',
  operationId: 'json-x3mGIlAg',
};

export const tool: Tool = {
  name: 'compute_optimization',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nNextbillion.ai Optimization API computes and returns an optimized route between an origin and destination which have multiple stop points in between. With NextBillion.ai's Route Optimization API you get.\n\nOptimized routing between way points\n\nHighly accurate ETAs with customized routes\n\nRoundtrip optimization with customized destinations\n\nA list of all parameters is specified in the next section.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'string',\n      description: 'A string indicating the state of the response. This is a separate code than the HTTP status code. On normal valid responses, the value will be Ok.'\n    },\n    location: {\n      type: 'object',\n      description: 'Contains the latitude and longitude of a location',\n      properties: {\n        latitude: {\n          type: 'number',\n          description: 'Latitude coordinate of the location.'\n        },\n        longitude: {\n          type: 'number',\n          description: 'Longitude coordinate of the location.'\n        }\n      }\n    },\n    trips: {\n      type: 'array',\n      description: 'An array of 0 or 1 trip objects. Each object has the following schema.',\n      items: {\n        type: 'object',\n        properties: {\n          distance: {\n            type: 'number',\n            description: 'Distance of the trip in meters.'\n          },\n          duration: {\n            type: 'number',\n            description: 'Duration of the trip in seconds'\n          },\n          geojson: {\n            type: 'object',\n            description: 'The GeoJSON representation of the route.',\n            properties: {\n              geometry: {\n                type: 'string',\n                description: 'The encoded geometry of the geojson in the trip.'\n              },\n              properties: {\n                type: 'string',\n                description: 'Additional properties associated with the trip.'\n              },\n              type: {\n                type: 'string',\n                description: 'The type of the GeoJSON object.',\n                enum: [                  'Point',\n                  'MultiPoint',\n                  'LineString',\n                  'MultiLineString',\n                  'Polygon',\n                  'MultiPolygon',\n                  'GeometryCollection',\n                  'Feature',\n                  'FeatureCollection',\n                  'Link'\n                ]\n              }\n            }\n          },\n          geometry: {\n            type: 'string',\n            description: 'polyline or polyline6 format of route geometry.'\n          },\n          legs: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                distance: {\n                  type: 'number',\n                  description: 'Distance of leg in metres.'\n                },\n                duration: {\n                  type: 'number',\n                  description: 'Duration of leg in seconds.'\n                },\n                steps: {\n                  type: 'array',\n                  description: 'An array of step objects.',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      distance: {\n                        type: 'number',\n                        description: 'Distance of the step object in meters.'\n                      },\n                      duration: {\n                        type: 'number',\n                        description: 'Duration of the step object in seconds.'\n                      },\n                      geojson: {\n                        type: 'object',\n                        description: 'The GeoJSON representation of the step.',\n                        properties: {\n                          geometry: {\n                            type: 'string',\n                            description: 'The encoded geometry of the geojson in the step.'\n                          },\n                          properties: {\n                            type: 'string',\n                            description: 'Additional properties associated with the step.'\n                          },\n                          type: {\n                            type: 'string',\n                            description: 'The type of the GeoJSON object.',\n                            enum: [                              'Point',\n                              'MultiPoint',\n                              'LineString',\n                              'MultiLineString',\n                              'Polygon',\n                              'MultiPolygon',\n                              'GeometryCollection',\n                              'Feature',\n                              'FeatureCollection',\n                              'Link'\n                            ]\n                          }\n                        }\n                      },\n                      geometry: {\n                        type: 'string',\n                        description: 'Encoded geometry of the step in the selected format.'\n                      }\n                    }\n                  }\n                },\n                summary: {\n                  type: 'string',\n                  description: 'Summary of the leg object.'\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    waypoints: {\n      type: 'array',\n      description: 'Each waypoint is an input coordinate snapped to the road and path network.',\n      items: {\n        type: 'object',\n        properties: {\n          location: {\n            type: 'object',\n            description: 'Describes the location of the waypoint.',\n            properties: {\n              latitude: {\n                type: 'number',\n                description: 'Latitude coordinate of the waypoint.'\n              },\n              longitude: {\n                type: 'number',\n                description: 'Longitude coordinate of the waypoint.'\n              }\n            }\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the waypoint.'\n          },\n          trips_index: {\n            type: 'integer',\n            description: 'Denotes the ID of a trip. Starts with 0.'\n          },\n          waypoint_index: {\n            type: 'integer',\n            description: 'Denotes the id of a waypoint. The first waypoint is denoted with 0. And onwards with 1, 2 etc.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      coordinates: {
        type: 'string',
        description:
          'This is a pipe-separated list of coordinates.\n\nMinimum 3 pairs of coordinates and Maximum 12 pairs of coordinates are allowed.',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      approaches: {
        type: 'string',
        description:
          'A semicolon-separated list indicating the side of the road from which to approach waypoints in a requested route. If provided, the number of approaches must be the same as the number of coordinates. However, you can skip a coordinate and show its position in the list with the ; separator.',
        enum: ['unrestricted', 'curb'],
      },
      destination: {
        type: 'string',
        description:
          'Specify the destination coordinate of the returned route. If the input is last, the last coordinate will be the destination.',
        enum: ['any', 'last'],
      },
      geometries: {
        type: 'string',
        description:
          'Sets the output format of the route geometry in the response. \n\nOn providing polyline and polyline6 as input, respective encoded geometry is returned. However, when geojson is provided as the input value, polyline encoded geometry is returned in the response along with a geojson details of the route.',
        enum: ['polyline', 'polyline6', 'geojson'],
      },
      mode: {
        type: 'string',
        description:
          'Set which driving mode the service should use to determine a route. For example, if you use "car", the API will return a route that a car can take. Using "truck" will return a route a truck can use, taking into account appropriate truck routing restrictions.\n\nWhen "mode=truck", following are the default dimensions that are used:\n\n\\- truck\\_height = 214 centimeters\n\n\\- truck\\_width = 183 centimeters\n\n\\- truck\\_length = 519 centimeters\n\n\\- truck\\_weight = 5000 kg\n\nPlease use the Directions Flexible version if you want to use custom truck dimensions.\n\nNote: Only the "car" profile is enabled by default. Please note that customized profiles (including "truck") might not be available for all regions. Please contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales representative or reach out at [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need additional profiles.',
        enum: ['car', 'truck'],
      },
      roundtrip: {
        type: 'boolean',
        description: 'Indicates whether the returned route is a roundtrip.',
      },
      source: {
        type: 'string',
        description:
          'The coordinate at which to start the returned route. If this is not configured, the return route’s destination will be the first coordinate.',
        enum: ['any', 'first'],
      },
      with_geometry: {
        type: 'boolean',
        description: 'Indicates whether the return geometry should be computed or not.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['coordinates', 'key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.optimization.compute(body)));
};

export default { metadata, tool, handler };
