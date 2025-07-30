// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Directions extends APIResource {
  /**
   * Directions API is a service that computes a route with given coordinates.
   */
  computeRoute(
    body: DirectionComputeRouteParams,
    options?: RequestOptions,
  ): APIPromise<DirectionComputeRouteResponse> {
    return this._client.post('/directions/json', { body, ...options });
  }
}

export interface DirectionComputeRouteResponse {
  /**
   * Displays the error message in case of a failed request or operation. Please note
   * that this parameter is not returned in the response in case of a successful
   * request.
   */
  msg?: string;

  /**
   * An object containing details about the returned route. Will contain multiple
   * objects if more than one routes are present in the response.
   */
  route?: DirectionComputeRouteResponse.Route;

  /**
   * A string indicating the state of the response. On normal responses, the value
   * will be Ok. Indicative HTTP error codes are returned for different errors. See
   * the [API Errors Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace DirectionComputeRouteResponse {
  /**
   * An object containing details about the returned route. Will contain multiple
   * objects if more than one routes are present in the response.
   */
  export interface Route {
    /**
     * The distance, in meters, for the complete trip.
     */
    distance?: number;

    /**
     * The duration, in seconds, of the complete trip.
     */
    duration?: number;

    /**
     * Location coordinates of the point where the route ends. It is the same as the
     * destination in the input request. Returned only when steps is true in the input
     * request.
     */
    end_location?: Route.EndLocation;

    /**
     * An object with geoJSON details of the route. This object is returned when the
     * geometry field is set to geojson in the input request, otherwise it is not
     * present in the response. The contents of this object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    geojson?: Route.Geojson;

    /**
     * Encoded geometry of the returned route in the selected format and specified
     * overview verbosity. This parameter is configured in the input request.
     */
    geometry?: string;

    /**
     * An array of objects returning the details about each leg of the route. waypoints
     * split the route into legs.
     */
    legs?: Array<Route.Leg>;

    /**
     * Location coordinates of the point where the route starts. It is the same as the
     * origin in the input request. Returned only when steps is true in the input
     * request.
     */
    start_location?: Route.StartLocation;
  }

  export namespace Route {
    /**
     * Location coordinates of the point where the route ends. It is the same as the
     * destination in the input request. Returned only when steps is true in the input
     * request.
     */
    export interface EndLocation {
      /**
       * latitude of the start_location.
       */
      latitude?: number;

      /**
       * longitude of the start_location.
       */
      longitude?: number;
    }

    /**
     * An object with geoJSON details of the route. This object is returned when the
     * geometry field is set to geojson in the input request, otherwise it is not
     * present in the response. The contents of this object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    export interface Geojson {
      /**
       * An object with details of the geoJSON geometry of the route.
       */
      geometry?: Geojson.Geometry;

      /**
       * Property associated with the geoJSON shape.
       */
      properties?: string;

      /**
       * Type of the geoJSON object.
       */
      type?: string;
    }

    export namespace Geojson {
      /**
       * An object with details of the geoJSON geometry of the route.
       */
      export interface Geometry {
        /**
         * An array of coordinates in the [longitude, latitude] format, representing the
         * route geometry.
         */
        coordinates?: Array<number>;

        /**
         * Type of the geoJSON geometry.
         */
        type?: string;
      }
    }

    export interface Leg {
      /**
       * An object containing leg distance value, in meters.
       */
      distance?: Leg.Distance;

      /**
       * An object containing leg duration value, in seconds.
       */
      duration?: Leg.Duration;

      /**
       * Location coordinates of the point where the leg ends. Returned only when steps
       * is true in the input request.
       */
      end_location?: Leg.EndLocation;

      /**
       * Location coordinates of the point where the leg starts. Returned only when steps
       * is true in the input request.
       */
      start_location?: Leg.StartLocation;

      /**
       * An array of objects with details of each step of the legs. Returned only when
       * steps is true in the input request. An empty array is returned when steps is
       * false in the input request.
       */
      steps?: Array<Leg.Step>;
    }

    export namespace Leg {
      /**
       * An object containing leg distance value, in meters.
       */
      export interface Distance {
        value?: number;
      }

      /**
       * An object containing leg duration value, in seconds.
       */
      export interface Duration {
        value?: number;
      }

