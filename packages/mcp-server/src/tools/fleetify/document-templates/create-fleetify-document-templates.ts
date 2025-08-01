// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'fleetify.document_templates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/fleetify/document_templates',
  operationId: 'document_templates-K6jOZqzr',
};

export const tool: Tool = {
  name: 'create_fleetify_document_templates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Document template\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      description: 'An object returning the details of the document template created.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Returns the unique ID of the document template created.'\n        },\n        content: {\n          type: 'array',\n          description: 'An array of objects returning the details of data structures and validation rules and other properties of all document fields. Each object represents one document field.',\n          items: {\n            $ref: '#/$defs/document_template_content_response'\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Returns the name of the document template as specified in the input.'\n        }\n      }\n    },\n    msg: {\n      type: 'string',\n      description: 'Returns the error message in case of a failed request. If the request is successful, this field is not present in the response.'\n    },\n    status: {\n      type: 'integer',\n      description: 'Returns the HTTP response code.'\n    }\n  },\n  $defs: {\n    document_template_content_response: {\n      type: 'object',\n      description: 'An array of objects returning the details of data structures and validation rules and other properties of all document fields. Each object represents one document field.',\n      properties: {\n        label: {\n          type: 'string',\n          description: 'Returns the label of the document field.'\n        },\n        meta: {\n          type: 'object',\n          description: 'Returns the options configured for single_choice or multi_choices type document items.',\n          properties: {\n            options: {\n              type: 'array',\n              description: 'An array of objects returning the options for multi_choices or single_choice type document field. Each object represents one configured option.',\n              items: {\n                type: 'object',\n                properties: {\n                  label: {\n                    type: 'string',\n                    description: 'Returns the label for the option.'\n                  },\n                  value: {\n                    type: 'string',\n                    description: 'Returns the value associated with the option. This value gets submitted when the option is checked in the Driver app.'\n                  }\n                }\n              }\n            }\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'Returns the name of the document field.'\n        },\n        required: {\n          type: 'boolean',\n          description: 'Indicates if the document field is mandatory or not.'\n        },\n        type: {\n          type: 'string',\n          description: 'Returns the data type of the document field. It will always belong to one of string, number, date_time, photos, multi_choices, signature, barcode, and single_choice.'\n        },\n        validation: {\n          type: 'object',\n          description: 'Returns the validation rules for number , multi_choices , and photos document field types.',\n          properties: {\n            max: {\n              type: 'integer',\n              description: 'Returns the maximum allowed value for number type document item, as specified at the time of configuring the field. This parameter is not present in the response if it was not provided in the input.'\n            },\n            max_items: {\n              type: 'string',\n              description: 'Returns the maximum number of items required for multi_choices, photos type document items. This parameter will not be present in the response if it was not provided in the input.'\n            },\n            min: {\n              type: 'integer',\n              description: 'Returns the minimum allowed value for number type document item, as specified at the time of configuring the field. This parameter is not present in the response if it was not provided in the input.'\n            },\n            min_items: {\n              type: 'string',\n              description: 'Returns the minimum number of items required for multi_choices, photos type document items. This parameter will not be present in the response if it was not provided in the input.'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      content: {
        type: 'array',
        description:
          'A form field that drivers must complete when executing a route step. Defines the data structure and validation rules for collecting required information during route execution.',
        items: {
          $ref: '#/$defs/document_template_content_request',
        },
      },
      name: {
        type: 'string',
        description: 'Specify a name for the document template to be created.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'content', 'name'],
    $defs: {
      document_template_content_request: {
        type: 'object',
        description:
          'An object to collect the details of form fields - data structures, validation rules - for collecting required information after successfully executing a route step.',
        properties: {
          label: {
            type: 'string',
            description:
              'Specify the label or the name of the field. The label specified here can be used as field name when rendering the document in the Driver app.',
          },
          type: {
            type: 'string',
            description:
              'Specify the data type of the field. It corresponds to the type of information that the driver needs to collect.',
            enum: [
              'string',
              'number',
              'date_time',
              'photos',
              'multi_choices',
              'signature',
              'barcode',
              'single_choice',
            ],
          },
          meta: {
            type: 'object',
            description:
              'An object to define additional information required for single_choice or multi_choices type document items.',
            properties: {
              options: {
                type: 'array',
                description:
                  'An array of objects to define options for a multi_choices or single_choice type document field. Each object represents one option.',
                items: {
                  type: 'object',
                  properties: {
                    label: {
                      type: 'string',
                      description: 'Specify the label or name for the option.',
                    },
                    value: {
                      type: 'string',
                      description:
                        'Specify the value associated with the option. This value will be submitted when the option is checked in the Driver app.',
                    },
                  },
                  required: ['label', 'value'],
                },
              },
            },
            required: ['options'],
          },
          name: {
            type: 'string',
            description:
              "Specify the name of the document field. A field'sname can be used for internal references to the document field.",
          },
          required: {
            type: 'boolean',
            description: 'Specify if it is mandatory to fill the field. Default value is false.',
          },
          validation: {
            type: 'object',
            description:
              'Specify the validation rules for the field. This can be used to enforce data quality and integrity checks. For example, if the field is a number type, validation can define constraints like minimum / maximum number values.',
            properties: {
              max: {
                type: 'integer',
                description:
                  'Specifies the maximum allowed value for number type document field. Input values must be less than or equal to this threshold.',
              },
              max_items: {
                type: 'integer',
                description:
                  'Specifies the maximum number of items for multi_choices, photos type document fields. The number of provided input items must be less than or equal to this threshold.',
              },
              min: {
                type: 'integer',
                description:
                  'Specifies the minimum allowed value for number type document field. Input values must be greater than or equal to this threshold.',
              },
              min_items: {
                type: 'integer',
                description:
                  'Specifies the minimum number of items for multi_choices, photos type document fields. The number of provided input items must be greater than or equal to this threshold.',
              },
            },
          },
        },
        required: ['label', 'type'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.fleetify.documentTemplates.create(body)),
  );
};

export default { metadata, tool, handler };
