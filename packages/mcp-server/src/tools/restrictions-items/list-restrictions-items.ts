// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'restrictions_items',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/restrictions_items',
  operationId: 'RestrictionController_find',
};

export const tool: Tool = {
  name: 'list_restrictions_items',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet restriction items by bbox\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'number'\n      },\n      area: {\n        type: 'string'\n      },\n      coordinate: {\n        type: 'object',\n        properties: {\n          lat: {\n            type: 'number'\n          },\n          lon: {\n            type: 'number'\n          }\n        }\n      },\n      group_id: {\n        type: 'number'\n      },\n      group_type: {\n        type: 'string',\n        enum: [          'segment',\n          'turn'\n        ]\n      },\n      mode: {\n        type: 'array',\n        items: {\n          type: 'string',\n          enum: [            '0w',\n            '1w',\n            '2w',\n            '3w',\n            '4w',\n            '6w'\n          ]\n        }\n      },\n      repeat_on: {\n        type: 'string'\n      },\n      restriction_type: {\n        type: 'string',\n        enum: [          'closure',\n          'fixedspeed',\n          'maxspeed',\n          'turn',\n          'truck'\n        ]\n      },\n      source: {\n        type: 'string',\n        enum: [          'rrt',\n          'pbf'\n        ]\n      },\n      state: {\n        type: 'string',\n        enum: [          'enabled',\n          'disabled',\n          'deleted'\n        ]\n      },\n      status: {\n        type: 'string',\n        enum: [          'active',\n          'inactive'\n        ]\n      }\n    },\n    required: [      'id',\n      'area',\n      'coordinate',\n      'group_id',\n      'group_type',\n      'mode',\n      'repeat_on',\n      'restriction_type',\n      'source',\n      'state',\n      'status'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      max_lat: {
        type: 'number',
      },
      max_lon: {
        type: 'number',
      },
      min_lat: {
        type: 'number',
      },
      min_lon: {
        type: 'number',
      },
      group_id: {
        type: 'number',
      },
      mode: {
        type: 'string',
        enum: ['0w', '1w', '2w', '3w', '4w', '6w'],
      },
      restriction_type: {
        type: 'string',
        enum: ['turn', 'parking', 'fixedspeed', 'maxspeed', 'closure', 'truck'],
      },
      source: {
        type: 'string',
      },
      state: {
        type: 'string',
        enum: ['enabled', 'disabled', 'deleted'],
      },
      status: {
        type: 'string',
        enum: ['active', 'inactive'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['max_lat', 'max_lon', 'min_lat', 'min_lon'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.restrictionsItems.list(body)));
};

export default { metadata, tool, handler };
