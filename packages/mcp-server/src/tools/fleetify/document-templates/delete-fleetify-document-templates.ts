// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'fleetify.document_templates',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/fleetify/document_templates/{id}',
  operationId: '{id}-w7xB2uXo',
};

export const tool: Tool = {
  name: 'delete_fleetify_document_templates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a document template\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    msg: {\n      type: 'string',\n      description: 'Returns the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'integer',\n      description: 'Returns the HTTP response code.'\n    }\n  }\n}\n```",
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
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.fleetify.documentTemplates.delete(id, body)),
  );
};

export default { metadata, tool, handler };
