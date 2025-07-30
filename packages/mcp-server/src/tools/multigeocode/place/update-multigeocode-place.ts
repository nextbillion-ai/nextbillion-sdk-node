// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'multigeocode.place',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/multigeocode/place/{docId}',
  operationId: '{docId}-u0FKMQNo',
};

export const tool: Tool = {
  name: 'update_multigeocode_place',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe \"Update Place\" method allows businesses to update the attributes of an existing place.\n\nThis method allows you to update the attributes of custom places. In effect, updating a place replaces the current information in search results with the updated information associated with the specific docID. Use this method to enhance the accuracy/usability of your search results with respect to the default dataset to suit your business needs.\n\n\nIf you want to prioritize a particular result in your search results, update the ‘score’ of that specific place.    \nAlternatively, you can block places which are no longer needed by setting their status: ‘disable’.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    msg: {\n      type: 'string',\n      description: 'This could be “Ok” representing success or “not found” representing error in processing the request.'\n    },\n    status: {\n      type: 'string',\n      description: 'Represents the status of the response.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      docId: {
        type: 'string',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      dataSource: {
        type: 'object',
        description:
          'dataSource values can be updated to enhance or prioritize the search results to better suit specific business use cases.',
        properties: {
          refId: {
            type: 'string',
            description: 'This parameter represents the unique reference ID associated with the data source.',
          },
          source: {
            type: 'string',
            description:
              '1. Move the place to a new dataset by setting the value to a unique dataset name. You can also move the place to an existing dataset by using an existing dataset name other than the current one. In both cases, the current datasource will be replaced for the specified docID.     \n\n2. Update the place in an existing dataset by setting the name to the current value.',
          },
          status: {
            type: 'string',
            description:
              'Set this to either enable or disable to allow the place to be retrieved by a search API or block it respectively.',
            enum: ['enable', 'disable'],
          },
        },
      },
      place: {
        type: 'array',
        description:
          'This parameter represents the place details, including geographical information, address and other related information.',
        items: {
          $ref: '#/$defs/place_item',
        },
      },
      score: {
        type: 'integer',
        description:
          'Search score of the place. This is calculated based on how ‘richly’ the place is defined. For instance, a place with street name, city, state and country attributes set might be ranked lower than a place which has values of house, building, street name, city, state and country attributes set. The score determines the rank of the place among search results. You can also use this field to set a custom score as per its relevance to rank it among the search results from multiple data sources.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['docId', 'key'],
    $defs: {
      place_item: {
        type: 'object',
        properties: {
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
            description: 'This parameter represents the country of the place.',
          },
          district: {
            type: 'string',
            description: 'This parameter represents the district of the place.',
          },
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
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { docId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.multigeocode.place.update(docId, body)));
};

export default { metadata, tool, handler };
