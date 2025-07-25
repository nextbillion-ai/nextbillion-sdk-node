// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'nextbillion-sdk-mcp/filtering';
import { Metadata, asTextContentResult } from 'nextbillion-sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from 'nextbillion-sdk';

export const metadata: Metadata = {
  resource: 'isochrone',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/isochrone/json',
  operationId: 'json',
};

export const tool: Tool = {
  name: 'compute_isochrone',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe NextBillion.ai Isochrone API computes areas that are reachable within a specified amount of time from a location, and returns the reachable regions as contours of polygons or lines that you can display on a map.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    features: {\n      type: 'array',\n      description: 'A [GeoJSON FeatureCollection](https://datatracker.ietf.org/doc/html/rfc7946#section-3.3) object with details of the isochrone contours. Each `feature` object in this collection represents an isochrone.',\n      items: {\n        type: 'object',\n        properties: {\n          geometry: {\n            type: 'object',\n            description: 'A [GeoJSON geometry](https://datatracker.ietf.org/doc/html/rfc7946#page-7) object with details of the contour line.',\n            properties: {\n              coordinates: {\n                type: 'array',\n                description: 'An array of coordinate points, in [longitude,latitude] format representing the isochrone contour line.',\n                items: {\n                  type: 'number'\n                }\n              },\n              type: {\n                type: 'string',\n                description: 'Type of the geoJSON geometry.'\n              }\n            }\n          },\n          properties: {\n            type: 'object',\n            description: 'An object with details of how the isochrone contour can be drawn on a map.',\n            properties: {\n              color: {\n                type: 'string',\n                description: 'The hex code of the color of the isochrone contour line'\n              },\n              contour: {\n                type: 'number',\n                description: 'The value of the metric used in this contour. See the `metric` property to determine whether this is a `time` or `distance` contour. When the `metric` is `time` this value denotes the travel time in minutes and when the `metric` is `distance` this value denotes the travel distance in kilometers.'\n              },\n              fill: {\n                type: 'string',\n                description: 'The hex code for the fill color of the isochrone contour line.'\n              },\n              fillColor: {\n                type: 'string',\n                description: 'The hex code for the fill color of the isochrone contour line'\n              },\n              fillOpacity: {\n                type: 'number',\n                description: 'The fill opacity for the isochrone contour line. It is a float value starting from 0.0 with a max value of 1.0. Higher number indicates a higher fill opacity.'\n              },\n              metric: {\n                type: 'string',\n                description: 'The metric that the contour represents - either `distance` or `time`'\n              },\n              opacity: {\n                type: 'number',\n                description: 'The opacity of the isochrone contour line. It is a float value starting from 0.0 with a max value of 1.0. Higher number indicates a higher line opacity'\n              }\n            }\n          },\n          type: {\n            type: 'string',\n            description: 'Type of the GeoJSON object. Its value is `Feature` as per the [GeoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946#section-1.4) object.'\n          }\n        }\n      }\n    },\n    msg: {\n      type: 'string',\n      description: 'Displays the error message in case of a failed request or operation. Please note that this parameter is not returned in the response in case of a successful request.'\n    },\n    status: {\n      type: 'string',\n      description: 'A string indicating the state of the response. On normal responses, the value will be `Ok`. Indicative HTTP error codes are returned for different errors. See the [API Errors Codes](#api-error-codes) section below for more information.'\n    },\n    type: {\n      type: 'string',\n      description: 'Type of the GeoJSON object. As prescribed in [GeoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946#section-1.4), its value is `FeatureCollection` as the `feature` property contains a list of geoJSON feature objects.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      contours_meters: {
        type: 'integer',
        description:
          'The distances, in meters, to use for each isochrone contour. You can specify up to four contours. Distances must be in increasing order. The maximum distance that can be specified is 60000 meters (60 km).',
      },
      contours_minutes: {
        type: 'integer',
        description:
          'The times, in minutes, to use for each isochrone contour. You can specify up to four contours. Times must be in increasing order. The maximum time that can be specified is 40 minutes.',
      },
      coordinates: {
        type: 'string',
        description:
          'The coordinates of the location which acts as the starting point for which the isochrone lines need to be determined.',
      },
      key: {
        type: 'string',
        description: 'A key is a unique identifier that is required to authenticate a request to the API.',
      },
      contours_colors: {
        type: 'string',
        description:
          'The hex code of the color to fill isochrone contour. When requesting multiple contours, it is recommended to provide color codes for each of the requested contours, separated by a ",". If no colors are specified, the Isochrone API will assign a random color scheme to the output.',
      },
      denoise: {
        type: 'number',
        description:
          'A floating point value from 0.0 to 1.0 can be used to remove smaller contours. The default is 1.0. A value of 1.0 will only return the largest contour for a given value. A value of 0.5 drops any contours that are less than half the area of the largest contour in the set of contours for that same value.',
      },
      departure_time: {
        type: 'integer',
        description:
          'Use this parameter to set a departure time, expressed as UNIX epoch timestamp in seconds, for calculating the isochrone contour. The response will consider the typical traffic conditions at the given time and return a contour which can be reached under those traffic conditions. Please note that if no input is provided for this parameter then the traffic conditions at the time of making the request are considered.',
      },
      generalize: {
        type: 'number',
        description:
          'A positive floating point value, in meters, used as the tolerance for Douglas-Peucker generalization. There is no upper bound. If no value is specified in the request, the Isochrone API will choose the most optimized generalization to use for the request. Note that the generalization of contours can lead to self-intersections, as well as intersections of adjacent contours.',
      },
      mode: {
        type: 'string',
        description:
          'Set which driving mode the service should use to determine the contour. For example, if you use "car", the API will return an isochrone contour that a car can reach within the specified time or after driving the specified distance. Using "truck" will return a contour that a truck can reach after taking into account appropriate truck routing restrictions.\n\nNote: Only the "car" profile is enabled by default. Please note that customized profiles (including "truck") might not be available for all regions. Please contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales representative or reach out at [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need additional profiles.',
        enum: ['`car`', '`truck`'],
      },
      polygons: {
        type: 'boolean',
        description:
          'Specify whether to return the contours as GeoJSON polygons (true) or linestrings (false, default). When polygons=true, any contour that forms a ring is returned as a polygon.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['contours_meters', 'contours_minutes', 'coordinates', 'key'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.isochrone.compute(body)));
};

export default { metadata, tool, handler };
