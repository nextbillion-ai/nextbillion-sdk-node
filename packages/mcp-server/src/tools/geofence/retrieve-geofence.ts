// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'geofence',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/geofence/{id}',
  operationId: '{id}-GET-U5jn3sgB',
};

export const tool: Tool = {
  name: 'retrieve_geofence',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a Geofence\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        geofence: {\n          $ref: '#/$defs/geofence'\n        }\n      }\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  },\n  $defs: {\n    geofence: {\n      type: 'object',\n      description: 'An object with details of the geofence.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of the geofence provided/generated at the time of creating the geofence.'\n        },\n        circle_center: {\n          type: 'object',\n          properties: {\n            lat: {\n              type: 'number',\n              description: 'Latitude of the location.'\n            },\n            lon: {\n              type: 'number',\n              description: 'Longitude of the location.'\n            }\n          }\n        },\n        circle_radius: {\n          type: 'number',\n          description: 'When the type of the geofence is circle, this property returns the radius of the geofence in meters (m).'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'Time at which the geofence was created, expressed as a UNIX timestamp in seconds.'\n        },\n        geojson: {\n          $ref: '#/$defs/polygon_geojson'\n        },\n        ic_contours_meter: {\n          type: 'integer',\n          description: 'For a geofence based on isochrone contour determined using a specific driving distance, this property returns the duration value, in meters.\\n\\nThe value would be the same as that provided for the contours_meter parameter at the time of creating or updating the geofence.'\n        },\n        ic_contours_minute: {\n          type: 'integer',\n          description: 'For a geofence based on isochrone contour determined using a specific driving duration, this property returns the duration value, in minutes. The value would be the same as the value provided for the contours_minute parameter at the time of creating or updating the geofence.'\n        },\n        ic_coordinates: {\n          type: 'string',\n          description: 'For a geofence based on isochrone contour, this property returns the coordinates of the location, in [latitude,longitude] format, which was used as the starting point to identify the geofence boundary.\\n\\nThe value would be the same as that provided for the coordinates parameter at the time of creating or updating the geofence.'\n        },\n        ic_denoise: {\n          type: 'number',\n          description: 'For a geofence based on isochrone contour, this property returns the denoise value which would be the same as that provided for the denoise parameter at the time of creating or updating the geofence.'\n        },\n        ic_departure_time: {\n          type: 'integer',\n          description: 'For a geofence based on isochrone contour, this property returns the departure time, as a UNIX epoch timestamp in seconds, which was used to determine the geofence boundary after taking into account the traffic conditions at the time.\\n\\nThe value would be the same as that provided for the departure_time parameter at the time of creating or updating the geofence.'\n        },\n        ic_mode: {\n          type: 'number',\n          description: 'For a geofence based on isochrone contour, this property returns the driving mode used to determine the geofence boundary.\\n\\nThe value would be the same as that provided for the mode parameter at the time of creating or updating the geofence.'\n        },\n        meta_data: {\n          type: 'object',\n          description: 'Metadata of the geofence added at the time of creating or updating it.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the geofence added at the time of creating or updating it.'\n        },\n        tags: {\n          type: 'array',\n          description: 'An array of strings representing the tags associated with the geofence added at the time of creating or updating it.',\n          items: {\n            type: 'string'\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the geofence.',\n          enum: [            'circle',\n            'polygon',\n            'isochrone'\n          ]\n        },\n        updated_at: {\n          type: 'integer',\n          description: 'Time at which the geofence was last updated, expressed as a UNIX timestamp in seconds.'\n        }\n      }\n    },\n    polygon_geojson: {\n      type: 'object',\n      description: 'An object with geoJSON details of the geofence. The contents of this object follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).',\n      properties: {\n        coordinates: {\n          type: 'array',\n          description: 'An array of coordinates in the [longitude, latitude] format, representing the geofence boundary.',\n          items: {\n            type: 'array',\n            description: '[longitude, latitude] format location.',\n            items: {\n              type: 'number'\n            }\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the geoJSON geometry. Will always be Polygon.'\n        }\n      }\n    }\n  }\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.geofence.retrieve(id, body)));
};

export default { metadata, tool, handler };
