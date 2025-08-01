// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'restrictions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/restrictions',
  operationId: 'GroupController_findByBbox',
};

export const tool: Tool = {
  name: 'list_by_bbox_restrictions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet restrictions by bbox\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/rich_group_response'\n  },\n  $defs: {\n    rich_group_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer',\n          description: 'Returns the unique ID of the restriction. This ID can be used for update, delete, get operations on the restriction using the available API methods.'\n        },\n        area: {\n          type: 'string',\n          description: 'Returns the area to which the restriction belongs to.'\n        },\n        bbox: {\n          type: 'object',\n          description: 'Returns the details of the bounding box containing the restriction.'\n        },\n        comment: {\n          type: 'string',\n          description: 'Returns the comments that were provided for the restriction at the time of creating or updating the request.'\n        },\n        create_at: {\n          type: 'string',\n          description: 'The timestamp at which the restriction was created.',\n          format: 'date-time'\n        },\n        direction: {\n          type: 'string',\n          description: 'Returns the direction of travel on the segments to which the restriction applies.',\n          enum: [            'forward',\n            'backward',\n            'both'\n          ]\n        },\n        end_time: {\n          type: 'number',\n          description: 'The time when the restriction ceases to be in-effect. It is a UNIX timestamp.'\n        },\n        geofence: {\n          type: 'object',\n          description: 'Returns the list of coordinates representing the area that was used to apply the given restriction. The geofence returned is same as that provided while creating or updating the restriction.'\n        },\n        highway: {\n          type: 'string',\n          description: 'Returns the highway information on which the restriction applies to. If no highway is impacted by the restriction, then this field is not present in the response.'\n        },\n        mode: {\n          type: 'array',\n          description: 'Returns an array denoting all the traveling modes the restriction applies on.',\n          items: {\n            type: 'string'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Returns the name of the restriction. This value is same as that provided at the time of creating or updating the restriction.'\n        },\n        repeat_on: {\n          type: 'string',\n          description: 'Returns the time periods during which this restriction active or repeats on. The time values follow a [given format](https://wiki.openstreetmap.org/wiki/Key:opening_hours).'\n        },\n        restriction_type: {\n          type: 'string',\n          description: 'Returns the type of restriction. This is the same value as provided when creating or updating the restriction.',\n          enum: [            'closure',\n            'maxspeed',\n            'fixedspeed',\n            'parking',\n            'turn',\n            'truck'\n          ]\n        },\n        speed: {\n          type: 'number',\n          description: 'Returns the fixed speed of segments. This field is not present in the response if the restriction type is not fixedspeed'\n        },\n        speed_limit: {\n          type: 'number',\n          description: 'Returns the maximum speed of segments. This field is not present in the response if the restriction type is not maxspeed'\n        },\n        start_time: {\n          type: 'number',\n          description: 'The time when the restriction starts to be in-effect. It is a UNIX timestamp.'\n        },\n        state: {\n          type: 'string',\n          description: 'Returns the state of the \"restriction\" itself - enabled, disabled or deleted. It does not denote if the restriction is actually in effect or not.',\n          enum: [            'enabled',\n            'disabled',\n            'deleted'\n          ]\n        },\n        status: {\n          type: 'string',\n          description: 'Returns the status of the restriction at the time of making the request i.e. whether the restriction is in force or not. It will have one of the following values: active or inactive.\\n\\nPlease note that this field can not be directly influenced by the users. It will always be calculated using the start_time, end_time and repeat_on parameters.',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        update_at: {\n          type: 'string',\n          description: 'The timestamp at which the restriction was updated.',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      max_lat: {
        type: 'number',
        description: 'Specifies the maximum latitude value for the bounding box.',
      },
      max_lon: {
        type: 'number',
        description: 'Specifies the maximum longitude value for the bounding box.',
      },
      min_lat: {
        type: 'number',
        description: 'Specifies the minimum latitude value for the bounding box.',
      },
      min_lon: {
        type: 'number',
        description: 'Specifies the minimum longitude value for the bounding box.',
      },
      mode: {
        type: 'array',
        description: 'Specify the modes of travel that the restriction pertains to.',
        items: {
          type: 'string',
          enum: ['0w', '2w', '3w', '4w', '6w'],
        },
      },
      restriction_type: {
        type: 'string',
        description: 'Specify the type of restrictions to fetch.',
        enum: ['turn', 'parking', 'fixedspeed', 'maxspeed', 'closure', 'truck'],
      },
      source: {
        type: 'string',
        description:
          'This parameter represents where the restriction comes from and cannot be modified by clients sending requests to the API endpoint.\n\nFor example, an API endpoint that returns a list of restrictions could include the source parameter to indicate where each item comes from. This parameter can be useful for filtering, sorting, or grouping the results based on their source.',
        enum: ['rrt', 'pbf'],
      },
      state: {
        type: 'string',
        description:
          'This parameter is used to filter restrictions based on their state i.e. whether the restriction is currently enabled, disabled, or deleted.\nFor example, users can retrieve a list of all the deleted restrictions by setting state=deleted.',
        enum: ['enabled', 'disabled', 'deleted'],
      },
      status: {
        type: 'string',
        description:
          'Restrictions can be active or inactive at a given time by virtue of their nature. For example, maximum speed limits can be active on the roads leading to schools during school hours and be inactive afterwards or certain road closure restrictions be active during holidays/concerts and be inactive otherwise.\n\nUse this parameter to filter the restrictions based on their status at the time of making the request i.e. whether they are in force or not.',
        enum: ['active', 'inactive'],
      },
      transform: {
        type: 'boolean',
        description: 'This is internal parameter with a default value as false.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'max_lat', 'max_lon', 'min_lat', 'min_lon'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.restrictions.listByBbox(body)));
};

export default { metadata, tool, handler };
