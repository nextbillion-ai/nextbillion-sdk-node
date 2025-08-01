// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/skynet/asset/{id}',
  operationId: '{id}-8JCc1__C',
};

export const tool: Tool = {
  name: 'update_skynet_asset',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an Asset\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/simple_resp',\n  $defs: {\n    simple_resp: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n        },\n        status: {\n          type: 'string',\n          description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n        }\n      }\n    }\n  }\n}\n```",
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
      attributes: {
        type: 'object',
        description:
          'Use this param to update the attributes of an asset in key:value format. Users can maintain any useful information or context about the assets by utilising this parameter.\n\nPlease be careful when using this parameter while updating an asset as the new attributes object provided will completely overwrite the old attributes object. Use the *Update Asset Attributes* method to add new or modify existing attributes.\n\nAnother point to note is that the overall size of the attributes object cannot exceed 65kb and the maximum number of key:value pairs that can be added to this object is 100.',
      },
      description: {
        type: 'string',
        description: 'Use this param to update the description of an asset.',
      },
      meta_data: {
        $ref: '#/$defs/meta_data',
      },
      name: {
        type: 'string',
        description:
          'Use this param to update the name of an asset. Users can assign meaningful custom names to their assets.',
      },
      tags: {
        type: 'array',
        description:
          '**This parameter will be deprecated soon! Please use the attributes parameter to add labels or markers for the asset.**\n\nUse this param to update the tags of an asset. tags can be used to filter asset in *Get Asset List*, **Search** and **Monitor** queries.',
        items: {
          type: 'string',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'key'],
    $defs: {
      meta_data: {
        type: 'object',
        description: 'Any valid json object data. Can be used to save customized data. Max size is 65kb.',
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.skynet.asset.update(id, body)));
};

export default { metadata, tool, handler };
