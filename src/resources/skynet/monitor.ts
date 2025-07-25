// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MonitorAPI from './monitor';
import * as AssetAPI from './asset/asset';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MonitorResource extends APIResource {
  /**
   * Create a Monitor
   */
  create(params: MonitorCreateParams, options?: RequestOptions): APIPromise<MonitorCreateResponse> {
    const { key, cluster, ...body } = params;
    return this._client.post('/skynet/monitor', { query: { key, cluster }, body, ...options });
  }

  /**
   * Get a Monitor
   */
  retrieve(
    id: string,
    query: MonitorRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MonitorRetrieveResponse> {
    return this._client.get(path`/skynet/monitor/${id}`, { query, ...options });
  }

  /**
   * Update a Monitor
   */
  update(id: string, params: MonitorUpdateParams, options?: RequestOptions): APIPromise<AssetAPI.SimpleResp> {
    const { key, ...body } = params;
    return this._client.put(path`/skynet/monitor/${id}`, { query: { key }, body, ...options });
  }

  /**
   * Delete a Monitor
   */
  delete(id: string, params: MonitorDeleteParams, options?: RequestOptions): APIPromise<AssetAPI.SimpleResp> {
    const { key } = params;
    return this._client.delete(path`/skynet/monitor/${id}`, { query: { key }, ...options });
  }

  /**
   * Get Monitor List
   */
  retrieveList(
    query: MonitorRetrieveListParams,
    options?: RequestOptions,
  ): APIPromise<MonitorRetrieveListResponse> {
    return this._client.get('/skynet/monitor/list', { query, ...options });
  }
}

/**
 * Any valid json object data. Can be used to save customized data. Max size is
 * 65kb.
 */
export type Metadata = unknown;

export interface Monitor {
  /**
   * Unique ID of the `monitor`. This is the same ID that was generated at the time
   * of creating the `monitor`.
   */
  id?: string;

  /**
   * A UNIX epoch timestamp in seconds representing the time at which the `monitor`
   * was created.
   */
  created_at?: number;

  /**
   * Description of the `monitor`. The value would be the same as that provided for
   * the `description` parameter at the time of creating or updating the `monitor`.
   */
  description?: string;

  /**
   * An object returning the details of the geofence that are associated with the
   * `monitor` for an `enter`, `exit` or `enter_and_exit` type of monitor.
   */
  geofence_config?: Monitor.GeofenceConfig;

  /**
   * Geofence IDs that are linked to the `monitor`. These IDs were associated with
   * the `monitor` at the time of creating or updating it.
   *
   * The `monitor` uses the geofences mentioned here to create events of `type`
   * nature for the eligible asset(s).
   */
  geofences?: Array<string>;

  /**
   * An object returning the details of the idle activity constraints for a `idle`
   * type of `monitor`.
   */
  idle_config?: Monitor.IdleConfig;

  /**
   * Use this object to update the `attributes` of the `monitor`.
   */
  match_filter?: Monitor.MatchFilter;

  /**
   * Any valid json object data. Can be used to save customized data. Max size is
   * 65kb.
   */
  meta_data?: Metadata;

  /**
   * Name of the `monitor`. The value would be the same as that provided for the
   * `name` parameter at the time of creating or updating the `monitor`.
   */
  name?: string;

  /**
   * An object returning the details of the over-speeding constraints for a
   * `speeding` type of `monitor`.
   */
  speeding_config?: Monitor.SpeedingConfig;

  /**
   * Tags of the `monitor`. The values would be the same as that provided for the
   * `tags` parameter at the time of creating or updating the `monitor`.
   */
  tags?: Array<string>;

  /**
   * Type of the `monitor`. It represents the type of `asset` activity that the
   * `monitor` is configured to detect.
   */
  type?: '`enter`' | '`exit`' | '`enter_and_exit`' | '`speeding`' | '`idle`';

  /**
   * A UNIX epoch timestamp in seconds representing the time at which the `monitor`
   * was last updated.
   */
  updated_at?: number;
}

export namespace Monitor {
  /**
   * An object returning the details of the geofence that are associated with the
   * `monitor` for an `enter`, `exit` or `enter_and_exit` type of monitor.
   */
  export interface GeofenceConfig {
    /**
     * An array of geofence IDs that are linked to the `monitor`. Geofences are
     * geographic boundaries that can be used to trigger events based on an asset's
     * location.
     */
    geofence_ids?: Array<string>;
  }

  /**
   * An object returning the details of the idle activity constraints for a `idle`
   * type of `monitor`.
   */
  export interface IdleConfig {
    /**
     * This parameter returns the distance threshold that was used to determine if the
     * asset was idle or not. The value returned for this parameter is the same as that
     * provided while creating or updating a `idle` type `monitor`.
     */
    distance_tolerance?: number;

    /**
     * This parameter returns the time duration for which the `monitor` tracks the
     * distance covered by an asset before triggering an idle event. The value returned
     * for this parameter is the same as that provided while creating or updating a
     * `idle` type `monitor`.
     */
    time_tolerance?: number;
  }

  /**
   * Use this object to update the `attributes` of the `monitor`.
   */
  export interface MatchFilter {
    /**
     * A string type dictionary object to specify the `attributes` which will be used
     * to identify the asset(s) on which the `monitor` would be applied. Please note
     * that using this parameter overwrites the existing `attributes` of the monitor.
     *
     * If the `attributes` added to a `monitor` do not match fully with the
     * `attributes` added to any `asset`, the `monitor` will be ineffective.
     *
     * Please note that the maximum number of `key`:`value` pairs that
     * 'include_all_of_attributes' can take is 100. Also, the overall size of the
     * `match_filter` object should not exceed 65kb.
     */
    include_all_of_attributes?: unknown;

    /**
     * A string dictionary object to specify the `attributes`, separated by a `,`. Only
     * the `assets` with any one of the `attributes` added to this parameter will be
     * linked to this `monitor`. Once an `asset` and a `monitor` are linked, the
     * `monitor` will be able to create events for the `asset` when an activity
     * specified in `type` is detected.
     *
     * If no input is provided for this object or if the `attributes` added here do not
     * match at least one of the `attributes` added to any `asset`, the `monitor` will
     * be ineffective.
     *
     * Please note that the maximum number of `key`:`value` pairs that
     * `include_any_of_attributes` can take is 100. Also, the overall size of
     * `match_filter` object should not exceed 65kb.
     */
    include_any_of_attributes?: unknown;
  }

  /**
   * An object returning the details of the over-speeding constraints for a
   * `speeding` type of `monitor`.
   */
  export interface SpeedingConfig {
    /**
     * This property returns the actual speed limit that the `monitor` uses as a
     * threshold for generating a speed limit event. The value returned for this
     * parameter is the same as that provided while creating or updating a `speeding`
     * type `monitor`.
     */
    customer_speed_limit?: number;

    /**
     * This property returns the time duration value, in milliseconds, for which the
     * `monitor` will track the speed of the asset. An event is triggered if the speed
     * remains higher than the specified limit for a duration more than the tolerance
     * value.
     *
     * The value returned for this parameter is the same as that provided while
     * creating or updating a `speeding` type `monitor`.
     */
    time_tolerance?: number;

    /**
     * A boolean value denoting if the administrative speed limit of the road was used
     * as speed limit threshold for triggering events. The value returned for this
     * parameter is the same as that provided while creating or updating a `speeding`
     * type `monitor`.
     */
    use_admin_speed_limit?: boolean;
  }
}

/**
 * An object with pagination details of the search results. Use this object to
 * implement pagination in your application.
 */
export interface Pagination {
  /**
   * A boolean value indicating whether there are more items available beyond the
   * current page.
   */
  hasmore?: boolean;

  /**
   * An integer value indicating the current page number (starting at 0).
   */
  page?: number;

  /**
   * An integer value indicating the maximum number of items retrieved per `page`.
   */
  size?: number;

  /**
   * An integer value indicating the total number of items available in the data set.
   * This parameter can be used to calculate the total number of pages available.
   */
  total?: number;
}

export interface MonitorCreateResponse {
  /**
   * A data object containing the ID of the `monitor` created.
   */
  data?: MonitorCreateResponse.Data;

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

export namespace MonitorCreateResponse {
  /**
   * A data object containing the ID of the `monitor` created.
   */
  export interface Data {
    /**
     * Unique ID of the `monitor` created. Please note this ID cannot be updated.
     */
    id?: string;
  }
}

export interface MonitorRetrieveResponse {
  /**
   * A data object containing the details of the `monitor`.
   */
  data?: MonitorRetrieveResponse.Data;

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

export namespace MonitorRetrieveResponse {
  /**
   * A data object containing the details of the `monitor`.
   */
  export interface Data {
    monitor?: MonitorAPI.Monitor;
  }
}

export interface MonitorRetrieveListResponse {
  /**
   * A data object containing the result.
   */
  data?: MonitorRetrieveListResponse.Data;

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

export namespace MonitorRetrieveListResponse {
  /**
   * A data object containing the result.
   */
  export interface Data {
    /**
     * An array of objects listing all the monitors. Each object represents one
     * `monitor`.
     */
    list?: Array<MonitorAPI.Monitor>;

    /**
     * An object with pagination details of the search results. Use this object to
     * implement pagination in your application.
     */
    page?: MonitorAPI.Pagination;
  }
}

export interface MonitorCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Use this parameter to add `tags` to the `monitor`. `tags` can be
   * used for filtering monitors in the _Get Monitor List_ operation. They can also
   * be used for easy identification of monitors.
   *
   * Please note that valid `tags` are strings, consisting of alphanumeric characters
   * (A-Z, a-z, 0-9) along with the underscore ('\_') and hyphen ('-') symbols.
   */
  tags: Array<string>;

  /**
   * Body param: Specify the type of activity the `monitor` would detect.
   *
   * The `monitor` will be able to detect the specified `type` of activity and create
   * events for eligible `asset`. A `monitor` can detect following types of asset
   * activity:
   *
   * - `enter`: The `monitor` will create an event when a linked `asset` enters into
   *   the specified geofence.
   *
   * - `exit`: The `monitor` will create an event when a linked `asset` exits the
   *   specified geofence.
   *
   * - `enter_and_exit`: The `monitor` will create an event when a linked `asset`
   *   either enters or exits the specified geofence.
   *
   * - `speeding`: The `monitor` will create an event when a linked `asset` exceeds a
   *   given speed limit.
   *
   * - `idle`: The `monitor` will create an event when a linked `asset` exhibits idle
   *   activity.
   *
   * Please note that `assets` and geofences can be linked to a `monitor` using the
   * `match_filter` and `geofence_config` attributes respectively.
   */
  type: '`enter`' | '`exit`' | '`enter_and_exit`' | '`speeding`' | '`idle`';

  /**
   * Query param: the cluster of the region you want to use
   */
  cluster?: 'america';

  /**
   * Body param: Set a unique ID for the new `monitor`. If not provided, an ID will
   * be automatically generated in UUID format. A valid `custom_id` can contain
   * letters, numbers, "-", & "\_" only.
   *
   * Please note that the ID of an `monitor` can not be changed once it is created.
   */
  custom_id?: string;

  /**
   * Body param: Add a description for your `monitor` using this parameter.
   */
  description?: string;

  /**
   * Body param: Geofences are geographic boundaries surrounding an area of interest.
   * `geofence_config` is used to specify the geofences for creating `enter` or
   * `exit` type of events based on the asset's location. When an asset associated
   * with the `monitor` enters the given geofence, an `enter` type event is created,
   * whereas when the asset moves out of the geofence an `exit` type event is
   * created.
   *
   * Please note that this object is mandatory when the monitor `type` belongs to one
   * of `enter`, `exit` or `enter_and_exit`.
   */
  geofence_config?: MonitorCreateParams.GeofenceConfig;

  /**
   * Body param: **Deprecated. Please use the `geofence_config` to specify the
   * geofence_ids for this monitor.**
   *
   * An array of strings to collect the geofence IDs that should be linked to the
   * `monitor`. Geofences are geographic boundaries that can be used to trigger
   * events based on an asset's location.
   */
  geofence_ids?: Array<string>;

  /**
   * Body param: `idle_config` is used to set up constraints for creating idle
   * events. When an asset associated with the `monitor` has not moved a given
   * distance within a given time, the Live Tracking API can create events to denote
   * such instances. Please note that this object is mandatory when the monitor
   * `type` is `idle`.
   *
   * Let's look at the properties of this object.
   */
  idle_config?: MonitorCreateParams.IdleConfig;

  /**
   * Body param: This object is used to identify the asset(s) on which the `monitor`
   * would be applied.
   */
  match_filter?: MonitorCreateParams.MatchFilter;

  /**
   * Body param: Any valid json object data. Can be used to save customized data. Max
   * size is 65kb.
   */
  meta_data?: Metadata;

  /**
   * Body param: Name of the `monitor`. Use this field to assign a meaningful, custom
   * name to the `monitor` being created.
   */
  name?: string;

  /**
   * Body param: `speeding_config` is used to set up constraints for creating
   * over-speed events. When an `asset` associated with a `monitor` is traveling at a
   * speed above the given limits, the Live Tracking API can create events to denote
   * such instances. There is also an option to set up a tolerance before creating an
   * event. Please note that this object is mandatory when `type=speeding`.
   *
   * Let's look at the properties of this object.
   */
  speeding_config?: MonitorCreateParams.SpeedingConfig;
}

export namespace MonitorCreateParams {
  /**
   * Geofences are geographic boundaries surrounding an area of interest.
   * `geofence_config` is used to specify the geofences for creating `enter` or
   * `exit` type of events based on the asset's location. When an asset associated
   * with the `monitor` enters the given geofence, an `enter` type event is created,
   * whereas when the asset moves out of the geofence an `exit` type event is
   * created.
   *
   * Please note that this object is mandatory when the monitor `type` belongs to one
   * of `enter`, `exit` or `enter_and_exit`.
   */
  export interface GeofenceConfig {
    /**
     * An array of strings to collect the geofence IDs that should be linked to the
     * `monitor`. Please note `geofence_ids` are mandatory when using the
     * `geofence_config` attribute.
     */
    geofence_ids: Array<string>;
  }

  /**
   * `idle_config` is used to set up constraints for creating idle events. When an
   * asset associated with the `monitor` has not moved a given distance within a
   * given time, the Live Tracking API can create events to denote such instances.
   * Please note that this object is mandatory when the monitor `type` is `idle`.
   *
   * Let's look at the properties of this object.
   */
  export interface IdleConfig {
    /**
     * Use this parameter to configure a distance threshold that will be used to
     * determine if the asset was idle or not. If the asset moves by a distance less
     * than the value of this parameter within a certain time period, the `monitor`
     * would create an idle event against the asset. The `distance_tolerance` should be
     * provided in meters.
     *
     * Users can set an appropriate value for this parameter, along with appropriate
     * `time_tolerance` value, to avoid triggering idle events when the asset is
     * crossing a busy intersection or waiting at the traffic lights.
     */
    distance_tolerance: number;

    /**
     * Use this parameter to configure a time duration for which the `monitor` would
     * track the distance covered by an asset before triggering an idle event. The
     * `time_tolerance` should be provided in milliseconds.
     *
     * If the distance covered by the asset during a `time_tolerance` is less than that
     * specified in `distance_tolerance` the asset will be assumed to be idle.
     *
     * Please observe that this attribute along with `distance_tolerance` parameter can
     * be used to control the "sensitivity" of the `monitor` with respect to idle
     * alerts. If the `distance_tolerance` is set a high value, then setting
     * `time_tolerance` to a low value may result in a situation where asset is always
     * judged as idle. On the contrary, it might never be judged as idle if
     * `distance_tolerance` is set to a low value but `time_tolerance` is set to a high
     * value.
     *
     * It is recommended to use these properties with appropriate values to trigger
     * genuine idle events. The appropriate values might depend on the traffic
     * conditions, nature of operations that the asset is involved in, type of asset
     * and other factors.
     */
    time_tolerance?: number;
  }

  /**
   * This object is used to identify the asset(s) on which the `monitor` would be
   * applied.
   */
  export interface MatchFilter {
    /**
     * A string type dictionary object to specify the `attributes`. Only the assets
     * having all of the `attributes` added to this parameter will be linked to this
     * `monitor`. Once an `asset` is linked to a `monitor`, the `monitor` will be able
     * to create events for that `asset` whenever an activity specified in `type` is
     * detected. Multiple attributes should be separated by a comma `,`.
     *
     * Please note that this parameter can not be used in conjunction with
     * `include_any_of_attributes`. Also, the maximum number of `key`:`value` pairs
     * that this parameter can take is 100 and the overall size of the `match_filter`
     * object should not exceed 65kb.
     */
    include_all_of_attributes?: unknown;

    /**
     * A string type dictionary object to specify the `attributes`. The assets having
     * at least one of the `attributes` added to this parameter will be linked to this
     * `monitor`. Once an `asset` is linked to a `monitor`, the `monitor` will be able
     * to create events for that `asset` whenever an activity specified in `type` is
     * detected. Multiple attributes should be separated by a comma `,`.
     *
     * Please note that this parameter can not be used in conjunction with
     * `include_all_of_attributes`. Also, the maximum number of `key`:`value` pairs
     * that this parameter can take is 100 and the overall size of the `match_filter`
     * object should not exceed 65kb.
     */
    include_any_of_attributes?: unknown;
  }

  /**
   * `speeding_config` is used to set up constraints for creating over-speed events.
   * When an `asset` associated with a `monitor` is traveling at a speed above the
   * given limits, the Live Tracking API can create events to denote such instances.
   * There is also an option to set up a tolerance before creating an event. Please
   * note that this object is mandatory when `type=speeding`.
   *
   * Let's look at the properties of this object.
   */
  export interface SpeedingConfig {
    /**
     * Use this parameter to establish the speed limit that will allow the `monitor` to
     * create events, depending on the `time_tolerance` value, when an asset's tracked
     * speed exceeds it. The speed limit should be specified in meters per second.
     *
     * Please note that `customer_speed_limit` is mandatory when
     * `use_admin_speed_limit` is false. However, when `use_admin_speed_limit` is true,
     * `customer_speed_limit` is ineffective.
     */
    customer_speed_limit?: number;

    /**
     * Use this parameter to configure a time tolerance before triggering an event.
     * Adding a tolerance would make the Tracking service wait for the specified time
     * before triggering the event. Consequently, an event is triggered only when the
     * time for which the `asset` has been over-speeding continuously, exceeds the
     * configured tolerance time. The unit for this parameter is milliseconds.
     *
     * It can be seen that this attribute is used to control the "sensitivity" of the
     * `monitor` with respect to speed alerts. Higher the value of `time_tolerance` the
     * less sensitive the `monitor` would be to instances of over-speeding. Conversely,
     * if 'time_tolerance' is set to 0, the `monitor` will be extremely sensitive and
     * will create an event as soon as tracking information with a speed value greater
     * than the specified limit is received.
     */
    time_tolerance?: number;

    /**
     * A boolean attribute to indicate which speed limit values should be used by the
     * `monitor`. When `use_admin_speed_limit` is true, the administrative speed limit
     * of the road on which the asset is located, will be used to generate events when
     * the asset’s tracked speed exceeds it. Whereas, when `use_admin_speed_limit` is
     * false, the `customer_speed_limit` specified will be used to generate events when
     * the asset's tracked speed exceeds it.
     *
     * Please note that if `use_admin_speed_limit` is false, `customer_speed_limit` is
     * mandatory, however, when `use_admin_speed_limit` is true then
     * `customer_speed_limit` is ineffective.
     */
    use_admin_speed_limit?: boolean;
  }
}

export interface MonitorRetrieveParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface MonitorUpdateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Use this parameter to update the `description` of the `monitor`.
   */
  description?: string;

  /**
   * Body param: `geofence_config` is used to update the set of geofences linked to
   * the `monitor` for creating `enter` or `exit` type of events based on the asset's
   * location. Please note that this object is mandatory when the monitor `type`
   * belongs to one of `enter`, `exit` or `enter_and_exit`.
   */
  geofence_config?: MonitorUpdateParams.GeofenceConfig;

  /**
   * Body param: Use this parameter to update the geofences linked to the `monitor`
   * by providing the geofence `id` as `,` separated strings. Geofences are
   * geographic boundaries that can be used to trigger events based on an asset's
   * location.
   */
  geofence_ids?: Array<string>;

  /**
   * Body param: `idle_config` is used to update the constraints for creating idle
   * events. When an asset associated with the `monitor` has not moved a given
   * distance within a given time, the Live Tracking API can create events to denote
   * such instances.
   *
   * Please note that this object is mandatory when the monitor `type` is `idle`.
   */
  idle_config?: MonitorUpdateParams.IdleConfig;

  /**
   * Body param: Use this object to update the `attributes` of the `monitor`. Please
   * note that using this property will overwrite the existing `attributes` that the
   * monitor might be using currently to match any asset(s).
   */
  match_filter?: MonitorUpdateParams.MatchFilter;

  /**
   * Body param: Any valid json object data. Can be used to save customized data. Max
   * size is 65kb.
   */
  meta_data?: Metadata;

  /**
   * Body param: Use this parameter to update the `name` of the `monitor`. Users can
   * add meaningful names to the monitors like "warehouse_exit", "depot_entry" etc.
   */
  name?: string;

  /**
   * Body param: `speeding_config` is used to update the tolerance values for
   * creating over-speed events. When an asset associated with a `monitor` is
   * traveling at a speed above the given limits, Live Tracking API creates events to
   * indicate such instances.
   *
   * Please note that this object is mandatory when the monitor `type` is `speeding`.
   */
  speeding_config?: MonitorUpdateParams.SpeedingConfig;

  /**
   * Body param: Use this parameter to update the `tags` of the `monitor`. `tags` can
   * be used for filtering monitors in the _Get Monitor List_ operation. They can
   * also be used for easy identification of monitors. Using this parameter
   * overwrites the existing `tags` of the monitor.
   *
   * Please note that valid `tags` are strings, consisting of alphanumeric characters
   * (A-Z, a-z, 0-9) along with the underscore ('\_') and hyphen ('-') symbols.
   */
  tags?: Array<string>;

  /**
   * Body param: Use this parameter to update the `type` of the `monitor`. The
   * `monitor` will be able to detect the specified `type` of activity and create
   * events for eligible `asset`. A `monitor` can detect following types of asset
   * activity:
   *
   * - `enter`: The `monitor` will create an event when a linked `asset` enters into
   *   the specified geofence.
   *
   * - `exit`: The `monitor` will create an event when a linked `asset` exits the
   *   specified geofence.
   *
   * - `enter_and_exit`: The `monitor` will create an event when a linked `asset`
   *   either enters or exits the specified geofence.
   *
   * - `speeding`: The `monitor` will create an event when a linked `asset` exceeds a
   *   given speed limit.
   *
   * - `idle`: The `monitor` will create an event when a linked `asset` exhibits idle
   *   activity.
   *
   * Please note that `assets` and geofences can be linked to a `monitor` using the
   * `match_filter` and `geofence_config` attributes respectively.
   */
  type?: '`enter`' | '`exit`' | '`enter_and_exit`' | '`speeding`' | '`idle`';
}

export namespace MonitorUpdateParams {
  /**
   * `geofence_config` is used to update the set of geofences linked to the `monitor`
   * for creating `enter` or `exit` type of events based on the asset's location.
   * Please note that this object is mandatory when the monitor `type` belongs to one
   * of `enter`, `exit` or `enter_and_exit`.
   */
  export interface GeofenceConfig {
    /**
     * Use this array to update the geofence IDs that should be linked to the
     * `monitor`. Please note `geofence_ids` are mandatory when using the
     * `geofence_config` attribute.
     */
    geofence_ids: Array<string>;
  }

  /**
   * `idle_config` is used to update the constraints for creating idle events. When
   * an asset associated with the `monitor` has not moved a given distance within a
   * given time, the Live Tracking API can create events to denote such instances.
   *
   * Please note that this object is mandatory when the monitor `type` is `idle`.
   */
  export interface IdleConfig {
    /**
     * Use this parameter to update the distance threshold that will be used to
     * determine if the asset was idle or not. When the asset, within `time_tolerance`
     * duration, moves less than the value for this parameter, the `monitor` creates an
     * idle event against the `asset`. The `distance_tolerance` should be provided in
     * meters.
     *
     * Please note `distance_tolerance` is mandatory when `idle_config` attribute is
     * used.
     */
    distance_tolerance: number;

    /**
     * Use this parameter to update the time duration for which the `monitor` would
     * track the distance covered by an asset before triggering an idle event. The
     * `time_tolerance` should be provided in milliseconds.
     *
     * If the distance covered by the asset during a `time_tolerance` is less than that
     * specified in `distance_tolerance` the asset will be assumed to be idle.
     *
     * This attribute along with `distance_tolerance` parameter can be used to control
     * the "sensitivity" of the `monitor` with respect to idle alerts. It is
     * recommended to use these properties with appropriate values to trigger genuine
     * idle events. The appropriate values might depend on the traffic conditions,
     * nature of operations that the asset is involved in, type of asset and other
     * factors.
     */
    time_tolerance?: number;
  }

  /**
   * Use this object to update the `attributes` of the `monitor`. Please note that
   * using this property will overwrite the existing `attributes` that the monitor
   * might be using currently to match any asset(s).
   */
  export interface MatchFilter {
    /**
     * A string type dictionary object to specify the `attributes`. Only the assets
     * having all of the `attributes` added to this parameter will be linked to this
     * `monitor`. Once an `asset` is linked to a `monitor`, the `monitor` will be able
     * to create events for that `asset` whenever an activity specified in `type` is
     * detected. Multiple attributes should be separated by a comma `,`.
     *
     * Please note that this parameter can not be used in conjunction with
     * `include_any_of_attributes`. Also, the maximum number of `key`:`value` pairs
     * that this parameter can take is 100 and the overall size of the `match_filter`
     * object should not exceed 65kb.
     */
    include_all_of_attributes?: unknown;

    /**
     * A string type dictionary object to specify the `attributes`. The assets having
     * at least one of the `attributes` added to this parameter will be linked to this
     * `monitor`. Once an `asset` is linked to a `monitor`, the `monitor` will be able
     * to create events for that `asset` whenever an activity specified in `type` is
     * detected. Multiple attributes should be separated by a comma `,`.
     *
     * Please note that this parameter can not be used in conjunction with
     * `include_all_of_attributes`. Also, the maximum number of `key`:`value` pairs
     * that this parameter can take is 100 and the overall size of the `match_filter`
     * object should not exceed 65kb.
     */
    include_any_of_attributes?: unknown;
  }

  /**
   * `speeding_config` is used to update the tolerance values for creating over-speed
   * events. When an asset associated with a `monitor` is traveling at a speed above
   * the given limits, Live Tracking API creates events to indicate such instances.
   *
   * Please note that this object is mandatory when the monitor `type` is `speeding`.
   */
  export interface SpeedingConfig {
    /**
     * Use this parameter to update the speed limit value that the `monitor` will use
     * to create events, depending on the `time_tolerance` value. The speed limit
     * should be specified in meters per second.
     *
     * Please note that `customer_speed_limit` is mandatory when
     * `use_admin_speed_limit` is false. However, when `use_admin_speed_limit` is true,
     * `customer_speed_limit` is ineffective.
     */
    customer_speed_limit?: string;

    /**
     * Use this parameter to update the time tolerance before triggering an event.
     * Adding a tolerance would make the Tracking service wait for the specified time
     * before triggering the event. Consequently, an event is triggered only when the
     * time for which the asset has been over-speeding continuously, exceeds the
     * configured tolerance time. The unit for this parameter is milliseconds.
     *
     * It can be seen that this attribute is used to control the "sensitivity" of the
     * `monitor` with respect to speed alerts. Higher the value of `time_tolerance` the
     * less sensitive the `monitor` would be to instances of over-speeding. Conversely,
     * if 'time_tolerance' is set to 0, the `monitor` will be extremely sensitive and
     * will create an event as soon as tracking information with a speed value greater
     * than the specified limit is received.
     */
    time_tolerance?: number;

    /**
     * Use this attribute to update which speed limit values will be used by the
     * `monitor`. When `use_admin_speed_limit` is true, the administrative speed limit
     * of the road on which the asset is located, is used to generate events when the
     * asset’s tracked speed exceeds it. Whereas, when `use_admin_speed_limit` is
     * false, the `customer_speed_limit` specified will be used to generate events when
     * the asset's tracked speed exceeds it.
     *
     * Please note that if `use_admin_speed_limit` is false, `customer_speed_limit` is
     * mandatory, otherwise when `use_admin_speed_limit` is true then
     * `customer_speed_limit` is ineffective.
     */
    use_admin_speed_limit?: boolean;
  }
}

export interface MonitorDeleteParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface MonitorRetrieveListParams {
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
   * `tags` can be used to filter the monitors. Only those monitors which have all
   * the `tags` provided here, will be included in the search result. In case
   * multiple `tags` need to be specified, use `,` to separate them.
   */
  tags?: string;
}

export declare namespace MonitorResource {
  export {
    type Metadata as Metadata,
    type Monitor as Monitor,
    type Pagination as Pagination,
    type MonitorCreateResponse as MonitorCreateResponse,
    type MonitorRetrieveResponse as MonitorRetrieveResponse,
    type MonitorRetrieveListResponse as MonitorRetrieveListResponse,
    type MonitorCreateParams as MonitorCreateParams,
    type MonitorRetrieveParams as MonitorRetrieveParams,
    type MonitorUpdateParams as MonitorUpdateParams,
    type MonitorDeleteParams as MonitorDeleteParams,
    type MonitorRetrieveListParams as MonitorRetrieveListParams,
  };
}
