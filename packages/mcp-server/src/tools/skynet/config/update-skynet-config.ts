// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.config',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/skynet/config',
  operationId: 'config-2Uql_qkN',
};

export const tool: Tool = {
  name: 'update_skynet_config',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate webhook configuration\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/simple_resp',\n  $defs: {\n    simple_resp: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n        },\n        status: {\n          type: 'string',\n          description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
      },
      webhook: {
        type: 'array',
        description:
          'Use this array to update information about the webhooks. Please note that the webhooks will be overwritten every time this method is used.',
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
    required: ['key'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.skynet.config.update(body)));
};

export default { metadata, tool, handler };
