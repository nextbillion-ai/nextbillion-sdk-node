// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'fleetify.routes.steps',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/fleetify/routes/{routeID}/steps/{stepID}',
  operationId: '{stepsID}-uT2cgRSs',
};

export const tool: Tool = {
  name: 'complete_routes_fleetify_steps',
  description:
    'Complete a route step with document submission, or update the document of a completed route step.\n\nWhen all steps are completed, the encapsulating route’s status will change to completed automatically.\n\nEither Session Token must be provided to authenticate the request.',
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
      document: {
        $ref: '#/$defs/document_submission',
      },
      mode: {
        type: 'string',
        description:
          'Sets the status of the route step. Currently only completed is supported.\n\nNote: once marked completed, a step cannot transition to other statuses. You can only update the document afterwards.',
      },
      status: {
        type: 'string',
        description:
          'Sets the status of the route step. Currently only completed is supported.\n\nNote: once marked completed, a step cannot transition to other statuses. You can only update the document afterwards.',
      },
    },
    required: ['routeID', 'stepID', 'key'],
    $defs: {
      document_submission: {
        type: 'object',
        description:
          'A key-value map storing form submission data, where keys correspond to field labels and values can be of any type depend on the type of according document item.',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const { stepID, ...body } = args as any;
  const response = await client.fleetify.routes.steps.complete(stepID, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
