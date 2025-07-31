// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'route_report',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/route_report',
  operationId: 'route_report',
};

export const tool: Tool = {
  name: 'create_route_report',
  description: 'Route Report',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      original_shape: {
        type: 'string',
        description:
          'Takes a route geometry as input and returns the route details. Accepts polyline and polyline6 encoded geometry as input.\n\n**Note**: Route geometries generated from sources other than [NextBillion.ai](http://NextBillion.ai) services, are not supported in this version.',
      },
      original_shape_type: {
        type: 'string',
        description:
          'Specify the encoding type of route geometry provided in original_shape input. Please note that an error is returned when this parameter is not specified while an input is added to original_shape parameter.',
        enum: ['polyline', 'polyline6'],
      },
    },
    required: ['key', 'original_shape', 'original_shape_type'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.routeReport.create(body));
};

export default { metadata, tool, handler };
