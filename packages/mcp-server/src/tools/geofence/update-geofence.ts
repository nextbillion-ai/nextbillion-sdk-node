// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'geofence',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/geofence/{id}',
  operationId: '{id}-wvy4fwNb',
};

export const tool: Tool = {
  name: 'update_geofence',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a Geofence\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/simple_resp',\n  $defs: {\n    simple_resp: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n        },\n        status: {\n          type: 'string',\n          description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      circle: {
        type: 'object',
        description:
          'Use this object to update details of a circular geofence. Please note that this object is mandatory only when type is circle. When the type is not circle, the properties of this object will be ignored while creating the geofence.',
        properties: {
          center: {
            type: 'object',
            description:
              'Use this parameter to update the coordinate of the location which will act as the center of a circular geofence.',
            properties: {
              lat: {
                type: 'number',
                description: 'Latitude of the center location.',
              },
              lon: {
                type: 'number',
                description: 'Longitude of the center location.',
              },
            },
          },
          radius: {
            type: 'number',
            description:
              'Use this parameter to update the radius of the circular geofence, in meters. Maximum value allowed is 50000 meters.',
          },
        },
        required: ['center'],
      },
      isochrone: {
        type: 'object',
        description:
          'Use this object to update details of an isochrone based geofence. Please note that this object is mandatory only when type is isochrone. When the type is not isochrone, the properties of this object will be ignored while creating the geofence.',
        properties: {
          contours_meter: {
            type: 'integer',
            description:
              'Use this parameter to update the distance, in meters, for which an isochrone polygon needs to be determined. When provided, the API would create a geofence representing the area that can be reached after driving the given number of meters starting from the point specified in coordinates.\n\nThe maximum distance that can be specified is 60000 meters (60km).\n\nAt least one of contours_meter or contours_minute is mandatory when type is isochrone.',
          },
          contours_minute: {
            type: 'integer',
            description:
              'Use this parameter to update the duration, in minutes, for which an isochrone polygon needs to be determined. When provided, the API would create a geofence representing the area that can be reached after driving for the given number of minutes starting from the point specified in coordinates.\n\nThe maximum duration that can be specified is 40 minutes.\n\nAt least one of contours_meter or contours_minute is mandatory when type is isochrone.',
          },
          coordinates: {
            type: 'string',
            description:
              'Use this parameter to update the coordinates of the location, in [latitude,longitude] format, which would act as the starting point for identifying the isochrone polygon or the boundary of reachable area.',
          },
          denoise: {
            type: 'number',
            description:
              'A floating point value from 0.0 to 1.0 that can be used to remove smaller contours. A value of 1.0 will only return the largest contour for a given value. A value of 0.5 drops any contours that are less than half the area of the largest contour in the set of contours for that same value.\n\nUse this parameter to update the denoise value of the isochrone geofence.',
          },
          departure_time: {
            type: 'integer',
            description:
              'Use this parameter to update the departure_time, expressed as UNIX epoch timestamp in seconds. The isochrone boundary will be determined based on the typical traffic conditions at the given time.\n\nIf no input is provided for this parameter then, the traffic conditions at the time of making the request are considered by default. Please note that because of this behavior the geofence boundaries may change even if the departure_time was not specifically provided at the time of updating the geofence.',
          },
          mode: {
            type: 'string',
            description:
              'Use this parameter to update the driving mode that the service should use to determine the isochrone line. For example, if you use car, the API will return an isochrone polygon that a car can cover within the specified time or after driving the specified distance. Using truck will return an isochrone that a truck can reach after taking into account appropriate truck routing restrictions.',
          },
        },
      },
      meta_data: {
        type: 'object',
        description:
          'Updated the meta_data associated with a geofence. Use this field to define custom attributes that provide more context and information about the geofence being updated like country, group ID etc.\n\nThe data being added should be in valid JSON object format (i.e. key and value pairs). Max size allowed for the object is 65kb.',
      },
      name: {
        type: 'string',
        description:
          'Use this parameter to update the name of a geofence. Users can assign meaningful custom names to their geofences.',
      },
      polygon: {
        type: 'object',
        description:
          'Use this object to update details of a custom polygon geofence. Please note that this object is mandatory only when type is polygon. When the type is not polygon, the properties of this object will be ignored while creating the geofence.\n\nSelf-intersecting polygons or polygons containing other polygons are invalid and will be removed while processing the request.\n\nArea of the polygon should be less than 2000 km<sup>2</sup>.',
        properties: {
          geojson: {
            type: 'object',
            description:
              'An object to collect geoJSON details of the polygon geofence. The contents of this object follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).',
            properties: {
              geometry: {
                type: 'array',
                description:
                  'An array of coordinates in the [longitude, latitude] format, representing the geofence boundary.',
                items: {
                  type: 'array',
                  items: {
                    type: 'number',
                  },
                },
              },
              type: {
                type: 'string',
                description: 'Type of the geoJSON geometry. Should always be Polygon.',
              },
            },
          },
        },
      },
      tags: {
        type: 'array',
        description:
          "Use this parameter to add/modify one or multiple tags of a geofence. tags can be used to search or filter geofences (using Get Geofence List method).\n\nValid values for updating tags consist of alphanumeric characters (A-Z, a-z, 0-9) along with the underscore ('_') and hyphen ('-') symbols.",
        items: {
          type: 'string',
        },
      },
      type: {
        type: 'string',
        description:
          'Use this parameter to update the type of a geofence. Please note that you will need to provide required details for creating a geofence of the new type. Check other parameters of this method to know more.',
        enum: ['circle', 'polygon', 'isochrone'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'key'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.geofence.update(id, body)));
};

export default { metadata, tool, handler };