      /**
       * Location coordinates of the point where the leg ends. Returned only when steps
       * is true in the input request.
       */
      export interface EndLocation {
        /**
         * Latitude of the end_location of the leg.
         */
        latitude?: number;

        /**
         * Longitude of the end_location of the leg.
         */
        longitude?: number;
      }

      /**
       * Location coordinates of the point where the leg starts. Returned only when steps
       * is true in the input request.
       */
      export interface StartLocation {
        /**
         * Latitude of the start_location of the leg.
         */
        latitude?: number;

        /**
         * Longitude of the start_location of the leg.
         */
        longitude?: number;
      }

      export interface Step {
        /**
         * An object containing step distance value, in meters.
         */
        distance?: Step.Distance;

        /**
         * An object containing step duration value, in seconds.
         */
        duration?: Step.Duration;

        /**
         * Location coordinates of the point where the step ends.
         */
        end_location?: Step.EndLocation;

        /**
         * An object with geoJSON details of the step.This object is returned when the
         * geometry field is set to geojson in the input request, otherwise it is not
         * present in the response. The contents of this object follow the
         * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
         */
        geojson?: Step.Geojson;

        /**
         * Encoded geometry of the step in the selected format.
         */
        geometry?: string;

        /**
         * An object with maneuver details for the step.
         */
        maneuver?: Step.Maneuver;

        /**
         * Location coordinates of the point where the step starts.
         */
        start_location?: Step.StartLocation;
      }

      export namespace Step {
        /**
         * An object containing step distance value, in meters.
         */
        export interface Distance {
          value?: number;
        }

        /**
         * An object containing step duration value, in seconds.
         */
        export interface Duration {
          value?: number;
        }

        /**
         * Location coordinates of the point where the step ends.
         */
        export interface EndLocation {
          /**
           * Latitude of the end_location of the step.
           */
          latitude?: number;

          /**
           * Longitude of the end_location of the step.
           */
          longitude?: number;
        }

        /**
         * An object with geoJSON details of the step.This object is returned when the
         * geometry field is set to geojson in the input request, otherwise it is not
         * present in the response. The contents of this object follow the
         * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
         */
        export interface Geojson {
          /**
           * An object with details of the geoJSON geometry of the step.
           */
          geometry?: Geojson.Geometry;

          /**
           * Property associated with the geoJSON shape.
           */
          properties?: string;

          /**
           * Type of the geoJSON object.
           */
          type?: string;
        }

        export namespace Geojson {
          /**
           * An object with details of the geoJSON geometry of the step.
           */
          export interface Geometry {
            /**
             * An array of coordinates in the [longitude, latitude] format, representing the
             * step geometry.
             */
            coordinates?: Array<number>;

            /**
             * Type of the geoJSON geometry.
             */
            type?: string;
          }
        }

        /**
         * An object with maneuver details for the step.
         */
        export interface Maneuver {
          /**
           * The clockwise angle from true north to the direction of travel immediately after
           * the maneuver. Range of values is between 0-359.
           */
          bearing_after?: number;

          /**
           * The clockwise angle from true north to the direction of travel immediately
           * before the maneuver. Range of values is between 0-359.
           */
          bearing_before?: number;

          /**
           * A coordinate pair describing the location of the maneuver.
           */
          coordinate?: Maneuver.Coordinate;

          /**
           * A string indicating the type of maneuver.
           */
          maneuver_type?: string;

          /**
           * Modifier associated with maneuver_type.
           */
          modifier?: string;
        }

        export namespace Maneuver {
          /**
           * A coordinate pair describing the location of the maneuver.
           */
          export interface Coordinate {
            /**
             * Latitude of the maneuver location.
             */
            latitude?: number;

            /**
             * Longitude of the maneuver location.
             */
            longitude?: number;
          }
        }

        /**
         * Location coordinates of the point where the step starts.
         */
        export interface StartLocation {
          /**
           * Latitude of the start_location of the step.
           */
          latitude?: number;

          /**
           * Longitude of the start_location of the step.
           */
          longitude?: number;
        }
      }
    }

    /**
     * Location coordinates of the point where the route starts. It is the same as the
     * origin in the input request. Returned only when steps is true in the input
     * request.
     */
    export interface StartLocation {
      /**
       * Latitude of the start_location.
       */
      latitude?: number;

      /**
       * Longitude of the start_location.
       */
      longitude?: number;
    }
  }
}

