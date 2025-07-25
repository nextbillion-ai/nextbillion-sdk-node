// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'batch',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/batch',
  operationId: 'batch-GET',
};

export const tool: Tool = {
  name: 'retrieve_batch',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Batch Result\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    msg: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request or operation. Please note that this parameter is not returned in the response in case of a successful request.'\n    },\n    responses: {\n      type: 'array',\n      description: 'An array of objects returning the results of all the individual routing queries specified in the input. Each object represents the solution to an individual query in the input.',\n      items: {\n        type: 'object',\n        properties: {\n          response: {\n            type: 'object',\n            description: 'An object returning the routing solution of an individual query. The JSON format and structure of the `response` would vary depending on the routing endpoint used in each individual query. However, it will be consistent with standard response for a given routing endpoint.'\n          },\n          status_code: {\n            type: 'integer',\n            description: 'Returns the HTTP status code for the individual routing request. See the [API Errors Codes](#api-error-codes) section below for more information.'\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string',\n      description: 'Returns the overall status of the API request. Its value will always be one of `success`, `failed`, and `pending`.'\n    },\n    track_id: {\n      type: 'string',\n      description: 'Returns the unique ID of the batch processing task.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      track_id: {
        type: 'string',
        description:
          'Specify the track ID of the batch that was returned in the response after submitting a successful batch request.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'track_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.batch.retrieve(body)));
};

export default { metadata, tool, handler };
