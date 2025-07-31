// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MonitorAPI from '../monitor';
import * as AssetAPI from '../asset/asset';
import * as LocationAPI from '../asset/location';
import * as PolygonAPI from './polygon';
import { Polygon, PolygonCreateParams, PolygonGetParams } from './polygon';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Search extends APIResource {
  polygon: PolygonAPI.Polygon = new PolygonAPI.Polygon(this._client);

  /**
   * Around Search
   */
  around(query: SearchAroundParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.get('/skynet/search/around', { query, ...options });
  }

  /**
   * Bound Search
   */
  bound(query: SearchBoundParams, options?: RequestOptions): APIPromise<SearchResponse> {
    return this._client.get('/skynet/search/bound', { query, ...options });
  }
}

export interface SearchResponse {
  /**
   * A data object containing the search result.
   */
  data?: SearchResponse.Data;

  /**
   * Displays the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  message?: string;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be Ok. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace SearchResponse {
  /**
   * A data object containing the search result.
   */
  export interface Data {
    /**
     * An array of objects with details of the asset(s) returned in the search result.
     * Each object represents one asset
     */
    assets?: Array<Data.Asset>;

    /**
     * An object with pagination details of the search results. Use this object to
     * implement pagination in your application.
     */
    page?: MonitorAPI.Pagination;
  }

  export namespace Data {
    export interface Asset {
      /**
       * ID of asset which was last located inside the specified area in the input
       * request. This is the same ID that was generated/provided at the time of creating
       * the asset.
       */
      id?: string;

      /**
       * A UNIX timestamp in seconds representing the time at which the asset was
       * created.
       */
      created_at?: number;

      /**
       * Description of the asset. The value would be the same as that provided for the
       * description parameter at the time of creating or updating the asset.
       */
      description?: string;

      /**
       * An object with details of the tracked location. Please note that if there are no
       * tracking records for an asset, no location data will be returned.
       */
      latest_location?: LocationAPI.TrackLocation;

      /**
       * Any valid json object data. Can be used to save customized data. Max size is
       * 65kb.
       */
      meta_data?: AssetAPI.MetaData;

      /**
       * Name of asset. The value would be the same as that provided for the name
       * parameter at the time of creating or updating the asset.
       */
      name?: string;

      /**
       * An object returning the sorting details of the asset as per the configuration
       * specified in the input.
       */
      ranking_info?: Asset.RankingInfo;

      /**
       * **This parameter will be deprecated soon! Please move existing tags to
       * attributes parameter.**
       *
       * Tags associated with the asset.
       */
      tags?: Array<string>;

      /**
       * A UNIX epoch timestamp in seconds representing the last time when the asset was
       * tracked.
       */
      tracked_at?: number;

      /**
       * A UNIX timestamp in seconds representing the time at which the asset was last
       * updated.
       */
      updated_at?: number;
    }

    export namespace Asset {
      /**
       * An object returning the sorting details of the asset as per the configuration
       * specified in the input.
       */
      export interface RankingInfo {
        /**
         * Driving distance between the asset and the sort_destination.
         */
        distance?: number;

        /**
         * Driving duration between the asset and the sort_destination. Please note this
         * field in not returned in the response when sort_by = straight_distance .
         */
        duration?: number;

        /**
         * Index of the ranked asset. The index value starts from 0.
         */
        index?: number;
      }
    }
  }
}

export interface SearchAroundParams {
  /**
   * Location coordinates of the point which would act as the center of the circular
   * area to be searched.
   */
  center: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Radius, in meters, of the circular area to be searched.
   */
  radius: number;

  /**
   * **tags parameter will be deprecated soon! Please use the
   * include_any_of_attributes or include_all_of_attributes parameters to match
   * assets based on their labels or markers.**
   *
   * Use this parameter to filter the assets found inside the specified area by their
   * tags. Multiple tags can be separated using commas (,).
   *
   * Please note the tags are case sensitive.
   */
  filter?: string;

  /**
   * Use this parameter to filter the assets found inside the specified area by their
   * attributes. Only the assets having all the attributes that are added to this
   * parameter, will be returned in the search results. Multiple attributes can be
   * separated using pipes (|).
   *
   * Please note the attributes are case sensitive. Also, this parameter can not be
   * used in conjunction with include_any_of_attributes parameter.
   */
  include_all_of_attributes?: string;

  /**
   * Use this parameter to filter the assets found inside the specified area by their
   * attributes. Assets having at least one of the attributes added to this
   * parameter, will be returned in the search results. Multiple attributes can be
   * separated using pipes (|).
   *
   * Please note the attributes are case sensitive. Also, this parameter can not be
   * used in conjunction with include_all_of_attributes parameter.
   */
  include_any_of_attributes?: string;

