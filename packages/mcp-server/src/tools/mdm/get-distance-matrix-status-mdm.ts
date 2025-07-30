// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'mdm',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/mdm/status',
  operationId: 'status',
};

export const tool: Tool = {
  name: 'get_distance_matrix_status_mdm',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet massive distance matrix task status\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'string',\n      description: 'A code representing the status of the request.',\n      enum: [        'Ok',\n        'Processing',\n        'Failed'\n      ]\n    },\n    output_addr: {\n      type: 'string',\n      description: 'Returns the GCS result of a successful task. Please note that this is an internal field.\\n\\n*internal field, the gcs result of specific task if task is success.*'\n    },\n    result_link: {\n      type: 'string',\n      description: 'Returns the link for the result file (csv format) once the task is completed successfully.'\n    },\n    status: {\n      type: 'string',\n      description: 'Returns the status detail of the result. Indicative error messages/codes are returned in case of errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description:
          'Provide the unique ID that was returned on successful submission of the Asynchronous Distance Matrix POST request.',
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
  return asTextContentResult(await maybeFilter(args, await client.mdm.getDistanceMatrixStatus(body)));
};

export default { metadata, tool, handler };
