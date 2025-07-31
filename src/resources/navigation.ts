// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Navigation extends APIResource {
  /**
   * Nextbillion.ai’s Navigation API is a service that computes a route between 2
   * places, and also returns detailed turn by turn instructions for the route.
   *
   * The Navigation API can be used as an input into your Navigation app.
   * Alternatively, you can directly use Nextbillion.ai’s Navigation SDK for a
   * complete turn by turn navigation experience.
   */
  retrieveRoute(
    query: NavigationRetrieveRouteParams,
    options?: RequestOptions,
  ): APIPromise<NavigationRetrieveRouteResponse> {
    return this._client.get('/navigation/json', { query, ...options });
  }
}

export interface NavigationRetrieveRouteResponse {
  /**
   * Displays the error message in case of a failed request or operation. Please note
   * that this parameter is not returned in the response in case of a successful
   * request.
   */
  msg?: string;

  /**
   * An array of objects describing different possible routes from the starting
   * location to the destination. Each object represents one route.
   */
  routes?: Array<NavigationRetrieveRouteResponse.Route>;

  /**
   * A string indicating the state of the response. On normal responses, the value
   * will be Ok. Indicative HTTP error codes are returned for different errors. See
   * the [API Errors Codes](#api-error-codes) section below for more information.
   */
  status?: string;

  /**
   * warning when facing unexpected behaviour
   */
  warning?: Array<string>;
}

export namespace NavigationRetrieveRouteResponse {
  export interface Route {
    /**
     * The distance, in meters, of the complete trip.
     */
    distance?: number;

    /**
     * The total distance of the route, including additional details such as extra
     * maneuvers or loops, in meters.
     */
    distance_full?: number;

    /**
     * The duration, in seconds, of the complete trip.
     */
    duration?: number;

    /**
     * Location coordinates of the point where the route ends.
     */
    end_location?: Route.EndLocation;

    /**
     * The GeoJSON representation of the route.
     */
    geojson?: Route.Geojson;

    /**
     * Encoded geometry of the returned route as per the selected format in geometry
     * and specified overview verbosity. Please note the overview will always be full
     * when original_shape parameter is used in the input request.
     */
    geometry?: string;

    /**
     * An array of objects returning the details about each leg of the route. waypoints
     * split the route into legs.
     */
    legs?: Array<Route.Leg>;

    /**
     * The predicted duration of the route based on real-time traffic conditions.
     */
    predicted_duration?: number;

    /**
     * The raw estimated duration of the route in seconds.
     */
    raw_duration?: number;

    /**
     * Special geospatial objects or landmarks crossed along the route.
     */
    special_objects?: unknown;

    /**
     * Location coordinates of the point where the route starts.
     */
    start_location?: Route.StartLocation;

    /**
     * A weight value associated with the route or leg.
     */
    weight?: number;
  }

  export namespace Route {
    /**
     * Location coordinates of the point where the route ends.
     */
    export interface EndLocation {
      /**
       * Latitude of the end_location.
       */
      latitude?: number;

      /**
       * Longitude of the end_location.
       */
      longitude?: number;
    }

    /**
     * The GeoJSON representation of the route.
     */
    export interface Geojson {
      geometry?: string;

      properties?: string;

      type?:
        | 'Point'
        | 'MultiPoint'
        | 'LineString'
        | 'MultiLineString'
        | 'Polygon'
        | 'MultiPolygon'
        | 'GeometryCollection'
        | 'Feature'
        | 'FeatureCollection'
        | 'Link';
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
       * Location coordinates of the point where the leg ends.
       */
      end_location?: Leg.EndLocation;

      /**
       * The raw estimated duration of the leg in seconds.
       */
      raw_duration?: unknown;

      /**
       * Location coordinates of the point where the leg starts.
       */
      start_location?: Leg.StartLocation;

