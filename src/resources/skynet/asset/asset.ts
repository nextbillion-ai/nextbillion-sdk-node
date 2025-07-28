// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetAPI from './asset';
import * as MonitorAPI from '../monitor';
import * as EventAPI from './event';
import { Event, EventRetrieveListParams, EventRetrieveListResponse } from './event';
import * as LocationAPI from './location';
import {
  Location as LocationAPILocation,
  LocationRetrieveLastParams,
  LocationRetrieveLastResponse,
  LocationRetrieveListParams,
  LocationRetrieveListResponse,
  TrackLocation,
} from './location';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Asset extends APIResource {
  event: EventAPI.Event = new EventAPI.Event(this._client);
  location: LocationAPI.Location = new LocationAPI.Location(this._client);

  /**
   * Create an Asset
   */
  create(params: AssetCreateParams, options?: RequestOptions): APIPromise<AssetCreateResponse> {
    const { key, cluster, ...body } = params;
    return this._client.post('/skynet/asset', { query: { key, cluster }, body, ...options });
  }

  /**
   * Get an Asset
   */
  retrieve(
    id: string,
    query: AssetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AssetRetrieveResponse> {
    return this._client.get(path`/skynet/asset/${id}`, { query, ...options });
  }

  /**
   * Update an Asset
   */
  update(id: string, params: AssetUpdateParams, options?: RequestOptions): APIPromise<SimpleResp> {
    const { key, cluster, ...body } = params;
    return this._client.put(path`/skynet/asset/${id}`, { query: { key, cluster }, body, ...options });
  }

  /**
   * Delete an Asset
   */
  delete(id: string, params: AssetDeleteParams, options?: RequestOptions): APIPromise<SimpleResp> {
    const { key, cluster } = params;
    return this._client.delete(path`/skynet/asset/${id}`, { query: { key, cluster }, ...options });
  }

  /**
   * Get Asset List
   */
  retrieveList(
    query: AssetRetrieveListParams,
    options?: RequestOptions,
  ): APIPromise<AssetRetrieveListResponse> {
    return this._client.get('/skynet/asset/list', { query, ...options });
  }

  /**
   * Upload track info
   */
  track(id: string, params: AssetTrackParams, options?: RequestOptions): APIPromise<SimpleResp> {
    const { key, cluster, ...body } = params;
    return this._client.post(path`/skynet/asset/${id}/track`, { query: { key, cluster }, body, ...options });
  }

  /**
   * Update asset attributes. (add)
   */
  updateAttributes(
    id: string,
    params: AssetUpdateAttributesParams,
    options?: RequestOptions,
  ): APIPromise<SimpleResp> {
    const { key, ...body } = params;
    return this._client.put(path`/skynet/asset/${id}/attributes`, { query: { key }, body, ...options });
  }
}

/**
 * Any valid json object data. Can be used to save customized data. Max size is
 * 65kb.
 */
export type MetaData = unknown;

export interface SimpleResp {
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

export interface AssetCreateResponse {
  /**
   * An object containing the ID of the `asset` created.
   */
  data?: AssetCreateResponse.Data;

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

export namespace AssetCreateResponse {
  /**
   * An object containing the ID of the `asset` created.
   */
  export interface Data {
    /**
     * Unique ID of the asset created. It will be the same as `custom_id`, if provided.
     * Else it will be an auto generated UUID. Please note this ID cannot be updated.
     */
    id?: string;
  }
}

export interface AssetRetrieveResponse {
  /**
   * An object containing the information about the `asset` returned.
   */
  data?: AssetRetrieveResponse.Data;

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

export namespace AssetRetrieveResponse {
  /**
   * An object containing the information about the `asset` returned.
   */
  export interface Data {
    /**
     * An object with details of the `asset` properties.
     */
    asset?: Data.Asset;
  }

  export namespace Data {
    /**
     * An object with details of the `asset` properties.
     */
    export interface Asset {
      /**
       * ID of the `asset`. This is the same ID that was generated/provided at the time
       * of creating the `asset`.
       */
      id?: string;

      /**
       * A string dictionary object containing `attributes` of the `asset`. These
       * `attributes` were associated with the `asset` at the time of creating or
       * updating it.
       *
       * `attributes` can be added to an `asset` using the _Update Asset Attributes_
       * method.
       */
      attributes?: unknown;

      /**
       * A UNIX epoch timestamp in seconds representing the time at which the `asset` was
       * created.
       */
      created_at?: number;

      /**
       * Description of the `asset`. The value would be the same as that provided for the
       * `description` parameter at the time of creating or updating the `asset`.
       */
      description?: string;

      /**
       * ID of the `device` that is linked to this asset. Please note that there can be
       * multiple `device_id` linked to a single `asset`. An empty response is returned
       * if no devices are linked to the `asset`.
       *
       * User can link a device to an `asset` using the _Bind Asset to Device_ method.
       */
      device_id?: string;

      /**
       * An object with details of the last tracked location of the asset.
       */
      latest_location?: Asset.LatestLocation;

      /**
       * Any valid json object data. Can be used to save customized data. Max size is
       * 65kb.
       */
      meta_data?: AssetAPI.MetaData;

      /**
       * Name of the `asset`. The value would be the same as that provided for the `name`
       * parameter at the time of creating or updating the `asset`.
       */
      name?: string;

      /**
       * State of the asset. It will be "active" when the asset is in use or available
       * for use, and it will be "deleted" in case the asset has been deleted.
       */
      state?: string;

      /**
       * **This parameter will be deprecated soon! Please move existing `tags` to
       * `attributes` parameter.**
       *
       * Tags of the asset. These were associated with the `asset` when it was created or
       * updated. `tags` can be used for filtering assets in operations like _Get Asset
       * List_ and asset **Search** methods. They can also be used for monitoring of
       * assets using **Monitor** methods after linking `tags` and `asset`.
       */
      tags?: Array<string>;

      /**
       * A UNIX epoch timestamp in seconds representing the last time when the `asset`
       * was tracked.
       */
      tracked_at?: number;

      /**
       * A UNIX epoch timestamp in seconds representing the time at which the `asset` was
       * last updated.
       */
      updated_at?: number;
    }

    export namespace Asset {
      /**
       * An object with details of the last tracked location of the asset.
       */
      export interface LatestLocation {
        /**
         * If available, this property returns the accuracy of the GPS information received
         * at the last tracked location. It is represented as an estimated horizontal
         * accuracy radius, in meters, at the 68th percentile confidence level.
         */
        accuracy?: number;

        /**
         * If available in the GPS information, this property returns the altitude of the
         * `asset` at the last tracked location. It is represented as height, in meters,
         * above the WGS84 reference ellipsoid.
         */
        altitude?: number;

        /**
         * If available in the GPS information, this property returns the heading of the
         * `asset` calculated from true north in clockwise direction at the last tracked
         * location. Please note that the bearing is not affected by the device
         * orientation.
         *
         * The bearing will always be in the range of [0, 360).
         */
        bearing?: number;

        /**
         * An object with the coordinates of the last tracked location.
         */
        location?: LatestLocation.Location;

        /**
         * If available in the GPS information, this property returns the speed of the
         * `asset`, in meters per second, at the last tracked location.
         */
        speed?: number;

        /**
         * A UNIX epoch timestamp in milliseconds, representing the time at which the
         * location was tracked.
         */
        timestamp?: number;
      }

      export namespace LatestLocation {
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
    }
  }
}

export interface AssetRetrieveListResponse {
  /**
   * A data object containing the list of assets.
   */
  data?: AssetRetrieveListResponse.Data;

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

export namespace AssetRetrieveListResponse {
  /**
   * A data object containing the list of assets.
   */
  export interface Data {
    /**
     * An array of objects, with each object representing one `asset`.
     */
    list?: Array<Data.List>;

    /**
     * An object with pagination details of the search results. Use this object to
     * implement pagination in your application.
     */
    page?: MonitorAPI.Pagination;
  }

  export namespace Data {
    /**
     * An object with details of the `asset` properties.
     */
    export interface List {
      /**
       * ID of the `asset`. This is the same ID that was generated/provided at the time
       * of creating the `asset`.
       */
      id?: string;

      /**
       * A string dictionary object containing `attributes` of the `asset`. These
       * `attributes` were associated with the `asset` at the time of creating or
       * updating it.
       *
       * `attributes` can be added to an `asset` using the _Update Asset Attributes_
       * method.
       */
      attributes?: unknown;

      /**
       * A UNIX epoch timestamp in seconds representing the time at which the `asset` was
       * created.
       */
      created_at?: number;

      /**
       * Description of the `asset`. The value would be the same as that provided for the
       * `description` parameter at the time of creating or updating the `asset`.
       */
      description?: string;

      /**
       * ID of the `device` that is linked to this asset. Please note that there can be
       * multiple `device_id` linked to a single `asset`. An empty response is returned
       * if no devices are linked to the `asset`.
       *
       * User can link a device to an `asset` using the _Bind Asset to Device_ method.
       */
      device_id?: string;

      /**
       * An object with details of the last tracked location of the asset.
       */
      latest_location?: List.LatestLocation;

      /**
       * Any valid json object data. Can be used to save customized data. Max size is
       * 65kb.
       */
      meta_data?: AssetAPI.MetaData;

      /**
       * Name of the `asset`. The value would be the same as that provided for the `name`
       * parameter at the time of creating or updating the `asset`.
       */
      name?: string;

      /**
       * State of the asset. It will be "active" when the asset is in use or available
       * for use, and it will be "deleted" in case the asset has been deleted.
       */
      state?: string;

      /**
       * **This parameter will be deprecated soon! Please move existing `tags` to
       * `attributes` parameter.**
       *
       * Tags of the asset. These were associated with the `asset` when it was created or
       * updated. `tags` can be used for filtering assets in operations like _Get Asset
       * List_ and asset **Search** methods. They can also be used for monitoring of
       * assets using **Monitor** methods after linking `tags` and `asset`.
       */
      tags?: Array<string>;

      /**
       * A UNIX epoch timestamp in seconds representing the last time when the `asset`
       * was tracked.
       */
      tracked_at?: number;

      /**
       * A UNIX epoch timestamp in seconds representing the time at which the `asset` was
       * last updated.
       */
      updated_at?: number;
    }

    export namespace List {
      /**
       * An object with details of the last tracked location of the asset.
       */
      export interface LatestLocation {
        /**
         * If available, this property returns the accuracy of the GPS information received
         * at the last tracked location. It is represented as an estimated horizontal
         * accuracy radius, in meters, at the 68th percentile confidence level.
         */
        accuracy?: number;

        /**
         * If available in the GPS information, this property returns the altitude of the
         * `asset` at the last tracked location. It is represented as height, in meters,
         * above the WGS84 reference ellipsoid.
         */
        altitude?: number;

        /**
         * If available in the GPS information, this property returns the heading of the
         * `asset` calculated from true north in clockwise direction at the last tracked
         * location. Please note that the bearing is not affected by the device
         * orientation.
         *
         * The bearing will always be in the range of [0, 360).
         */
        bearing?: number;

        /**
         * An object with the coordinates of the last tracked location.
         */
        location?: LatestLocation.Location;

        /**
         * If available in the GPS information, this property returns the speed of the
         * `asset`, in meters per second, at the last tracked location.
         */
        speed?: number;

        /**
         * A UNIX epoch timestamp in milliseconds, representing the time at which the
         * location was tracked.
         */
        timestamp?: number;
      }

      export namespace LatestLocation {
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
    }
  }
}

export interface AssetCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Query param: the cluster of the region you want to use
   */
  cluster?: 'america';

  /**
   * Body param: `attributes` can be used to store custom information about an asset
   * in `key`:`value` format. Use `attributes` to add any useful information or
   * context to your assets like the vehicle type, shift timing etc. Moreover, these
   * attributes can be used to filter `assets` in **Search**, **Monitor**, and _Get
   * Asset List_ queries.
   *
   * Please note that the maximum number of `key`:`value` pairs that can be added to
   * an `attributes` object is 100. Also, the overall size of `attributes` object
   * should not exceed 65kb.
   */
  attributes?: unknown;

  /**
   * Body param: Set a unique ID for the new `asset`. If not provided, an ID will be
   * automatically generated in UUID format. A valid `custom_id` can contain letters,
   * numbers, "-", & "\_" only.
   *
   * Please note that the ID of an `asset` can not be changed once it is created.
   */
  custom_id?: string;

  /**
   * Body param: Description for the `asset`.
   */
  description?: string;

  /**
   * Body param: Any valid json object data. Can be used to save customized data. Max
   * size is 65kb.
   */
  meta_data?: MetaData;

  /**
   * Body param: Name of the `asset`. Use this field to assign a meaningful, custom
   * name to the `asset` being created.
   */
  name?: string;

  /**
   * Body param: **This parameter will be deprecated soon! Please use the
   * `attributes` parameter to add labels or markers for the asset.**
   *
   * Tags of the `asset`. `tags` can be used for filtering assets in operations like
   * _Get Asset List_ and asset **Search** methods. They can also be used for
   * monitoring of assets using the **Monitor** methods after linking `tags` and
   * `asset`.
   *
   * Valid `tags` are strings consisting of alphanumeric characters (A-Z, a-z, 0-9)
   * along with the underscore ('\_') and hyphen ('-') symbols.
   */
  tags?: Array<string>;
}

export interface AssetRetrieveParams {
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

export interface AssetUpdateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Query param: the cluster of the region you want to use
   */
  cluster?: 'america';

  /**
   * Body param: Use this param to update the `attributes` of an asset in
   * `key`:`value` format. Users can maintain any useful information or context about
   * the assets by utilising this parameter.
   *
   * Please be careful when using this parameter while updating an `asset` as the new
   * `attributes` object provided will completely overwrite the old `attributes`
   * object. Use the _Update Asset Attributes_ method to add new or modify existing
   * attributes.
   *
   * Another point to note is that the overall size of the `attributes` object cannot
   * exceed 65kb and the maximum number of `key`:`value` pairs that can be added to
   * this object is 100.
   */
  attributes?: unknown;

  /**
   * Body param: Use this param to update the `description` of an `asset`.
   */
  description?: string;

  /**
   * Body param: Any valid json object data. Can be used to save customized data. Max
   * size is 65kb.
   */
  meta_data?: MetaData;

  /**
   * Body param: Use this param to update the `name` of an `asset`. Users can assign
   * meaningful custom names to their assets.
   */
  name?: string;

  /**
   * Body param: **This parameter will be deprecated soon! Please use the
   * `attributes` parameter to add labels or markers for the asset.**
   *
   * Use this param to update the `tags` of an `asset`. `tags` can be used to filter
   * `asset` in _Get Asset List_, **Search** and **Monitor** queries.
   */
  tags?: Array<string>;
}

export interface AssetDeleteParams {
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

export interface AssetRetrieveListParams {
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
   * Use this parameter to filter the assets by their `attributes`. Only the assets
   * having all the `attributes` added to this parameter, will be returned in the
   * response. Multiple `attributes` can be separated using pipes (`|`).
   *
   * Please note the attributes are case sensitive. Also, this parameter can not be
   * used in conjunction with `include_any_of_attributes` parameter.
   */
  include_all_of_attributes?: string;

  /**
   * Use this parameter to filter the assets by their `attributes`. Assets having at
   * least one of the `attributes` added to this parameter, will be returned in the
   * response. Multiple `attributes` can be separated using pipes (`|`).
   *
   * Please note the attributes are case sensitive. Also, this parameter can not be
   * used in conjunction with `include_all_of_attributes` parameter.
   */
  include_any_of_attributes?: string;

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
   * Provide a single field to sort the results by. Only `updated_at` or `created_at`
   * fields can be selected for ordering the results.
   *
   * By default, the result is sorted by `created_at` field in the descending order.
   * Allowed values for specifying the order are `asc` for ascending order and `desc`
   * for descending order.
   */
  sort?: string;

  /**
   * **This parameter will be deprecated soon! Please use the
   * `include_all_of_attributes` or `include_any_of_attributes` parameters to provide
   * labels or markers for the assets to be retrieved.**
   *
   * `tags` can be used to filter the assets. Only those assets which have all the
   * `tags` provided, will be included in the result. In case multiple `tags` need to
   * be specified, use `,` to separate them.
   */
  tags?: string;
}

export interface AssetTrackParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: ID of the device used to upload the tracking information of the
   * `asset`.
   *
   * Please note that the `device_id` used here must already be linked to the
   * `asset`. Use the _Bind Device to Asset_ method to link a device with your
   * `asset`.
   */
  device_id: string;

  /**
   * Body param: An array of objects to collect the location tracking information for
   * an `asset`. Each object must correspond to details of only one location.
   */
  locations: AssetTrackParams.Locations;

  /**
   * Query param: the cluster of the region you want to use
   */
  cluster?: 'america';
}

export namespace AssetTrackParams {
  /**
   * An array of objects to collect the location tracking information for an `asset`.
   * Each object must correspond to details of only one location.
   */
  export interface Locations {
    /**
     * An object to collect the coordinate details of the tracked location. Please note
     * this field is mandatory when uploading locations for an asset.
     */
    location: Locations.Location;

    /**
     * Use this parameter to provide the time, expressed as UNIX epoch timestamp in
     * milliseconds, when the location was tracked. Please note this field is mandatory
     * when uploading locations for an asset.
     */
    timestamp: number;

    /**
     * Use this parameter to provide the accuracy of the GPS information at the tracked
     * location. It is the estimated horizontal accuracy radius, in meters.
     */
    accuracy?: number;

    /**
     * Use this parameter to provide the altitude, in meters, of the `asset` at the
     * tracked location.
     */
    altitude?: number;

    /**
     * Use this parameter to provide the battery level of the GPS device, as a
     * percentage, when the location is tracked. It should have a minimum value of 0
     * and a maximum value of 100.
     */
    battery_level?: number;

    /**
     * Use this parameter to provide the heading of the `asset`, in radians, calculated
     * from true north in clockwise direction. This should always be in the range of
     * [0, 360).
     */
    bearing?: number;

    /**
     * Use this object to add any custom data about the location that is being
     * uploaded. Recommended to use the `key`:`value` format for adding the desired
     * information.
     *
     * Please note that the maximum size of `meta_data` object should not exceed 65Kb.
     */
    meta_data?: unknown;

    /**
     * Use this parameter to provide the speed of the `asset`, in meters per second, at
     * the tracked location.
     */
    speed?: number;

    /**
     * NB tracking mode.
     */
    tracking_mode?: string;
  }

  export namespace Locations {
    /**
     * An object to collect the coordinate details of the tracked location. Please note
     * this field is mandatory when uploading locations for an asset.
     */
    export interface Location {
      /**
       * Latitude of the tracked location of the `asset`.
       */
      lat: number;

      /**
       * Longitude of the tracked location of the `asset`.
       */
      lon: number;
    }
  }
}

export interface AssetUpdateAttributesParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: `attributes` can be used to add any useful information or context to
   * your assets like the vehicle type, shift timing etc. These attributes can also
   * be used to filter assets in **Search**, **Monitor**, and _Get Asset List_
   * queries.
   *
   * Provide the attributes to be added or updated, in `key`:`value` format. If an
   * existing `key` is provided in the input, then the `value` will be modified as
   * per the input value. If a new `key` is provided in the input, then the `key`
   * would be added to the existing set. The contents of any `value` field are
   * neither altered nor removed unless specifically referred to by its `key` in the
   * input request.
   *
   * Please note that the maximum number of `key`:`value` pairs that can be added to
   * an `attributes` object is 100. Also, the overall size of `attributes` object
   * should not exceed 65kb.
   */
  attributes: unknown;
}

Asset.Event = Event;
Asset.Location = LocationAPILocation;

export declare namespace Asset {
  export {
    type MetaData as MetaData,
    type SimpleResp as SimpleResp,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetRetrieveResponse as AssetRetrieveResponse,
    type AssetRetrieveListResponse as AssetRetrieveListResponse,
    type AssetCreateParams as AssetCreateParams,
    type AssetRetrieveParams as AssetRetrieveParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetDeleteParams as AssetDeleteParams,
    type AssetRetrieveListParams as AssetRetrieveListParams,
    type AssetTrackParams as AssetTrackParams,
    type AssetUpdateAttributesParams as AssetUpdateAttributesParams,
  };

  export {
    Event as Event,
    type EventRetrieveListResponse as EventRetrieveListResponse,
    type EventRetrieveListParams as EventRetrieveListParams,
  };

  export {
    LocationAPILocation as Location,
    type TrackLocation as TrackLocation,
    type LocationRetrieveLastResponse as LocationRetrieveLastResponse,
    type LocationRetrieveListResponse as LocationRetrieveListResponse,
    type LocationRetrieveLastParams as LocationRetrieveLastParams,
    type LocationRetrieveListParams as LocationRetrieveListParams,
  };
}
