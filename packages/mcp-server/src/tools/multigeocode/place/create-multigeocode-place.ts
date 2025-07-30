// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'multigeocode.place',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/multigeocode/place',
  operationId: 'place',
};

export const tool: Tool = {
  name: 'create_multigeocode_place',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe \"Add Place\" method allows users to create custom places\n\nAdd place method provides the flexibility to create custom places in a way that suits your business needs. The newly created place and its attributes can be added to custom (proprietary) dataset - to the effect of building your own places dataset (s) - or, to a default dataset. Overcome inaccurate ‘POI’ details from default search provider by creating custom, highly accurate ‘POIs’.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    docId: {\n      type: 'string',\n      description: 'A  unique NextBillion DocID will be created for the POI. Use this ID to search this place through the “Get Place” method, to update attributes or ‘status’ through the “Update Place” method or delete it using the “Delete Place” method.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      place: {
        type: 'array',
        description:
          'This parameter represents the place details, including geographical information, address and other related information.',
        items: {
          type: 'object',
          properties: {
            geopoint: {
              type: 'object',
              description:
                'This parameter represents the geographical coordinates of the place. It includes the latitude and longitude values.',
              properties: {
                lat: {
                  type: 'number',
                  description: 'This parameter represents the latitude value of the place.',
                },
                lng: {
                  type: 'number',
                  description: 'This parameter represents the longitude value of the place.',
                },
              },
            },
            address: {
              type: 'string',
              description:
                'This parameter represents the complete address of the place, including the street, city, state, postal code and country.',
            },
            building: {
              type: 'string',
              description: 'This parameter represents additional building information if applicable.',
            },
            city: {
              type: 'string',
              description: 'This parameter represents the city or town of the place.',
            },
            country: {
              type: 'string',
              description:
                'Country of the search context provided as comma-separated [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country codes.\n\nNote: Country codes should be provided in uppercase.',
            },
            district: {
              type: 'string',
              description: 'This parameter represents the district of the place.',
            },
            house: {
              type: 'string',
              description: 'This parameter represents the house or building number of the place.',
            },
            poi: {
              type: 'object',
              description:
                'This parameter represents a point of interest within the place. A Point of Interest (POI) refers to a specific location or area that is of interest to individuals for various reasons. It could be a landmark, tourist attraction, business, or any other location that people might find important or intriguing.',
              properties: {
                title: {
                  type: 'string',
                  description: 'A title that describes the point of interest.',
                },
              },
            },
            postalCode: {
              type: 'string',
              description: 'This parameter represents the postal code or ZIP code of the place.',
            },
            state: {
              type: 'string',
              description: 'This parameter represents the state or region of the place.',
            },
            street: {
              type: 'string',
              description: 'This parameter represents the street name of the place.',
            },
            subDistrict: {
              type: 'string',
              description: 'This parameter represents the sub-district or locality of the place.',
            },
          },
          required: ['geopoint'],
        },
      },
      dataSource: {
        type: 'object',
        description: 'It contains information about the dataset that returns the  specific result',
        properties: {
          refId: {
            type: 'string',
            description: 'This parameter represents the unique reference ID associated with the data source.',
          },
          source: {
            type: 'string',
            description: 'This parameter represents the source of the data.',
          },
          status: {
            type: 'string',
            description: 'This parameter indicates if a place is searchable.',
            enum: ['enable', 'disable'],
          },
        },
      },
      force: {
        type: 'boolean',
        description:
          'When 2 places are located within 100 meters of each other and have more than 90% of matching attributes (at least 11 out of 12 attributes in the “place” object), they will be considered duplicates and any requests to add such a new place would be rejected. Set force=true to override this duplicate check. You can use this to create closely located POIs. For instance, places inside a mall, university or a government building etc.',
      },
      score: {
        type: 'integer',
        description:
          'Search score of the place. This is calculated based on how ‘richly’ the place is defined. For instance, a place with - street name, city, state and country attributes set might be ranked lower than a place which has values of - house, building, street name, city, state and country attributes set. The score determines the rank of the place among search results. You can also use this field to set a custom score as per its relevance to rank it among the search results from multiple data sources.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'place'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.multigeocode.place.create(body)));
};

export default { metadata, tool, handler };
