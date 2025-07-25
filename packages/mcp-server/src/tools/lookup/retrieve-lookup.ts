// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'lookup',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/lookup',
  operationId: 'lookup',
};

export const tool: Tool = {
  name: 'retrieve_lookup',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nLookup By ID\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'The results are presented as a JSON list of candidates in ranked order (most-likely to least-likely) based on the matched location criteria.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The unique identifier for the result item.'\n          },\n          access: {\n            $ref: '#/$defs/access'\n          },\n          address: {\n            $ref: '#/$defs/address'\n          },\n          categories: {\n            type: 'array',\n            description: 'The list of categories assigned to this place.',\n            items: {\n              $ref: '#/$defs/categories'\n            }\n          },\n          contacts: {\n            type: 'array',\n            description: 'Contact information like phone, email or website.',\n            items: {\n              $ref: '#/$defs/contacts'\n            }\n          },\n          mapView: {\n            $ref: '#/$defs/map_view'\n          },\n          position: {\n            $ref: '#/$defs/position'\n          },\n          title: {\n            type: 'string',\n            description: 'The localized display name of this result item.'\n          }\n        }\n      }\n    }\n  },\n  $defs: {\n    access: {\n      type: 'object',\n      description: 'An array returning the location coordinates of all the access points of the search result.',\n      properties: {\n        lat: {\n          type: 'number',\n          description: 'The latitude of the access point of the search result.'\n        },\n        lng: {\n          type: 'number',\n          description: 'The longitude of the access point of the search result.'\n        }\n      }\n    },\n    address: {\n      type: 'object',\n      description: 'Postal address of the result item.',\n      properties: {\n        city: {\n          type: 'string',\n          description: 'The name of the primary locality of the place.'\n        },\n        countryCode: {\n          type: 'string',\n          description: 'A three-letter country code.'\n        },\n        countryName: {\n          type: 'string',\n          description: 'The localised country name.'\n        },\n        county: {\n          type: 'string',\n          description: 'A division of a state; typically, a secondary-level administrative division of a country or equivalent.'\n        },\n        district: {\n          type: 'string',\n          description: 'A division of city; typically an administrative unit within a larger city or a customary name of a city\\'s neighborhood.'\n        },\n        houseNumber: {\n          type: 'string',\n          description: 'House number of the returned place, if available.'\n        },\n        label: {\n          type: 'string',\n          description: 'Assembled address value built out of the address components according to the regional postal rules. These are the same rules for all endpoints. It may not include all the input terms.'\n        },\n        postalCode: {\n          type: 'string',\n          description: 'An alphanumeric string included in a postal address to facilitate mail sorting, such as post code, postcode, or ZIP code.'\n        },\n        state: {\n          type: 'string',\n          description: 'The state division of a country.'\n        },\n        stateCode: {\n          type: 'string',\n          description: 'A country specific state code or state name abbreviation. For example, in the United States it is the two letter state abbreviation: \"CA\" for California.'\n        },\n        street: {\n          type: 'string',\n          description: 'Name of street of the returned place, if available.'\n        }\n      }\n    },\n    categories: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier number for an associated category.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the place category in the result item language.'\n        },\n        primary: {\n          type: 'string',\n          description: 'Whether or not it is a primary category. This field is visible only when the value is \\'true\\'.'\n        }\n      }\n    },\n    contacts: {\n      type: 'object',\n      properties: {\n        email: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/contact_object'\n          }\n        },\n        fax: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/contact_object'\n          }\n        },\n        mobile: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/contact_object'\n          }\n        },\n        phone: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/contact_object'\n          }\n        },\n        tollFree: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/contact_object'\n          }\n        },\n        www: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/contact_object'\n          }\n        }\n      }\n    },\n    contact_object: {\n      type: 'object',\n      properties: {\n        categories: {\n          type: 'array',\n          description: 'The list of place categories this contact refers to.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Identifier number for an associated category. For example: \"900-9300-0000\"'\n              }\n            }\n          }\n        },\n        label: {\n          type: 'string',\n          description: 'Optional label for the contact string, such as \"Customer Service\" or \"Pharmacy Fax\".'\n        },\n        value: {\n          type: 'string',\n          description: 'Contact information, as specified by the contact type.'\n        }\n      }\n    },\n    map_view: {\n      type: 'object',\n      description: 'The bounding box enclosing the geometric shape (area or line) that an individual result covers. `place` typed results have no `mapView`.',\n      properties: {\n        east: {\n          type: 'string',\n          description: 'Longitude of the eastern-side of the box.'\n        },\n        north: {\n          type: 'string',\n          description: 'Longitude of the northern-side of the box.'\n        },\n        south: {\n          type: 'string',\n          description: 'Longitude of the southern-side of the box.'\n        },\n        west: {\n          type: 'string',\n          description: 'Longitude of the western-side of the box.'\n        }\n      }\n    },\n    position: {\n      type: 'object',\n      description: 'Returns the location coordinates of the result.',\n      properties: {\n        lat: {\n          type: 'string',\n          description: 'The latitude of the searched place.'\n        },\n        lng: {\n          type: 'string',\n          description: 'The longitude of the searched place.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'Specify the unique identifier of a specific POI, Street, Geography, Point Address or other entities to retrieve its details.',
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
    required: ['id', 'key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.lookup.retrieve(body)));
};

export default { metadata, tool, handler };
