// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'fleetify.routes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/fleetify/routes/{routeID}/redispatch',
  operationId: 'redispatch',
};

export const tool: Tool = {
  name: 'redispatch_fleetify_routes',
  description: 'Re-dispatch route',
  inputSchema: {
    type: 'object',
    properties: {
      routeID: {
        type: 'string',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      operations: {
        type: 'array',
        description:
          'A collection of objects with details of the steps to be modified. Each object corresponds to a single step.',
        items: {
          type: 'object',
          properties: {
            data: {
              type: 'object',
              properties: {
                completion_mode: {
                  $ref: '#/$defs/route_step_completion_mode',
                },
                document_template_id: {
                  type: 'string',
                  description:
                    'Specify the ID of the document template to be used for collecting proof of completion for the step. It would be applied to step which not be bind to document template. Use the [Documents API](https://docs.nextbillion.ai/docs/dispatches/documents-api) to create, read and manage the document templates.\n\nPlease note that the document template ID can not be assigned to following step types - start, end, break, layover.',
                },
                step: {
                  $ref: '#/$defs/route_steps_request',
                },
                step_id: {
                  type: 'string',
                  description:
                    'Specify the ID of the step to be updated or deleted. Either one of id or short_id of the step can be provided. This input will be ignored when operation: create .',
                },
              },
            },
            operation: {
              type: 'string',
              description: 'Specify the type of operation to be performed for the step.',
              enum: ['create', 'update', 'delete'],
            },
          },
          required: ['data', 'operation'],
        },
      },
      distance: {
        type: 'number',
        description: 'Specify the distance of the route.',
      },
    },
    required: ['routeID', 'key', 'operations'],
    $defs: {
      route_step_completion_mode: {
        type: 'string',
        description:
          'Specify the mode of completion to be used for the step. Currently, following values are allowed:\n\n*   manual: Steps must be marked as completed manually through the Driver App.\n    \n*   geofence: Steps are marked as completed automatically based on the entry conditions and geofence specified.\n    \n*   geofence_manual_fallback: Steps will be marked as completed automatically based on geofence and entry condition configurations but there will also be a provision for manually updating the status in case, geofence detection fails.',
        enum: ['manual', 'geofence', 'geofence_manual_fallback'],
      },
      route_steps_request: {
        type: 'object',
        properties: {
          arrival: {
            type: 'integer',
            description:
              'Specify the scheduled arrival time of the driver, as an UNIX timestamp in seconds, at the step. Please note that:\n\n*   Arrival time for each step should be equal to or greater than the previous step.\n    \n*   Past times can not be provided.\n    \n*   The time provided is used only for informative display on the driver app and it does not impact or get affected by the route generated.',
          },
          location: {
            type: 'array',
            description:
              'Specify the location coordinates where the steps should be performed in [latitude, longitude].',
            items: {
              type: 'number',
            },
          },
          type: {
            type: 'string',
            description:
              'Specify the step type. It can belong to one of the following: start, job , pickup, delivery, end. A duration is mandatory when the step type is either layover or a break.',
            enum: ['start', 'job', 'pickup', 'delivery', 'break', 'layover', 'end'],
          },
          address: {
            type: 'string',
            description: 'Specify the postal address for the step.',
          },
          completion_mode: {
            $ref: '#/$defs/route_step_completion_mode',
          },
          document_template_id: {
            type: 'string',
            description:
              'Specify the ID of the document template to be used for collecting proof of completion for the step. If not specified, the document template specified at the route level will be used for the step. Use the [Documents API](https://docs.nextbillion.ai/docs/dispatches/documents-api) to create, read and manage the document templates.\n\nPlease note that the document template ID can not be assigned to following step types - start, end, break, layover.',
          },
          duration: {
            type: 'integer',
            description:
              'Specify the duration of the layover or break type steps, in seconds. Please note it is mandatory when step type is either "layover" or "break".',
          },
          geofence_config: {
            $ref: '#/$defs/route_step_geofence_config',
          },
          meta: {
            type: 'object',
            description:
              "An object to specify any additional details about the task to be associated with the step in the response. The information provided here will be available on the Driver's app under step details. This attribute can be used to provide context about or instructions to the driver for performing the task",
            properties: {
              customer_name: {
                type: 'string',
                description: 'Specify the name of the customer for which the step has to be performed.',
              },
              customer_phone_number: {
                type: 'string',
                description: 'Specify the phone number of the person to be contacted when at step location.',
              },
              instructions: {
                type: 'string',
                description: 'Specify custom instructions to be carried out while performing the step.',
              },
            },
          },
        },
        required: ['arrival', 'location', 'type'],
      },
      route_step_geofence_config: {
        type: 'object',
        description:
          'Specify the configurations of the geofence which will be used to detect presence of the driver and complete the tasks automatically. Please note that this attribute is required when completion_mode is either "geofence" or "geofence\\_manual\\_fallback".',
        properties: {
          radius: {
            type: 'number',
            description:
              "Specify the radius of the cicular geofence, in meters. Once specified, the service will create a geofence with task's location as the center of the circle having the given radius. Valid values for radius are \\[10, 5000\\].",
          },
          type: {
            type: 'string',
            description: 'Specify the type of the geofence. Currently, circle is the only suppoeted value.',
            enum: ['circle'],
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { routeID, ...body } = args as any;
  return asTextContentResult(await client.fleetify.routes.redispatch(routeID, body));
};

export default { metadata, tool, handler };
