// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GeofenceAPI from './geofence';
import * as BatchAPI from './batch';
import {
  Batch,
  BatchCreateParams,
  BatchCreateResponse,
  BatchDeleteParams,
  BatchQueryParams,
  BatchQueryResponse,
} from './batch';
import * as ConsoleAPI from './console';
import {
  Console,
  ConsolePreviewParams,
  ConsolePreviewResponse,
  ConsoleSearchParams,
  ConsoleSearchResponse,
  PolygonGeojson,
} from './console';
import * as MonitorAPI from '../skynet/monitor';
import * as AssetAPI from '../skynet/asset/asset';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GeofenceResource extends APIResource {
  console: ConsoleAPI.Console = new ConsoleAPI.Console(this._client);
  batch: BatchAPI.Batch = new BatchAPI.Batch(this._client);

  /**
   * Create a geofence
   */
  create(params: GeofenceCreateParams, options?: RequestOptions): APIPromise<GeofenceCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/geofence', { query: { key }, body, ...options });
  }

  /**
   * Get a Geofence
   */
  retrieve(
    id: string,
    query: GeofenceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GeofenceRetrieveResponse> {
    return this._client.get(path`/geofence/${id}`, { query, ...options });
  }

  /**
   * Update a Geofence
   */
  update(
    id: string,
    params: GeofenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssetAPI.SimpleResp> {
    const { key, ...body } = params;
    return this._client.put(path`/geofence/${id}`, { query: { key }, body, ...options });
  }

  /**
   * Get Geofence List
   */
  list(query: GeofenceListParams, options?: RequestOptions): APIPromise<GeofenceListResponse> {
    return this._client.get('/geofence/list', { query, ...options });
  }

  /**
   * Delete a Geofence
   */
  delete(
    id: string,
    params: GeofenceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AssetAPI.SimpleResp> {
    const { key } = params;
    return this._client.delete(path`/geofence/${id}`, { query: { key }, ...options });
  }

  /**
   * Geofence Contains
   */
  contains(query: GeofenceContainsParams, options?: RequestOptions): APIPromise<GeofenceContainsResponse> {
    return this._client.get('/geofence/contain', { query, ...options });
  }
}

/**
 * An object with details of the geofence.
 */
export interface Geofence {
  /**
   * ID of the geofence provided/generated at the time of creating the geofence.
   */
  id?: string;

  circle_center?: Geofence.CircleCenter;

  /**
   * When the `type` of the geofence is `circle`, this property returns the radius of
   * the geofence in meters (m).
   */
  circle_radius?: number;

  /**
   * Time at which the geofence was created, expressed as a UNIX timestamp in
   * seconds.
   */
  created_at?: number;

  /**
   * An object with geoJSON details of the geofence. The contents of this object
   * follow the [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
   */
  geojson?: ConsoleAPI.PolygonGeojson;

  /**
   * For a geofence based on isochrone contour determined using a specific driving
   * distance, this property returns the duration value, in meters.
   *
   * The value would be the same as that provided for the `contours_meter` parameter
   * at the time of creating or updating the geofence.
   */
  ic_contours_meter?: number;

  /**
   * For a geofence based on isochrone contour determined using a specific driving
   * duration, this property returns the duration value, in minutes. The value would
   * be the same as the value provided for the `contours_minute` parameter at the
   * time of creating or updating the geofence.
   */
  ic_contours_minute?: number;

  /**
   * For a geofence based on isochrone contour, this property returns the coordinates
   * of the location, in [latitude,longitude] format, which was used as the starting
   * point to identify the geofence boundary.
   *
   * The value would be the same as that provided for the `coordinates` parameter at
   * the time of creating or updating the geofence.
   */
  ic_coordinates?: string;

  /**
   * For a geofence based on isochrone contour, this property returns the denoise
   * value which would be the same as that provided for the `denoise` parameter at
   * the time of creating or updating the geofence.
   */
  ic_denoise?: number;

  /**
   * For a geofence based on isochrone contour, this property returns the departure
   * time, as a UNIX epoch timestamp in seconds, which was used to determine the
   * geofence boundary after taking into account the traffic conditions at the time.
   *
   * The value would be the same as that provided for the `departure_time` parameter
   * at the time of creating or updating the geofence.
   */
  ic_departure_time?: number;

  /**
   * For a geofence based on isochrone contour, this property returns the driving
   * mode used to determine the geofence boundary.
   *
   * The value would be the same as that provided for the `mode` parameter at the
   * time of creating or updating the geofence.
   */
  ic_mode?: number;

  /**
   * Metadata of the geofence added at the time of creating or updating it.
   */
  meta_data?: unknown;

  /**
   * Name of the geofence added at the time of creating or updating it.
   */
  name?: string;

  /**
   * An array of strings representing the `tags` associated with the geofence added
   * at the time of creating or updating it.
   */
  tags?: Array<string>;

  /**
   * Type of the geofence.
   */
  type?: '`circle`' | '`polygon`' | '`isochrone`';

  /**
   * Time at which the geofence was last updated, expressed as a UNIX timestamp in
   * seconds.
   */
  updated_at?: number;
}

export namespace Geofence {
  export interface CircleCenter {
    /**
     * Latitude of the location.
     */
    lat?: number;

    /**
     * Longitude of the location.
     */
    lon?: number;
  }
}

export interface GeofenceEntityCreate {
  /**
   * Specify the type of the geofence that is being created.
   */
  type: '`circle`' | '`polygon`' | '`isochrone`';

  /**
   * Provide the details to create a circular geofence. Please note that this object
   * is mandatory when `type` is `circle`. When the `type` is not `circle`, the
   * properties of this object will be ignored while creating the geofence.
   */
  circle?: GeofenceEntityCreate.Circle;

  /**
   * Set an unique ID for the new geofence. If not provided, an ID will be
   * automatically generated in UUID format. A valid `custom_id` can contain letters,
   * numbers, "-", & "\_" only.
   *
   * Please note that the ID of a geofence can not be changed once it is created.
   */
  custom_id?: string;

  /**
   * Provide the details to create an isochrone based geofence. Use this object when
   * `type` is `isochrone`. When the `type` is not `isochrone`, the properties of
   * this object will be ignored while creating the geofence.
   */
  isochrone?: GeofenceEntityCreate.Isochrone;

  /**
   * Metadata of the geofence. Use this field to define custom attributes that
   * provide more context and information about the geofence being created like
   * country, group ID etc.
   *
   * The data being added should be in valid JSON object format (i.e. `key` and
   * `value` pairs). Max size allowed for the object is 65kb.
   */
  meta_data?: unknown;

  /**
   * Name of the geofence. Use this field to assign a meaningful, custom name to the
   * geofence being created.
   */
  name?: string;

  /**
   * Provide the details to create a custom polygon type of geofence. Please note
   * that this object is mandatory when `type` is `polygon`. When the `type` is not
   * `polygon`, the properties of this object will be ignored while creating the
   * geofence.
   *
   * Self-intersecting polygons or polygons containing other polygons are invalid and
   * will be removed while processing the request.
   *
   * Area of the polygon should be less than 2000 km<sup>2</sup>.
   */
  polygon?: GeofenceEntityCreate.Polygon;

  /**
   * An array of strings to associate multiple tags to the geofence. `tags` can be
   * used to search or filter geofences (using `Get Geofence List` method).
   *
   * Create valid `tags` using a string consisting of alphanumeric characters (A-Z,
   * a-z, 0-9) along with the underscore ('\_') and hyphen ('-') symbols.
   */
  tags?: Array<string>;
}

export namespace GeofenceEntityCreate {
  /**
   * Provide the details to create a circular geofence. Please note that this object
   * is mandatory when `type` is `circle`. When the `type` is not `circle`, the
   * properties of this object will be ignored while creating the geofence.
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
       * Latitude of the `center` location.
       */
      lat: number;

      /**
       * Longitude of the `center` location.
       */
      lon: number;
    }
  }

  /**
   * Provide the details to create an isochrone based geofence. Use this object when
   * `type` is `isochrone`. When the `type` is not `isochrone`, the properties of
   * this object will be ignored while creating the geofence.
   */
  export interface Isochrone {
    /**
     * Coordinates of the location, in [latitude,longitude] format, which would act as
     * the starting point for identifying the isochrone polygon or the boundary of
     * reachable area. This parameter is mandatory when `type` is `isochrone`.
     */
    coordinates: string;

    /**
     * The distance, in meters, for which an isochrone polygon needs to be determined.
     * When provided, the API would create a geofence representing the area that can be
     * reached after driving the given number of meters starting from the point
     * specified in `coordinates`.
     *
     * The maximum distance that can be specified is 60000 meters (60km).
     *
     * At least one of `contours_meter` or `contours_minute` is mandatory when `type`
     * is `isochrone`.
     */
    contours_meter?: number;

    /**
     * The duration, in minutes, for which an isochrone polygon needs to be determined.
     * When provided, the API would create a geofence representing the area that can be
     * reached after driving for the given number of minutes starting from the point
     * specified in `coordinates`.
     *
     * The maximum duration that can be specified is 40 minutes.
     *
     * At least one of `contours_meter` or `contours_minute` is mandatory when `type`
     * is `isochrone`.
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
     * For example, if you use `car`, the API will return an isochrone polygon that a
     * car can cover within the specified time or after driving the specified distance.
     * Using `truck` will return an isochrone that a truck can reach after taking into
     * account appropriate truck routing restrictions.
     */
    mode?: '`car`' | '`truck`';
  }

  /**
   * Provide the details to create a custom polygon type of geofence. Please note
   * that this object is mandatory when `type` is `polygon`. When the `type` is not
   * `polygon`, the properties of this object will be ignored while creating the
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
       * Type of the geoJSON geometry. Should always be `Polygon`.
       */
      type: string;
    }
  }
}

