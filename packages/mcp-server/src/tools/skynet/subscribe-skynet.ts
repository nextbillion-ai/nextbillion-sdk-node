// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'skynet',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/subscribe',
  operationId: 'subscribe',
};

export const tool: Tool = {
  name: 'subscribe_skynet',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPOST Action\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'Subscription ID as provided in the input action message.'\n    },\n    error: {\n      type: 'string',\n      description: 'Returns the error message when `status: error`. Otherwise, response doesn\\'t contain this field.'\n    },\n    status: {\n      type: 'string',\n      description: 'Status of the action. It can have only two values - \"success\" or \"error\".'\n    },\n    timestamp: {\n      type: 'integer',\n      description: 'Returns the UNIX timestamp, in milliseconds format, when the web-socket returns the action response.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      action: {
        type: 'string',
        description:
          'Specify the behavior that needs to be achieved for the subscription. Following values are accepted:\n\n*   TRIP\\_SUBSCRIBE: Enable a trip subscription.\n    \n*   TRIP\\_UNSUBSCRIBE: Unsubscribe from a trip\n    \n*   HEARTBEAT: Enable heartbeat mechanism for a web-socket connection. The action message need to be sent at a frequency higher than every 5 mins to keep the connection alive. Alternatively, users can chose to respond to the ping frame sent by web socket server to keep the connection alive. Refer to [connection details](https://188--nbai-docs-stg.netlify.app/docs/tracking/api/live-tracking-api#connect-to-web-socket-server) for more details.',
        enum: ['`TRIP_SUBSCRIBE`', '`TRIP_UNSUBSCRIBE`', '`HEARTBEAT`'],
      },
      id: {
        type: 'string',
        description:
          'Specify a custom ID for the subscription. It can be used to reference a given subscription in the downstream applications / systems.',
      },
      params: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description:
              'Specify the ID of an active trip that needs to be subscribed. The ID of a trip is returned in the response when _Start A Trip_ request is acknowledged.\n\nThis attribute is mandatory when `action` is set to either "TRIP\\_SUBSCRIBE" or "TRIP\\_UNSUBSCRIBE"',
          },
        },
        required: ['id'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['action'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.subscribe(body)));
};

export default { metadata, tool, handler };
