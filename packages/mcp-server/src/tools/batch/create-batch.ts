// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'batch',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/batch',
  operationId: 'batch-jbNbMLCj',
};

export const tool: Tool = {
  name: 'create_batch',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Batch Routing\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    msg: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request or operation. Please note that this parameter is not returned in the response in case of a successful request.'\n    },\n    status: {\n      type: 'string',\n      description: 'Returns the overall status of the API request. Its value will belong to one of success, failed, and pending. It can also contain HTTP error codes in case of a failed request or operation.'\n    },\n    track_id: {\n      type: 'string',\n      description: 'Returns the unique ID of the batch processing task. Use this ID using the GET request to retrieve the solution once the task processing is completed.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      requests: {
        type: 'array',
        description:
          'An array of objects to collect the details of individual routing queries that will form a batch.',
        items: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description:
                'Specify the routing query in the form of a string. The supported attributes and their formats are consistent with the standard routing endpoint that is being used as part of the batch. Check the [Sample Request](https://docs.nextbillion.ai/docs/navigation/batch-routing-api#sample-request-1) section for an example request.',
            },
          },
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
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.batch.create(body)));
};

export default { metadata, tool, handler };
