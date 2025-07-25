// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'fleetify.document_templates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/fleetify/document_templates',
  operationId: 'document_templates',
};

export const tool: Tool = {
  name: 'list_fleetify_document_templates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all document templates\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      description: 'An array of objects returning the details of each document template associated with the specified API key. Each object represents one document template. In case there are no templates associated with the given key, a blank array is returned.',\n      items: {\n        type: 'object',\n        description: 'An array of objects returning the details of each document template associated with the specified API key. Each object represents one document template. In case there are no templates associated with the given key, a blank array is returned.',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Returns the unique ID of the document template.'\n          },\n          content: {\n            type: 'array',\n            description: 'An array of objects returning the details of data structures and validation rules and other properties of all document fields. Each object represents one document field.',\n            items: {\n              $ref: '#/$defs/document_template_content_response'\n            }\n          },\n          name: {\n            type: 'string',\n            description: 'Returns the name of the document template.'\n          }\n        }\n      }\n    },\n    msg: {\n      type: 'string',\n      description: 'Returns the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'integer',\n      description: 'Returns the HTTP response code.'\n    }\n  },\n  $defs: {\n    document_template_content_response: {\n      type: 'object',\n      description: 'An array of objects returning the details of data structures and validation rules and other properties of all document fields. Each object represents one document field.',\n      properties: {\n        label: {\n          type: 'string',\n          description: 'Returns the label of the document field.'\n        },\n        meta: {\n          type: 'object',\n          description: 'Returns the options configured for `single_choice` or `multi_choices` type document items.',\n          properties: {\n            options: {\n              type: 'array',\n              description: 'An array of objects returning the options for `multi_choices` or `single_choice` type document field. Each object represents one configured option.',\n              items: {\n                type: 'object',\n                properties: {\n                  label: {\n                    type: 'string',\n                    description: 'Returns the label for the option.'\n                  },\n                  value: {\n                    type: 'string',\n                    description: 'Returns the value associated with the option. This value gets submitted when the option is checked in the Driver app.'\n                  }\n                }\n              }\n            }\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Returns the name of the document field.'\n        },\n        required: {\n          type: 'boolean',\n          description: 'Indicates if the document field is mandatory or not.'\n        },\n        type: {\n          type: 'string',\n          description: 'Returns the data type of the document field. It will always belong to one of `string`, `number`, `date_time`, `photos`, `multi_choices`, `signature`, `barcode`, and `single_choice.`'\n        },\n        validation: {\n          type: 'object',\n          description: 'Returns the validation rules for `number` , `multi_choices` , and `photos` document field types.',\n          properties: {\n            max: {\n              type: 'integer',\n              description: 'Returns the maximum allowed value for `number` type document item, as specified at the time of configuring the field. This parameter is not present in the response if it was not provided in the input.'\n            },\n            max_items: {\n              type: 'string',\n              description: 'Returns the maximum number of items required for `multi_choices`, `photos` type document items. This parameter will not be present in the response if it was not provided in the input.'\n            },\n            min: {\n              type: 'integer',\n              description: 'Returns the minimum allowed value for `number` type document item, as specified at the time of configuring the field. This parameter is not present in the response if it was not provided in the input.'\n            },\n            min_items: {\n              type: 'string',\n              description: 'Returns the minimum number of items required for `multi_choices`, `photos` type document items. This parameter will not be present in the response if it was not provided in the input.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: ['key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.fleetify.documentTemplates.list(body)));
};

export default { metadata, tool, handler };
