// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MonitorAPI from '../monitor';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Event extends APIResource {
  /**
   * Event History of an Asset
   */
  list(id: string, query: EventListParams, options?: RequestOptions): APIPromise<EventListResponse> {
    return this._client.get(path`/skynet/asset/${id}/event/list`, { query, ...options });
  }
}

export interface EventListResponse {
  /**
   * An object containing the information about the event history for the requested
   * `asset`.
   */
  data?: EventListResponse.Data;

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

export namespace EventListResponse {
  /**
   * An object containing the information about the event history for the requested
   * `asset`.
   */
  export interface Data {
    /**
     * An array of objects with each object on the list representing one event.
     */
    list?: Array<Data.List>;

    /**
     * An object with pagination details of the search results. Use this object to
     * implement pagination in your application.
     */
    page?: MonitorAPI.Pagination;
  }

  export namespace Data {
    export interface List {
      /**
       * ID of the `asset`. This is the same ID that was generated/provided at the time
       * of creating the `asset`.
       */
      asset_id?: string;

      /**
       * Nature of the event triggered by the `asset`. It can have following values:
       *
       * - `enter`: When the `asset` enters a specific geofence
       *
       * - `exit`: When the `asset` moves out of a specific geofence.
       *
       * - `speeding`: When the `asset` exceeds the certain speed limit.
       *
       * - `idle`: When the `asset` exhibits idle or no activity.
       */
      event_type?: '`enter`' | '`exit`' | '`speeding`' | '`idle`';

      /**
       * Additional information about the event. Currently, this object returns the speed
       * limit that was used to generate the over-speeding events, for a `speeding` type
       * event.
       *
       * It is worth highlighting that, when the `use_admin_speed_limit` is `true`, the
       * speed limit value will be obtained from the underlying road information.
       * Whereas, if the `use_admin_speed_limit` is `false`, the speed limit will be
       * equal to the `customer_speed_limit` value provided by the user when creating or
       * updating the `monitor`.
       */
      extra?: unknown;

      /**
       * ID of the `geofence` associated with the event.
       */
      geofence_id?: string;

      /**
       * ID of the `monitor` associated with the event.
       */
      monitor_id?: string;

      /**
       * Tags associated with the `monitor`.
       */
      monitor_tags?: Array<string>;

      /**
       * An object with details of the `asset` at the last tracked location before the
       * event was triggered.
       */
      prev_location?: List.PrevLocation;

      /**
       * A UNIX epoch timestamp in milliseconds representing the time at which the event
       * was added/created.
       */
      timestamp?: number;

      /**
       * An object with details of the `asset` at the location where the event was
       * triggered.
       */
      triggered_location?: List.TriggeredLocation;

      /**
       * A UNIX epoch timestamp in milliseconds representing the time at which the event
       * was triggered.
       */
      triggered_timestamp?: number;
    }

    export namespace List {
      /**
       * An object with details of the `asset` at the last tracked location before the
       * event was triggered.
       */
      export interface PrevLocation {
        /**
         * If available, this property returns the heading of the `asset` from true north
         * in clockwise direction, at the `prev_location` tracked for the `asset`.
         */
        bearing?: number;

        /**
         * `prev_location` information of the `asset`.
         */
        location?: PrevLocation.Location;

        /**
         * Returns the custom data added during the location information upload.
         */
        meta_data?: unknown;

        /**
         * If available, this property returns the speed of the `asset`, in meters per
         * second, at the `prev_location` of the `asset`.
         */
        speed?: number;

        /**
         * A UNIX epoch timestamp in milliseconds representing the time at which the
         * `asset` was at the `prev_location`.
         */
        timestamp?: number;
      }

      export namespace PrevLocation {
        /**
         * `prev_location` information of the `asset`.
         */
        export interface Location {
          /**
           * Latitude of the `prev_location` tracked for the `asset`.
           */
          lat?: number;

          /**
           * Longitude of the `prev_location` tracked for the `asset`.
           */
          lon?: number;
        }
      }

      /**
       * An object with details of the `asset` at the location where the event was
       * triggered.
       */
      export interface TriggeredLocation {
        /**
         * If available, this property returns the heading of the `asset` from true north
         * in clockwise direction, when the event was triggered.
         */
        bearing?: number;

        /**
         * An object with information about the location at which the event was triggered.
         */
        location?: TriggeredLocation.Location;

        /**
         * Returns the custom data added during the location information upload.
         */
        meta_data?: unknown;

        /**
         * If available, this property returns the speed of the `asset`, in meters per
         * second, when the event was triggered.
         */
        speed?: number;

        /**
         * A UNIX epoch timestamp in milliseconds representing the time at which the
         * `asset` was at the `triggered_location`.
         */
        timestamp?: number;
      }

      export namespace TriggeredLocation {
        /**
         * An object with information about the location at which the event was triggered.
         */
        export interface Location {
          /**
           * Latitude of the `triggered_location` of the event.
           */
          lat?: number;

          /**
           * Longitude of the `triggered_location` of the event.
           */
          lon?: number;
        }
      }
    }
  }
}

export interface EventListParams {
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
   * Time before which the events triggered by the `asset` need to be retrieved.
   */
  end_time?: number;

  /**
   * Filter the events by `monitor_id`. When provided, only the events triggered by
   * the `monitor` will be returned in response.
   *
   * Please note that if the `attributes` of the asset identified by `id` and those
   * of the `monitor` do not match, then no events might be returned for this
   * `monitor_id`.
   */
  monitor_id?: string;

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
   * Time after which the events triggered by the `asset` need to be retrieved.
   */
  start_time?: number;
}

export declare namespace Event {
  export { type EventListResponse as EventListResponse, type EventListParams as EventListParams };
}