export interface GeofenceCreateResponse {
  /**
   * A data object containing the ID of the geofence created.
   */
  data?: GeofenceCreateResponse.Data;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace GeofenceCreateResponse {
  /**
   * A data object containing the ID of the geofence created.
   */
  export interface Data {
    /**
     * Unique ID of the geofence created. It will be the same as `custom_id`, if
     * provided. Else it will be an auto generated UUID. Please note this ID cannot be
     * updated.
     */
    id?: string;
  }
}

export interface GeofenceRetrieveResponse {
  data?: GeofenceRetrieveResponse.Data;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace GeofenceRetrieveResponse {
  export interface Data {
    /**
     * An object with details of the geofence.
     */
    geofence?: GeofenceAPI.Geofence;
  }
}

export interface GeofenceListResponse {
  data?: GeofenceListResponse.Data;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace GeofenceListResponse {
  export interface Data {
    list?: Array<GeofenceAPI.Geofence>;

    /**
     * An object with pagination details of the search results. Use this object to
     * implement pagination in your application.
     */
    page?: MonitorAPI.Pagination;
  }
}

export interface GeofenceContainsResponse {
  data?: GeofenceContainsResponse.Data;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace GeofenceContainsResponse {
  export interface Data {
    /**
     * An array of objects containing each of the geofences provided in the `geofences`
     * input. If `geofences` in not provided then the array will return all the
     * geofences associated with the `key`
     */
    result_list?: Array<Data.ResultList>;
  }

  export namespace Data {
    export interface ResultList {
      /**
       * An object with details of the geofence.
       */
      geofence_detail?: GeofenceAPI.Geofence;

      /**
       * ID of the geofence provided/generated at the time of creating the geofence.
       */
      geofence_id?: string;

      /**
       * An array of objects with results of the contains check for each of the
       * coordinate points in `locations` against the geofence represented by
       * `geofence_id`.
       */
      result?: Array<ResultList.Result>;
    }

    export namespace ResultList {
      export interface Result {
        /**
         * `true` when a coordinate point in `locations` is contained by this geofence.
         */
        contain?: boolean;

        /**
         * Index of the coordinate point in the input `locations`.
         */
        location_index?: number;
      }
    }
  }
}

export interface GeofenceCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the type of the geofence that is being created.
   */
  type: '`circle`' | '`polygon`' | '`isochrone`';