export interface DirectionComputeRouteParams {
  destination: string;

  origin: string;

  /**
   * Sets the number of alternative routes to return. It is effective only when
   * alternatives=true. Default to 3.
   *
   * Please note that adding alternative route count does not guarantee matching
   * number of routes to be returned if potential alternative routes do not exist.
   */
  altcount?: number;

  /**
   * When true the API will return alternate routes.
   *
   * The alternatives is effective only when there are no waypoints included in the
   * request.
   *
   * You can set the number of alternate routes to be returned in the altcount
   * property.
   */
  alternatives?: boolean;

  /**
   * A semicolon-separated list indicating the side of the road from which to
   * approach waypoints in a requested route.
   *
   * When set to unrestricted a route can arrive at the waypoint from either side of
   * the road and when set to curb the route will arrive at the waypoint on the
   * driving side of the region.
   *
   * Please note the number of values provided must be one more than the number of
   * waypoints. The last value of approaches will determine the approach for the
   * destination. However, you can skip a coordinate and show its position in the
   * list with the ; separator.
   */
  approaches?: string;

  /**
   * When option=fast (by default):
   *
   * Setting this will ensure the route avoids ferries, tolls, highways or nothing.
   * Multiple values should be separated by a pipe "|". If none is provided along
   * with other values, an error is returned as a valid route is not feasible.
   *
   * Please note that when this parameter is not provided in the input, ferries are
   * set to be avoided by default. When this parameter is provided, only the
   * mentioned objects are avoided.
   *
   * When option=flexible:
   *
   * Set this parameter to find alternative routes that bypass specified objects. Use
   * a pipe "|" to separate multiple values. This is a flexible filter; if no
   * alternative routes exist, the service will still provide a route that includes
   * the objects. For a strict filter, consider using the exclude parameter.
   *
   * \- This parameter is effective only when route_type=fastest.
   * \- Following objects are exceptions to the flexible filtering behavior of avoid
   * parameter: bbox, tunnel and geofence_id. When used, the service will return an
   * error in case there are no alternative routes available.
   * \- When using avoid=bbox users also need to specify the boundaries of the
   * bounding box to be avoided. Multiple bounding boxes can be specified
   * simultaneously. The perimeter of a bounding box can not exceed 500 KM. Format:
   * bbox=min_latitude,min_longtitude,max_latitude,max_longitude. Example:
   * avoid=bbox: 34.0635,-118.2547, 34.0679,-118.2478 | bbox: 34.0521,-118.2342,
   * 34.0478,-118.2437
   * \- When using avoid=sharp_turn, default range of permissible turn angles is
   * \[120,240\] in the clockwise direction from the current road. In order to
   * override default range, please use turn_angle_range parameter.
   * \- When using avoid=geofence_id, only the the geofences created using
   * [NextBillion.ai](http://NextBillion.ai) Geofence API are valid.
   * \- When this parameter is not provided in the input, ferry routes are set to be
   * avoided by default. When this parameter is provided, only the mentioned
   * object(s) are avoided.
   * \- If none is provided along with other values, an error is returned as a valid
   * route is not feasible.
   */
  avoid?:
    | 'toll'
    | 'ferry'
    | 'highway'
    | 'none'
    | 'sharp_turn'
    | 'uturn'
    | 'service_road'
    | 'left_turn'
    | 'right_turn'
    | 'bbox'
    | 'geofence_id'
    | 'tunnel';

  /**
   * Limits the search to road segments with given bearing, in degrees, towards true
   * north in clockwise direction. Each bearings should be in the format of
   * degree,range, where the degree should be a value between \[0, 360\] and range
   * should be a value between \[0, 180\].
   *
   * Please note that the number of bearings should be two more than the number of
   * waypoints. This is to account for the bearing of origin and destination. If a
   * route can approach a waypoint or the destination from any direction, the bearing
   * for that point can be specified as "0,180".
   */
  bearings?: string;

  /**
   * Requires option=flexible.
   *
   * Specify if crossing an international border is expected for operations near
   * border areas. When set to false, the API will prohibit routes crossing the
   * borders. When set to true, the service will return routes which cross the
   * borders between countries, if required for the given set destination and
   * waypoints.
   *
   * This feature is available in North America region only. Please get in touch with
   * [support@nextbillion.ai](mailto:support@nextbillion.ai) to enquire/enable other
   * areas.
   */
  cross_border?: boolean;

