// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'multigeocode.place',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/multigeocode/place/{docId}',
  operationId: '{docId}-lUHgfU8y',
};

export const tool: Tool = {
  name: 'delete_multigeocode_place',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe \"Delete Place\" method enables businesses to delete a previously created place\n\nUse this method to delete a previously created place. Please note that the place associated with the specified docID only would be deleted. As a result, once a place is deleted, the search API can still return valid results from the default datasets or others, if present.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    msg: {\n      type: 'string',\n      description: 'This could be “Ok” representing success or “not found” representing error in processing the request.'\n    },\n    status: {\n      type: 'string',\n      description: 'Represents the status of the response.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      docId: {
        type: 'string',
      },
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
    required: ['docId', 'key'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { docId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.multigeocode.place.delete(docId, body)));
};

export default { metadata, tool, handler };
