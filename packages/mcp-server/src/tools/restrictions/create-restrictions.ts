// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'restrictions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/restrictions/{restriction_type}',
  operationId: 'GroupController_create',
};

export const tool: Tool = {
  name: 'create_restrictions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new restriction",
  inputSchema: {
    type: 'object',
    properties: {
      restriction_type: {
        type: 'string',
        enum: ['turn', 'parking', 'fixedspeed', 'maxspeed', 'closure', 'truck'],
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      area: {
        type: 'string',
        description:
          'Specify the area name. It represents a region where restrictions can be applied. This is a custom field and it is recommended for the users to check with [NextBillion.ai](www.nextbillion.ai) support for the right value. Alternatively, users can invoke the *[Areas](#supported-areas)* method to get a list of available areas for them.',
      },
      name: {
        type: 'string',
        description: 'Specify a custom, descriptive name for the restriction.',
      },
      latlon: {
        type: 'boolean',
        description:
          'Use this parameter to decide the format for specifying the geofence coordinates. If true, then the coordinates of geofence can be specified as "latitude,longitude" format, otherwise they should be specified in "longitude,latitude" format.',
      },
      comment: {
        type: 'string',
        description: 'Use this parameter to add any custom information about the restriction being created.',
      },
      direction: {
        type: 'string',
        description:
          'Represents the traffic direction on the segments to which the restriction will be applied.',
        enum: ['`forward`', '`backward`', '`both`'],
      },
      end_time: {
        type: 'number',
        description:
          'Provide a UNIX epoch timestamp in seconds, representing the time when the restriction should cease to be in-effect.',
      },
      geofence: {
        type: 'array',
        description:
          'An array of coordinates denoting the boundary of an area in which the restrictions are to be applied. The format in which coordinates should be listed is defined by the `latlon` field.\n\nGeofences can be used to create all restriction types, except for a `turn` type restriction. Please note that `segments` is not required when using `geofence` to create restrictions.',
        items: {
          type: 'array',
          items: {
            type: 'number',
          },
        },
      },
      height: {
        type: 'integer',
        description:
          'Specify the maximum truck height,  in centimeter, that will be allowed under the restriction. A value of 0 indicates no limit.\n\nPlease note this parameter is effective only when `restriction_type` is `truck`. At least one of truck parameters - `weight`, `height`, `width` and `truck` - needs to be provided when restriction type is `truck`.',
      },
      length: {
        type: 'integer',
        description:
          'Specify the maximum truck length,  in centimeter, that will be allowed under the restriction. A value of 0 indicates no limit.\n\nPlease note this parameter is effective only when `restriction_type` is `truck`. At least one of truck parameters - `weight`, `height`, `width` and `truck` - needs to be provided when restriction type is `truck`.',
      },
      mode: {
        type: 'array',
        description:
          'Provide the driving modes for which the restriction should be effective. If the value is an empty array or if it is not provided then the restriction would be applied for all modes.',
        items: {
          type: 'string',
          enum: ['0w', '2w', '3w', '4w', '6w'],
        },
      },
      repeat_on: {
        type: 'string',
        description:
          'It represents the days and times when the restriction is in effect. Users can use this property to set recurring or one-time restrictions as per the [given format](https://wiki.openstreetmap.org/wiki/Key:opening_hours) for specifying the recurring schedule of the restriction.\n\nPlease provided values as per the local time of the region where the restriction is being applied.',
      },
      segments: {
        type: 'array',
        description:
          'An array of objects to collect the details of the segments of a road on which the restriction has to be applied. Each object corresponds to a new segment.\n\nPlease note that `segments` is mandatory for all `restrtiction_type` except `turn`.',
        items: {
          type: 'object',
          properties: {
            from: {
              type: 'number',
              description: 'An integer value representing the ID of the starting node of the segment.',
            },
            to: {
              type: 'number',
              description: 'An integer value representing the ID of the ending node of the segment.',
            },
          },
        },
      },
      speed: {
        type: 'number',
        description:
          'Provide the the fixed speed of the segment where the restriction needs to be applied. Please note that this parameter is mandatory when the `restrictionType` is `fixedspeed`.',
      },
      speed_limit: {
        type: 'number',
        description:
          'Provide the the maximum speed of the segment where the restriction needs to be applied. Please note that this parameter is mandatory when the `restrictionType` is `maxspeed`.',
      },
      start_time: {
        type: 'number',
        description:
          'Provide a UNIX epoch timestamp in seconds, representing the start time for the restriction to be in-effect.',
      },
      tracks: {
        type: 'array',
        description:
          'Specify a sequence of coordinates (track) where the restriction is to be applied. The coordinates will be snapped to nearest road. Please note when using `tracks`, `segments` and `turns` are not required.',
        items: {
          type: 'array',
          items: {
            type: 'number',
          },
        },
      },
      turns: {
        type: 'array',
        description:
          'An array of objects to collect the details of the turns of a road on which the restriction has to be applied. Each object corresponds to a new turn.\n\nPlease note that `turns` is mandatory for when `restrtiction_type=turn`.',
        items: {
          type: 'object',
          properties: {
            from: {
              type: 'integer',
              description: 'An integer value that represents the ID of the starting node of the turn.',
            },
            to: {
              type: 'integer',
              description: 'An integer value that represents the ID of the ending node of the turn.',
            },
            via: {
              type: 'integer',
              description:
                'An integer value that represents the ID of a node connecting `from` and `to` nodes of the turn.',
            },
          },
        },
      },
      weight: {
        type: 'integer',
        description:
          'Specify the maximum truck weight, in kilograms, that the restriction will allow. A value of 0 indicates no limit.\n\nPlease note this parameter is effective only when `restriction_type` is `truck`. At least one of truck parameters - `weight`, `height`, `width` and `truck` - needs to be provided for is `truck` restriction type.',
      },
      width: {
        type: 'integer',
        description:
          'Specify the maximum truck width,  in centimeter, that will be allowed under the restriction. A value of 0 indicates no limit.\n\n\nPlease note this parameter is effective only when `restriction_type` is `truck`. At least one of truck parameters - `weight`, `height`, `width` and `truck` - needs to be provided when restriction type is `truck`.',
      },
    },
    required: ['restriction_type', 'key', 'area', 'name'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { restriction_type, ...body } = args as any;
  return asTextContentResult(await client.restrictions.create(restriction_type, body));
};

export default { metadata, tool, handler };