  /**
   * Body param: Provide the details to create a circular geofence. Please note that
   * this object is mandatory when `type` is `circle`. When the `type` is not
   * `circle`, the properties of this object will be ignored while creating the
   * geofence.
   */
  circle?: GeofenceCreateParams.Circle;

  /**
   * Body param: Set an unique ID for the new geofence. If not provided, an ID will
   * be automatically generated in UUID format. A valid `custom_id` can contain
   * letters, numbers, "-", & "\_" only.
   *
   * Please note that the ID of a geofence can not be changed once it is created.
   */
  custom_id?: string;

  /**
   * Body param: Provide the details to create an isochrone based geofence. Use this
   * object when `type` is `isochrone`. When the `type` is not `isochrone`, the
   * properties of this object will be ignored while creating the geofence.
   */
  isochrone?: GeofenceCreateParams.Isochrone;

  /**
   * Body param: Metadata of the geofence. Use this field to define custom attributes
   * that provide more context and information about the geofence being created like
   * country, group ID etc.
   *
   * The data being added should be in valid JSON object format (i.e. `key` and
   * `value` pairs). Max size allowed for the object is 65kb.
   */
  meta_data?: unknown;

  /**
   * Body param: Name of the geofence. Use this field to assign a meaningful, custom
   * name to the geofence being created.
   */
  name?: string;

