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
   * will be `Ok`. Indicative HTTP error codes are returned for different errors. See
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
     * `destination` in the input request. Returned only when `steps` is true in the
     * input request.
     */
    end_location?: Route.EndLocation;

    /**
     * An object with geoJSON details of the route. This object is returned when the
     * `geometry` field is set to `geojson` in the input request, otherwise it is not
     * present in the response. The contents of this object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    geojson?: Route.Geojson;

    /**
     * Encoded geometry of the returned route in the selected format and specified
     * `overview` verbosity. This parameter is configured in the input request.
     */
    geometry?: string;

    /**
     * An array of objects returning the details about each `leg` of the route.
     * `waypoints` split the route into legs.
     */
    legs?: Array<Route.Leg>;

    /**
     * Location coordinates of the point where the route starts. It is the same as the
     * `origin` in the input request. Returned only when `steps` is true in the input
     * request.
     */
    start_location?: Route.StartLocation;
  }

  export namespace Route {
    /**
     * Location coordinates of the point where the route ends. It is the same as the
     * `destination` in the input request. Returned only when `steps` is true in the
     * input request.
     */
    export interface EndLocation {
      /**
       * latitude of the `start_location`.
       */
      latitude?: number;

      /**
       * longitude of the `start_location`.
       */
      longitude?: number;
    }

    /**
     * An object with geoJSON details of the route. This object is returned when the
     * `geometry` field is set to `geojson` in the input request, otherwise it is not
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
       * Location coordinates of the point where the leg ends. Returned only when `steps`
       * is true in the input request.
       */
      end_location?: Leg.EndLocation;

      /**
       * Location coordinates of the point where the leg starts. Returned only when
       * `steps` is true in the input request.
       */
      start_location?: Leg.StartLocation;

      /**
       * An array of objects with details of each step of the `legs`. Returned only when
       * `steps` is `true` in the input request. An empty array is returned when `steps`
       * is `false` in the input request.
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
       * Location coordinates of the point where the leg ends. Returned only when `steps`
       * is true in the input request.
       */
      export interface EndLocation {
        /**
         * Latitude of the `end_location` of the `leg`.
         */
        latitude?: number;

        /**
         * Longitude of the `end_location` of the `leg`.
         */
        longitude?: number;
      }

      /**
       * Location coordinates of the point where the leg starts. Returned only when
       * `steps` is true in the input request.
       */
      export interface StartLocation {
        /**
         * Latitude of the `start_location` of the `leg`.
         */
        latitude?: number;

        /**
         * Longitude of the `start_location` of the `leg`.
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
         * Location coordinates of the point where the `step` ends.
         */
        end_location?: Step.EndLocation;

        /**
         * An object with geoJSON details of the `step`.This object is returned when the
         * `geometry` field is set to `geojson` in the input request, otherwise it is not
         * present in the response. The contents of this object follow the
         * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
         */
        geojson?: Step.Geojson;

        /**
         * Encoded geometry of the `step` in the selected format.
         */
        geometry?: string;

        /**
         * An object with maneuver details for the `step`.
         */
        maneuver?: Step.Maneuver;

        /**
         * Location coordinates of the point where the `step` starts.
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
         * Location coordinates of the point where the `step` ends.
         */
        export interface EndLocation {
          /**
           * Latitude of the `end_location` of the `step`.
           */
          latitude?: number;

          /**
           * Longitude of the `end_location` of the `step`.
           */
          longitude?: number;
        }

        /**
         * An object with geoJSON details of the `step`.This object is returned when the
         * `geometry` field is set to `geojson` in the input request, otherwise it is not
         * present in the response. The contents of this object follow the
         * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
         */
        export interface Geojson {
          /**
           * An object with details of the geoJSON geometry of the `step`.
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
           * An object with details of the geoJSON geometry of the `step`.
           */
          export interface Geometry {
            /**
             * An array of coordinates in the [longitude, latitude] format, representing the
             * `step` geometry.
             */
            coordinates?: Array<number>;

            /**
             * Type of the geoJSON geometry.
             */
            type?: string;
          }
        }

        /**
         * An object with maneuver details for the `step`.
         */
        export interface Maneuver {
          /**
           * The clockwise angle from true north to the direction of travel immediately after
           * the `maneuver`. Range of values is between 0-359.
           */
          bearing_after?: number;

          /**
           * The clockwise angle from true north to the direction of travel immediately
           * before the `maneuver`. Range of values is between 0-359.
           */
          bearing_before?: number;

          /**
           * A coordinate pair describing the location of the `maneuver`.
           */
          coordinate?: Maneuver.Coordinate;

          /**
           * A string indicating the type of `maneuver`.
           */
          maneuver_type?: string;

          /**
           * Modifier associated with `maneuver_type`.
           */
          modifier?: string;
        }

        export namespace Maneuver {
          /**
           * A coordinate pair describing the location of the `maneuver`.
           */
          export interface Coordinate {
            /**
             * Latitude of the `maneuver` location.
             */
            latitude?: number;

            /**
             * Longitude of the `maneuver` location.
             */
            longitude?: number;
          }
        }

        /**
         * Location coordinates of the point where the `step` starts.
         */
        export interface StartLocation {
          /**
           * Latitude of the `start_location` of the `step`.
           */
          latitude?: number;

          /**
           * Longitude of the `start_location` of the `step`.
           */
          longitude?: number;
        }
      }
    }

    /**
     * Location coordinates of the point where the route starts. It is the same as the
     * `origin` in the input request. Returned only when `steps` is true in the input
     * request.
     */
    export interface StartLocation {
      /**
       * Latitude of the `start_location`.
       */
      latitude?: number;

      /**
       * Longitude of the `start_location`.
       */
      longitude?: number;
    }
  }
}

export interface DirectionComputeRouteParams {
  /**
   * test
   */
  destination: string;

  /**
   * test
   */
  origin: string;

  waypoints?: string;
}

export declare namespace Directions {
  export {
    type DirectionComputeRouteResponse as DirectionComputeRouteResponse,
    type DirectionComputeRouteParams as DirectionComputeRouteParams,
  };
}
