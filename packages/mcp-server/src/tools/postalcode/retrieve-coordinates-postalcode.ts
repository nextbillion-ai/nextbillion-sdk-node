// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'postalcode',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/postalcode',
  operationId: 'postalcode',
};

export const tool: Tool = {
  name: 'retrieve_coordinates_postalcode',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve coordinates by postal code\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    places: {\n      type: 'object',\n      description: 'An object that contains details about the place that was provided in the input.',\n      properties: {\n        address: {\n          type: 'string',\n          description: 'Returns the address of the `postalcode` returned.'\n        },\n        boundary: {\n          type: 'object',\n          description: 'An object containing the boundary details of the postal code area. This object will not be returned in case the boundary information of the postal code provided is not available (only for selected countries).\\n\\nPlease note the contents of this object will change based on the `format` field in the input. When the `format` field is not present in the input this object would contain `multipolygon` - `polygon` - `points` objects depending on the boundary of the given postal code. When the `format` field is present in the input, then the contents of this object would match the [geojson format and standard](https://datatracker.ietf.org/doc/html/rfc7946).',\n          properties: {\n            geometry: {\n              type: 'object',\n              description: 'An object with geoJSON details of the boundary. This object is returned when the `format` field is set to `geojson` in the input request, otherwise it is not present in the response. The contents of this object follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).',\n              properties: {\n                coordinates: {\n                  type: 'array',\n                  description: 'An array of coordinates in the [longitude, latitude] format, representing the coordinates points which lie on the boundary of the postal code area.',\n                  items: {\n                    type: 'array',\n                    items: {\n                      type: 'array',\n                      items: {\n                        type: 'number'\n                      }\n                    }\n                  }\n                },\n                type: {\n                  type: 'string',\n                  description: 'Type of the geoJSON geometry.'\n                }\n              }\n            },\n            multipolygon: {\n              type: 'array',\n              description: 'An array of objects containing  information about all the polygons forming the postal code area. In case, the postal code area is formed by multiple polygons not containing each other, a matching count of `polygon` objects will be returned.\\n\\nPlease note that this object is returned only when `format` field is not specified in the input, otherwise it is not present in the response.',\n              items: {\n                type: 'object',\n                properties: {\n                  polygon: {\n                    type: 'array',\n                    description: 'An object containing the details of a single polygon that is a part of the postal code area. In case the postal code area contains other polygon(s), the details of such polygon(s) would be returned through an array of `points` object.',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        points: {\n                          type: 'array',\n                          description: 'Represents an array of geographic coordinates that define a `polygon` boundary.',\n                          items: {\n                            type: 'object',\n                            properties: {\n                              lat: {\n                                type: 'number',\n                                description: 'Latitude of the coordinate.'\n                              },\n                              lng: {\n                                type: 'number',\n                                description: 'Longitude of the coordinate.'\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            },\n            properties: {\n              type: 'string',\n              description: 'Property associated with the geoJSON shape.'\n            },\n            type: {\n              type: 'string',\n              description: 'Type of the geoJSON object. This parameter is returned when the `format` field is set to `geojson` in the input request, otherwise it is not present in the response. The contents of this object follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).'\n            }\n          }\n        },\n        country: {\n          type: 'string',\n          description: 'Name of the country containing the geographic coordinate point / postal code provided in the input request.'\n        },\n        countryCode: {\n          type: 'string',\n          description: 'Returns the [alpha-3 ISO code](https://www.iban.com/country-codes) of the country containing the `postalcode` returned.'\n        },\n        distance: {\n          type: 'number',\n          description: 'This property is returned only when the API is requested to fetch the postal code containing the location coordinate provided in the `at` input parameter. `distance` denotes the straight line distance, in meters, from the requested location coordinate to the postal code centroid.'\n        },\n        district: {\n          type: 'string',\n          description: 'Name of the district or region containing the geographic coordinate point / postal code provided in the input request.'\n        },\n        geopoint: {\n          type: 'object',\n          description: 'Refers to the geographic coordinate denoting the center of the postal code in latitude, longitude format.',\n          properties: {\n            lat: {\n              type: 'number',\n              description: 'Latitude of the location.'\n            },\n            lng: {\n              type: 'number',\n              description: 'Longitude of the location.'\n            }\n          }\n        },\n        postalcode: {\n          type: 'string',\n          description: 'Returns the postal code associated with the requested geographic coordinate point or the postal code itself as provided in the input API request.'\n        },\n        state: {\n          type: 'string',\n          description: 'Name of the state or province containing the geographic coordinate point / postal code provided in the input request.'\n        },\n        subdistrict: {\n          type: 'string',\n          description: 'Name of the sub-district or sub-region containing the postal code or geographic coordinate point / postal code provided in the input request'\n        }\n      }\n    },\n    warning: {\n      type: 'array',\n      description: 'Returns a message, in case the input provided triggers any warnings.',\n      items: {\n        type: 'string'\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      at: {
        type: 'object',
        description:
          'Location coordinates that you want to get the postal code of. If not providing `postalcode` in the request, `at` becomes mandatory. \nPlease note that only 1 point can be requested. [See this example](#note).',
        properties: {
          lat: {
            type: 'number',
            description: 'Latitude of the location.',
          },
          lng: {
            type: 'number',
            description: 'Longitude of the location.',
          },
        },
      },
      country: {
        type: 'string',
        description:
          'Country containing the postal code or the location. It is mandatory if `postalcode` is provided in the request. [See this example](#note).\n\nPlease check the [API Query Limits](#api-query-limits) section below for a list of the countries covered by the Geocode Postcode API. Users can provide either the name or the alpha-2/3 code as per the [ISO 3166-1 standard](https://en.wikipedia.org/wiki/ISO_3166-1) of a country covered by the API as input for this parameter.',
      },
      format: {
        type: 'string',
        description:
          'Specify the format in which the boundary details of the post code will be returned. When specified, the boundary details will be returned in the `geojson` format. When not specified, the boundary details are returned in general format.',
        enum: ['`geojson`'],
      },
      postalcode: {
        type: 'string',
        description:
          'Provide the postal code for which the information is needed. At least one of (`postalcode` + `country`) or `at` needs to be provided.\nPlease note that only 1 postal code can be requested. [See this example](#note).',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.postalcode.retrieveCoordinates(body)));
};

export default { metadata, tool, handler };
