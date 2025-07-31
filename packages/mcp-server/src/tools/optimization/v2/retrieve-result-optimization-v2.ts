// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'optimization.v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/optimization/v2/result',
  operationId: 'result',
};

export const tool: Tool = {
  name: 'retrieve_result_optimization_v2',
  description: 'Flexible GET',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'The unique ID that was returned on successful submission of the Optimization POST request.',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
    },
    required: ['id', 'key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.optimization.v2.retrieveResult(body));
};

export default { metadata, tool, handler };
