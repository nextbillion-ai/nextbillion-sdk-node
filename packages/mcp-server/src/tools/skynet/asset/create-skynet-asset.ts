// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'skynet.asset',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/skynet/asset',
  operationId: 'asset',
};

export const tool: Tool = {
  name: 'create_skynet_asset',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an Asset\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'An object containing the ID of the asset created.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique ID of the asset created. It will be the same as custom_id, if provided. Else it will be an auto generated UUID. Please note this ID cannot be updated.'\n        }\n      }\n    },\n    message: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be Ok. Indicative error messages are returned for different errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
          'attributes can be used to store custom information about an asset in key:value format. Use attributes to add any useful information or context to your assets like the vehicle type, shift timing etc. Moreover, these attributes can be used to filter assets in **Search**, **Monitor**, and *Get Asset List* queries. \n\nPlease note that the maximum number of key:value pairs that can be added to an attributes object is 100. Also, the overall size of attributes object should not exceed 65kb.',
      },
      custom_id: {
        type: 'string',
        description:
          'Set a unique ID for the new asset. If not provided, an ID will be automatically generated in UUID format. A valid custom_id can contain letters, numbers, "-", & "_" only.\n\nPlease note that the ID of an asset can not be changed once it is created.',
      },
      description: {
        type: 'string',
        description: 'Description for the asset.',
      },
      meta_data: {
        $ref: '#/$defs/meta_data',
      },
      name: {
        type: 'string',
        description:
          'Name of the asset. Use this field to assign a meaningful, custom name to the asset being created.',
      },
      tags: {
        type: 'array',
        description:
          "**This parameter will be deprecated soon! Please use the attributes parameter to add labels or markers for the asset.**\n\nTags of the asset. tags can be used for filtering assets in operations like *Get Asset List* and asset **Search** methods. They can also be used for monitoring of assets using the **Monitor** methods after linking tags and asset.\n\nValid tags are strings consisting of alphanumeric characters (A-Z, a-z, 0-9) along with the underscore ('_') and hyphen ('-') symbols.",
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
    required: ['key'],
    $defs: {
      meta_data: {
        type: 'object',
        description: 'Any valid json object data. Can be used to save customized data. Max size is 65kb.',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.skynet.asset.create(body)));
};

export default { metadata, tool, handler };
