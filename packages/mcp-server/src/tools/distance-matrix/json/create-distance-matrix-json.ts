// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'distance_matrix.json',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/distancematrix/json',
  operationId: 'json-lTDEPWYn',
};

export const tool: Tool = {
  name: 'create_distance_matrix_json',
  description: 'asfd',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const response = await client.distanceMatrix.json.create().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
