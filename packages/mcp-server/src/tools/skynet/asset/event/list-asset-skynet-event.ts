// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset.event',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/asset/{id}/event/list',
  operationId: 'list-DYT-XIBF',
};

export const tool: Tool = {
  name: 'list_asset_skynet_event',
  description: 'Event History of an Asset',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
      },
      end_time: {
        type: 'integer',
        description: 'Time before which the events triggered by the asset need to be retrieved.',
      },
      monitor_id: {
        type: 'string',
        description:
          'Filter the events by monitor_id. When provided, only the events triggered by the monitor will be returned in response.\n\nPlease note that if the attributes of the asset identified by id and those of the monitor do not match, then no events might be returned for this monitor_id.',
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
      start_time: {
        type: 'integer',
        description: 'Time after which the events triggered by the asset need to be retrieved.',
      },
    },
    required: ['id', 'key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  try {
    return asTextContentResult(await client.skynet.asset.event.list(id, body));
  } catch (error) {
    if (error instanceof NextbillionSDK.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
