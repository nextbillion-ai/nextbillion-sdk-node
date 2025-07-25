// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'fleetify.routes.steps',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/fleetify/routes/{routeID}/steps/{stepID}',
  operationId: '{stepsID}',
};

export const tool: Tool = {
  name: 'delete_routes_fleetify_steps',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a step\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    message: {\n      type: 'string',\n      description: 'Returns the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'integer',\n      description: 'Returns the status code of the response.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      routeID: {
        type: 'string',
      },
      stepID: {
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
    required: ['routeID', 'stepID', 'key'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { stepID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.fleetify.routes.steps.delete(stepID, body)),
  );
};

export default { metadata, tool, handler };