  /**
   * Body param: Provide the details to create a custom polygon type of geofence.
   * Please note that this object is mandatory when `type` is `polygon`. When the
   * `type` is not `polygon`, the properties of this object will be ignored while
   * creating the geofence.
   *
   * Self-intersecting polygons or polygons containing other polygons are invalid and
   * will be removed while processing the request.
   *
   * Area of the polygon should be less than 2000 km<sup>2</sup>.
   */
  polygon?: GeofenceCreateParams.Polygon;

  /**
   * Body param: An array of strings to associate multiple tags to the geofence.
   * `tags` can be used to search or filter geofences (using `Get Geofence List`
   * method).
   *
   * Create valid `tags` using a string consisting of alphanumeric characters (A-Z,
   * a-z, 0-9) along with the underscore ('\_') and hyphen ('-') symbols.
   */
  tags?: Array<string>;
}

export namespace GeofenceCreateParams {
  /**
   * Provide the details to create a circular geofence. Please note that this object
   * is mandatory when `type` is `circle`. When the `type` is not `circle`, the
   * properties of this object will be ignored while creating the geofence.
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
       * Latitude of the `center` location.
       */
      lat: number;

      /**
       * Longitude of the `center` location.
       */
      lon: number;
    }
  }

  /**
   * Provide the details to create an isochrone based geofence. Use this object when
   * `type` is `isochrone`. When the `type` is not `isochrone`, the properties of
   * this object will be ignored while creating the geofence.
   */
  export interface Isochrone {
    /**
     * Coordinates of the location, in [latitude,longitude] format, which would act as
     * the starting point for identifying the isochrone polygon or the boundary of
     * reachable area. This parameter is mandatory when `type` is `isochrone`.
     */
    coordinates: string;

    /**
     * The distance, in meters, for which an isochrone polygon needs to be determined.
     * When provided, the API would create a geofence representing the area that can be
     * reached after driving the given number of meters starting from the point
     * specified in `coordinates`.
     *
     * The maximum distance that can be specified is 60000 meters (60km).
     *
     * At least one of `contours_meter` or `contours_minute` is mandatory when `type`
     * is `isochrone`.
     */
    contours_meter?: number;

    /**
     * The duration, in minutes, for which an isochrone polygon needs to be determined.
     * When provided, the API would create a geofence representing the area that can be
     * reached after driving for the given number of minutes starting from the point
     * specified in `coordinates`.
     *
     * The maximum duration that can be specified is 40 minutes.
     *
     * At least one of `contours_meter` or `contours_minute` is mandatory when `type`
     * is `isochrone`.
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
     * For example, if you use `car`, the API will return an isochrone polygon that a
     * car can cover within the specified time or after driving the specified distance.
     * Using `truck` will return an isochrone that a truck can reach after taking into
     * account appropriate truck routing restrictions.
     */
    mode?: '`car`' | '`truck`';
  }

  /**
   * Provide the details to create a custom polygon type of geofence. Please note
   * that this object is mandatory when `type` is `polygon`. When the `type` is not
   * `polygon`, the properties of this object will be ignored while creating the
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
       * Type of the geoJSON geometry. Should always be `Polygon`.
       */
      type: string;
    }
  }
}

