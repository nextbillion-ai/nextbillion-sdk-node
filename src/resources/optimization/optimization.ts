// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DriverAssignmentAPI from './driver-assignment';
import {
  DriverAssignment,
  DriverAssignmentAssignParams,
  DriverAssignmentAssignResponse,
  Location as DriverAssignmentAPILocation,
  Vehicle,
} from './driver-assignment';
import * as V2API from './v2';
import { Job, Shipment, V2, V2RetrieveResultParams, V2RetrieveResultResponse, V2SubmitParams } from './v2';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Optimization extends APIResource {
  driverAssignment: DriverAssignmentAPI.DriverAssignment = new DriverAssignmentAPI.DriverAssignment(
    this._client,
  );
  v2: V2API.V2 = new V2API.V2(this._client);

  /**
   * Nextbillion.ai Optimization API computes and returns an optimized route between
   * an origin and destination which have multiple stop points in between. With
   * NextBillion.ai's Route Optimization API you get.
   *
   * Optimized routing between way points
   *
   * Highly accurate ETAs with customized routes
   *
   * Roundtrip optimization with customized destinations
   *
   * A list of all parameters is specified in the next section.
   */
  compute(
    query: OptimizationComputeParams,
    options?: RequestOptions,
  ): APIPromise<OptimizationComputeResponse> {
    return this._client.get('/optimization/json', { query, ...options });
  }

  /**
   * Re-optimization
   */
  reOptimize(params: OptimizationReOptimizeParams, options?: RequestOptions): APIPromise<PostResponse> {
    const { key, ...body } = params;
    return this._client.post('/optimization/re_optimization', { query: { key }, body, ...options });
  }
}

export interface PostResponse {
  /**
   * A unique ID which can be used in the Optimization GET method to retrieve the
   * result of optimization.
   */
  id?: string;

  /**
   * Displays an acknowledgement message once the job is submitted.
   */
  message?: string;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages/codes are returned in case of
   * errors. See the [API Error Codes](#api-error-codes) section below for more
   * information.
   */
  status?: string;

  /**
   * Display the warnings for the given input parameters, values and constraints.
   */
  warnings?: Array<string>;
}

export interface OptimizationComputeResponse {
  /**
   * A string indicating the state of the response. This is a separate code than the
   * HTTP status code. On normal valid responses, the value will be `Ok`.
   */
  code?: string;

  /**
   * Contains the latitude and longitude of a location
   */
  location?: OptimizationComputeResponse.Location;

  /**
   * An array of 0 or 1 trip objects. Each object has the following schema.
   */
  trips?: Array<OptimizationComputeResponse.Trip>;

  /**
   * Each waypoint is an input coordinate snapped to the road and path network.
   */
  waypoints?: Array<OptimizationComputeResponse.Waypoint>;
}

export namespace OptimizationComputeResponse {
  /**
   * Contains the latitude and longitude of a location
   */
  export interface Location {
    /**
     * Latitude coordinate of the location.
     */
    latitude?: number;

    /**
     * Longitude coordinate of the location.
     */
    longitude?: number;
  }

  export interface Trip {
    /**
     * Distance of the trip in meters.
     */
    distance?: number;

    /**
     * Duration of the trip in seconds
     */
    duration?: number;

    /**
     * The GeoJSON representation of the route.
     */
    geojson?: Trip.Geojson;

    /**
     * `polyline` or `polyline6` format of route geometry.
     */
    geometry?: string;

    legs?: Array<Trip.Leg>;
  }

  export namespace Trip {
    /**
     * The GeoJSON representation of the route.
     */
    export interface Geojson {
      /**
       * The encoded geometry of the geojson in the `trip`.
       */
      geometry?: string;

      /**
       * Additional properties associated with the `trip`.
       */
      properties?: string;

      /**
       * The type of the GeoJSON object.
       */
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
       * Distance of leg in metres.
       */
      distance?: number;

      /**
       * Duration of leg in seconds.
       */
      duration?: number;

      /**
       * An array of step objects.
       */
      steps?: Array<Leg.Step>;

      /**
       * Summary of the `leg` object.
       */
      summary?: string;
    }

    export namespace Leg {
      export interface Step {
        /**
         * Distance of the `step` object in meters.
         */
        distance?: number;

        /**
         * Duration of the `step` object in seconds.
         */
        duration?: number;

