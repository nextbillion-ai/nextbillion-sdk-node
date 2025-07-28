// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.config',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/config/testwebhook',
  operationId: 'testwebhook',
};

export const tool: Tool = {
  name: 'test_webhook_skynet_config',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTest webhook configurations\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. Please note this value will always be `Ok`.\\n\\nThe sample event information will be received on the webhook, if they were successfully configured. If no event information is received by the webhook, please reconfigure the webhook or else reach out to [support@nextbillion.ai](mailto:support@nextbillion.ai) for help.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: ['key'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.config.testWebhook(body)));
};

export default { metadata, tool, handler };
