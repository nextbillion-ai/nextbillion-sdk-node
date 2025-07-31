// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'browse',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/browse',
  operationId: 'browse',
};

export const tool: Tool = {
  name: 'search_browse',
  description: 'Browse a search area using a free text query',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      at: {
        type: 'string',
        description:
          'Specify the center of the search context expressed as coordinates.\n\nPlease note that one of "at", "in=circle" or "in=bbox" should be provided for relevant results.',
      },
      categories: {
        type: 'string',
        description:
          'This is a category filter consisting of a comma-separated list of categories. Places with any assigned categories that match any of the requested categories are included in the response.',
      },
      in: {
        type: 'string',
        description:
          "Search within a geographic area. This is a hard filter. Results will be returned if they are located within the specified area.\n\nA geographic area can be\n\n*   a country (or multiple countries), provided as comma-separated [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country codes\n    \n    The country codes are to be provided in all uppercase.\n    \n    Format: `countryCode:{countryCode}[,{countryCode}]`\n\n\n    \n*   a circular area, provided as latitude, longitude, and radius (an integer with meters as unit)\n    \n    Format: `circle:{latitude},{longitude};r={radius}`\n\n\n    \n*   a bounding box, provided as _west longitude_, _south latitude_, _east longitude_, _north latitude_\n    \n    Format: `bbox:{west longitude},{south latitude},{east longitude},{north latitude}`\n\n\n    \n\nPlease provide one of 'at', 'in=circle' or 'in=bbox' input for a relevant result.",
      },
      lang: {
        type: 'string',
        description:
          'Select the language to be used for result rendering from a list of [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) compliant language codes.',
      },
      limit: {
        type: 'integer',
        description: 'Sets the maximum number of results to be returned.',
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
  return asTextContentResult(await client.browse.search(body));
};

export default { metadata, tool, handler };