  /**
   * When true, the maximum limit is 20Km for around search API and 48000 Km2 for
   * other search methods.
   */
  max_search_limit?: boolean;

  /**
   * Denotes page number. Use this along with the ps parameter to implement
   * pagination for your searched results. This parameter does not have a maximum
   * limit but would return an empty response in case a higher value is provided when
   * the result-set itself is smaller.
   */
  pn?: number;

  /**
   * Denotes number of search results per page. Use this along with the pn parameter
   * to implement pagination for your searched results.
   */
  ps?: number;

  /**
   * Specify the metric to sort the assets returned in the search result. The valid
   * values are:
   *
   * - **distance** : Sorts the assets by driving distance to the given
   *   sort_destination .
   * - **duration** : Sorts the assets by travel time to the given sort_destination .
   * - **straight_distance** : Sort the assets by straight-line distance to the given
   *   sort-destination .
   */
  sort_by?: 'distance' | 'duration' | 'straight_distance';

  /**
   * Specifies the location coordinates of the point which acts as destination for
   * sorting the assets in the search results. The service will sort each asset based
   * on the driving distance or travel time to this destination, from its current
   * location. Use the sort_by parameter to configure the metric that should be used
   * for sorting the assets. Please note that sort_destination is required when
   * sort_by is provided.
   */
  sort_destination?: string;

  /**
   * Specifies the driving mode to be used for determining travel duration or driving
   * distance for sorting the assets in search result.
   */
  sort_driving_mode?: 'car' | 'truck';
}

export interface SearchBoundParams {
  /**
   * Specify two, pipe (|) delimited location coordinates which would act as corners
   * of the bounding box area to be searched. The first one should be the southwest
   * coordinate of the bounds and the second one should be the northeast coordinate
   * of the bounds.
   */
  bound: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * **tags parameter will be deprecated soon! Please use the
   * include_any_of_attributes or include_all_of_attributes parameters to match
   * assets based on their labels or markers.**
   *
   * Use this parameter to filter the assets found inside the specified area by their
   * tags. Multiple tags can be separated using commas (,).
   *
   * Please note the tags are case sensitive.
   */
  filter?: string;

  /**
   * Use this parameter to filter the assets found inside the specified area by their
   * attributes. Only the assets having all the attributes that are added to this
   * parameter, will be returned in the search results. Multiple attributes can be
   * separated using pipes (|).
   *
   * Please note the attributes are case sensitive. Also, this parameter can not be
   * used in conjunction with include_any_of_attributes parameter.
   */
  include_all_of_attributes?: string;

  /**
   * Use this parameter to filter the assets found inside the specified area by their
   * attributes. Assets having at least one of the attributes added to this
   * parameter, will be returned in the search results. Multiple attributes can be
   * separated using pipes (|).
   *
   * Please note the attributes are case sensitive. Also, this parameter can not be
   * used in conjunction with include_all_of_attributes parameter.
   */
  include_any_of_attributes?: string;

  /**
   * When true, the maximum limit is 20Km for around search API and 48000 Km2 for
   * other search methods.
   */
  max_search_limit?: boolean;

  /**
   * Denotes page number. Use this along with the ps parameter to implement
   * pagination for your searched results. This parameter does not have a maximum
   * limit but would return an empty response in case a higher value is provided when
   * the result-set itself is smaller.
   */
  pn?: number;

  /**
   * Denotes number of search results per page. Use this along with the pn parameter
   * to implement pagination for your searched results.
   */
  ps?: number;

  /**
   * Specify the metric to sort the assets returned in the search result. The valid
   * values are:
   *
   * - **distance** : Sorts the assets by driving distance to the given
   *   sort_destination .
   * - **duration** : Sorts the assets by travel time to the given sort_destination .
   * - **straight_distance** : Sort the assets by straight-line distance to the given
   *   sort-destination .
   */
  sort_by?: 'distance' | 'duration' | 'straight_distance';

  /**
   * Specifies the location coordinates of the point which acts as destination for
   * sorting the assets in the search results. The service will sort each asset based
   * on the driving distance or travel time to this destination, from its current
   * location. Use the sort_by parameter to configure the metric that should be used
   * for sorting the assets. Please note that sort_destination is required when
   * sort_by is provided.
   */
  sort_destination?: string;

  /**
   * Specifies the driving mode to be used for determining travel duration or driving
   * distance for sorting the assets in search result.
   */
  sort_driving_mode?: 'car' | 'truck';
}

Search.Polygon = Polygon;

export declare namespace Search {
  export {
    type SearchResponse as SearchResponse,
    type SearchAroundParams as SearchAroundParams,
    type SearchBoundParams as SearchBoundParams,
  };

  export {
    Polygon as Polygon,
    type PolygonCreateParams as PolygonCreateParams,
    type PolygonGetParams as PolygonGetParams,
  };
}
