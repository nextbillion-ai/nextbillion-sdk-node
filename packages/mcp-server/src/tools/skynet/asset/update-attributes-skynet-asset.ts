// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/skynet/asset/{id}/attributes',
  operationId: 'attributes',
};

export const tool: Tool = {
  name: 'update_attributes_skynet_asset',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate asset attributes. (add)\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/simple_resp',\n  $defs: {\n    simple_resp: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n        },\n        status: {\n          type: 'string',\n          description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n        }\n      }\n    }\n  }\n}\n```",
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
      attributes: {
        type: 'object',
        description:
          'attributes can be used to add any useful information or context to your assets like the vehicle type, shift timing etc. These attributes can also be used to filter assets in **Search**, **Monitor**, and *Get Asset List* queries.\n\nProvide the attributes to be added or updated, in key:value format.  If an existing key is provided in the input, then the value will be modified as per the input value. If a new key is provided in the input, then the key would be added to the existing set. The contents of any value field are neither altered nor removed unless specifically referred to by its key in the input request.\n\nPlease note that the maximum number of key:value pairs that can be added to an attributes object is 100. Also, the overall size of attributes object should not exceed 65kb.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'key', 'attributes'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.asset.updateAttributes(id, body)));
};

export default { metadata, tool, handler };