  /**
   * Requires option=flexible.
   *
   * Use this parameter to set a departure time, expressed as UNIX epoch timestamp in
   * seconds, for calculating the isochrone contour. The response will consider the
   * typical traffic conditions at the given time and return a contour which can be
   * reached under those traffic conditions.
   *
   * Please note that if no input is provided for this parameter then the traffic
   * conditions at the time of making the request are considered.
   */
  departure_time?: number;

  /**
   * Requires option=flexible.
   *
   * An array of durations, in seconds, for which the driver can drive continuously
   * before taking a rest. Multiple drive time limits can be separated by a comma
   * character ",". After driving for the given duration the driver will take a rest
   * for a fixed period, specified in rest_times . Once the rest duration is over,
   * the subsequent driving duration starts and the process continues until all drive
   * times and rest periods are exhausted or if the driver reaches the destination.
   * This feature is useful in complying with Hours of Service regulations and
   * calculates actual ETAs with regulated driving periods.
   *
   * As an example, a drive_time_limits=\[500, 300\] means that driver can drive for
   * 500 seconds before the first rest period and then drive for another 300 seconds
   * before taking a rest next time.
   *
   * \- If the trip duration is smaller than the first input of drive_time_limits,
   * then there will be no rest actions scheduled by the service.
   * \- If the trip duration is larger than the scheduled time, then a "warning" is
   * returned in the response - along with details of last leg of the trip - to
   * indicate the same.
   */
  drive_time_limits?: string;

  /**
   * Requires option=flexible.
   *
   * Specify the emission class to which the vehicle (engine) belongs to. The service
   * will use this setting to generate routes that are permissible for that engine
   * class. Only the emission classifications in the EU regions are supported
   * currently. Please reach out to
   * [support@nextbillion.ai](mailto:support@nextbillion.ai) to enable for your
   * region.
   */
  emission_class?:
    | 'euro0'
    | 'euro1'
    | 'euro2'
    | 'euro3'
    | 'euro4'
    | 'euro5'
    | 'euro6'
    | 'euro7'
    | 'euro8'
    | 'euro9';

  /**
   * Requires option=flexible.
   *
   * This parameter serves as a mandatory filter, ensuring the service returns only
   * those routes that strictly avoid the object(s) indicated. Multiple values should
   * be separated by a pipe |). If no routes can be found that exclude the specified
   * object(s), the service will return an error. For a less strict filtering
   * approach, consider using the avoid parameter.
   *
   * \- This parameter is effective only when route_type=fastest.
   * \- When using exclude=sharp_turn, default range of permissible turn angles is
   * \[120,240\]. In order to override default range, please use turn_angle_range
   * parameter.
   * \- If none is provided along with other values, an error is returned as a valid
   * route is not feasible.
   */
  exclude?:
    | 'toll'
    | 'ferry'
    | 'highway'
    | 'service_road'
    | 'uturn'
    | 'sharp_turn'
    | 'left_turn'
    | 'right_turn'
    | 'none';

  /**
   * Sets the output format of the route geometry in the response.
   *
   * On providing polyline and polyline6 as input, respective encoded geometry is
   * returned. However, when geojson is provided as the input value, polyline encoded
   * geometry is returned in the response along with the geojson details of the
   * route.
   */
  geometry?: 'polyline' | 'polyline6' | 'geojson';

  /**
   * Requires option=flexible.
   *
   * Specify the type of hazardous material being carried and the service will avoid
   * roads which are not suitable for the type of goods specified. Multiple values
   * can be separated using a pipe operator "|".
   *
   * Please note that this parameter is effective only when mode=truck.
   */
  hazmat_type?: 'general' | 'circumstantial' | 'explosive' | 'harmful_to_water';

  /**
   * Set the driving mode the service should use to determine a route. In "car" mode,
   * the API will return a route that a car can take. Using "truck" mode will return
   * a route a truck can use, taking into account appropriate truck routing
   * restrictions.
   *
   * When mode=truck, following are the default dimensions that are used:
   *
   * \- truck_height = 214 centimeters
   * \- truck_width = 183 centimeters
   * \- truck_length = 519 centimeters
   * \- truck_weight = 5000 kg
   *
   * When option=flexible, you can use custom truck dimensions with truck_weight and
   * truck_size parameters.
   *
   * Note: Only the car profile is enabled by default. Please note that customized
   * profiles (including truck) might not be available for all regions. Please
   * contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales
   * representative or reach out at
   * [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need
   * additional profiles.
   */
  mode?: 'car' | 'truck';