      /**
       * An array of step objects containing turn-by-turn guidance for easy navigation.
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
       * Location coordinates of the point where the leg ends.
       */
      export interface EndLocation {
        /**
         * Latitude of end_location of the leg.
         */
        latitude?: number;

        /**
         * Longitude of end_location of the leg.
         */
        longitude?: number;
      }

      /**
       * Location coordinates of the point where the leg starts.
       */
      export interface StartLocation {
        /**
         * Latitude of start_location of the leg.
         */
        latitude?: number;

        /**
         * Longitude of start_location of the leg.
         */
        longitude?: number;
      }

      export interface Step {
        /**
         * An object containing step distance value, in meters.
         */
        distance?: Step.Distance;

        /**
         * Indicates the driving side of the road in case bidirectional traffic is allowed
         * on the given segment. It can have two values: "left" & "right".
         */
        driving_side?: string;

        /**
         * An object containing step duration value, in seconds.
         */
        duration?: Step.Duration;

        /**
         * Location coordinates of the point where the step ends.
         */
        end_location?: Step.EndLocation;

        /**
         * The GeoJSON representation of the step.
         */
        geojson?: Step.Geojson;

        /**
         * Encoded geometry of the step in the selected format.
         */
        geometry?: string;

        /**
         * An array of objects representing intersections (or cross-way) that the route
         * passes by along the step. For every step, the very first intersection
         * corresponds to the location of the maneuver. All intersections until the next
         * maneuver are listed in this object.
         */
        intersections?: Array<Step.Intersection>;

        /**
         * An object with maneuver details for the step.
         */
        maneuver?: Step.Maneuver;

        /**
         * The name of the step.
         */
        name?: string;

        /**
         * A reference for the step.
         */
        reference?: string;

        /**
         * An object containing road shield information.
         */
        road_shield_type?: Step.RoadShieldType;

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
         * The GeoJSON representation of the step.
         */
        export interface Geojson {
          geometry?: string;

          type?: string;
        }

        export interface Intersection {
          /**
           * A list of bearing values (e.g. [0,90,180,270]) that are available at the
           * intersection. The bearings describe all available roads at the intersection.
           */
          bearings?: Array<number>;

          /**
           * An array of strings representing the classes or types of roads or paths at the
           * intersection. The classes can indicate the road hierarchy, such as a motorway,
           * primary road, secondary road, etc.
           */
          classes?: Array<string>;

          /**
           * A value of true indicates that the respective road could be entered on a valid
           * route. false indicates that the turn onto the respective road would violate a
           * restriction. Each entry value corresponds to the bearing angle at the same
           * index.
           */
          entry?: Array<boolean>;

          /**
           * The number of incoming roads or paths at the intersection.
           */
          intersection_in?: number;

          /**
           * The number of outgoing roads or paths from the intersection.
           */
          intersection_out?: number;

          /**
           * An array of lane objects representing the lanes available at the intersection.
           * If no lane information is available for an intersection, the lanes property will
           * not be present.
           */
          lanes?: Array<Intersection.Lane>;

          /**
           * A [longitude, latitude] pair describing the location of the intersection.
           */
          location?: Intersection.Location;
        }

        export namespace Intersection {
          export interface Lane {
            /**
             * It represents actions associated with the lane. These indications describe the
             * permitted maneuvers or directions that can be taken from the lane. Common
             * indications include "turn left," "turn right," "go straight," "merge," "exit,"
             * etc.
             */
            indications?: Array<string>;

            /**
             * This indicates the validity of the lane. It specifies whether the lane is
             * considered valid for making the indicated maneuver or if there are any
             * restrictions or limitations associated with it.
             */
            valid?: boolean;
          }

          /**
           * A [longitude, latitude] pair describing the location of the intersection.
           */
          export interface Location {
            /**
             * The latitude coordinate of the intersection.
             */
            latitude?: number;

            /**
             * The longitude coordinate of the intersection.
             */
            longitude?: number;

