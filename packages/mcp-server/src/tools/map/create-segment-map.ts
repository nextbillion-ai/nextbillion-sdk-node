// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'map',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/map/segments',
  operationId: 'segments',
};

export const tool: Tool = {
  name: 'create_segment_map',
  description: 'Road Segments',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const response = await client.map.createSegment().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
