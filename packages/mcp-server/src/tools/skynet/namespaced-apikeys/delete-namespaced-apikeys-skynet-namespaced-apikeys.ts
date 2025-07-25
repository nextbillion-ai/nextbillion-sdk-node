// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'skynet.namespaced_apikeys',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/skynet/namespaced-apikeys',
  operationId: 'namespaced-apikeys-NcTAtWkf',
};

export const tool: Tool = {
  name: 'delete_namespaced_apikeys_skynet_namespaced_apikeys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete namespace under a parent key\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    msg: {\n      type: 'string',\n      description: 'Its value is `OK` in case of a successful delete operation. Indicative error messages are returned otherwise, for different errors.'\n    },\n    status: {\n      type: 'integer',\n      description: 'A string indicating the state of the response. A successful delete operation ins indicated by an HTTP code of`200`. See the [API Error Codes](https://docs.nextbillion.ai/docs/tracking/api/live-tracking-api#api-error-codes) section below for possible values in case of errors.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description:
          'A key is a unique identifier that is required to authenticate a request to the API. Please note for the delete namespace key operation another namespace key cannot be used.\n\nThe namespace created using this key can be managed using the APIs & Services > Credentials section of user’s [NextBillion Console](https://console.nextbillion.ai).',
      },
      key_to_delete: {
        type: 'string',
        description: 'Specify the key to be deleted.',
      },
      namespace: {
        type: 'string',
        description:
          'Specify the name of the `namespace` to which the \\`key\\_to\\_delete\\` belongs. Please note that a namespace key cannot be deleted using another namespace key.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'key_to_delete', 'namespace'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.skynet.namespacedApikeys.deleteNamespacedApikeys(body)),
  );
};

export default { metadata, tool, handler };
