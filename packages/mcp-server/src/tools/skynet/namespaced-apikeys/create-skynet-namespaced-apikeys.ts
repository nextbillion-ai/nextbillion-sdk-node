// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.namespaced_apikeys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/namespaced-apikeys',
  operationId: 'namespaced-apikeys',
};

export const tool: Tool = {
  name: 'create_skynet_namespaced_apikeys',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate namespace under a parent key\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    error: {\n      type: 'string',\n      description: 'Returns the error type in case of any error. If there is no error, then this field is absent in the response.'\n    },\n    message: {\n      type: 'string',\n      description: 'Returns the error message in case of any error. If there is no error, then this field is absent in the response.'\n    },\n    result: {\n      type: 'object',\n      description: 'An object to return the details about the namespace key created.',\n      properties: {\n        apikey: {\n          type: 'string',\n          description: 'Returns the unique key created for the specified namespace.'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'Returns the time, expressed as UNIX epoch timestamp in seconds, when the namespace key was created.'\n        },\n        expires_at: {\n          type: 'integer',\n          description: 'Returns the time, expressed as UNIX epoch timestamp in seconds, when the namespace key will expire.'\n        },\n        namespace: {\n          type: 'string',\n          description: 'Returns the name of the namespace for which the key is created.'\n        },\n        sub_id: {\n          type: 'string',\n          description: 'An internal subscription ID.'\n        }\n      }\n    },\n    status: {\n      type: 'integer',\n      description: 'Returns the API response code.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      namespace: {
        type: 'string',
        description:
          'Specify a name for the namespace. If the namespace specified is unique then a new namespace along with a new key is created. Whereas if the specified namespace is not unique, a new key will be created in the existing namespace. Please note that a namespace cannot be created using another namespace key.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'namespace'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.skynet.namespacedApikeys.create(body)),
  );
};

export default { metadata, tool, handler };
