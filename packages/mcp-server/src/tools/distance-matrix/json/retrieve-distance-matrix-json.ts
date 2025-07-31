// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@nbai/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'distance_matrix.json',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/distancematrix/json',
  operationId: 'json-4AOzZa_q',
};

export const tool: Tool = {
  name: 'retrieve_distance_matrix_json',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nNextbillion.ai Distance Matrix API computes distances and ETAs between a set of origins and destinations — could be for one-to-many or many-to-many scenarios. The API call returns a matrix of ETAs and distances for each origin and destination pair.   For example, If the set is Origins {A,B} and Destinations {C,D,E} we can get the following set of results with distance (meters) and time (seconds) for each.\nThe GET method can only handle up to 100 locations (1 location is either 1 origin or 1 destination).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    msg: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request or operation. Please note that this parameter is not returned in the response in case of a successful request.'\n    },\n    rows: {\n      type: 'array',\n      description: 'Container object for a response with  an array of arrays structure.',\n      items: {\n        type: 'object',\n        properties: {\n          elements: {\n            type: 'array',\n            description: 'An array of objects. Each elements array corresponds to a single origins coordinate and contains objects with distance and duration values for each of the destinations. The details in the first elements array correspond to the first origins point and the first object corresponds to the first destinations point and so on.',\n            items: {\n              type: 'object',\n              properties: {\n                distance: {\n                  type: 'number',\n                  description: 'Distance of the route from an origin to a destination, in meters.'\n                },\n                duration: {\n                  type: 'number',\n                  description: 'Duration of the trip from an origin to a destination, in seconds.'\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On normal responses, the value will be Ok. Indicative HTTP error codes are returned for different errors. See the [API Errors Codes](#api-error-codes) section below for more information.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      destinations: {
        type: 'string',
        description:
          '"destinations" are the ending coordinates of your route. Ensure that "destinations" are routable land locations. Multiple "destinations" should be separated by a pipe symbol "|".',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      origins: {
        type: 'string',
        description:
          '"origins" are the starting point of your route. Ensure that "origins" are routable land locations. Multiple "origins" should be separated by a pipe symbol "|".',
      },
      approaches: {
        type: 'string',
        description:
          'A semicolon-separated list indicating the side of the road from which the route will approach "destinations". When set to "unrestricted" a route can arrive at a destination from either side of the road. When set to "curb" the route will arrive at a destination on the driving side of the region. Please note the number of values provided must be equal to the number of "destinations". However, you can skip a coordinate and show its position in the list with the ";" separator. The values provided for the "approaches" parameter are effective for the "destinations" value at the same index. Example: "curb;;curb" will apply curbside restriction on the "destinations" points provided at the first and third index.',
        enum: ['unrestricted', 'curb'],
      },
      avoid: {
        type: 'string',
        description:
          'Setting this will ensure the route avoids ferries, tolls, highways or nothing. Multiple values should be separated by a pipe (|). If "none" is provided along with other values, an error is returned as a valid route is not feasible. Please note that when this parameter is not provided in the input, ferries are set to be avoided by default. When this parameter is provided, only the mentioned objects are avoided.',
        enum: ['toll', 'ferry', 'highway', 'none'],
      },
      bearings: {
        type: 'string',
        description:
          'Limits the search to segments with given bearing in degrees towards true north in clockwise direction. Each "bearing" should be in the format of "degree,range", where the "degree" should be a value between \\[0, 360\\] and "range" should be a value between \\[0, 180\\]. Please note that the number of "bearings" should be equal to the sum of the number of points in "origins" and "destinations". If a route can approach a destination from any direction, the bearing for that point can be specified as "0,180".',
      },
      mode: {
        type: 'string',
        description:
          'Set which driving mode the service should use to determine the "distance" and "duration" values. For example, if you use "car", the API will return the duration and distance of a route that a car can take. Using "truck" will return the same for a route a truck can use, taking into account appropriate truck routing restrictions.\n\nWhen "mode=truck", following are the default dimensions that are used:\n\n\\- truck\\_height = 214 centimeters\n\n\\- truck\\_width = 183 centimeters\n\n\\- truck\\_length = 519 centimeters\n\n\\- truck\\_weight = 5000 kg\n\nPlease use the Distance Matrix Flexible version if you want to use custom truck dimensions.\n\nNote: Only the "car" profile is enabled by default. Please note that customized profiles (including "truck") might not be available for all regions. Please contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales representative or reach out at [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need additional profiles.',
        enum: ['car', 'truck'],
      },
      route_failed_prompt: {
        type: 'boolean',
        description:
          'A prompt to modify the response in case no feasible route is available for a given pair of origin and destination. When set to "true", a value of "-1" is returned for those pairs in which:\n\n\\- Either origin or the destination can not be snapped to a nearest road. Please note that if all the origins and destinations in a request can\'t be snapped to their nearest roads, a 4xx error is returned instead, as the entire request failed.\n\n\\- Both origin and destination can be snapped to the nearest road, but the service can\'t find a valid route between them. However, a value of "0" is returned if both the origin and destination are snapped to the same location.\n\n"false" is the default value. In this case, a "0" value is returned for all the above cases. A 4xx error is returned, in this case as well, when all origins and destinations in the request can\'t be snapped to their nearest road.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['destinations', 'key', 'origins'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.distanceMatrix.json.retrieve(body)));
};

export default { metadata, tool, handler };
