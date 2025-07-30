// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConsoleAPI from './console';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Console extends APIResource {
  /**
   * preview geofence geojson
   */
  preview(body: ConsolePreviewParams, options?: RequestOptions): APIPromise<ConsolePreviewResponse> {
    return this._client.post('/geofence/console/preview', { body, ...options });
  }

  /**
   * Console Geofence Search API
   */
  search(query: ConsoleSearchParams, options?: RequestOptions): APIPromise<ConsoleSearchResponse> {
    return this._client.get('/geofence/console/search', { query, ...options });
  }
}

/**
 * An object with geoJSON details of the geofence. The contents of this object
 * follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
 */
export interface PolygonGeojson {
  /**
   * An array of coordinates in the [longitude, latitude] format, representing the
   * geofence boundary.
   */
  coordinates?: Array<Array<number>>;

  /**
   * Type of the geoJSON geometry. Will always be Polygon.
   */
  type?: string;
}

export interface ConsolePreviewResponse {
  data?: ConsolePreviewResponse.Data;

  message?: string;
}

export namespace ConsolePreviewResponse {
  export interface Data {
    /**
     * An object with geoJSON details of the geofence. The contents of this object
     * follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    geojson?: ConsoleAPI.PolygonGeojson;
  }
}

export interface ConsoleSearchResponse {
  data: ConsoleSearchResponse.Data;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be Ok. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status: string;
}

export namespace ConsoleSearchResponse {
  export interface Data {
    result: Array<Data.Result>;
  }

  export namespace Data {
    export interface Result {
      /**
       * ID of goefence. Could be empty string.
       */
      id: string;

      /**
       * Name of goefence. Could be empty string.
       */
      name: string;
    }
  }
}

export interface ConsolePreviewParams {
  /**
   * Specify the type of the geofence that is being created.
   */
  type: 'circle' | 'polygon' | 'isochrone';

  /**
   * Provide the details to create a circular geofence. Please note that this object
   * is mandatory when type is circle. When the type is not circle, the properties of
   * this object will be ignored while creating the geofence.
   */
  circle?: ConsolePreviewParams.Circle;

  /**
   * Set an unique ID for the new geofence. If not provided, an ID will be
   * automatically generated in UUID format. A valid custom*id can contain letters,
   * numbers, "-", & "*" only.
   *
   * Please note that the ID of a geofence can not be changed once it is created.
   */
  custom_id?: string;

  /**
   * Provide the details to create an isochrone based geofence. Use this object when
   * type is isochrone. When the type is not isochrone, the properties of this object
   * will be ignored while creating the geofence.
   */
  isochrone?: ConsolePreviewParams.Isochrone;

  /**
   * Metadata of the geofence. Use this field to define custom attributes that
   * provide more context and information about the geofence being created like
   * country, group ID etc.
   *
   * The data being added should be in valid JSON object format (i.e. key and value
   * pairs). Max size allowed for the object is 65kb.
   */
  meta_data?: unknown;

  /**
   * Name of the geofence. Use this field to assign a meaningful, custom name to the
   * geofence being created.
   */
  name?: string;

  /**
   * Provide the details to create a custom polygon type of geofence. Please note
   * that this object is mandatory when type is polygon. When the type is not
   * polygon, the properties of this object will be ignored while creating the
   * geofence.
   *
   * Self-intersecting polygons or polygons containing other polygons are invalid and
   * will be removed while processing the request.
   *
   * Area of the polygon should be less than 2000 km<sup>2</sup>.
   */
  polygon?: ConsolePreviewParams.Polygon;

  /**
   * An array of strings to associate multiple tags to the geofence. tags can be used
   * to search or filter geofences (using Get Geofence List method).
   *
   * Create valid tags using a string consisting of alphanumeric characters (A-Z,
   * a-z, 0-9) along with the underscore ('\_') and hyphen ('-') symbols.
   */
  tags?: Array<string>;
}

export namespace ConsolePreviewParams {
  /**
   * Provide the details to create a circular geofence. Please note that this object
   * is mandatory when type is circle. When the type is not circle, the properties of
   * this object will be ignored while creating the geofence.
   */
  export interface Circle {
    /**
     * Coordinate of the location which will act as the center of a circular geofence.
     */
    center: Circle.Center;

