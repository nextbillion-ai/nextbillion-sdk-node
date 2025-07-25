// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'directions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/directions/json',
  operationId: 'json-el6-Xj_n',
};

export const tool: Tool = {
  name: 'compute_route_directions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDirections API is a service that computes a route with given coordinates.",
  inputSchema: {
    type: 'object',
    properties: {
      destination: {
        type: 'string',
        description: 'test',
      },
      origin: {
        type: 'string',
        description: 'test',
      },
      waypoints: {
        type: 'string',
      },
    },
    required: ['destination', 'origin'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.directions.computeRoute(body));
};

export default { metadata, tool, handler };
