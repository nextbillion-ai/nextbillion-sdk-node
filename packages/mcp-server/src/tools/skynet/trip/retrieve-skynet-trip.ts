// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.trip',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/trip/{id}',
  operationId: '{id}-Ak7Vy7pv',
};

export const tool: Tool = {
  name: 'retrieve_skynet_trip',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves detailed information about a specific trip.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'An container for the trip returned by the service.',\n      properties: {\n        trip: {\n          type: 'object',\n          description: 'An object containing the returned trip details.',\n          properties: {\n            id: {\n              type: 'string',\n              description: 'Returns the unique identifier of the trip.'\n            },\n            asset_id: {\n              type: 'string',\n              description: 'Returns the ID of the asset linked to the trip when the trip was started or updated.'\n            },\n            attributes: {\n              type: 'object',\n              description: 'Returns the attributes provided for the trip at the time of starting or updating it.'\n            },\n            created_at: {\n              type: 'integer',\n              description: 'Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the trip was created.'\n            },\n            description: {\n              type: 'string',\n              description: 'Returns the custom description for the trip as provided at the time of starting or updating the trip.'\n            },\n            ended_at: {\n              type: 'integer',\n              description: 'Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the trip ended.'\n            },\n            meta_data: {\n              type: 'object',\n              description: 'Returns the metadata containing additional information about the trip as provided at the time of starting or updating the trip.'\n            },\n            name: {\n              type: 'string',\n              description: 'Returns the name for the trip as provided at the time of starting or updating the trip.'\n            },\n            route: {\n              type: 'array',\n              description: 'An array of object returning the details of the locations tracked for the asset during the trip which has ended. Each object represents a single location that was tracked.\\n\\nPlease note that this attribute will not be present in the response if no locations were tracked/uploaded during the trip.',\n              items: {\n                $ref: '#/$defs/track_location'\n              }\n            },\n            started_at: {\n              type: 'integer',\n              description: 'Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the trip started.'\n            },\n            state: {\n              type: 'string',\n              description: 'Returns the current state of the trip. The value will be \"active\" if the trip is still going on, otherwise the value returned would be \"ended\".'\n            },\n            stops: {\n              type: 'array',\n              description: 'An array of objects returning the details of the stops made during the trip. Each object represents a single stop.',\n              items: {\n                $ref: '#/$defs/trip_stop'\n              }\n            },\n            updated_at: {\n              type: 'integer',\n              description: 'Returns the timeme, expressed as UNIX epoch timestamp in milliseconds, when the trip was last updated.'\n            }\n          }\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  },\n  $defs: {\n    track_location: {\n      type: 'object',\n      description: 'An object with details of the tracked location. Please note that if there are no tracking records for an asset, no location data will be returned.',\n      properties: {\n        accuracy: {\n          type: 'number',\n          description: 'If available, this property returns the accuracy of the GPS information received at the tracked location. It is represented as an estimated horizontal accuracy radius, in meters, at the 68th percentile confidence level.'\n        },\n        altitude: {\n          type: 'number',\n          description: 'If available in the GPS information, this property returns the altitude of the asset at the tracked location. It is represented as height, in meters, above the WGS84 reference ellipsoid.'\n        },\n        battery_level: {\n          type: 'integer',\n          description: 'Returns the battery level of the GPS device, as a percentage, when the location was tracked. It has a minimum value of 0 and a maximum value of 100.'\n        },\n        bearing: {\n          type: 'number',\n          description: 'If available in the GPS information, this property returns the heading of the asset calculated from true north in clockwise direction at the tracked location. Please note that the bearing is not affected by the device orientation.\\n\\nThe bearing will always be in the range of [0, 360).'\n        },\n        location: {\n          type: 'object',\n          description: 'An object with the coordinates of the last tracked location.',\n          properties: {\n            lat: {\n              type: 'number',\n              description: 'Latitude of the tracked location of the asset.'\n            },\n            lon: {\n              type: 'number',\n              description: 'Longitude of the tracked location of the asset.'\n            }\n          }\n        },\n        meta_data: {\n          type: 'object',\n          description: 'Specifies the custom data about the location that was added when the location was  uploaded.'\n        },\n        speed: {\n          type: 'number',\n          description: 'If available in the GPS information, this property returns the speed of the asset, in meters per second, at the tracked location.'\n        },\n        timestamp: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in milliseconds, representing the time at which the location was tracked.'\n        },\n        tracking_mode: {\n          type: 'string',\n          description: 'Internal parameter for tracking mode.'\n        }\n      }\n    },\n    trip_stop: {\n      type: 'object',\n      properties: {\n        geofence_id: {\n          type: 'string',\n          description: 'Returns the ID of the geofence that was used to indicate the area to make a stop.'\n        },\n        meta_data: {\n          type: 'object',\n          description: 'Returns any meta data that was added to provide additional information about the stop.'\n        },\n        name: {\n          type: 'string',\n          description: 'Returns the name of the stop that was provided when configuring this stop for the trip.'\n        }\n      }\n    }\n  }\n}\n```",
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
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
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
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.trip.retrieve(id, body)));
};

export default { metadata, tool, handler };
