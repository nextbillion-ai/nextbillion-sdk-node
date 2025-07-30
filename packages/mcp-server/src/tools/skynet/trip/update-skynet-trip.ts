// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.trip',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/skynet/trip/{id}',
  operationId: '{id}-9VE6eKc0',
};

export const tool: Tool = {
  name: 'update_skynet_trip',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the data of a specified trip with the provided data.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/simple_resp',\n  $defs: {\n    simple_resp: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n        },\n        status: {\n          type: 'string',\n          description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      asset_id: {
        type: 'string',
        description:
          'Use this param to update the ID of the asset which made this trip. Please be cautious when using this field as providing an ID other than what was provided at the time of starting the trip, will link a new asset to the trip and un-link the original asset, even if the trip is still active.',
      },
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
      },
      attributes: {
        type: 'object',
        description:
          'Use this field to update the attributes of the trip. Please note that when updating the attributes field, previously added information will be overwritten.',
      },
      description: {
        type: 'string',
        description: 'Use this parameter to update the custom description of the trip.',
      },
      meta_data: {
        type: 'object',
        description:
          'Use this JSON object to update additional details about the trip. This property is used to add any custom information / context about the trip.\n\nPlease note that updating the meta_data field will overwrite the previously added information.',
      },
      name: {
        type: 'string',
        description: 'Use this property to update the name of the trip.',
      },
      stops: {
        type: 'array',
        description:
          'Use this object to update the details of the stops made during the trip. Each object represents a single stop.\n\nPlease note that when updating this field, the new stops will overwrite any existing stops configured for the trip.',
        items: {
          type: 'object',
          properties: {
            geofence_id: {
              type: 'string',
              description:
                "Use this parameter to update the ID of the geofence indicating the area where the asset needs to make a stop, during the trip. Only the IDs of geofences created using [NextBillion.ai's Geofence API](https://docs.nextbillion.ai/docs/tracking/api/geofence#create-a-geofence) are accepted.\n\nPlease note that updating this field will overwrite the previously added information.",
            },
            meta_data: {
              type: 'object',
              description:
                'Use this JSON object to update additional details about the stop. This property is used to add any custom information / context about the stop.\n\nPlease note that updating the meta_data field will overwrite the previously added information.',
            },
            name: {
              type: 'string',
              description: 'Use this filed to update the name of the stop.',
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
    required: ['id', 'key', 'asset_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.trip.update(id, body)));
};

export default { metadata, tool, handler };
