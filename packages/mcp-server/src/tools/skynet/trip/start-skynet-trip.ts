// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'skynet.trip',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/trip/start',
  operationId: 'start',
};

export const tool: Tool = {
  name: 'start_skynet_trip',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a new trip to the system with the provided data.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Returns the ID of the newly created trip. It will be same as the `custom_id` if that input was provided in the input request. Use this ID to manage this trip using other available Trip methods.'\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be `Ok`. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      asset_id: {
        type: 'string',
        description:
          'Specify the ID of the asset which is making this trip. The asset will be linked to this trip.',
      },
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
      },
      attributes: {
        type: 'object',
        description:
          '`attributes` can be used to store custom information about a trip in `key`:`value` format. Use `attributes` to add any useful information or context to your trips like the driver name, destination etc.\n\nPlease note that the maximum number of `key`:`value` pairs that can be added to an `attributes` object is 100. Also, the overall size of `attributes` object should not exceed 65kb.',
      },
      custom_id: {
        type: 'string',
        description:
          'Set a unique ID for the new `trip`. If not provided, an ID will be automatically generated in UUID format. A valid `custom_id` can contain letters, numbers, “-”, & “\\_” only.\n\nPlease note that the ID of a `trip` can not be changed once it is created.',
      },
      description: {
        type: 'string',
        description: 'Add a custom description for the trip.',
      },
      meta_data: {
        type: 'object',
        description:
          'An JSON object to collect additional details about the trip. Use this property to add any custom information / context about the trip. The input will be passed on to the response as-is and can be used to display useful information on, for example, a UI app.',
      },
      name: {
        type: 'string',
        description: 'Specify a name for the trip.',
      },
      stops: {
        type: 'array',
        description:
          'An array of objects to collect the details about all the stops that need to be made before the trip ends. Each object represents one stop.',
        items: {
          type: 'object',
          properties: {
            geofence_id: {
              type: 'string',
              description:
                "Specify the ID of the geofence indicating the area where the asset needs to make a stop, during the trip. Only the IDs of geofences created using [NextBillion.ai's Geofence API](https://docs.nextbillion.ai/docs/tracking/api/geofence#create-a-geofence) are accepted.",
            },
            meta_data: {
              type: 'object',
              description:
                'An JSON object to collect additional details about the stop. Use this property to add any custom information / context about the stop. The input will be passed on to the response as-is and can be used to display useful information on, for example, a UI app.',
            },
            name: {
              type: 'string',
              description: 'Specify a custom name for the stop.',
            },
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'asset_id'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.trip.start(body)));
};

export default { metadata, tool, handler };
