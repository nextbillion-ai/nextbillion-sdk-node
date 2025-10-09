// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'optimization',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/optimization/json',
  operationId: 'json-x3mGIlAg',
};

export const tool: Tool = {
  name: 'compute_optimization',
  description:
    "Nextbillion.ai Optimization API computes and returns an optimized route between an origin and destination which have multiple stop points in between. With NextBillion.ai's Route Optimization API you get.\n\nOptimized routing between way points\n\nHighly accurate ETAs with customized routes\n\nRoundtrip optimization with customized destinations\n\nA list of all parameters is specified in the next section.",
  inputSchema: {
    type: 'object',
    properties: {
      coordinates: {
        type: 'string',
        description:
          'This is a pipe-separated list of coordinates.\n\nMinimum 3 pairs of coordinates and Maximum 12 pairs of coordinates are allowed.',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      approaches: {
        type: 'string',
        description:
          'A semicolon-separated list indicating the side of the road from which to approach waypoints in a requested route. If provided, the number of approaches must be the same as the number of coordinates. However, you can skip a coordinate and show its position in the list with the ; separator.',
        enum: ['unrestricted', 'curb'],
      },
      destination: {
        type: 'string',
        description:
          'Specify the destination coordinate of the returned route. If the input is last, the last coordinate will be the destination.',
        enum: ['any', 'last'],
      },
      geometries: {
        type: 'string',
        description:
          'Sets the output format of the route geometry in the response. \n\nOn providing polyline and polyline6 as input, respective encoded geometry is returned. However, when geojson is provided as the input value, polyline encoded geometry is returned in the response along with a geojson details of the route.',
        enum: ['polyline', 'polyline6', 'geojson'],
      },
      mode: {
        type: 'string',
        description:
          'Set which driving mode the service should use to determine a route. For example, if you use "car", the API will return a route that a car can take. Using "truck" will return a route a truck can use, taking into account appropriate truck routing restrictions.\n\nWhen "mode=truck", following are the default dimensions that are used:\n\n\\- truck\\_height = 214 centimeters\n\n\\- truck\\_width = 183 centimeters\n\n\\- truck\\_length = 519 centimeters\n\n\\- truck\\_weight = 5000 kg\n\nPlease use the Directions Flexible version if you want to use custom truck dimensions.\n\nNote: Only the "car" profile is enabled by default. Please note that customized profiles (including "truck") might not be available for all regions. Please contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales representative or reach out at [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need additional profiles.',
        enum: ['car', 'truck'],
      },
      roundtrip: {
        type: 'boolean',
        description: 'Indicates whether the returned route is a roundtrip.',
      },
      source: {
        type: 'string',
        description:
          'The coordinate at which to start the returned route. If this is not configured, the return route’s destination will be the first coordinate.',
        enum: ['any', 'first'],
      },
      with_geometry: {
        type: 'boolean',
        description: 'Indicates whether the return geometry should be computed or not.',
      },
    },
    required: ['coordinates', 'key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.optimization.compute(body));
};

export default { metadata, tool, handler };
