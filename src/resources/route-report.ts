// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class RouteReport extends APIResource {
  /**
   * Route Report
   */
  create(params: RouteReportCreateParams, options?: RequestOptions): APIPromise<RouteReportCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/route_report', { query: { key }, body, ...options });
  }
}

export interface RouteReportCreateResponse {
  /**
   * An array of objects returning encoded geometry of the routes. Each object
   * represents an individual route in the input.
   */
  geometry?: Array<string>;

  /**
   * Returns the details of route segments in each state or country that the route
   * passes through. Each object represents an individual route in the input request.
   */
  mileage?: Array<RouteReportCreateResponse.Mileage>;

  /**
   * Displays the error message in case of a failed request or operation. Please note
   * that this parameter is not returned in the response in case of a successful
   * request.
   */
  msg?: string;

  /**
   * An array of objects returning a summary of the route with information about
   * tolls, bridges, tunnels, segments, maximum speeds and more. Each array
   * represents an individual route in the input request.
   */
  road_summary?: Array<RouteReportCreateResponse.RoadSummary>;

  /**
   * A string indicating the state of the response. On normal responses, the value
   * will be `Ok`. Indicative HTTP error codes are returned for different errors. See
   * the
   * [**API Errors Codes**](https://app.reapi.com/ws/hmx8aL45B5jjrJa8/p/vNNilNksLVz675pI/s/ealJmVGjTQv4x5Wi/edit/path/VYzo7gOlRsQQZo0U#api-error-codes)
   * section below for more information.
   */
  status?: string;
}

export namespace RouteReportCreateResponse {
  export interface Mileage {
    /**
     * Returns the details of road segments that the route covers in different states
     * and countries.
     */
    segment?: Mileage.Segment;

    /**
     * Returns a summary of distances that the route covers in different states and
     * countries.
     */
    summary?: Mileage.Summary;
  }

  export namespace Mileage {
    /**
     * Returns the details of road segments that the route covers in different states
     * and countries.
     */
    export interface Segment {
      /**
       * An array of objects containing country-wise break up of the route segments. Each
       * object returns the segment details of a different country.
       */
      country?: Array<Segment.Country>;

      /**
       * An array of objects containing state-wise break up of the route segments. Each
       * object returns the segment details of a different state.
       */
      state?: Array<Segment.State>;
    }

    export namespace Segment {
      export interface Country {
        /**
         * Represents the total distance of this segment, in meters.
         */
        distance?: number;

        /**
         * Represents a sequence of ‘n’ consecutive vertices in the route geometry starting
         * from the `offset`, forming a continuous section of route with a distance
         * indicated in `distance`field.
         */
        length?: number;

        /**
         * Represents the index value of the vertex of current segment's starting point in
         * route geometry. First vertex in the route geometry has an offset of 0.
         */
        offset?: number;

        /**
         * Returns the name of the country in which the segment lies.
         */
        value?: string;
      }

      export interface State {
        /**
         * Represents the real distance of this segment, in meters.
         */
        distance?: number;

        /**
         * Represents a sequence of ‘n’ consecutive vertices in the route geometry starting
         * from the `offset`, forming a continuous section of route with a distance
         * indicated in `distance`field.
         */
        length?: number;

        /**
         * Represents the index value of the vertex of current segment's starting point in
         * route geometry. First vertex in the route geometry has an offset of 0.
         */
        offset?: number;

        /**
         * Returns the name of the state in which the segment lies.
         */
        value?: string;
      }
    }

    /**
     * Returns a summary of distances that the route covers in different states and
     * countries.
     */
    export interface Summary {
      /**
       * A break up of country-wise distances that the route covers in `key:value` pair
       * format.
       */
      country?: unknown;

      /**
       * A break up of state-wise distances that the route covers specified in
       * `key:value` pair format.
       */
      state?: unknown;
    }
  }

  export interface RoadSummary {
    /**
     * Returns the segment-wise road class and max speed information of the route.
     */
    segment?: RoadSummary.Segment;

