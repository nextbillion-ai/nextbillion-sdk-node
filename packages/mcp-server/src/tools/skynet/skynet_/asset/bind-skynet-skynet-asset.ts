// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'skynet.skynet.asset',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/skynet/asset/{id}/bind',
  operationId: 'bind',
};

export const tool: Tool = {
  name: 'bind_skynet_skynet_asset',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBind asset to device\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/simple_resp',\n  $defs: {\n    simple_resp: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n        },\n        status: {\n          type: 'string',\n          description: 'A string indicating the state of the response. On successful responses, the value will be `Ok`. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n        }\n      }\n    }\n  }\n}\n```",
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
          'Device ID to be linked to the `asset` identified by `id`.\n\nPlease note that the device needs to be linked to an `asset` before using it in the *Upload locations of an Asset* method for sending GPS information about the `asset`.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'key', 'device_id'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.skynet.asset.bind(id, body)));
};

export default { metadata, tool, handler };
