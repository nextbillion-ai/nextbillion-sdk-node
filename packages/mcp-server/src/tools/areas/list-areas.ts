// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'areas',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/areas',
  operationId: 'AreaController_findAll',
};

export const tool: Tool = {
  name: 'list_areas',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet available areas\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      code: {\n        type: 'string',\n        description: 'Returns the code for the available area.'\n      },\n      modes: {\n        type: 'array',\n        description: 'Returns available traveling modes for the given area.',\n        items: {\n          type: 'string'\n        }\n      },\n      name: {\n        type: 'string',\n        description: 'Returns the name of the available area.'\n      },\n      timezone: {\n        type: 'number',\n        description: 'Returns the offset from UTC time.'\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: ['key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.areas.list(body)));
};

export default { metadata, tool, handler };