  /**
   * The option parameter specifies the version of the directions service to use.
   * Setting option=flexible activates the Flexible API, which supports advanced
   * features like truck routing, time-based routing, route type selection
   * (fastest/shortest), and segment-wise speed limits. If not set, the API defaults
   * to the Fast version for real-time routing.
   */
  option?: 'fast' | 'flexible';

  /**
   * Specify the verbosity of route geometry.
   *
   * When set to full, the most detailed geometry available is returned. When set to
   * simplified, a simplified version of the full geometry is returned. No overview
   * geometry is returned when set to false.
   */
  overview?: 'full' | 'simplified' | 'false';

  /**
   * Requires option=flexible.
   *
   * An array of durations, in seconds, for which the driver should rest after
   * completing the corresponding continuous driving interval (provided in
   * drive_time_limits). Multiple rest times can be separated by a comma character
   * ",". Ideally, the number of rest_times provided should be equal to the number of
   * drive_time_limits provided for proper scheduling of driver breaks.
   *
   * As an example, a rest_times=\[500, 300\] means that driver can rest for 500
   * seconds after the first continuous driving session and rest for 300 seconds
   * after the next continuous driving session.
   *
   * \- If the number of rest_times provided are less than the number of
   * drive_time_limits, the service will schedule a rest period of "0" seconds after
   * each such drive time period which does not have a corresponding entry in
   * rest_times.
   * \- If the number of rest_times provided is more than the number of drive times
   * provided, the additional rest times are never applied.
   */
  rest_times?: string;

  /**
   * Requires option=flexible.
   *
   * Use this parameter to receive additional information about the road segments
   * returned in the response. Currently, following inputs are supported:
   *
   * \- max_speed : segment-wise maximum speed information of roads in the
   * response.
   * \- toll_distance : returns the total distance travelled on the road segments
   * having tolls.
   * \- toll_cost: returns the range of toll charges, in local currency, that can be
   * incurred for the suggested route.
   */
  road_info?: 'max_speed' | 'toll_distance' | 'toll_cost';

  /**
   * Requires option=flexible.
   *
   * Set the route type that needs to be returned.
   */
  route_type?: 'fastest' | 'shortest';

  /**
   * Set this to true to receive additional details about the routes and each of its
   * legs (details of geometry, start & end locations) in the response.
   */
  steps?: boolean;

  /**
   * Requires option=flexible.
   *
   * Specify the total load per axle (including the weight of trailers and shipped
   * goods) of the truck, in tonnes. When used, the service will return routes which
   * are legally allowed to carry the load specified per axle.
   *
   * Please note this parameter is effective only when mode=truck.
   */
  truck_axle_load?: number;

  /**
   * Requires option=flexible.
   *
   * This defines the dimensions of a truck in centimeters (CM). This parameter is
   * effective only when the mode=truck. Maximum dimensions are as follows:
   *
   * \- Height = 1000 cm
   * \- Width = 5000 cm
   * \- Length = 5000 cm
   */
  truck_size?: string;

  /**
   * Requires option=flexible.
   *
   * This parameter defines the weight of the truck including trailers and shipped
   * goods in kilograms (KG). This parameter is effective only when mode=truck.
   */
  truck_weight?: number;

  /**
   * Requires option=flexible.
   *
   * Specify the turn angles that can be taken safely by the vehicle. The permissible
   * turn angles are calculated as \[0 + turn_angle_range , 360 - turn_angle_range\].
   * Please note that this parameter is effective only when avoid=sharp_turn.
   *
   * It is worth highlighting here that providing smaller angles might lead to 4xx
   * errors as route engine might not be able find routes satisfying the smaller turn
   * angle criteria for all turns in the route.
   */
  turn_angle_range?: number;

  /**
   * Pipe-separated list of coordinate pairs
   */
  waypoints?: string;
}

export declare namespace Directions {
  export {
    type DirectionComputeRouteResponse as DirectionComputeRouteResponse,
    type DirectionComputeRouteParams as DirectionComputeRouteParams,
  };
}
