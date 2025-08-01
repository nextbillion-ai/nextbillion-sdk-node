// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset.event',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/skynet/asset/{id}/event/list',
  operationId: 'list-DYT-XIBF',
};

export const tool: Tool = {
  name: 'list_asset_skynet_event',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEvent History of an Asset\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'An object containing the information about the event history for the requested asset.',\n      properties: {\n        list: {\n          type: 'array',\n          description: 'An array of objects with each object on the list representing one event.',\n          items: {\n            type: 'object',\n            properties: {\n              asset_id: {\n                type: 'string',\n                description: 'ID of the asset. This is the same ID that was generated/provided at the time of creating the asset.'\n              },\n              event_type: {\n                type: 'string',\n                description: 'Nature of the event triggered by the asset. It can have following values:\\n\\n- enter: When the asset enters a specific geofence\\n\\n- exit: When the asset moves out of a specific geofence.\\n\\n- speeding: When the asset exceeds the certain speed limit.\\n\\n- idle: When the asset exhibits idle or no activity.',\n                enum: [                  'enter',\n                  'exit',\n                  'speeding',\n                  'idle'\n                ]\n              },\n              extra: {\n                type: 'object',\n                description: 'Additional information about the event. Currently, this object returns the speed limit that was used to generate the over-speeding events, for a speeding type event.\\n\\nIt is worth highlighting that, when  the use_admin_speed_limit is true, the speed limit value will be obtained from the underlying road information. Whereas, if the use_admin_speed_limit is false, the speed limit will be equal to the customer_speed_limit value provided by the user when creating or updating the monitor.'\n              },\n              geofence_id: {\n                type: 'string',\n                description: 'ID of the geofence associated with the event.'\n              },\n              monitor_id: {\n                type: 'string',\n                description: 'ID of the monitor associated with the event.'\n              },\n              monitor_tags: {\n                type: 'array',\n                description: 'Tags associated with the monitor.',\n                items: {\n                  type: 'string'\n                }\n              },\n              prev_location: {\n                type: 'object',\n                description: 'An object with details of the asset at the last tracked location before the event was triggered.',\n                properties: {\n                  bearing: {\n                    type: 'number',\n                    description: 'If available, this property returns the heading of the asset from true north in clockwise direction, at the prev_location tracked for the asset.'\n                  },\n                  location: {\n                    type: 'object',\n                    description: 'prev_location information of the asset.',\n                    properties: {\n                      lat: {\n                        type: 'number',\n                        description: 'Latitude of the prev_location tracked for the asset.'\n                      },\n                      lon: {\n                        type: 'number',\n                        description: 'Longitude of the prev_location tracked for the asset.'\n                      }\n                    }\n                  },\n                  meta_data: {\n                    type: 'object',\n                    description: 'Returns the custom data added during the location information upload.'\n                  },\n                  speed: {\n                    type: 'number',\n                    description: 'If available, this property returns the speed of the asset, in meters per second, at the prev_location of the asset.'\n                  },\n                  timestamp: {\n                    type: 'integer',\n                    description: 'A UNIX epoch timestamp in milliseconds representing the time at which the asset was at the prev_location.'\n                  }\n                }\n              },\n              timestamp: {\n                type: 'integer',\n                description: 'A UNIX epoch timestamp in milliseconds representing the time at which the event was added/created.'\n              },\n              triggered_location: {\n                type: 'object',\n                description: 'An object with details of the asset at the location where the event was triggered.',\n                properties: {\n                  bearing: {\n                    type: 'number',\n                    description: 'If available, this property returns the heading of the asset from true north in clockwise direction, when the event was triggered.'\n                  },\n                  location: {\n                    type: 'object',\n                    description: 'An object with information about the location at which the event was triggered.',\n                    properties: {\n                      lat: {\n                        type: 'number',\n                        description: 'Latitude of the triggered_location of the event.'\n                      },\n                      lon: {\n                        type: 'number',\n                        description: 'Longitude of the triggered_location of the event.'\n                      }\n                    }\n                  },\n                  meta_data: {\n                    type: 'object',\n                    description: 'Returns the custom data added during the location information upload.'\n                  },\n                  speed: {\n                    type: 'number',\n                    description: 'If available, this property returns the speed of the asset, in meters per second, when the event was triggered.'\n                  },\n                  timestamp: {\n                    type: 'integer',\n                    description: 'A UNIX epoch timestamp in milliseconds representing the time at which the asset was at the triggered_location.'\n                  }\n                }\n              },\n              triggered_timestamp: {\n                type: 'integer',\n                description: 'A UNIX epoch timestamp in milliseconds representing the time at which the event was triggered.'\n              }\n            }\n          }\n        },\n        page: {\n          $ref: '#/$defs/pagination'\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  },\n  $defs: {\n    pagination: {\n      type: 'object',\n      description: 'An object with pagination details of the search results. Use this object to implement pagination in your application.',\n      properties: {\n        hasmore: {\n          type: 'boolean',\n          description: 'A boolean value indicating whether there are more items available beyond the current page.'\n        },\n        page: {\n          type: 'integer',\n          description: 'An integer value indicating the current page number (starting at 0).'\n        },\n        size: {\n          type: 'integer',\n          description: 'An integer value indicating the maximum number of items retrieved per page.'\n        },\n        total: {\n          type: 'integer',\n          description: 'An integer value indicating the total number of items available in the data set. This parameter can be used to calculate the total number of pages available.'\n        }\n      }\n    }\n  }\n}\n```",
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
      cluster: {
        type: 'string',
        description: 'the cluster of the region you want to use',
        enum: ['america'],
      },
      end_time: {
        type: 'integer',
        description: 'Time before which the events triggered by the asset need to be retrieved.',
      },
      monitor_id: {
        type: 'string',
        description:
          'Filter the events by monitor_id. When provided, only the events triggered by the monitor will be returned in response.\n\nPlease note that if the attributes of the asset identified by id and those of the monitor do not match, then no events might be returned for this monitor_id.',
      },
      pn: {
        type: 'integer',
        description:
          'Denotes page number. Use this along with the ps parameter to implement pagination for your searched results. This parameter does not have a maximum limit but would return an empty response in case a higher value is provided when the result-set itself is smaller.',
      },
      ps: {
        type: 'integer',
        description:
          'Denotes number of search results per page. Use this along with the pn parameter to implement pagination for your searched results.',
      },
      start_time: {
        type: 'integer',
        description: 'Time after which the events triggered by the asset need to be retrieved.',
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
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.skynet.asset.event.list(id, body)));
};

export default { metadata, tool, handler };