export interface GeofenceRetrieveParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface GeofenceUpdateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Use this object to update details of a circular geofence. Please
   * note that this object is mandatory only when `type` is `circle`. When the `type`
   * is not `circle`, the properties of this object will be ignored while creating
   * the geofence.
   */
  circle?: GeofenceUpdateParams.Circle;

  /**
   * Body param: Use this object to update details of an isochrone based geofence.
   * Please note that this object is mandatory only when `type` is `isochrone`. When
   * the `type` is not `isochrone`, the properties of this object will be ignored
   * while creating the geofence.
   */
  isochrone?: GeofenceUpdateParams.Isochrone;

  /**
   * Body param: Updated the `meta_data` associated with a geofence. Use this field
   * to define custom attributes that provide more context and information about the
   * geofence being updated like country, group ID etc.
   *
   * The data being added should be in valid JSON object format (i.e. `key` and
   * `value` pairs). Max size allowed for the object is 65kb.
   */
  meta_data?: unknown;

  /**
   * Body param: Use this parameter to update the `name` of a geofence. Users can
   * assign meaningful custom names to their geofences.
   */
  name?: string;

  /**
   * Body param: Use this object to update details of a custom polygon geofence.
   * Please note that this object is mandatory only when `type` is `polygon`. When
   * the `type` is not `polygon`, the properties of this object will be ignored while
   * creating the geofence.
   *
   * Self-intersecting polygons or polygons containing other polygons are invalid and
   * will be removed while processing the request.
   *
   * Area of the polygon should be less than 2000 km<sup>2</sup>.
   */
  polygon?: GeofenceUpdateParams.Polygon;

  /**
   * Body param: Use this parameter to add/modify one or multiple `tags` of a
   * geofence. `tags` can be used to search or filter geofences (using
   * `Get Geofence List` method).
   *
   * Valid values for updating `tags` consist of alphanumeric characters (A-Z, a-z,
   * 0-9) along with the underscore ('\_') and hyphen ('-') symbols.
   */
  tags?: Array<string>;

  /**
   * Body param: Use this parameter to update the `type` of a geofence. Please note
   * that you will need to provide required details for creating a geofence of the
   * new `type`. Check other parameters of this method to know more.
   */
  type?: '`circle`' | '`polygon`' | '`isochrone`';
}

export namespace GeofenceUpdateParams {
  /**
   * Use this object to update details of a circular geofence. Please note that this
   * object is mandatory only when `type` is `circle`. When the `type` is not
   * `circle`, the properties of this object will be ignored while creating the
   * geofence.
   */
  export interface Circle {
    /**
     * Use this parameter to update the coordinate of the location which will act as
     * the center of a circular geofence.
     */
    center: Circle.Center;

    /**
     * Use this parameter to update the radius of the circular geofence, in meters.
     * Maximum value allowed is 50000 meters.
     */
    radius?: number;
  }

  export namespace Circle {
    /**
     * Use this parameter to update the coordinate of the location which will act as
     * the center of a circular geofence.
     */
    export interface Center {
      /**
       * Latitude of the `center` location.
       */
      lat?: number;

      /**
       * Longitude of the `center` location.
       */
      lon?: number;
    }
  }

  /**
   * Use this object to update details of an isochrone based geofence. Please note
   * that this object is mandatory only when `type` is `isochrone`. When the `type`
   * is not `isochrone`, the properties of this object will be ignored while creating
   * the geofence.
   */
  export interface Isochrone {
    /**
     * Use this parameter to update the distance, in meters, for which an isochrone
     * polygon needs to be determined. When provided, the API would create a geofence
     * representing the area that can be reached after driving the given number of
     * meters starting from the point specified in `coordinates`.
     *
     * The maximum distance that can be specified is 60000 meters (60km).
     *
     * At least one of `contours_meter` or `contours_minute` is mandatory when `type`
     * is `isochrone`.
     */
    contours_meter?: number;

    /**
     * Use this parameter to update the duration, in minutes, for which an isochrone
     * polygon needs to be determined. When provided, the API would create a geofence
     * representing the area that can be reached after driving for the given number of
     * minutes starting from the point specified in `coordinates`.
     *
     * The maximum duration that can be specified is 40 minutes.
     *
     * At least one of `contours_meter` or `contours_minute` is mandatory when `type`
     * is `isochrone`.
     */
    contours_minute?: number;

    /**
     * Use this parameter to update the coordinates of the location, in
     * [latitude,longitude] format, which would act as the starting point for
     * identifying the isochrone polygon or the boundary of reachable area.
     */
    coordinates?: string;

    /**
     * A floating point value from 0.0 to 1.0 that can be used to remove smaller
     * contours. A value of 1.0 will only return the largest contour for a given value.
     * A value of 0.5 drops any contours that are less than half the area of the
     * largest contour in the set of contours for that same value.
     *
     * Use this parameter to update the denoise value of the isochrone geofence.
     */
    denoise?: number;