            /**
             * The name or description of the intersection.
             */
            name?: string;
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
           * A text instruction describing the maneuver to be performed. It provides guidance
           * on the action to take at the maneuver location, such as "Turn left," "Go
           * straight," "Exit the roundabout," etc.
           */
          instruction?: string;

          /**
           * A string indicating the type of maneuver.
           */
          maneuver_type?: string;

          /**
           * A boolean value indicating whether the voice instruction for the maneuver should
           * be muted or not.
           */
          muted?: boolean;

          /**
           * The number of roundabouts encountered so far during the route. This parameter is
           * specific to roundabout maneuvers and indicates the count of roundabouts before
           * the current one.
           */
          roundabout_count?: number;

          /**
           * An array of voice instruction objects associated with the maneuver. Each object
           * provides additional details about the voice instruction, including the distance
           * along the geometry where the instruction applies, the instruction text, and the
           * unit of measurement.
           */
          voice_instruction?: Array<Maneuver.VoiceInstruction>;
        }

        export namespace Maneuver {
          /**
           * A coordinate pair describing the location of the maneuver.
           */
          export interface Coordinate {
            /**
             * The latitude coordinate of the maneuver.
             */
            latitude?: number;

            /**
             * The longitude coordinate of the maneuver.
             */
            longitude?: number;

            /**
             * The name or description of the maneuver location.
             */
            name?: string;
          }

          export interface VoiceInstruction {
            distance_along_geometry?: number;

            /**
             * The guidance instructions for the upcoming maneuver
             */
            instruction?: string;

            /**
             * Unit of the distance_along_geometry metric
             */
            unit?: string;
          }
        }

        /**
         * An object containing road shield information.
         */
        export interface RoadShieldType {
          /**
           * The URL to fetch the road shield image.
           */
          image_url?: string;

          /**
           * A label identifying the inscription on the road shield, such as containing the
           * road number.
           */
          label?: string;
        }

        /**
         * Location coordinates of the point where the step starts.
         */
        export interface StartLocation {
          /**
           * Latitude of start_location of the step.
           */
          latitude?: number;

          /**
           * Longitude of start_location of the step.
           */
          longitude?: number;
        }
      }
    }

    /**
     * Location coordinates of the point where the route starts.
     */
    export interface StartLocation {
      /**
       * Latitude of thestart_location.
       */
      latitude?: number;

      /**
       * Longitude of the start_location.
       */
      longitude?: number;
    }
  }
}

export interface NavigationRetrieveRouteParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Sets the number of alternative routes to return. It is effective only when
   * "alternatives" is "true". Please note that adding alternative route count does
   * not guarantee matching number of routes to be returned if potential alternative
   * routes do not exist.
   */
  altcount?: number;

  /**
   * When "true" the API will return alternate routes. The "alternatives" is
   * effective only when there are no "waypoints" included in the request. You can
   * set the number of alternate routes to be returned in the "altcount" property.
   */
  alternatives?: boolean;

  /**
   * A semicolon-separated list indicating the side of the road from which to
   * approach "waypoints" in a requested route. When set to "unrestricted" a route
   * can arrive at the waypoint from either side of the road and when set to "curb"
   * the route will arrive at the waypoint on the driving side of the region. Please
   * note the number of values provided must be one more than the number of
   * "waypoints". The last value of "approaches" will determine the approach for the
   * "destination". However, you can skip a coordinate and show its position in the
   * list with the ";" separator.
   */
  approaches?: 'unrestricted' | 'curb';

  /**
   * Setting this will ensure the route avoids ferries, tolls, highways or nothing.
   * Multiple values should be separated by a pipe (|). If "none" is provided along
   * with other values, an error is returned as a valid route is not feasible. Please
   * note that when this parameter is not provided in the input, ferries are set to
   * be avoided by default. When this parameter is provided, only the mentioned
   * objects are avoided.
   */
  avoid?: 'toll' | 'ferry' | 'highway' | 'none';

