// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TripAPI from './trip';
import * as AssetAPI from './asset/asset';
import * as LocationAPI from './asset/location';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trip extends APIResource {
  /**
   * Retrieves detailed information about a specific trip.
   */
  retrieve(
    id: string,
    query: TripRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TripRetrieveResponse> {
    return this._client.get(path`/skynet/trip/${id}`, { query, ...options });
  }

  /**
   * Updates the data of a specified trip with the provided data.
   */
  update(id: string, params: TripUpdateParams, options?: RequestOptions): APIPromise<AssetAPI.SimpleResp> {
    const { key, cluster, ...body } = params;
    return this._client.put(path`/skynet/trip/${id}`, { query: { key, cluster }, body, ...options });
  }

  /**
   * Deletes a specified trip from the system.
   */
  delete(id: string, params: TripDeleteParams, options?: RequestOptions): APIPromise<AssetAPI.SimpleResp> {
    const { key, cluster } = params;
    return this._client.delete(path`/skynet/trip/${id}`, { query: { key, cluster }, ...options });
  }

  /**
   * End a trip
   */
  end(params: TripEndParams, options?: RequestOptions): APIPromise<AssetAPI.SimpleResp> {
    const { key, cluster, ...body } = params;
    return this._client.post('/skynet/trip/end', { query: { key, cluster }, body, ...options });
  }

  /**
   * Get summary of an ended trip
   */
  retrieveSummary(
    id: string,
    query: TripRetrieveSummaryParams,
    options?: RequestOptions,
  ): APIPromise<TripRetrieveSummaryResponse> {
    return this._client.get(path`/skynet/trip/${id}/summary`, { query, ...options });
  }

  /**
   * Add a new trip to the system with the provided data.
   */
  start(params: TripStartParams, options?: RequestOptions): APIPromise<TripStartResponse> {
    const { key, cluster, ...body } = params;
    return this._client.post('/skynet/trip/start', { query: { key, cluster }, body, ...options });
  }
}

export interface TripStop {
  /**
   * Returns the ID of the geofence that was used to indicate the area to make a
   * stop.
   */
  geofence_id?: string;

  /**
   * Returns any meta data that was added to provide additional information about the
   * stop.
   */
  meta_data?: unknown;

  /**
   * Returns the name of the stop that was provided when configuring this stop for
   * the trip.
   */
  name?: string;
}

export interface TripRetrieveResponse {
  /**
   * An container for the trip returned by the service.
   */
  data?: TripRetrieveResponse.Data;

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

export namespace TripRetrieveResponse {
  /**
   * An container for the trip returned by the service.
   */
  export interface Data {
    /**
     * An object containing the returned trip details.
     */
    trip?: Data.Trip;
  }

  export namespace Data {
    /**
     * An object containing the returned trip details.
     */
    export interface Trip {
      /**
       * Returns the unique identifier of the trip.
       */
      id?: string;

      /**
       * Returns the ID of the asset linked to the trip when the trip was started or
       * updated.
       */
      asset_id?: string;

      /**
       * Returns the `attributes` provided for the trip at the time of starting or
       * updating it.
       */
      attributes?: unknown;

      /**
       * Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the
       * trip was created.
       */
      created_at?: number;

      /**
       * Returns the custom description for the trip as provided at the time of starting
       * or updating the trip.
       */
      description?: string;

      /**
       * Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the
       * trip ended.
       */
      ended_at?: number;

      /**
       * Returns the metadata containing additional information about the trip as
       * provided at the time of starting or updating the trip.
       */
      meta_data?: unknown;

      /**
       * Returns the name for the trip as provided at the time of starting or updating
       * the trip.
       */
      name?: string;

      /**
       * An array of object returning the details of the locations tracked for the asset
       * during the trip which has ended. Each object represents a single location that
       * was tracked.
       *
       * Please note that this attribute will not be present in the response if no
       * locations were tracked/uploaded during the trip.
       */
      route?: Array<LocationAPI.TrackLocation>;

      /**
       * Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the
       * trip started.
       */
      started_at?: number;

      /**
       * Returns the current state of the trip. The value will be "active" if the trip is
       * still going on, otherwise the value returned would be "ended".
       */
      state?: string;

      /**
       * An array of objects returning the details of the stops made during the trip.
       * Each object represents a single stop.
       */
      stops?: Array<TripAPI.TripStop>;

      /**
       * Returns the timeme, expressed as UNIX epoch timestamp in milliseconds, when the
       * trip was last updated.
       */
      updated_at?: number;
    }
  }
}

export interface TripRetrieveSummaryResponse {
  /**
   * An container for the trip returned by the service.
   */
  data?: TripRetrieveSummaryResponse.Data;

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

export namespace TripRetrieveSummaryResponse {
  /**
   * An container for the trip returned by the service.
   */
  export interface Data {
    /**
     * An object containing the returned trip summary.
     */
    trip?: Data.Trip;
  }

  export namespace Data {
    /**
     * An object containing the returned trip summary.
     */
    export interface Trip {
      /**
       * Returns the unique identifier of the trip.
       */
      id?: string;

      /**
       * An object with details of the `asset` properties.
       */
      asset?: Trip.Asset;

      /**
       * Returns the ID of the asset linked to the trip when the trip was started or
       * updated.
       */
      asset_id?: string;

      /**
       * Returns the `attributes` provided for the trip at the time of starting or
       * updating it.
       */
      attributes?: unknown;

      /**
       * Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the
       * trip was created.
       */
      created_at?: number;

      /**
       * Returns the custom description for the trip as provided at the time of starting
       * or updating the trip.
       */
      description?: string;

      /**
       * Returns the total distance covered during the trip, in meters. Please note that
       * this field will be available in the response only if a minimum of 3 locations
       * were tracked during the trip.
       */
      distance?: number;

      /**
       * Returns the total duration elapsed during the trip, in seconds. Please note that
       * this field will be available in the response only if a minimum of 3 locations
       * were tracked during the trip.
       */
      duration?: number;

      /**
       * Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the
       * trip ended.
       */
      ended_at?: number;

      /**
       * Returns the geometry of the route that was taken during the trip, encoded in
       * polyline format. Please note that this field will be available in the response
       * only if a minimum of 3 locations were tracked during the trip.
       */
      geometry?: Array<string>;

      /**
       * Returns the metadata containing additional information about the trip as
       * provided at the time of starting or updating the trip.
       */
      meta_data?: unknown;

      /**
       * Returns the name for the trip as provided at the time of starting or updating
       * the trip.
       */
      name?: string;

      /**
       * An array of object returning the details of the locations tracked for the asset
       * during the trip which has ended. Each object represents a single location that
       * was tracked.
       *
       * Please note that this attribute will not be present in the response if no
       * locations were tracked/uploaded during the trip.
       */
      route?: Array<LocationAPI.TrackLocation>;

      /**
       * Returns the time, expressed as UNIX epoch timestamp in milliseconds, when the
       * trip started.
       */
      started_at?: number;

      /**
       * Returns the current state of the trip. The value will be "active" if the trip is
       * still going on, otherwise the value returned would be "ended".
       */
      state?: string;

      /**
       * An array of objects returning the details of the stops made during the trip.
       * Each object represents a single stop.
       */
      stops?: Array<TripAPI.TripStop>;

      /**
       * Returns the timeme, expressed as UNIX epoch timestamp in milliseconds, when the
       * trip was last updated.
       */
      updated_at?: number;
    }

    export namespace Trip {
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
}

export interface TripStartResponse {
  data?: TripStartResponse.Data;

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

export namespace TripStartResponse {
  export interface Data {
    /**
     * Returns the ID of the newly created trip. It will be same as the `custom_id` if
     * that input was provided in the input request. Use this ID to manage this trip
     * using other available Trip methods.
     */
    id?: string;
  }
}

export interface TripRetrieveParams {
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

export interface TripUpdateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Use this param to update the ID of the asset which made this trip.
   * Please be cautious when using this field as providing an ID other than what was
   * provided at the time of starting the trip, will link a new asset to the trip and
   * un-link the original asset, even if the trip is still active.
   */
  asset_id: string;

  /**
   * Query param: the cluster of the region you want to use
   */
  cluster?: 'america';

  /**
   * Body param: Use this field to update the `attributes` of the trip. Please note
   * that when updating the `attributes` field, previously added information will be
   * overwritten.
   */
  attributes?: unknown;

  /**
   * Body param: Use this parameter to update the custom description of the trip.
   */
  description?: string;

  /**
   * Body param: Use this JSON object to update additional details about the trip.
   * This property is used to add any custom information / context about the trip.
   *
   * Please note that updating the `meta_data` field will overwrite the previously
   * added information.
   */
  meta_data?: unknown;

  /**
   * Body param: Use this property to update the name of the trip.
   */
  name?: string;

  /**
   * Body param: Use this object to update the details of the stops made during the
   * trip. Each object represents a single stop.
   *
   * Please note that when updating this field, the new stops will overwrite any
   * existing stops configured for the trip.
   */
  stops?: Array<TripUpdateParams.Stop>;
}

export namespace TripUpdateParams {
  export interface Stop {
    /**
     * Use this parameter to update the ID of the geofence indicating the area where
     * the asset needs to make a stop, during the trip. Only the IDs of geofences
     * created using
     * [NextBillion.ai's Geofence API](https://docs.nextbillion.ai/docs/tracking/api/geofence#create-a-geofence)
     * are accepted.
     *
     * Please note that updating this field will overwrite the previously added
     * information.
     */
    geofence_id?: string;

    /**
     * Use this JSON object to update additional details about the stop. This property
     * is used to add any custom information / context about the stop.
     *
     * Please note that updating the `meta_data` field will overwrite the previously
     * added information.
     */
    meta_data?: unknown;

    /**
     * Use this filed to update the name of the stop.
     */
    name?: string;
  }
}

export interface TripDeleteParams {
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

export interface TripEndParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the ID of the trip to be ended.
   */
  id: string;

  /**
   * Query param: the cluster of the region you want to use
   */
  cluster?: 'america';
}

export interface TripRetrieveSummaryParams {
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

export interface TripStartParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the ID of the asset which is making this trip. The asset
   * will be linked to this trip.
   */
  asset_id: string;

  /**
   * Query param: the cluster of the region you want to use
   */
  cluster?: 'america';

  /**
   * Body param: `attributes` can be used to store custom information about a trip in
   * `key`:`value` format. Use `attributes` to add any useful information or context
   * to your trips like the driver name, destination etc.
   *
   * Please note that the maximum number of `key`:`value` pairs that can be added to
   * an `attributes` object is 100. Also, the overall size of `attributes` object
   * should not exceed 65kb.
   */
  attributes?: unknown;

  /**
   * Body param: Set a unique ID for the new `trip`. If not provided, an ID will be
   * automatically generated in UUID format. A valid `custom_id` can contain letters,
   * numbers, “-”, & “\_” only.
   *
   * Please note that the ID of a `trip` can not be changed once it is created.
   */
  custom_id?: string;

  /**
   * Body param: Add a custom description for the trip.
   */
  description?: string;

  /**
   * Body param: An JSON object to collect additional details about the trip. Use
   * this property to add any custom information / context about the trip. The input
   * will be passed on to the response as-is and can be used to display useful
   * information on, for example, a UI app.
   */
  meta_data?: unknown;

  /**
   * Body param: Specify a name for the trip.
   */
  name?: string;

  /**
   * Body param: An array of objects to collect the details about all the stops that
   * need to be made before the trip ends. Each object represents one stop.
   */
  stops?: Array<TripStartParams.Stop>;
}

export namespace TripStartParams {
  export interface Stop {
    /**
     * Specify the ID of the geofence indicating the area where the asset needs to make
     * a stop, during the trip. Only the IDs of geofences created using
     * [NextBillion.ai's Geofence API](https://docs.nextbillion.ai/docs/tracking/api/geofence#create-a-geofence)
     * are accepted.
     */
    geofence_id?: string;

    /**
     * An JSON object to collect additional details about the stop. Use this property
     * to add any custom information / context about the stop. The input will be passed
     * on to the response as-is and can be used to display useful information on, for
     * example, a UI app.
     */
    meta_data?: unknown;

    /**
     * Specify a custom name for the stop.
     */
    name?: string;
  }
}

export declare namespace Trip {
  export {
    type TripStop as TripStop,
    type TripRetrieveResponse as TripRetrieveResponse,
    type TripRetrieveSummaryResponse as TripRetrieveSummaryResponse,
    type TripStartResponse as TripStartResponse,
    type TripRetrieveParams as TripRetrieveParams,
    type TripUpdateParams as TripUpdateParams,
    type TripDeleteParams as TripDeleteParams,
    type TripEndParams as TripEndParams,
    type TripRetrieveSummaryParams as TripRetrieveSummaryParams,
    type TripStartParams as TripStartParams,
  };
}
