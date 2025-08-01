// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'geofence.console',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/geofence/console/search',
  operationId: 'search',
};

export const tool: Tool = {
  name: 'search_geofence_console',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nConsole Geofence Search API\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        result: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'ID of goefence. Could be empty string.'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of goefence. Could be empty string.'\n              }\n            },\n            required: [              'id',\n              'name'\n            ]\n          }\n        }\n      },\n      required: [        'result'\n      ]\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  },\n  required: [    'data',\n    'status'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'string to be searched, will used to match name or id of geofence.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['query'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.geofence.console.search(body)));
};

export default { metadata, tool, handler };
