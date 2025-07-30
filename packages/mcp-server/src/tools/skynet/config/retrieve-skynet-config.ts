// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.config',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/config',
  operationId: 'config',
};

export const tool: Tool = {
  name: 'retrieve_skynet_config',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet webhook configuration\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'A data object containing the config response.',\n      properties: {\n        config: {\n          type: 'object',\n          properties: {\n            webhook: {\n              type: 'array',\n              description: 'An array of strings representing the list of webhooks. Webhooks are used to receive information, through POST requests, whenever any event is triggered.',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  }\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.config.retrieve(body)));
};

export default { metadata, tool, handler };
