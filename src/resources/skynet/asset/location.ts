// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LocationAPI from './location';
import * as MonitorAPI from '../monitor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Location extends APIResource {
  /**
   * Track the last location of an asset
   */
  retrieveLast(
    id: string,
    query: LocationRetrieveLastParams,
    options?: RequestOptions,
  ): APIPromise<LocationRetrieveLastResponse> {
    return this._client.get(path`/skynet/asset/${id}/location/last`, { query, ...options });
  }

  /**
   * Track locations of an asset
   */
  retrieveList(
    id: string,
    query: LocationRetrieveListParams,
    options?: RequestOptions,
  ): APIPromise<LocationRetrieveListResponse> {
    return this._client.get(path`/skynet/asset/${id}/location/list`, { query, ...options });
  }
}

/**
 * An object with details of the tracked location. Please note that if there are no
 * tracking records for an asset, no location data will be returned.
 */
export interface TrackLocation {
  /**
   * If available, this property returns the accuracy of the GPS information received
   * at the tracked location. It is represented as an estimated horizontal accuracy
   * radius, in meters, at the 68th percentile confidence level.
   */
  accuracy?: number;

  /**
   * If available in the GPS information, this property returns the altitude of the
   * `asset` at the tracked location. It is represented as height, in meters, above
   * the WGS84 reference ellipsoid.
   */
  altitude?: number;

  /**
   * Returns the battery level of the GPS device, as a percentage, when the location
   * was tracked. It has a minimum value of 0 and a maximum value of 100.
   */
  battery_level?: number;

  /**
   * If available in the GPS information, this property returns the heading of the
   * `asset` calculated from true north in clockwise direction at the tracked
   * location. Please note that the bearing is not affected by the device
   * orientation.
   *
   * The bearing will always be in the range of [0, 360).
   */
  bearing?: number;

  /**
   * An object with the coordinates of the last tracked location.
   */
  location?: TrackLocation.Location;

  /**
   * Specifies the custom data about the location that was added when the location
   * was uploaded.
   */
  meta_data?: unknown;

  /**
   * If available in the GPS information, this property returns the speed of the
   * `asset`, in meters per second, at the tracked location.
   */
  speed?: number;

  /**
   * A UNIX epoch timestamp in milliseconds, representing the time at which the
   * location was tracked.
   */
  timestamp?: number;

  /**
   * Internal parameter for tracking mode.
   */
  tracking_mode?: string;
}

export namespace TrackLocation {
  /**
   * An object with the coordinates of the last tracked location.
   */
  export interface Location {
    /**
     * Latitude of the tracked location of the `asset`.
     */
    lat?: number;

    /**
     * Longitude of the tracked location of the `asset`.
     */
    lon?: number;
  }
}

export interface LocationRetrieveLastResponse {
  /**
   * An object containing the information about the last tracked location of the
   * requested `asset`.
   */
  data?: LocationRetrieveLastResponse.Data;

  /**
   * Displays the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  message?: string;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace LocationRetrieveLastResponse {
  /**
   * An object containing the information about the last tracked location of the
   * requested `asset`.
   */
  export interface Data {
    /**
     * An object with details of the tracked location. Please note that if there are no
     * tracking records for an asset, no location data will be returned.
     */
    location?: LocationAPI.TrackLocation;
  }
}

export interface LocationRetrieveListResponse {
  data?: LocationRetrieveListResponse.Data;

  /**
   * Displays the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  message?: string;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace LocationRetrieveListResponse {
  export interface Data {
    /**
     * Distance of the path, in meters, formed by connecting all tracked locations
     * returned.
     *
     * Please note that `distance` is returned only when the `mapmatch` property of
     * `correction` parameter is set to 1.
     */
    distance?: number;

    /**
     * An object with geoJSON details of the route. It is returned only when the
     * `mapmatch` property of the `correction` parameter is set to 1 and
     * `geometry_type` is `geojson, otherwise it is not present in the response. The
     * contents of this object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    geojson?: Data.Geojson;

    /**
     * Geometry of tracked locations in the requested format. It is returned only if
     * the `mapmatch` property of the ‘correction’ parameter is set to 1.
     */
    geometry?: Array<string>;