        /**
         * The GeoJSON representation of the `step`.
         */
        geojson?: Step.Geojson;

        /**
         * Encoded geometry of the `step` in the selected format.
         */
        geometry?: string;
      }

      export namespace Step {
        /**
         * The GeoJSON representation of the `step`.
         */
        export interface Geojson {
          /**
           * The encoded geometry of the geojson in the `step`.
           */
          geometry?: string;

          /**
           * Additional properties associated with the `step`.
           */
          properties?: string;

          /**
           * The type of the GeoJSON object.
           */
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
      }
    }
  }

  export interface Waypoint {
    /**
     * Describes the location of the waypoint.
     */
    location?: Waypoint.Location;

    /**
     * Name of the waypoint.
     */
    name?: string;

    /**
     * Denotes the ID of a trip. Starts with 0.
     */
    trips_index?: number;

    /**
     * Denotes the id of a waypoint. The first waypoint is denoted with 0. And onwards
     * with 1, 2 etc.
     */
    waypoint_index?: number;
  }

  export namespace Waypoint {
    /**
     * Describes the location of the waypoint.
     */
    export interface Location {
      /**
       * Latitude coordinate of the waypoint.
       */
      latitude?: number;

      /**
       * Longitude coordinate of the waypoint.
       */
      longitude?: number;
    }
  }
}

export interface OptimizationComputeParams {
  /**
   * This is a pipe-separated list of coordinates.
   *
   * Minimum 3 pairs of coordinates and Maximum 12 pairs of coordinates are allowed.
   */
  coordinates: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * A semicolon-separated list indicating the side of the road from which to
   * approach waypoints in a requested route. If provided, the number of `approaches`
   * must be the same as the number of `coordinates`. However, you can skip a
   * coordinate and show its position in the list with the `;` separator.
   */
  approaches?: '`unrestricted`' | '`curb`';

  /**
   * Specify the destination coordinate of the returned route. If the input is
   * `last`, the last coordinate will be the destination.
   */
  destination?: '`any`' | '`last`';

  /**
   * Sets the output format of the route geometry in the response.
   *
   * On providing `polyline` and `polyline6` as input, respective encoded geometry is
   * returned. However, when `geojson` is provided as the input value, `polyline`
   * encoded geometry is returned in the response along with a geojson details of the
   * route.
   */
  geometries?: '`polyline`' | '`polyline6`' | '`geojson`';

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
   * Please use the Directions Flexible version if you want to use custom truck
   * dimensions.
   *
   * Note: Only the "car" profile is enabled by default. Please note that customized
   * profiles (including "truck") might not be available for all regions. Please
   * contact your [NextBillion.ai](http://NextBillion.ai) account manager, sales
   * representative or reach out at
   * [support@nextbillion.ai](mailto:support@nextbillion.ai) in case you need
   * additional profiles.
   */
  mode?: '`car`' | '`truck`';

  /**
   * Indicates whether the returned route is a roundtrip.
   */
  roundtrip?: boolean;

  /**
   * The coordinate at which to start the returned route. If this is not configured,
   * the return route’s destination will be the first coordinate.
   */
  source?: '`any`' | '`first`';

  /**
   * Indicates whether the return geometry should be computed or not.
   */
  with_geometry?: boolean;
}

export interface OptimizationReOptimizeParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the unique request ID that needs to be re-optimized.
   */
  existing_request_id: string;

  /**
   * Body param: This section gathers information on modifications to the number of
   * jobs or their individual requirements for re-optimization. Any job from the
   * original solution not specified here will be re-planned without alteration
   * during the re-optimization process.
   */
  job_changes?: OptimizationReOptimizeParams.JobChanges;

  /**
   * Body param: Provide the list of locations to be used during re-optimization
   * process. Please note that
   *
   * - Providing the location input overwrites the list of locations used in the
   *   original request.
   * - The location_indexes associated with all tasks and vehicles (both from the
   *   original and new re-optimization input requests) will follow the updated list
   *   of locations.
   *
   * As a best practice:
   *
   * 1.  Don't provide the `locations` input when re-optimizing, if the original set
   *     contains all the required location coordinates.
   * 2.  If any new location coordinates are required for re-optimization, copy the
   *     full, original location list and update it in the following manner before
   *     adding it to the re-optimization input:
   *
   *     1.  Ensure to not update the indexes of locations which just need to be
   *         "modified".
   *     2.  Add new location coordinates towards the end of the list.
   */
  locations?: Array<string>;

