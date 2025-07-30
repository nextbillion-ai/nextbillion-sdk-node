// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.search.polygon',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/search/polygon',
  operationId: 'polygon-1YVbvf3H',
};

export const tool: Tool = {
  name: 'create_search_skynet_polygon',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPolygon Search",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      polygon: {
        type: 'object',
        description:
          "An object to collect geoJSON details of a custom polygon. Please ensure that:\n\n- the `polygon` provided is enclosed. This can be achieved by making the last location coordinate in the list equal to the first location coordinate of the list.\n\n- the 'polygon' provided does not contain multiple rings.\n\nThe contents of this object follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).\n\nPlease  note that the maximum area of the search polygon allowed is 3000 km<sup>2</sup>.",
        properties: {
          coordinates: {
            type: 'array',
            description:
              'An array of coordinates in the [longitude, latitude] format, representing the polygon boundary.',
            items: {
              type: 'number',
            },
          },
          type: {
            type: 'string',
            description: 'Type of the geoJSON geometry. Should always be `polygon`.',
          },
        },
        required: ['coordinates', 'type'],
      },
      filter: {
        type: 'string',
        description:
          '**`tags` parameter will be deprecated soon! Please use the `include_any_of_attributes` or `include_all_of_attributes` parameters to match assets based on their labels or markers.**\n\nUse this parameter to filter the assets found inside the specified area by their `tag`. Multiple `tag` can be separated using comma (`,`).\n\nPlease note the tags are case sensitive.',
      },
      match_filter: {
        type: 'object',
        description:
          'An object to define the `attributes` which will be used to filter the assets found within the `polygon`.',
        properties: {
          include_all_of_attributes: {
            type: 'string',
            description:
              'Use this parameter to filter the assets found inside the specified area by their `attributes`. Only the assets having all the `attributes` that are added to this parameter, will be returned in the search results. Multiple `attributes` can be separated using commas (`,`).\n\nPlease note the attributes are case sensitive. Also, this parameter can not be used in conjunction with `include_any_of_attributes` parameter.',
          },
          include_any_of_attributes: {
            type: 'string',
            description:
              'Use this parameter to filter the assets found inside the specified area by their `attributes`. Assets having at least one of the `attributes` added to this parameter, will be returned in the search results. Multiple `attributes` can be separated using commas (`,`).\n\nPlease note the attributes are case sensitive. Also, this parameter can not be used in conjunction with `include_all_of_attributes` parameter.',
          },
        },
      },
      max_search_limit: {
        type: 'boolean',
        description: 'if ture, can get 16x bigger limitation in search.',
      },
      pn: {
        type: 'integer',
        description:
          'Denotes page number. Use this along with the `ps` parameter to implement pagination for your searched results. This parameter does not have a maximum limit but would return an empty response in case a higher value is provided when the result-set itself is smaller.',
      },
      ps: {
        type: 'integer',
        description:
          'Denotes number of search results per page. Use this along with the `pn` parameter to implement pagination for your searched results. Please note that `ps` has a default value of 20 and accepts integers only in the range of [1, 100].',
      },
      sort: {
        type: 'object',
        properties: {
          sort_by: {
            type: 'string',
            description:
              'Specify the metric to sort the assets returned in the search result. The valid values are:\n\n*   **distance** : Sorts the assets by driving distance to the given `sort_destination` .\n    \n*   **duration** : Sorts the assets by travel time to the given `sort_destination` .\n    \n*   **straight\\_distance** : Sort the assets by straight-line distance to the given `sort-destination` .',
            enum: ['`distance`', '`duration`', '`straight_distance`'],
          },
          sort_destination: {
            type: 'object',
            description:
              'Specifies the location coordinates of the point which acts as destination for sorting the assets in the search results. The service will sort each asset based on the driving distance or travel time to this destination, from its current location. Use the `sort_by` parameter to configure the metric that should be used for sorting the assets. Please note that `sort_destination` is required when `sort_by` is provided.',
            properties: {
              lat: {
                type: 'number',
                description: 'Latitude of the destination location',
              },
              lon: {
                type: 'number',
                description: 'Longitude of the destination location',
              },
            },
            required: ['lat', 'lon'],
          },
          sort_driving_mode: {
            type: 'string',
            description:
              'Specifies the driving mode to be used for determining travel duration or driving distance for sorting the assets in search result.',
            enum: ['`car`', '`truck`'],
          },
        },
      },
    },
    required: ['key', 'polygon'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.skynet.search.polygon.create(body));
};

export default { metadata, tool, handler };
