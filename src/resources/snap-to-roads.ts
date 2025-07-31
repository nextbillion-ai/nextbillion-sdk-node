// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SnapToRoads extends APIResource {
  /**
   * Nextbillion.ai Snap To Roads API takes a series of locations along a route, and
   * returns the new locations on this route that are snapped to the best-matched
   * roads where the trip took place. You can set various parameters, such as
   * timestamps or radius, to optimize the result.
   */
  snap(query: SnapToRoadSnapParams, options?: RequestOptions): APIPromise<SnapToRoadSnapResponse> {
    return this._client.get('/snapToRoads/json', { query, ...options });
  }
}

/**
 * Response Body
 */
export interface SnapToRoadSnapResponse {
  /**
   * The total distance of the snapped path in meters.
   */
  distance?: number;

  /**
   * A GeoJSON object with details of the snapped path. This object is returned when
   * the geometry field is set to geojson in the input request, otherwise it is not
   * present in the response. The contents of this object follow the
   * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
   */
  geojson?: SnapToRoadSnapResponse.Geojson;

  /**
   * An array of strings containing the encoded geometries of snapped paths in
   * polyline or polyline6 format.
   */
  geometry?: Array<string>;

  /**
   * Displays the error message in case of a failed request or operation. Please note
   * that this parameter is not returned in the response in case of a successful
   * request.
   */
  msg?: string;

  /**
   * An object containing the maximum speed information for each road segment present
   * in the route.
   */
  road_info?: SnapToRoadSnapResponse.RoadInfo;

  /**
   * An array of objects. Each object provides the details of a path coordinate point
   * snapped to the nearest road.
   */
  snappedPoints?: Array<SnapToRoadSnapResponse.SnappedPoint>;

  /**
   * A string indicating the state of the response. On normal responses, the value
   * will be Ok. Indicative HTTP error codes are returned for different errors. See
   * the [API Errors Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace SnapToRoadSnapResponse {
  /**
   * A GeoJSON object with details of the snapped path. This object is returned when
   * the geometry field is set to geojson in the input request, otherwise it is not
   * present in the response. The contents of this object follow the
   * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
   */
  export interface Geojson {
    /**
     * An object with details of the geoJSON geometry of the snapped path.
     */
    geometry?: Geojson.Geometry;

    /**
     * Properties associated with the geoJSON shape of the snapped path.
     */
    properties?: string;

    /**
     * Type of the GeoJSON object.
     */
    type?: string;
  }

  export namespace Geojson {
    /**
     * An object with details of the geoJSON geometry of the snapped path.
     */
    export interface Geometry {
      /**
       * An array of coordinates in the [longitude, latitude] format, representing the
       * snapped path geometry.
       */
      coordinates?: Array<number>;

      /**
       * Type of the geoJSON geometry
       */
      type?: string;
    }
  }

  /**
   * An object containing the maximum speed information for each road segment present
   * in the route.
   */
  export interface RoadInfo {
    /**
     * An array of objects containing maximum speed, in kilometers per hour, for each
     * segment of the route. Each object represents one road segment.
     */
    max_speed?: Array<RoadInfo.MaxSpeed>;
  }

  export namespace RoadInfo {
    export interface MaxSpeed {
      /**
       * length refers to a sequence of 'n' consecutive vertices in the route geometry
       * starting from the offset, forming a continuous section of route where the
       * maximum speed is the same and is indicated in value.
       */
      length?: number;

      /**
       * offset is the index value of the vertex of route geometry, which is the starting
       * point of the segment.
       */
      offset?: number;

      /**
       * value denotes the maximum speed of this segment, in kilometers per hour.
       *
       * - A value of "-1" indicates that the speed is unlimited for this road segment.
       * - A value of "0" indicates that there is no information about the maximum speed
       *   for this road segment.
       */
      value?: number;
    }
  }

