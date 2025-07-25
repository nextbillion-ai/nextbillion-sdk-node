// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'skynet.monitor',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/monitor/{id}',
  operationId: '{id}',
};

export const tool: Tool = {
  name: 'retrieve_skynet_monitor',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a Monitor\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'A data object containing the details of the `monitor`.',\n      properties: {\n        monitor: {\n          $ref: '#/$defs/monitor'\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be `Ok`. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  },\n  $defs: {\n    monitor: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique ID of the `monitor`. This is the same ID that was generated at the time of creating the `monitor`.'\n        },\n        created_at: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in seconds representing the time at which the `monitor` was created.'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the `monitor`. The value would be the same as that provided for the `description` parameter at the time of creating or updating the `monitor`.'\n        },\n        geofence_config: {\n          type: 'object',\n          description: 'An object returning the details of the geofence that are associated with the `monitor` for an `enter`, `exit` or `enter_and_exit` type of monitor.',\n          properties: {\n            geofence_ids: {\n              type: 'array',\n              description: 'An array of geofence IDs that are linked to the `monitor`. Geofences are geographic boundaries that can be used to trigger events based on an asset\\'s location.',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        geofences: {\n          type: 'array',\n          description: 'Geofence IDs that are linked to the `monitor`. These IDs were associated with the `monitor` at the time of creating or updating it.\\n\\nThe `monitor` uses the geofences mentioned here to create events of `type` nature for the eligible asset(s).',\n          items: {\n            type: 'string'\n          }\n        },\n        idle_config: {\n          type: 'object',\n          description: 'An object returning the details of the idle activity constraints for a `idle` type of `monitor`.',\n          properties: {\n            distance_tolerance: {\n              type: 'number',\n              description: 'This parameter returns the distance threshold that was used to determine if the asset was idle or not. The value returned for this parameter is the same as that provided while creating or updating a `idle` type `monitor`.'\n            },\n            time_tolerance: {\n              type: 'integer',\n              description: 'This parameter returns the time duration for which the `monitor` tracks the distance covered by an asset before triggering an idle event. The value returned for this parameter is the same as that provided while creating or updating a `idle` type `monitor`.'\n            }\n          }\n        },\n        match_filter: {\n          type: 'object',\n          description: 'Use this object to update the `attributes` of the `monitor`.',\n          properties: {\n            include_all_of_attributes: {\n              type: 'object',\n              description: 'A string type dictionary object to specify the `attributes` which will be used to identify the asset(s) on which the `monitor` would be applied. Please note that using this parameter overwrites the existing `attributes` of the monitor.\\n\\nIf the `attributes` added to a `monitor` do not match fully with the `attributes` added to any `asset`, the `monitor` will be ineffective.\\n\\nPlease note that the maximum number of `key`:`value` pairs that \\'include_all_of_attributes\\' can take is 100. Also, the overall size of the `match_filter` object should not exceed 65kb.'\n            },\n            include_any_of_attributes: {\n              type: 'object',\n              description: 'A string dictionary object to specify the `attributes`, separated by a `,`. Only the `assets` with any one of the `attributes` added to this parameter will be linked to this `monitor`. Once an `asset` and a `monitor` are linked, the `monitor` will be able to create events for the `asset` when an activity specified in `type` is detected.\\n\\nIf no input is provided for this object or if the `attributes` added here do not match at least one of the `attributes` added to any `asset`, the `monitor` will be ineffective.\\n\\nPlease note that the maximum number of `key`:`value` pairs that `include_any_of_attributes` can take is 100. Also, the overall size of `match_filter` object should not exceed 65kb.'\n            }\n          }\n        },\n        meta_data: {\n          $ref: '#/$defs/metadata'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the `monitor`. The value would be the same as that provided for the `name` parameter at the time of creating or updating the `monitor`.'\n        },\n        speeding_config: {\n          type: 'object',\n          description: 'An object returning the details of the over-speeding constraints for a `speeding` type of `monitor`.',\n          properties: {\n            customer_speed_limit: {\n              type: 'integer',\n              description: 'This property returns the actual speed limit that the `monitor` uses as a threshold for generating a speed limit event. The value returned for this parameter is the same as that provided while creating or updating a `speeding` type `monitor`.'\n            },\n            time_tolerance: {\n              type: 'integer',\n              description: 'This property returns the time duration value, in milliseconds, for which the `monitor` will track the speed of the asset. An event is triggered if the speed remains higher than the specified limit for a duration more than the tolerance value.\\n\\nThe value returned for this parameter is the same as that provided while creating or updating a `speeding` type `monitor`.'\n            },\n            use_admin_speed_limit: {\n              type: 'boolean',\n              description: 'A boolean value denoting if the administrative speed limit of the road was used as speed limit threshold for triggering events. The value returned for this parameter is the same as that provided while creating or updating a `speeding` type `monitor`.'\n            }\n          }\n        },\n        tags: {\n          type: 'array',\n          description: 'Tags of the `monitor`. The values would be the same as that provided for the `tags` parameter at the time of creating or updating the `monitor`.',\n          items: {\n            type: 'string'\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the `monitor`. It represents the type of `asset` activity that the `monitor` is configured to detect.',\n          enum: [            '`enter`',\n            '`exit`',\n            '`enter_and_exit`',\n            '`speeding`',\n            '`idle`'\n          ]\n        },\n        updated_at: {\n          type: 'integer',\n          description: 'A UNIX epoch timestamp in seconds representing the time at which the `monitor` was last updated.'\n        }\n      }\n    },\n    metadata: {\n      type: 'object',\n      description: 'Any valid json object data. Can be used to save customized data. Max size is 65kb.'\n    }\n  }\n}\n```",
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
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.monitor.retrieve(id, body)));
};

export default { metadata, tool, handler };
