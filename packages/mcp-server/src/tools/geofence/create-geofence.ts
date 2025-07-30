// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'geofence',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/geofence',
  operationId: 'geofence',
};

export const tool: Tool = {
  name: 'create_geofence',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a geofence\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'A data object containing the ID of the geofence created.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique ID of the geofence created. It will be the same as custom_id, if provided. Else it will be an auto generated UUID. Please note this ID cannot be updated.'\n        }\n      }\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      type: {
        type: 'string',
        description: 'Specify the type of the geofence that is being created.',
        enum: ['circle', 'polygon', 'isochrone'],
      },
      circle: {
        type: 'object',
        description:
          'Provide the details to create a circular geofence. Please note that this object is mandatory when type is circle.  When the type is not circle, the properties of this object will be ignored while creating the geofence.',
        properties: {
          center: {
            type: 'object',
            description: 'Coordinate of the location which will act as the center of a circular geofence.',
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
            required: ['lat', 'lon'],
          },
          radius: {
            type: 'number',
            description: 'Radius of the circular geofence, in meters. Maximum value allowed is 50000 meters.',
          },
        },
        required: ['center', 'radius'],
      },
      custom_id: {
        type: 'string',
        description:
          'Set an unique ID for the new geofence. If not provided, an ID will be automatically generated in UUID format. A valid custom_id can contain letters, numbers, "-", & "_" only.\n\nPlease note that the ID of a geofence can not be changed once it is created.',
      },
      isochrone: {
        type: 'object',
        description:
          'Provide the details to create an isochrone based geofence. Use this object when type is isochrone. When the type is not isochrone, the properties of this object will be ignored while creating the geofence.',
        properties: {
          coordinates: {
            type: 'string',
            description:
              'Coordinates of the location, in [latitude,longitude] format, which would act as the starting point for identifying the isochrone polygon or the boundary of reachable area. This parameter is mandatory when type is isochrone.',
          },
          contours_meter: {
            type: 'integer',
            description:
              'The distance, in meters, for which an isochrone polygon needs to be determined. When provided, the API would create a geofence representing the area that can be reached after driving the given number of meters starting from the point specified in coordinates.\n\nThe maximum distance that can be specified is 60000 meters (60km).\n\nAt least one of contours_meter or contours_minute is mandatory when type is isochrone.',
          },
          contours_minute: {
            type: 'integer',
            description:
              'The duration, in minutes, for which an isochrone polygon needs to be determined. When provided, the API would create a geofence representing the area that can be reached after driving for the given number of minutes starting from the point specified in coordinates.\n\nThe maximum duration that can be specified is 40 minutes.\n\nAt least one of contours_meter or contours_minute is mandatory when type is isochrone.',
          },
          denoise: {
            type: 'number',
            description:
              'A floating point value from 0.0 to 1.0 that can be used to remove smaller contours. A value of 1.0 will only return the largest contour for a given value. A value of 0.5 drops any contours that are less than half the area of the largest contour in the set of contours for that same value.',
          },
          departure_time: {
            type: 'integer',
            description:
              'A UNIX epoch timestamp in seconds format that can be used to set the departure time. The isochrone boundary will be determined based on the typical traffic conditions at the given time. If no input is provided for this parameter then the traffic conditions at the time of making the request are considered',
          },
          mode: {
            type: 'string',
            description:
              'Set which driving mode the service should use to determine the isochrone line.\n\nFor example, if you use car, the API will return an isochrone polygon that a car can cover within the specified time or after driving the specified distance. Using truck will return an isochrone that a truck can reach after taking into account appropriate truck routing restrictions.',
            enum: ['car', 'truck'],
          },
        },
        required: ['coordinates'],
      },
      meta_data: {
        type: 'object',
        description:
          'Metadata of the geofence. Use this field to define custom attributes that provide more context and information about the geofence being created like country, group ID etc.\n\nThe data being added should be in valid JSON object format (i.e. key and value pairs). Max size allowed for the object is 65kb.',
      },
      name: {
        type: 'string',
        description:
          'Name of the geofence. Use this field to assign a meaningful, custom name to the geofence being created.',
      },
      polygon: {
        type: 'object',
        description:
          'Provide the details to create a custom polygon type of geofence. Please note that this object is mandatory when type is polygon. When the type is not polygon, the properties of this object will be ignored while creating the geofence.\n\nSelf-intersecting polygons or polygons containing other polygons are invalid and will be removed while processing the request.\n\nArea of the polygon should be less than 2000 km<sup>2</sup>.',
        properties: {
          geojson: {
            type: 'object',
            description:
              'An object to collect geoJSON details of the geofence. The contents of this object follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).',
            properties: {
              coordinates: {
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
            required: ['coordinates', 'type'],
          },
        },
        required: ['geojson'],
      },
      tags: {
        type: 'array',
        description:
          "An array of strings to associate multiple tags to the geofence. tags can be used to search or filter geofences (using Get Geofence List method).\n\nCreate valid tags using a string consisting of alphanumeric characters (A-Z, a-z, 0-9) along with the underscore ('_') and hyphen ('-') symbols.",
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'type'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.geofence.create(body)));
};

export default { metadata, tool, handler };
