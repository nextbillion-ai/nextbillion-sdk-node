// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'navigation',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/navigation/json',
  operationId: 'json-GET',
};

export const tool: Tool = {
  name: 'retrieve_route_navigation',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nNextbillion.ai’s Navigation API is a service that computes a route between 2 places, and also returns detailed turn by turn instructions for the route.\n\nThe Navigation API can be used as an input into your Navigation app. Alternatively, you can directly use Nextbillion.ai’s Navigation SDK for a complete turn by turn navigation experience.",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      altcount: {
        type: 'integer',
        description:
          'Sets the number of alternative routes to return. It is effective only when "alternatives" is "true". Please note that adding alternative route count does not guarantee matching number of routes to be returned if potential alternative routes do not exist.',
      },
      alternatives: {
        type: 'boolean',
        description:
          'When "true" the API will return alternate routes. The "alternatives" is effective only when there are no "waypoints" included in the request. You can set the number of alternate routes to be returned in the "altcount" property.',
      },
      approaches: {
        type: 'string',
        description:
          'A semicolon-separated list indicating the side of the road from which to approach "waypoints" in a requested route. When set to "unrestricted" a route can arrive at the waypoint from either side of the road and when set to "curb" the route will arrive at the waypoint on the driving side of the region. Please note the number of values provided must be one more than the number of "waypoints". The last value of "approaches" will determine the approach for the "destination". However, you can skip a coordinate and show its position in the list with the ";" separator.',
        enum: ['`unrestricted`', '`curb`'],
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
          'Limits the search to road segments with given bearing, in degrees, towards true north in clockwise direction. Each "bearings" should be in the format of "degree,range", where the "degree" should be a value between \\[0, 360\\] and "range" should be a value between \\[0, 180\\]. Please note that the number of "bearings" should be two more than the number of "waypoints". This is to account for the bearing of "origin" and "destination". If a route can approach a "waypoint" or the "destination" from any direction, the bearing for that point can be specified as "0,180".',
      },
      destination: {
        type: 'string',
        description:
          '"destination" is the ending point of your route. Ensure that the "destination" is a routable land location. Please note that this parameter is mandatory if the "original\\_shape" parameter is not given.',
      },
      geometry: {
        type: 'string',
        description:
          'Sets the output format of the route geometry in the response. On providing “polyline“ and “polyline6“ as input, respective encoded geometry is returned. However, when “geojson“ is provided as the input value, “polyline“ encoded geometry is returned in the response along with the geojson details of the route.',
        enum: ['`polyline`', '`polyline6`', '`geojson`'],
      },
      lang: {
        type: 'string',
        description:
          'Select the language to be used for result rendering from a list of [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) compliant language codes.',
      },
      mode: {
        type: 'string',
        description:
          'Set which driving mode the service should use to determine a route. For example, if you use "car", the API will return a route that a car can take. Using "truck" will return a route a truck can use, taking into account appropriate truck routing restrictions.\n\nWhen "mode=truck", following are the default dimensions that are used:\n\n\\- truck\\_height = 214 centimeters\n\n\\- truck\\_width = 183 centimeters\n\n\\- truck\\_length = 519 centimeters\n\n\\- truck\\_weight = 5000 kg\n\nPlease use the Navigation Flexible version if you want to use custom truck dimensions.\n\nNote: Only the "car" profile is enabled by default. Please note that customized profiles (including "truck") might not be available for all regions. Please contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales representative or reach out at [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need additional profiles.',
        enum: ['`car`', '`truck`'],
      },
      origin: {
        type: 'string',
        description:
          '"origin" is the starting point of your route. Ensure that "origin" is a routable land location. Please note that this parameter is mandatory if the geometry parameter is not given.',
      },
      original_shape: {
        type: 'string',
        description:
          'Takes a route geometry as input and returns the navigation information for that route. Accepts "polyline" and "polyline6" encoded geometry as input. "original\\_shape\\_type" becomes mandatory when "original\\_shape" is used. If this parameter is provided, the only other parameters which will be considered are "original\\_shape\\_type", "lang", "geometry". The rest of the parameters in the input request will be ignored. Please note overview verbosity will always be "full" when using this parameter.',
      },
      original_shape_type: {
        type: 'string',
        description:
          'Specify the encoding format of route geometry provided in the request using "original\\_shape" parameter. Please note that an error is returned when this parameter is not specified while an input is added to "original\\_shape" parameter.',
        enum: ['polyline', 'polyline6'],
      },
      overview: {
        type: 'string',
        description:
          'Specify the verbosity of route geometry. When set to "full", the most detailed geometry available is returned. When set to "simplified", a simplified version of the full geometry is returned. No overview geometry is returned when set to "false".',
        enum: ['`full`', '`simplified`', '`false`'],
      },
      waypoints: {
        type: 'string',
        description:
          '"waypoints" are coordinates along the route between the "origin" and "destination". It is a pipe-separated list of coordinate pairs. Please note that the route returned will arrive at the "waypoints" in the sequence they are provided in the input request. Please note that the maximum number of waypoints that can be provided in a single request is 50 when using GET method and 200 with POST method.',
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
  return asTextContentResult(await client.navigation.retrieveRoute(body));
};

export default { metadata, tool, handler };