    /**
     * An array of objects with details of the tracked locations of the `asset`. Each
     * object represents one tracked location.
     */
    list?: Array<LocationAPI.TrackLocation>;

    /**
     * An object with pagination details of the search results. Use this object to
     * implement pagination in your application.
     */
    page?: MonitorAPI.Pagination;

    /**
     * An array of objects with details about the snapped points for each of the
     * tracked locations returned for the `asset`.
     *
     * Please note that this property is returned only when the `mapmatch` property of
     * `correction` parameter is set to 1.
     */
    snapped_points?: Array<Data.SnappedPoint>;
  }

  export namespace Data {
    /**
     * An object with geoJSON details of the route. It is returned only when the
     * `mapmatch` property of the `correction` parameter is set to 1 and
     * `geometry_type` is `geojson, otherwise it is not present in the response. The
     * contents of this object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    export interface Geojson {
      /**
       * An object with details of the geoJSON geometry of the route.
       */
      geometry?: Geojson.Geometry;

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

    export interface SnappedPoint {
      /**
       * The bearing angle of the snapped point from the original tracked location, in
       * radians. It indicates the direction of the snapped point.
       */
      bearing?: string;

      /**
       * The distance of the snapped point from the original tracked location, in meters.
       */
      distance?: number;

      /**
       * The latitude and longitude coordinates of the snapped point.
       */
      location?: SnappedPoint.Location;

      /**
       * The name of the street or road of the snapped point.
       */
      name?: string;

      /**
       * The index of the tracked location to which this snapped point corresponds to.
       */
      originalIndex?: string;
    }

    export namespace SnappedPoint {
      /**
       * The latitude and longitude coordinates of the snapped point.
       */
      export interface Location {
        /**
         * Latitude of the snapped point.
         */
        lat?: number;

        /**
         * Longitude of the snapped point.
         */
        lon?: number;
      }
    }
  }
}

export interface LocationRetrieveLastParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * the cluster of the region you want to use
   */
  cluster?: 'america';
}

export interface LocationRetrieveListParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * the cluster of the region you want to use
   */
  cluster?: 'america';

  /**
   * Describe the geometry characteristics through a `,` separated list of
   * properties.
   *
   * Setting `mapmatch` to 1 returns the geometry of the tracked points, snapped to
   * the nearest road.
   *
   * Setting `interpolate` to 1 smoothens the snapped geometry by adding more points,
   * as needed. Please note, `mapmatch` should be set to 1 for `interpolate` to be
   * effective.
   *
   * `mode` is used to set the transport mode for which the snapped route will be
   * determined. Allowed values for `mode` are `car` and `truck`.
   */
  correction?: string;

  /**
   * Time until which the tracked locations of the `asset` need to be retrieved.
   */
  end_time?: number;

  /**
   * Set the geometry format to encode the path linking the tracked locations of the
   * `asset`.
   *
   * Please note that `geometry_type` is effective only when `mapmatch` property of
   * `correction` parameter is set to 1.
   */
  geometry_type?: '`polyline`' | '`polyline6`' | '`geojson`';

  /**
   * Denotes page number. Use this along with the `ps` parameter to implement
   * pagination for your searched results. This parameter does not have a maximum
   * limit but would return an empty response in case a higher value is provided when
   * the result-set itself is smaller.
   */
  pn?: number;

  /**
   * Denotes number of search results per page. Use this along with the `pn`
   * parameter to implement pagination for your searched results.
   */
  ps?: number;

  /**
   * Time after which the tracked locations of the `asset` need to be retrieved.
   */
  start_time?: number;
}

export declare namespace Location {
  export {
    type TrackLocation as TrackLocation,
    type LocationRetrieveLastResponse as LocationRetrieveLastResponse,
    type LocationRetrieveListResponse as LocationRetrieveListResponse,
    type LocationRetrieveLastParams as LocationRetrieveLastParams,
    type LocationRetrieveListParams as LocationRetrieveListParams,
  };
}
