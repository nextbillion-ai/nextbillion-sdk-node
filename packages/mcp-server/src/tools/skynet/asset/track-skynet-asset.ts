// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/asset/{id}/track',
  operationId: 'track',
};

export const tool: Tool = {
  name: 'track_skynet_asset',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload track info\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/simple_resp',\n  $defs: {\n    simple_resp: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n        },\n        status: {\n          type: 'string',\n          description: 'A string indicating the state of the response. On successful responses, the value will be `Ok`. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n        }\n      }\n    }\n  }\n}\n```",
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
      device_id: {
        type: 'string',
        description:
          'ID of the device used to upload the tracking information of the `asset`.\n\nPlease note that the `device_id` used here must already be linked to the `asset`. Use the *Bind Device to Asset* method to link a device with your `asset`.',
      },
      locations: {
        type: 'object',
        description:
          'An array of objects to collect the location tracking information for an `asset`. Each object must correspond to details of only one location.',
        properties: {
          location: {
            type: 'object',
            description:
              'An object to collect the coordinate details of the tracked location. Please note this field is mandatory when uploading locations for an asset.',
            properties: {
              lat: {
                type: 'number',
                description: 'Latitude of the tracked location of the `asset`.',
              },
              lon: {
                type: 'number',
                description: 'Longitude of the tracked location of the `asset`.',
              },
            },
            required: ['lat', 'lon'],
          },
          timestamp: {
            type: 'integer',
            description:
              'Use this parameter to provide the time, expressed as UNIX epoch timestamp in milliseconds, when the location was tracked. Please note this field is mandatory when uploading locations for an asset.',
          },
          accuracy: {
            type: 'number',
            description:
              'Use this parameter to provide the accuracy of the GPS information at the tracked location. It is the estimated horizontal accuracy radius, in meters.',
          },
          altitude: {
            type: 'number',
            description:
              'Use this parameter to provide the altitude, in meters, of the `asset` at the tracked location.',
          },
          battery_level: {
            type: 'integer',
            description:
              'Use this parameter to provide the battery level of the GPS device, as a percentage, when the location is tracked. It should have a minimum value of 0 and a maximum value of 100.',
          },
          bearing: {
            type: 'number',
            description:
              'Use this parameter to provide the heading of the `asset`, in radians, calculated from true north in clockwise direction. This should always be in the range of [0, 360).',
          },
          meta_data: {
            type: 'object',
            description:
              'Use this object to add any custom data about the location that is being uploaded. Recommended to use the `key`:`value` format for adding the desired information.\n\nPlease note that the maximum size of `meta_data` object should not exceed 65Kb.',
          },
          speed: {
            type: 'number',
            description:
              'Use this parameter to provide the speed of the `asset`, in meters per second, at the tracked location.',
          },
          tracking_mode: {
            type: 'string',
            description: 'NB tracking mode.',
          },
        },
        required: ['location', 'timestamp'],
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
    required: ['id', 'key', 'device_id', 'locations'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.asset.track(id, body)));
};

export default { metadata, tool, handler };
