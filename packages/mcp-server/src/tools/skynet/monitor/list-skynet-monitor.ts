// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.monitor',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/monitor/list',
  operationId: 'list',
};

export const tool: Tool = {
  name: 'list_skynet_monitor',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Monitor List",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
      },
      pn: {
        type: 'integer',
        description:
          'Denotes page number. Use this along with the ps parameter to implement pagination for your searched results. This parameter does not have a maximum limit but would return an empty response in case a higher value is provided when the result-set itself is smaller.',
      },
      ps: {
        type: 'integer',
        description:
          'Denotes number of search results per page. Use this along with the pn parameter to implement pagination for your searched results.',
      },
      sort: {
        type: 'string',
        description:
          'Provide a single field to sort the results by. Only updated_at or created_at fields can be selected for ordering the results.\n\nBy default, the result is sorted by created_at field in the descending order. Allowed values for specifying the order are asc for ascending order and desc for descending order.',
      },
      tags: {
        type: 'string',
        description:
          'tags can be used to filter the monitors. Only those monitors which have all the tags provided here, will be included in the search result. In case multiple tags need to be specified, use , to separate them.',
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
  return asTextContentResult(await client.skynet.monitor.list(body));
};

export default { metadata, tool, handler };