    /**
     * Radius of the circular geofence, in meters. Maximum value allowed is 50000
     * meters.
     */
    radius: number;
  }

  export namespace Circle {
    /**
     * Coordinate of the location which will act as the center of a circular geofence.
     */
    export interface Center {
      /**
       * Latitude of the center location.
       */
      lat: number;

      /**
       * Longitude of the center location.
       */
      lon: number;
    }
  }

  /**
   * Provide the details to create an isochrone based geofence. Use this object when
   * type is isochrone. When the type is not isochrone, the properties of this object
   * will be ignored while creating the geofence.
   */
  export interface Isochrone {
    /**
     * Coordinates of the location, in [latitude,longitude] format, which would act as
     * the starting point for identifying the isochrone polygon or the boundary of
     * reachable area. This parameter is mandatory when type is isochrone.
     */
    coordinates: string;

    /**
     * The distance, in meters, for which an isochrone polygon needs to be determined.
     * When provided, the API would create a geofence representing the area that can be
     * reached after driving the given number of meters starting from the point
     * specified in coordinates.
     *
     * The maximum distance that can be specified is 60000 meters (60km).
     *
     * At least one of contours_meter or contours_minute is mandatory when type is
     * isochrone.
     */
    contours_meter?: number;

    /**
     * The duration, in minutes, for which an isochrone polygon needs to be determined.
     * When provided, the API would create a geofence representing the area that can be
     * reached after driving for the given number of minutes starting from the point
     * specified in coordinates.
     *
     * The maximum duration that can be specified is 40 minutes.
     *
     * At least one of contours_meter or contours_minute is mandatory when type is
     * isochrone.
     */
    contours_minute?: number;

    /**
     * A floating point value from 0.0 to 1.0 that can be used to remove smaller
     * contours. A value of 1.0 will only return the largest contour for a given value.
     * A value of 0.5 drops any contours that are less than half the area of the
     * largest contour in the set of contours for that same value.
     */
    denoise?: number;

    /**
     * A UNIX epoch timestamp in seconds format that can be used to set the departure
     * time. The isochrone boundary will be determined based on the typical traffic
     * conditions at the given time. If no input is provided for this parameter then
     * the traffic conditions at the time of making the request are considered
     */
    departure_time?: number;

    /**
     * Set which driving mode the service should use to determine the isochrone line.
     *
     * For example, if you use car, the API will return an isochrone polygon that a car
     * can cover within the specified time or after driving the specified distance.
     * Using truck will return an isochrone that a truck can reach after taking into
     * account appropriate truck routing restrictions.
     */
    mode?: 'car' | 'truck';
  }

  /**
   * Provide the details to create a custom polygon type of geofence. Please note
   * that this object is mandatory when type is polygon. When the type is not
   * polygon, the properties of this object will be ignored while creating the
   * geofence.
   *
   * Self-intersecting polygons or polygons containing other polygons are invalid and
   * will be removed while processing the request.
   *
   * Area of the polygon should be less than 2000 km<sup>2</sup>.
   */
  export interface Polygon {
    /**
     * An object to collect geoJSON details of the geofence. The contents of this
     * object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    geojson: Polygon.Geojson;
  }

  export namespace Polygon {
    /**
     * An object to collect geoJSON details of the geofence. The contents of this
     * object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    export interface Geojson {
      /**
       * An array of coordinates in the [longitude, latitude] format, representing the
       * geofence boundary.
       */
      coordinates: Array<Array<number>>;

      /**
       * Type of the geoJSON geometry. Should always be Polygon.
       */
      type: string;
    }
  }
}

export interface ConsoleSearchParams {
  /**
   * string to be searched, will used to match name or id of geofence.
   */
  query: string;
}

export declare namespace Console {
  export {
    type PolygonGeojson as PolygonGeojson,
    type ConsolePreviewResponse as ConsolePreviewResponse,
    type ConsoleSearchResponse as ConsoleSearchResponse,
    type ConsolePreviewParams as ConsolePreviewParams,
    type ConsoleSearchParams as ConsoleSearchParams,
  };
}
