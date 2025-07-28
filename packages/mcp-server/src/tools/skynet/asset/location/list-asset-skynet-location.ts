// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset.location',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/asset/{id}/location/list',
  operationId: 'list-YskrniDv',
};

export const tool: Tool = {
  name: 'list_asset_skynet_location',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTrack locations of an asset",
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
      correction: {
        type: 'string',
        description:
          'Describe the geometry characteristics through a `,` separated list of properties.\n\nSetting `mapmatch` to 1 returns the geometry of the tracked points, snapped to the nearest road.\n\nSetting `interpolate` to 1 smoothens the snapped geometry by adding more points, as needed. Please note, `mapmatch` should be set to 1 for `interpolate` to be effective.\n\n`mode` is used to set the transport mode for which the snapped route will be determined. Allowed values for `mode` are `car` and `truck`.',
      },
      end_time: {
        type: 'integer',
        description: 'Time until which the tracked locations of the `asset` need to be retrieved.',
      },
      geometry_type: {
        type: 'string',
        description:
          'Set the geometry format to encode the path linking the tracked locations of the `asset`.\n\nPlease note that `geometry_type` is effective only when `mapmatch` property of `correction` parameter is set to 1.',
        enum: ['`polyline`', '`polyline6`', '`geojson`'],
      },
      pn: {
        type: 'integer',
        description:
          'Denotes page number. Use this along with the `ps` parameter to implement pagination for your searched results. This parameter does not have a maximum limit but would return an empty response in case a higher value is provided when the result-set itself is smaller.',
      },
      ps: {
        type: 'integer',
        description:
          'Denotes number of search results per page. Use this along with the `pn` parameter to implement pagination for your searched results.',
      },
      start_time: {
        type: 'integer',
        description: 'Time after which the tracked locations of the `asset` need to be retrieved.',
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
  return asTextContentResult(await client.skynet.asset.location.list(id, body));
};

export default { metadata, tool, handler };
