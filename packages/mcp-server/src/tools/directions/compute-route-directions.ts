// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@nbai/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import NextbillionSDK from '@nbai/sdk';

export const metadata: Metadata = {
  resource: 'directions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/directions/json',
  operationId: 'json-el6-Xj_n',
};

export const tool: Tool = {
  name: 'compute_route_directions',
  description: 'Directions API is a service that computes a route with given coordinates.',
  inputSchema: {
    type: 'object',
    properties: {
      destination: {
        type: 'string',
      },
      origin: {
        type: 'string',
      },
      altcount: {
        type: 'integer',
        description:
          'Sets the number of alternative routes to return. It is effective only when alternatives=true. Default to 3.\n\nPlease note that adding alternative route count does not guarantee matching number of routes to be returned if potential alternative routes do not exist.',
      },
      alternatives: {
        type: 'boolean',
        description:
          'When true the API will return alternate routes.\n\nThe alternatives is effective only when there are no waypoints included in the request.\n\nYou can set the number of alternate routes to be returned in the altcount property.',
      },
      approaches: {
        type: 'string',
        description:
          'A semicolon-separated list indicating the side of the road from which to approach waypoints in a requested route.\n\nWhen set to unrestricted a route can arrive at the waypoint from either side of the road and when set to curb the route will arrive at the waypoint on the driving side of the region.\n\nPlease note the number of values provided must be one more than the number of waypoints. The last value of approaches will determine the approach for the destination. However, you can skip a coordinate and show its position in the list with the ; separator.',
      },
      avoid: {
        type: 'string',
        description:
          'When option=fast (by default):\n\nSetting this will ensure the route avoids ferries, tolls, highways or nothing. Multiple values should be separated by a pipe "|". If none is provided along with other values, an error is returned as a valid route is not feasible.\n\nPlease note that when this parameter is not provided in the input, ferries are set to be avoided by default. When this parameter is provided, only the mentioned objects are avoided.\n\nWhen option=flexible:\n\nSet this parameter to find alternative routes that bypass specified objects. Use a pipe "|" to separate multiple values. This is a flexible filter; if no alternative routes exist, the service will still provide a route that includes the objects. For a strict filter, consider using the exclude parameter.\n\n\\- This parameter is effective only when route\\_type=fastest.  \n\\- Following objects are exceptions to the flexible filtering behavior of avoid parameter: bbox, tunnel and geofence\\_id. When used, the service will return an error in case there are no alternative routes available.  \n\\- When using avoid=bbox users also need to specify the boundaries of the bounding box to be avoided. Multiple bounding boxes can be specified simultaneously. The perimeter of a bounding box can not exceed 500 KM. Format: bbox=min\\_latitude,min\\_longtitude,max\\_latitude,max\\_longitude. Example: avoid=bbox: 34.0635,-118.2547, 34.0679,-118.2478 | bbox: 34.0521,-118.2342, 34.0478,-118.2437  \n\\- When using avoid=sharp\\_turn, default range of permissible turn angles is \\[120,240\\] in the clockwise direction from the current road. In order to override default range, please use turn\\_angle\\_range parameter.  \n\\- When using avoid=geofence\\_id, only the the geofences created using [NextBillion.ai](http://NextBillion.ai) Geofence API are valid.  \n\\- When this parameter is not provided in the input, ferry routes are set to be avoided by default. When this parameter is provided, only the mentioned object(s) are avoided.  \n\\- If none is provided along with other values, an error is returned as a valid route is not feasible.',
        enum: [
          'toll',
          'ferry',
          'highway',
          'none',
          'sharp_turn',
          'uturn',
          'service_road',
          'left_turn',
          'right_turn',
          'bbox',
          'geofence_id',
          'tunnel',
        ],
      },
      bearings: {
        type: 'string',
        description:
          'Limits the search to road segments with given bearing, in degrees, towards true north in clockwise direction. Each bearings should be in the format of degree,range, where the degree should be a value between \\[0, 360\\] and range should be a value between \\[0, 180\\].\n\nPlease note that the number of bearings should be two more than the number of waypoints. This is to account for the bearing of origin and destination. If a route can approach a waypoint or the destination from any direction, the bearing for that point can be specified as "0,180".',
      },
      cross_border: {
        type: 'boolean',
        description:
          'Requires option=flexible.\n\nSpecify if crossing an international border is expected for operations near border areas. When set to false, the API will prohibit routes crossing the borders. When set to true, the service will return routes which cross the borders between countries, if required for the given set destination and waypoints.\n\nThis feature is available in North America region only. Please get in touch with [support@nextbillion.ai](mailto:support@nextbillion.ai) to enquire/enable other areas.',
      },
      departure_time: {
        type: 'integer',
        description:
          'Requires option=flexible.\n\nUse this parameter to set a departure time, expressed as UNIX epoch timestamp in seconds, for calculating the isochrone contour. The response will consider the typical traffic conditions at the given time and return a contour which can be reached under those traffic conditions.\n\nPlease note that if no input is provided for this parameter then the traffic conditions at the time of making the request are considered.',
      },
      drive_time_limits: {
        type: 'string',
        description:
          'Requires option=flexible.\n\nAn array of durations, in seconds, for which the driver can drive continuously before taking a rest. Multiple drive time limits can be separated by a comma character ",". After driving for the given duration the driver will take a rest for a fixed period, specified in rest\\_times . Once the rest duration is over, the subsequent driving duration starts and the process continues until all drive times and rest periods are exhausted or if the driver reaches the destination. This feature is useful in complying with Hours of Service regulations and calculates actual ETAs with regulated driving periods.\n\nAs an example, a drive\\_time\\_limits=\\[500, 300\\] means that driver can drive for 500 seconds before the first rest period and then drive for another 300 seconds before taking a rest next time.  \n  \n\\- If the trip duration is smaller than the first input of drive\\_time\\_limits, then there will be no rest actions scheduled by the service.  \n\\- If the trip duration is larger than the scheduled time, then a "warning" is returned in the response - along with details of last leg of the trip - to indicate the same.',
      },
      emission_class: {
        type: 'string',
        description:
          'Requires option=flexible.\n\nSpecify the emission class to which the vehicle (engine) belongs to. The service will use this setting to generate routes that are permissible for that engine class. Only the emission classifications in the EU regions are supported currently. Please reach out to [support@nextbillion.ai](mailto:support@nextbillion.ai) to enable for your region.',
        enum: ['euro0', 'euro1', 'euro2', 'euro3', 'euro4', 'euro5', 'euro6', 'euro7', 'euro8', 'euro9'],
      },
      exclude: {
        type: 'string',
        description:
          'Requires option=flexible.\n\nThis parameter serves as a mandatory filter, ensuring the service returns only those routes that strictly avoid the object(s) indicated. Multiple values should be separated by a pipe |). If no routes can be found that exclude the specified object(s), the service will return an error. For a less strict filtering approach, consider using the avoid parameter.\n\n\\- This parameter is effective only when route\\_type=fastest.  \n\\- When using exclude=sharp\\_turn, default range of permissible turn angles is \\[120,240\\]. In order to override default range, please use turn\\_angle\\_range parameter.  \n\\- If none is provided along with other values, an error is returned as a valid route is not feasible.',
        enum: [
          'toll',
          'ferry',
          'highway',
          'service_road',
          'uturn',
          'sharp_turn',
          'left_turn',
          'right_turn',
          'none',
        ],
      },
      geometry: {
        type: 'string',
        description:
          'Sets the output format of the route geometry in the response.\n\nOn providing polyline and polyline6 as input, respective encoded geometry is returned. However, when geojson is provided as the input value, polyline encoded geometry is returned in the response along with the geojson details of the route.',
        enum: ['polyline', 'polyline6', 'geojson'],
      },
      hazmat_type: {
        type: 'string',
        description:
          'Requires option=flexible.\n\nSpecify the type of hazardous material being carried and the service will avoid roads which are not suitable for the type of goods specified. Multiple values can be separated using a pipe operator "|".\n\nPlease note that this parameter is effective only when mode=truck.',
        enum: ['general', 'circumstantial', 'explosive', 'harmful_to_water'],
      },
      mode: {
        type: 'string',
        description:
          'Set the driving mode the service should use to determine a route. In "car" mode, the API will return a route that a car can take. Using "truck" mode will return a route a truck can use, taking into account appropriate truck routing restrictions.\n\nWhen mode=truck, following are the default dimensions that are used:\n\n\\- truck\\_height = 214 centimeters  \n\\- truck\\_width = 183 centimeters  \n\\- truck\\_length = 519 centimeters  \n\\- truck\\_weight = 5000 kg\n\nWhen option=flexible, you can use custom truck dimensions with truck\\_weight and truck\\_size parameters.\n\nNote: Only the car profile is enabled by default. Please note that customized profiles (including truck) might not be available for all regions. Please contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales representative or reach out at [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need additional profiles.',
        enum: ['car', 'truck'],
      },
      option: {
        type: 'string',
        description:
          'The option parameter specifies the version of the directions service to use. Setting option=flexible activates the Flexible API, which supports advanced features like truck routing, time-based routing, route type selection (fastest/shortest), and segment-wise speed limits. If not set, the API defaults to the Fast version for real-time routing.',
        enum: ['fast', 'flexible'],
      },
      overview: {
        type: 'string',
        description:
          'Specify the verbosity of route geometry.\n\nWhen set to full, the most detailed geometry available is returned. When set to simplified, a simplified version of the full geometry is returned. No overview geometry is returned when set to false.',
        enum: ['full', 'simplified', 'false'],
      },
      rest_times: {
        type: 'string',
        description:
          'Requires option=flexible.\n\nAn array of durations, in seconds, for which the driver should rest after completing the corresponding continuous driving interval (provided in drive\\_time\\_limits). Multiple rest times can be separated by a comma character ",". Ideally, the number of rest\\_times provided should be equal to the number of drive\\_time\\_limits provided for proper scheduling of driver breaks.\n\nAs an example, a rest\\_times=\\[500, 300\\] means that driver can rest for 500 seconds after the first continuous driving session and rest for 300 seconds after the next continuous driving session.\n\n\\- If the number of rest\\_times provided are less than the number of drive\\_time\\_limits, the service will schedule a rest period of "0" seconds after each such drive time period which does not have a corresponding entry in rest\\_times.  \n\\- If the number of rest\\_times provided is more than the number of drive times provided, the additional rest times are never applied.',
      },
      road_info: {
        type: 'string',
        description:
          'Requires option=flexible.\n\nUse this parameter to receive additional information about the road segments returned in the response. Currently, following inputs are supported:\n\n\\- max\\_speed : segment-wise maximum speed information of roads in the response.  \n\\- toll\\_distance : returns the total distance travelled on the road segments having tolls.  \n\\- toll\\_cost: returns the range of toll charges, in local currency, that can be incurred for the suggested route.',
        enum: ['max_speed', 'toll_distance', 'toll_cost'],
      },
      route_type: {
        type: 'string',
        description: 'Requires option=flexible.\n\nSet the route type that needs to be returned.',
        enum: ['fastest', 'shortest'],
      },
      steps: {
        type: 'boolean',
        description:
          'Set this to true to receive additional details about the routes and each of its legs (details of geometry, start & end locations) in the response.',
      },
      truck_axle_load: {
        type: 'number',
        description:
          'Requires option=flexible.\n\nSpecify the total load per axle (including the weight of trailers and shipped goods) of the truck, in tonnes. When used, the service will return routes which are legally allowed to carry the load specified per axle.\n\nPlease note this parameter is effective only when mode=truck.',
      },
      truck_size: {
        type: 'string',
        description:
          'Requires option=flexible.\n\nThis defines the dimensions of a truck in centimeters (CM). This parameter is effective only when the mode=truck. Maximum dimensions are as follows:\n\n\\- Height = 1000 cm  \n\\- Width = 5000 cm  \n\\- Length = 5000 cm',
      },
      truck_weight: {
        type: 'integer',
        description:
          'Requires option=flexible.\n\nThis parameter defines the weight of the truck including trailers and shipped goods in kilograms (KG). This parameter is effective only when mode=truck.',
      },
      turn_angle_range: {
        type: 'integer',
        description:
          'Requires option=flexible.\n\nSpecify the turn angles that can be taken safely by the vehicle. The permissible turn angles are calculated as \\[0 + turn\\_angle\\_range , 360 - turn\\_angle\\_range\\]. Please note that this parameter is effective only when avoid=sharp\\_turn.\n\nIt is worth highlighting here that providing smaller angles might lead to 4xx errors as route engine might not be able find routes satisfying the smaller turn angle criteria for all turns in the route.',
      },
      waypoints: {
        type: 'string',
        description: 'Pipe-separated list of coordinate pairs',
      },
    },
    required: ['destination', 'origin'],
  },
  annotations: {},
};

export const handler = async (client: NextbillionSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.directions.computeRoute(body));
};

export default { metadata, tool, handler };
