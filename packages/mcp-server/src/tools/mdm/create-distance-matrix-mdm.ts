// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'mdm',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/mdm/create',
  operationId: 'create',
};

export const tool: Tool = {
  name: 'create_distance_matrix_mdm',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a massive distance matrix task\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On successful responses, the value will be `Ok`. Indicative error messages/codes are returned in case of errors. See the [API Error Codes](#api-error-codes) section below for more information.'\n    },\n    message: {\n      type: 'string',\n      description: 'Returns the error message in case a request fails. This field will not be present in the response, if a request is successfully submitted.'\n    },\n    task_id: {\n      type: 'string',\n      description: 'A unique ID which can be used in the Asynchronous Distance Matrix GET method to retrieve the final result.'\n    },\n    warning: {\n      type: 'array',\n      description: 'Display the warnings, if any, for the given input parameters and values. In case there are no warnings then this field would not be present in the response.',\n      items: {\n        type: 'string'\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      option: {
        type: 'string',
        description:
          'Use this option to switch to truck-specific routing or time based routing or if you want to choose between the fastest and shortest route types.',
        enum: ['flexible'],
      },
      origins: {
        type: 'string',
        description:
          '`origins` are the starting point of your route. Ensure that origins are routable land locations. Multiple origins should be separated by a pipe symbol (|).\n\n**Format:** latitude\\_1,longitude\\_1|latitude\\_2,longitude\\_2|…',
      },
      spliter: {
        type: 'string',
        description:
          'Specify a spliter to split the matrix by. It accepts 2 values:\n\n- `od_number_spliter`:\n\n- `straight_distance_spliter`:\n\nPlease note it is an internal, debug field only.\n\n*debug field. choose specific spliter to split matrix.*',
        enum: ['od_number_spliter', 'straight_distance_spliter', 'location_spliter'],
      },
      area: {
        type: 'string',
        description: 'Provide the country that the coordinates belong to.\n\n*the input coordinates area.*',
        enum: ['singapore', 'usa', 'india'],
      },
      avoid: {
        type: 'string',
        description:
          'Setting this will ensure the route avoids the object(s) specified as input. Multiple values should be separated by a pipe (|). If `none` is provided along with other values, an error is returned as a valid route is not feasible.\n\n*   **Note:**\n    \n    *   This parameter is effective only when `route_type=fastest`.\n        \n    *   When this parameter is not provided in the input, ferries are set to be avoided by default. When `avoid` input is provided, only the mentioned objects are avoided.\n        \n    *   When using `avoid=bbox` users also need to specify the boundaries of the bounding box to be avoid. Multiple bounding boxes can be specified simultaneously. Please note that bounding box is a hard filter and if it blocks all possible routes between given locations, a 4xx error is returned.\n        \n        *   **Format:** bbox: min\\_latitude,min\\_longtitude,max\\_latitude,max\\_longitude.\n            \n        *   **Example:** avoid=bbox: 34.0635,-118.2547, 34.0679,-118.2478 | bbox: 34.0521,-118.2342, 34.0478,-118.2437\n            \n    *   When using `avoid=sharp_turn`, default range of permissible turn angles is \\[120,240\\].',
        enum: [
          '`toll`',
          '`ferry`',
          '`highway`',
          '`sharp_turn`',
          '`service_road`',
          '`bbox`',
          '`left_turn`',
          '`right_turn`',
          '`none`',
        ],
      },
      cross_border: {
        type: 'boolean',
        description:
          'Specify if crossing an international border is expected for operations near border areas. When set to false, the API will prohibit routes going back & forth between countries. Consequently, routes within the same country will be preferred if they are feasible for the given set of `destination` or `waypoints` . When set to true, the routes will be allowed to go back & forth between countries as needed.\n\nThis feature is available in North America region only. Please get in touch with [support@nextbillion.ai](mailto:support@nextbillion.ai) to enquire/enable other areas.',
      },
      departure_time: {
        type: 'integer',
        description:
          'This is a number in UNIX epoch timestamp in seconds format that can be used to provide the departure time. The response will return the `distance` and `duration` of the route based on typical traffic for at the given start time.If no input is provided for this parameter then the traffic conditions at the time of making the request are considered.\n\nPlease note that when `route_type` is set to `shortest` then the `departure_time` will be ineffective as the service will return the result for the shortest path possible irrespective of the traffic conditions.',
      },
      destinations: {
        type: 'string',
        description:
          '`destinations` are the ending coordinates of your route. Ensure that destinations are routable land locations. Multiple destinations should be separated by a pipe symbol (|).\n\nIn case `destinations` are not provided or if it is left empty, then the input value of `origins` will be copied to `destinations` to create the OD matrix pairs.\n\n**Format:** latitude\\_1,longitude\\_1|latitude\\_2,longitude\\_2|…',
      },
      destinations_approach: {
        type: 'string',
        description:
          'Specify the side of the road from which to approach `destinations` points. Please note that the given approach will be applied to all the `destinations`.',
        enum: ['`unrestricted`', '`curb`'],
      },
      hazmat_type: {
        type: 'string',
        description:
          'Specify the type of hazardous material being carried and the service will avoid roads which are not suitable for the type of goods specified. Multiple values can be separated using a pipe operator `|` .\n\nPlease note that this parameter is effective only when `mode=truck`.',
        enum: ['`general`', '`circumstantial`', '`explosive`', '`harmful_to_water`'],
      },
      mode: {
        type: 'string',
        description:
          'Set which driving mode the service should use to determine a route.\n\nFor example, if you use `car`, the API will return a route that a car can take. Using `truck` will return a route a truck can use, taking into account appropriate truck routing restrictions.',
        enum: ['`car`', '`truck`'],
      },
      origins_approach: {
        type: 'string',
        description:
          'Specify the side of the road from which to approach `origins` points. Please note that the given approach will be applied to all the points provided as `origins`.',
        enum: ['`unrestricted`', '`curb`'],
      },
      route_type: {
        type: 'string',
        description:
          'Set the route type that needs to be returned. Please note that `route_type` is effective only when `option=flexible`.',
        enum: ['`fastest`', '`shortest`'],
      },
      truck_axle_load: {
        type: 'number',
        description:
          'Specify the total load per axle (including the weight of trailers and shipped goods) of the truck, in tonnes. When used, the service will return routes which are legally allowed to carry the load specified per axle.\n\nPlease note this parameter is effective only when `mode=truck`.',
      },
      truck_size: {
        type: 'string',
        description:
          'This defines the dimensions of a truck in centimeters (cm) in the format of "height,width,length". This parameter is effective only when `mode=truck` and `option=flexible`. Maximum dimensions are as follows:\n\nHeight = 1000 cm\nWidth = 5000 cm\nLength = 5000 cm',
      },
      truck_weight: {
        type: 'integer',
        description:
          'This parameter defines the weight of the truck including trailers and shipped goods in kilograms (kg). This parameter is effective only when `mode=truck` and `option=flexible`.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['key', 'option', 'origins'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.mdm.createDistanceMatrix(body)));
};

export default { metadata, tool, handler };