  /**
   * Body param: This section gathers information on modifications to the number of
   * shipments or their individual requirements for re-optimization. Any shipment
   * from the original solution not specified here will be re-planned without
   * alteration during the re-optimization process.
   */
  shipment_changes?: OptimizationReOptimizeParams.ShipmentChanges;

  /**
   * Body param: This section gathers information on modifications to the number of
   * vehicles or individual vehicle configurations for re-optimizing an existing
   * solution. Any vehicle from the original solution not specified here will be
   * reused without alteration during the re-optimization process.
   */
  vehicle_changes?: OptimizationReOptimizeParams.VehicleChanges;
}

export namespace OptimizationReOptimizeParams {
  /**
   * This section gathers information on modifications to the number of jobs or their
   * individual requirements for re-optimization. Any job from the original solution
   * not specified here will be re-planned without alteration during the
   * re-optimization process.
   */
  export interface JobChanges {
    /**
     * An array of objects to collect the details of the new jobs to be added during
     * re-optimization. Each object represents one job. Please make sure the IDs
     * provided for new jobs are unique with respect to the IDs of the jobs in the
     * original request.
     */
    add?: Array<V2API.Job>;

    /**
     * An array of objects to collect the modified details of existing jobs used in the
     * original request. Each object represents one job. Please make sure all the job
     * IDs provided here are same as the ones in the original request.
     */
    modify?: Array<V2API.Job>;

    /**
     * An array of job IDs to be removed when during re-optimization. All job IDs
     * provided must have been part of the original request.
     */
    remove?: Array<string>;
  }

  /**
   * This section gathers information on modifications to the number of shipments or
   * their individual requirements for re-optimization. Any shipment from the
   * original solution not specified here will be re-planned without alteration
   * during the re-optimization process.
   */
  export interface ShipmentChanges {
    /**
     * An array of objects to collect the details of the new shipments to be added
     * during re-optimization. Each object represents one shipment. Please make sure
     * the IDs provided for new shipments are unique with respect to the IDs of the
     * shipments in the original request.
     */
    add?: Array<V2API.Shipment>;

    /**
     * An array of objects to collect the modified details of existing shipments used
     * in the original request. Each object represents one shipment. Please make sure
     * all the shipment IDs provided here are same as the ones in the original request.
     */
    modify?: Array<V2API.Shipment>;

    /**
     * An array of shipment IDs to be removed when during re-optimization. All shipment
     * IDs provided must have been part of the original request.
     */
    remove?: Array<string>;
  }

  /**
   * This section gathers information on modifications to the number of vehicles or
   * individual vehicle configurations for re-optimizing an existing solution. Any
   * vehicle from the original solution not specified here will be reused without
   * alteration during the re-optimization process.
   */
  export interface VehicleChanges {
    /**
     * An array of objects to collect the details of the new vehicles to be added for
     * re-optimization. Each object represents one vehicle. Please make sure the IDs
     * provided for new vehicles are unique with respect to the IDs of the vehicles in
     * the original request.
     */
    add?: Array<DriverAssignmentAPI.Vehicle>;

    modify?: DriverAssignmentAPI.Vehicle;

    /**
     * An array of vehicle IDs to be removed when during re-optimization. All vehicle
     * IDs provided must have been part of the original request.
     */
    remove?: Array<string>;
  }
}

Optimization.DriverAssignment = DriverAssignment;
Optimization.V2 = V2;

export declare namespace Optimization {
  export {
    type PostResponse as PostResponse,
    type OptimizationComputeResponse as OptimizationComputeResponse,
    type OptimizationComputeParams as OptimizationComputeParams,
    type OptimizationReOptimizeParams as OptimizationReOptimizeParams,
  };

  export {
    DriverAssignment as DriverAssignment,
    type DriverAssignmentAPILocation as Location,
    type Vehicle as Vehicle,
    type DriverAssignmentAssignResponse as DriverAssignmentAssignResponse,
    type DriverAssignmentAssignParams as DriverAssignmentAssignParams,
  };

  export {
    V2 as V2,
    type Job as Job,
    type Shipment as Shipment,
    type V2RetrieveResultResponse as V2RetrieveResultResponse,
    type V2RetrieveResultParams as V2RetrieveResultParams,
    type V2SubmitParams as V2SubmitParams,
  };
}
