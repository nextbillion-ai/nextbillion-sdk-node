// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/asset/{id}',
  operationId: '{id}-IjMMx4st',
};

export const tool: Tool = {
  name: 'retrieve_skynet_asset',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet an Asset\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'An object containing the information about the `asset` returned.',\n      properties: {\n        asset: {\n          $ref: '#/$defs/asset'\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be `Ok`. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  },\n  $defs: {\n    asset: {\n      type: 'object',\n      description: 'An object with details of the `asset` properties.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'ID of the `asset`. This is the same ID that was generated/provided at the time of creating the `asset`.'\n        },\n        attributes: {\n          type: 'object',\n          description: 'A string dictionary object containing `attributes` of the `asset`. These `attributes` were associated with the `asset` at the time of creating or updating it.\\n\\n`attributes` can be added to an `asset` using the *Update Asset Attributes* method.'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in seconds representing the time at which the `asset` was created.'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the `asset`. The value would be the same as that provided for the `description` parameter at the time of creating or updating the `asset`.'\n        },\n        device_id: {\n          type: 'string',\n          description: 'ID of the `device` that is linked to this asset. Please note that there can be multiple `device_id` linked to a single `asset`.  An empty response is returned if no devices are linked to the `asset`.\\n\\nUser can link a device to an `asset` using the *Bind Asset to Device* method.'\n        },\n        latest_location: {\n          type: 'object',\n          description: 'An object with details of the last tracked location of the asset.',\n          properties: {\n            accuracy: {\n              type: 'number',\n              description: 'If available, this property returns the accuracy of the GPS information received at the last tracked location. It is represented as an estimated horizontal accuracy radius, in meters, at the 68th percentile confidence level.'\n            },\n            altitude: {\n              type: 'number',\n              description: 'If available in the GPS information, this property returns the altitude of the `asset` at the last tracked location. It is represented as height, in meters, above the WGS84 reference ellipsoid.'\n            },\n            bearing: {\n              type: 'number',\n              description: 'If available in the GPS information, this property returns the heading of the `asset` calculated from true north in clockwise direction at the last tracked location. Please note that the bearing is not affected by the device orientation.\\n\\nThe bearing will always be in the range of [0, 360).'\n            },\n            location: {\n              type: 'object',\n              description: 'An object with the coordinates of the last tracked location.',\n              properties: {\n                lat: {\n                  type: 'number',\n                  description: 'Latitude of the tracked location of the `asset`.'\n                },\n                lon: {\n                  type: 'number',\n                  description: 'Longitude of the tracked location of the `asset`.'\n                }\n              }\n            },\n            speed: {\n              type: 'number',\n              description: 'If available in the GPS information, this property returns the speed of the `asset`, in meters per second, at the last tracked location.'\n            },\n            timestamp: {\n              type: 'integer',\n              description: 'A UNIX epoch timestamp in milliseconds, representing the time at which the location was tracked.'\n            }\n          }\n        },\n        meta_data: {\n          $ref: '#/$defs/meta_data'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the `asset`. The value would be the same as that provided for the `name` parameter at the time of creating or updating the `asset`.'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the asset. It will be \"active\" when the asset is in use or available for use, and it will be \"deleted\" in case the asset has been deleted.'\n        },\n        tags: {\n          type: 'array',\n          description: '**This parameter will be deprecated soon! Please move existing `tags` to `attributes` parameter.**\\n\\nTags of the asset.  These were associated with the `asset` when it was created or updated. `tags` can be used for filtering assets in operations like *Get Asset List* and asset **Search** methods. They can also be used for monitoring of assets using **Monitor** methods after linking `tags` and `asset`.',\n          items: {\n            type: 'string'\n          }\n        },\n        tracked_at: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in seconds representing the last time when the `asset` was tracked.'\n        },\n        updated_at: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in seconds representing the time at which the `asset` was last updated.'\n        }\n      }\n    },\n    meta_data: {\n      type: 'object',\n      description: 'Any valid json object data. Can be used to save customized data. Max size is 65kb.'\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.skynet.asset.retrieve(id, body)));
};

export default { metadata, tool, handler };
