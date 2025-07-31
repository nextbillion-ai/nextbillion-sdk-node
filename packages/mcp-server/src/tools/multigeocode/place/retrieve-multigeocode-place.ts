// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'multigeocode.place',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/multigeocode/place/{docId}',
  operationId: '{docId}',
};

export const tool: Tool = {
  name: 'retrieve_multigeocode_place',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUse this method to get the details of previously created custom places using its NextBillion ID.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    dataSorce: {\n      type: 'object',\n      description: 'It displays the information about the current source and current status of the place. Use the “Update Place” method to change these values, as needed.',\n      properties: {\n        refId: {\n          type: 'string',\n          description: 'This parameter represents the unique reference ID associated with the data source.'\n        },\n        source: {\n          type: 'string',\n          description: 'This parameter represents the current dataset source of the information returned in the result.'\n        },\n        status: {\n          type: 'string',\n          description: 'This parameter indicates if a place is currently discoverable by search API or not.',\n          enum: [            'enable',\n            'disable'\n          ]\n        }\n      }\n    },\n    docId: {\n      type: 'string',\n      description: 'The unique NextBillion ID for the result item.'\n    },\n    place: {\n      type: 'array',\n      description: 'This parameter represents the place details, including geographical information, address and other related information.',\n      items: {\n        $ref: '#/$defs/place_item'\n      }\n    },\n    score: {\n      type: 'integer',\n      description: 'It returns the system calculated weighted score of the place. It depends on how ‘richly’ the place was defined at the time of creation. In order to modify the score, use “Update Place” method and update information for parameters which are not set currently. As an alternative, you can directly update the `score` to a custom value.'\n    }\n  },\n  $defs: {\n    place_item: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string',\n          description: 'This parameter represents the complete address of the place, including the street, city, state, postal code and country.'\n        },\n        building: {\n          type: 'string',\n          description: 'This parameter represents additional building information if applicable.'\n        },\n        city: {\n          type: 'string',\n          description: 'This parameter represents the city or town of the place.'\n        },\n        country: {\n          type: 'string',\n          description: 'This parameter represents the country of the place.'\n        },\n        district: {\n          type: 'string',\n          description: 'This parameter represents the district of the place.'\n        },\n        geopoint: {\n          type: 'object',\n          description: 'This parameter represents the geographical coordinates of the place. It includes the latitude and longitude values.',\n          properties: {\n            lat: {\n              type: 'number',\n              description: 'This parameter represents the latitude value of the place.'\n            },\n            lng: {\n              type: 'number',\n              description: 'This parameter represents the longitude value of the place.'\n            }\n          }\n        },\n        house: {\n          type: 'string',\n          description: 'This parameter represents the house or building number of the place.'\n        },\n        poi: {\n          type: 'object',\n          description: 'This parameter represents a point of interest within the place. A Point of Interest (POI) refers to a specific location or area that is of interest to individuals for various reasons. It could be a landmark, tourist attraction, business, or any other location that people might find important or intriguing.',\n          properties: {\n            title: {\n              type: 'string',\n              description: 'A title that describes the point of interest.'\n            }\n          }\n        },\n        postalCode: {\n          type: 'string',\n          description: 'This parameter represents the postal code or ZIP code of the place.'\n        },\n        state: {\n          type: 'string',\n          description: 'This parameter represents the state or region of the place.'\n        },\n        street: {\n          type: 'string',\n          description: 'This parameter represents the street name of the place.'\n        },\n        subDistrict: {\n          type: 'string',\n          description: 'This parameter represents the sub-district or locality of the place.'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['docId', 'key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { docId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.multigeocode.place.retrieve(docId, body)));
};

export default { metadata, tool, handler };