  export interface SnappedPoint {
    /**
     * The bearing, calculated as the angle from true north in clockwise direction, of
     * the route leading to the next snapped point from the current snapped_point, in
     * radians. In case of the last snapped_point of the route, the bearing indicates
     * the direction of the route to the previous snapped_location.
     */
    bearing: number;

    /**
     * The distance of the snapped point from the original input coordinate in meters.
     */
    distance: number;

    /**
     * The latitude and longitude coordinates of the snapped point.
     */
    location: SnappedPoint.Location;

    /**
     * The name of the street or road that the input coordinate snapped to.
     */
    name: string;

    /**
     * The index of the input path coordinate point to which this snapped point
     * corresponds to.
     */
    originalIndex: number;
  }

  export namespace SnappedPoint {
    /**
     * The latitude and longitude coordinates of the snapped point.
     */
    export interface Location {
      /**
       * Latitude of the snapped point.
       */
      latitude: number;

      /**
       * Longitude of the snapped point.
       */
      longitude: number;
    }
  }
}

export interface SnapToRoadSnapParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Pipe-separated list of coordinate points along a path which would be snapped to
   * a road.
   */
  path: string;

  /**
   * A semicolon-separated list indicating the side of the road from which to
   * approach the locations on the snapped route. When set to "unrestricted" a route
   * can arrive at the snapped location from either side of the road and when set to
   * "curb" the route will arrive at the snapped location on the driving side of the
   * region. Please note the number of values provided must be equal to the number of
   * coordinate points provided in the "path" parameter. However, you can skip a
   * coordinate and show its position in the list with the ";" separator.
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
   * Sets the output format of the route geometry in the response. Only the
   * "polyline" or "polyline6" encoded "geometry" of the snapped path is returned in
   * the response depending on the value provided in the input. When "geojson" is
   * selected as the input value, "polyline6" encoded geometry of the snapped path is
   * returned along with a "geojson" object.
   */
  geometry?: 'polyline' | 'polyline6' | 'geojson';

  /**
   * Set which driving mode the service should use to determine a route. For example,
   * if you use "car", the API will return a route that a car can take. Using "truck"
   * will return a route a truck can use, taking into account appropriate truck
   * routing restrictions.
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
   * Include this parameter in the request to return segment-wise speed information
   * of the route returned in the response.
   *
   * Please note that returning speed information is a function of "road_info"
   * parameter, which is effective only when "option=flexible". However, the
   * resultant route might not contain all the locations provided in "path" input.
   */
  option?: 'flexible';

  /**
   * Pipe separated radiuses, in meters (m), up to which a coordinate point can be
   * snapped. Please note, if no valid road is available within the specified radius,
   * the API would snap the points to nearest, most viable road. When using this
   * parameter, it is recommended to specify as many radius values as the number of
   * points in "path" parameter. If the same number of "radiuses" are not provided,
   * the API will use the default radius value of 25 meters for all locations.
   */
  radiuses?: string;

  /**
   * Use this parameter to receive segment-wise maximum speed information of the
   * route in the response. "max_speed" is the only allowed value.
   */
  road_info?: 'max_speed';

  /**
   * Pipe-separated UNIX epoch timestamp in seconds for each location. If used, the
   * number of timestamps must be equal to the number of coordinate points in the
   * "path" parameter. The "timestamps" must increase monotonically starting from the
   * first timestamp. This means that each subsequent timestamp should either be more
   * than or equal to the preceding one.
   */
  timestamps?: string;

  /**
   * Enable it to ignore locations outside the service boundary. When "true", the
   * service would ignore "path" coordinates points falling outside the accessible
   * area, which otherwise would cause an error when this parameter is "false".
   */
  tolerate_outlier?: boolean;
}

export declare namespace SnapToRoads {
  export {
    type SnapToRoadSnapResponse as SnapToRoadSnapResponse,
    type SnapToRoadSnapParams as SnapToRoadSnapParams,
  };
}