    /**
     * Returns an overview of the route with information about trip distance, duration
     * and road class details among others.
     */
    summary?: RoadSummary.Summary;
  }

  export namespace RoadSummary {
    /**
     * Returns the segment-wise road class and max speed information of the route.
     */
    export interface Segment {
      /**
       * An array of objects returning the maximum speed of different segments that the
       * route goes through.
       */
      max_speed?: Array<Segment.MaxSpeed>;

      /**
       * An array of objects returning the details of road segments belonging to
       * different road classes that the route goes through. Each object refers to a
       * unique road class.
       */
      road_class?: Array<Segment.RoadClass>;
    }

    export namespace Segment {
      export interface MaxSpeed {
        /**
         * Returns the total distance of this segment, in meters.
         */
        distance?: number;

        /**
         * Represents a sequence of ‘n’ consecutive vertices in the route geometry starting
         * from the `offset`, forming a continuous section of route where the maximum speed
         * is same and is indicated in `value`.
         */
        length?: number;

        /**
         * Represents the index value of the vertex of current segment's starting point in
         * route geometry. First vertex in the route geometry has an offset of 0.
         */
        offset?: number;

        /**
         * Denotes the maximum speed of this segment, in kilometers per hour. - A value of
         * “-1” indicates that the speed is unlimited for this road segment. - A value of
         * “0” indicates that there is no information about the maximum speed for this road
         * segment.
         */
        value?: number;
      }

      export interface RoadClass {
        /**
         * Returns the total distance of this segment, in meters.
         */
        distance?: number;

        /**
         * Represents a sequence of ‘n’ consecutive vertices in the route geometry starting
         * from the `offset`, forming a continuous section of route with a distance
         * indicated in `distance`field.
         */
        length?: number;

        /**
         * Represents the index value of the vertex of current segment's starting point in
         * route geometry. First vertex in the route geometry has an offset of 0.
         */
        offset?: number;

        /**
         * Returns the road class name to which the segment belongs.
         */
        value?: string;
      }
    }

    /**
     * Returns an overview of the route with information about trip distance, duration
     * and road class details among others.
     */
    export interface Summary {
      /**
       * Returns the total distance of the route , in meters.
       */
      distance?: number;

      /**
       * Returns the total duration of the route, in seconds.
       */
      duration?: number;

      /**
       * A boolean value indicating if there are any bridges in the given route.
       */
      has_bridge?: boolean;

      /**
       * A boolean value indicating if there are any roundabouts in the given route.
       */
      has_roundabout?: boolean;

      /**
       * A boolean value indicating if there are any tolls in the given route.
       */
      has_toll?: boolean;

      /**
       * A boolean value indicating if there are any tunnels in the given route.
       */
      has_tunnel?: boolean;

      /**
       * An object with details about the different types of road classes that the route
       * goes through. Distance traversed on a given road class is also returned. The
       * contents of this object follow the `key:value` pair format.
       */
      road_class?: unknown;

      /**
       * Returns the total distance travelled on toll roads. This field is present in the
       * response only when the `has_toll` property is true.
       */
      toll_distance?: number;
    }
  }
}

export interface RouteReportCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Takes a route geometry as input and returns the route details.
   * Accepts `polyline` and `polyline6` encoded geometry as input.
   *
   * **Note**: Route geometries generated from sources other than
   * [NextBillion.ai](http://NextBillion.ai) services, are not supported in this
   * version.
   */
  original_shape: string;

  /**
   * Body param: Specify the encoding type of route geometry provided in
   * `original_shape` input. Please note that an error is returned when this
   * parameter is not specified while an input is added to `original_shape`
   * parameter.
   */
  original_shape_type: '`polyline`' | '`polyline6`';
}

export declare namespace RouteReport {
  export {
    type RouteReportCreateResponse as RouteReportCreateResponse,
    type RouteReportCreateParams as RouteReportCreateParams,
  };
}