  /**
   * Limits the search to road segments with given bearing, in degrees, towards true
   * north in clockwise direction. Each "bearings" should be in the format of
   * "degree,range", where the "degree" should be a value between \[0, 360\] and
   * "range" should be a value between \[0, 180\]. Please note that the number of
   * "bearings" should be two more than the number of "waypoints". This is to account
   * for the bearing of "origin" and "destination". If a route can approach a
   * "waypoint" or the "destination" from any direction, the bearing for that point
   * can be specified as "0,180".
   */
  bearings?: string;

  /**
   * "destination" is the ending point of your route. Ensure that the "destination"
   * is a routable land location. Please note that this parameter is mandatory if the
   * "original_shape" parameter is not given.
   */
  destination?: string;

  /**
   * Sets the output format of the route geometry in the response. On providing
   * “polyline“ and “polyline6“ as input, respective encoded geometry is returned.
   * However, when “geojson“ is provided as the input value, “polyline“ encoded
   * geometry is returned in the response along with the geojson details of the
   * route.
   */
  geometry?: 'polyline' | 'polyline6' | 'geojson';

  /**
   * Select the language to be used for result rendering from a list of
   * [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) compliant language
   * codes.
   */
  lang?: string;

  /**
   * Set which driving mode the service should use to determine a route. For example,
   * if you use "car", the API will return a route that a car can take. Using "truck"
   * will return a route a truck can use, taking into account appropriate truck
   * routing restrictions.
   *
   * When "mode=truck", following are the default dimensions that are used:
   *
   * \- truck_height = 214 centimeters
   *
   * \- truck_width = 183 centimeters
   *
   * \- truck_length = 519 centimeters
   *
   * \- truck_weight = 5000 kg
   *
   * Please use the Navigation Flexible version if you want to use custom truck
   * dimensions.
   *
   * Note: Only the "car" profile is enabled by default. Please note that customized
   * profiles (including "truck") might not be available for all regions. Please
   * contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales
   * representative or reach out at
   * [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need
   * additional profiles.
   */
  mode?: 'car' | 'truck';

  /**
   * "origin" is the starting point of your route. Ensure that "origin" is a routable
   * land location. Please note that this parameter is mandatory if the geometry
   * parameter is not given.
   */
  origin?: string;

  /**
   * Takes a route geometry as input and returns the navigation information for that
   * route. Accepts "polyline" and "polyline6" encoded geometry as input.
   * "original_shape_type" becomes mandatory when "original_shape" is used. If this
   * parameter is provided, the only other parameters which will be considered are
   * "original_shape_type", "lang", "geometry". The rest of the parameters in the
   * input request will be ignored. Please note overview verbosity will always be
   * "full" when using this parameter.
   */
  original_shape?: string;

  /**
   * Specify the encoding format of route geometry provided in the request using
   * "original_shape" parameter. Please note that an error is returned when this
   * parameter is not specified while an input is added to "original_shape"
   * parameter.
   */
  original_shape_type?: 'polyline' | 'polyline6';

  /**
   * Specify the verbosity of route geometry. When set to "full", the most detailed
   * geometry available is returned. When set to "simplified", a simplified version
   * of the full geometry is returned. No overview geometry is returned when set to
   * "false".
   */
  overview?: 'full' | 'simplified' | 'false';

  /**
   * "waypoints" are coordinates along the route between the "origin" and
   * "destination". It is a pipe-separated list of coordinate pairs. Please note that
   * the route returned will arrive at the "waypoints" in the sequence they are
   * provided in the input request. Please note that the maximum number of waypoints
   * that can be provided in a single request is 50 when using GET method and 200
   * with POST method.
   */
  waypoints?: string;
}

export declare namespace Navigation {
  export {
    type NavigationRetrieveRouteResponse as NavigationRetrieveRouteResponse,
    type NavigationRetrieveRouteParams as NavigationRetrieveRouteParams,
  };
}
