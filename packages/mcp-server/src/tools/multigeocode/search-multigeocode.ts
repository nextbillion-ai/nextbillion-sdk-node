// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'multigeocode',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/multigeocode/search',
  operationId: 'search-POST',
};

export const tool: Tool = {
  name: 'search_multigeocode',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe method enables searching for known places from multiple data sources\n\nUse this method to find known places in default or your own custom (proprietary) dataset and get a combined search result. It accepts free-form, partially correct or even incomplete search texts. Results would be ranked based on the search score of a place.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    entities: {\n      type: 'array',\n      description: 'An array of objects containing the search result response. Each object represents one place returned in the search response. An empty array would be returned if no matching place is found.',\n      items: {\n        type: 'object',\n        properties: {\n          dataSource: {\n            type: 'object',\n            description: 'It contains information about the dataset that returns the  specific result',\n            properties: {\n              refId: {\n                type: 'string',\n                description: 'This parameter represents the unique reference ID associated with the data source.'\n              },\n              source: {\n                type: 'string',\n                description: 'This parameter represents the source of the data.'\n              },\n              status: {\n                type: 'string',\n                description: 'This parameter indicates if a place is searchable.',\n                enum: [                  'enable',\n                  'disable'\n                ]\n              }\n            }\n          },\n          docId: {\n            type: 'string',\n            description: 'The unique NextBillion ID for the result item. This ID can be used as input in “Get Place”, “Update Place”, “Delete Place” methods.'\n          },\n          place: {\n            type: 'array',\n            description: 'This parameter represents the place details, including geographical information, address and other related information.',\n            items: {\n              $ref: '#/$defs/place_item'\n            }\n          },\n          score: {\n            type: 'integer',\n            description: 'Integer value representing how good the result is. Higher score indicates a better match between the search query and the result. This can be used to accept or reject the results depending on how “relevant” a result is, for a given use case'\n          }\n        }\n      }\n    }\n  },\n  $defs: {\n    place_item: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string',\n          description: 'This parameter represents the complete address of the place, including the street, city, state, postal code and country.'\n        },\n        building: {\n          type: 'string',\n          description: 'This parameter represents additional building information if applicable.'\n        },\n        city: {\n          type: 'string',\n          description: 'This parameter represents the city or town of the place.'\n        },\n        country: {\n          type: 'string',\n          description: 'This parameter represents the country of the place.'\n        },\n        district: {\n          type: 'string',\n          description: 'This parameter represents the district of the place.'\n        },\n        geopoint: {\n          type: 'object',\n          description: 'This parameter represents the geographical coordinates of the place. It includes the latitude and longitude values.',\n          properties: {\n            lat: {\n              type: 'number',\n              description: 'This parameter represents the latitude value of the place.'\n            },\n            lng: {\n              type: 'number',\n              description: 'This parameter represents the longitude value of the place.'\n            }\n          }\n        },\n        house: {\n          type: 'string',\n          description: 'This parameter represents the house or building number of the place.'\n        },\n        poi: {\n          type: 'object',\n          description: 'This parameter represents a point of interest within the place. A Point of Interest (POI) refers to a specific location or area that is of interest to individuals for various reasons. It could be a landmark, tourist attraction, business, or any other location that people might find important or intriguing.',\n          properties: {\n            title: {\n              type: 'string',\n              description: 'A title that describes the point of interest.'\n            }\n          }\n        },\n        postalCode: {\n          type: 'string',\n          description: 'This parameter represents the postal code or ZIP code of the place.'\n        },\n        state: {\n          type: 'string',\n          description: 'This parameter represents the state or region of the place.'\n        },\n        street: {\n          type: 'string',\n          description: 'This parameter represents the street name of the place.'\n        },\n        subDistrict: {\n          type: 'string',\n          description: 'This parameter represents the sub-district or locality of the place.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      at: {
        type: 'object',
        description: 'Specify the center of the search context expressed as coordinates.',
        properties: {
          lat: {
            type: 'number',
            description: 'Latitude coordinate of the location',
          },
          lng: {
            type: 'number',
            description: 'Longitude coordinate of the location.',
          },
        },
        required: ['lat', 'lng'],
      },
      query: {
        type: 'string',
        description:
          'A free-form, complete or incomplete string to be searched. It allows searching for places using keywords or names.',
      },
      city: {
        type: 'string',
        description: 'Specifies the primary city of the place.',
      },
      country: {
        type: 'string',
        description:
          'Country of the search context provided as comma-separated [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country codes.   \nNote: Country codes should be provided in uppercase.',
      },
      district: {
        type: 'string',
        description: 'Specifies the district of the search place.',
      },
      limit: {
        type: 'integer',
        description: 'Sets the maximum number of results to be returned.',
      },
      radius: {
        type: 'string',
        description:
          "Filters the results to places within the specified radius from the 'at' location.\n\nNote: Supports 'meter' (m) and 'kilometer' (km) units. If no radius is given, the search method returns as many results as specified in `limit`.",
      },
      state: {
        type: 'string',
        description: 'Specifies the state of the search place.',
      },
      street: {
        type: 'string',
        description: 'Specifies the street name of the search place.',
      },
      subDistrict: {
        type: 'string',
        description: 'Specifies the subDistrict of the search place.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'at', 'query'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.multigeocode.search(body)));
};

export default { metadata, tool, handler };
