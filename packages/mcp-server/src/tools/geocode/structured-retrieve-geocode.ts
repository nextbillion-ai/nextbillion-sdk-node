// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'geocode',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/geocode/structured',
  operationId: 'structured',
};

export const tool: Tool = {
  name: 'structured_retrieve_geocode',
  description: 'Structured Geocode',
  inputSchema: {
    type: 'object',
    properties: {
      countryCode: {
        type: 'string',
        description:
          'Specify a valid [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country code in which the place being searched should be located. Please note that this is a case-sensitive field and the country code should be in all uppercase.',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      at: {
        type: 'string',
        description:
          'Specify the center of the search context expressed as coordinates.\n\nPlease note that one of "at", "in=circle" or "in=bbox" should be provided for relevant results.',
      },
      city: {
        type: 'string',
        description: 'Specify the city in which the place being searched should be located.',
      },
      county: {
        type: 'string',
        description:
          'Specify the county division of the state in which the place being searched should be located.',
      },
      houseNumber: {
        type: 'string',
        description: 'Specify the house number of the place being searched.',
      },
      in: {
        type: 'string',
        description:
          "Search within a geographic area. This is a hard filter. Results will be returned if they are located within the specified area.\n\nA geographic area can be\n\n*   a circular area, provided as latitude, longitude, and radius (an integer with meters as unit)\n    \n    Format: circle:{latitude},{longitude};r={radius}\n\n\n\n    \n*   a bounding box, provided as _west longitude_, _south latitude_, _east longitude_, _north latitude_\n    \n    Format: bbox:{west longitude},{south latitude},{east longitude},{north latitude}\n\n\n\n    \n\nPlease provide one of 'at', 'in=circle' or 'in=bbox' input for a relevant result.",
      },
      limit: {
        type: 'integer',
        description: 'Sets the maximum number of results to be returned.',
      },
      postalCode: {
        type: 'string',
        description: 'Specify the postal code in which the place being searched should be located.',
      },
      state: {
        type: 'string',
        description:
          'Specify the state division of the country in which the place being searched should be located.',
      },
      street: {
        type: 'string',
        description: 'Specify the name of the street in which the place being searched should be located.',
      },
    },
    required: ['countryCode', 'key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.geocode.structuredRetrieve(body));
};

export default { metadata, tool, handler };