    /**
     * Use this parameter to update the `departure_time`, expressed as UNIX epoch
     * timestamp in seconds. The isochrone boundary will be determined based on the
     * typical traffic conditions at the given time.
     *
     * If no input is provided for this parameter then, the traffic conditions at the
     * time of making the request are considered by default. Please note that because
     * of this behavior the geofence boundaries may change even if the `departure_time`
     * was not specifically provided at the time of updating the geofence.
     */
    departure_time?: number;

    /**
     * Use this parameter to update the driving mode that the service should use to
     * determine the isochrone line. For example, if you use `car`, the API will return
     * an isochrone polygon that a car can cover within the specified time or after
     * driving the specified distance. Using `truck` will return an isochrone that a
     * truck can reach after taking into account appropriate truck routing
     * restrictions.
     */
    mode?: string;
  }

  /**
   * Use this object to update details of a custom polygon geofence. Please note that
   * this object is mandatory only when `type` is `polygon`. When the `type` is not
   * `polygon`, the properties of this object will be ignored while creating the
   * geofence.
   *
   * Self-intersecting polygons or polygons containing other polygons are invalid and
   * will be removed while processing the request.
   *
   * Area of the polygon should be less than 2000 km<sup>2</sup>.
   */
  export interface Polygon {
    /**
     * An object to collect geoJSON details of the `polygon` geofence. The contents of
     * this object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    geojson?: Polygon.Geojson;
  }

  export namespace Polygon {
    /**
     * An object to collect geoJSON details of the `polygon` geofence. The contents of
     * this object follow the
     * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    export interface Geojson {
      /**
       * An array of coordinates in the [longitude, latitude] format, representing the
       * geofence boundary.
       */
      geometry?: Array<Array<number>>;

      /**
       * Type of the geoJSON geometry. Should always be `Polygon`.
       */
      type?: string;
    }
  }
}

export interface GeofenceListParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

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
   * Comma (`,`) separated list of `tags` which will be used to filter the geofences.
   *
   * Please note only the geofences which have all the `tags` added to this parameter
   * will be included in the result. This parameter can accept a string with a
   * maximum length of 256 characters.
   */
  tags?: string;
}

export interface GeofenceDeleteParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface GeofenceContainsParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Pipe (|) separated coordinates, in [latitude,longitude] format, of the locations
   * to be searched against the geofences.
   */
  locations: string;

  /**
   * A `,` separated list geofence IDs against which the `locations` will be
   * searched. If not provided, then the 'locations' will be searched against all
   * your existing geofences.
   *
   * Maximum length of the string can be 256 characters.
   */
  geofences?: string;

  /**
   * When `true`, an array with detailed information of geofences is returned. When
   * `false`, an array containing only the IDs of the geofences is returned.
   */
  verbose?: string;
}

GeofenceResource.Console = Console;
GeofenceResource.Batch = Batch;

export declare namespace GeofenceResource {
  export {
    type Geofence as Geofence,
    type GeofenceEntityCreate as GeofenceEntityCreate,
    type GeofenceCreateResponse as GeofenceCreateResponse,
    type GeofenceRetrieveResponse as GeofenceRetrieveResponse,
    type GeofenceListResponse as GeofenceListResponse,
    type GeofenceContainsResponse as GeofenceContainsResponse,
    type GeofenceCreateParams as GeofenceCreateParams,
    type GeofenceRetrieveParams as GeofenceRetrieveParams,
    type GeofenceUpdateParams as GeofenceUpdateParams,
    type GeofenceListParams as GeofenceListParams,
    type GeofenceDeleteParams as GeofenceDeleteParams,
    type GeofenceContainsParams as GeofenceContainsParams,
  };

  export {
    Console as Console,
    type PolygonGeojson as PolygonGeojson,
    type ConsolePreviewResponse as ConsolePreviewResponse,
    type ConsoleSearchResponse as ConsoleSearchResponse,
    type ConsolePreviewParams as ConsolePreviewParams,
    type ConsoleSearchParams as ConsoleSearchParams,
  };

  export {
    Batch as Batch,
    type BatchCreateResponse as BatchCreateResponse,
    type BatchQueryResponse as BatchQueryResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchQueryParams as BatchQueryParams,
  };
}
