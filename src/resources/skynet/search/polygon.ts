// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SearchAPI from './search';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Polygon extends APIResource {
  /**
   * Polygon Search
   */
  create(params: PolygonCreateParams, options?: RequestOptions): APIPromise<SearchAPI.SearchResponse> {
    const { key, ...body } = params;
    return this._client.post('/skynet/search/polygon', { query: { key }, body, ...options });
  }

  /**
   * Polygon Search
   */
  list(query: PolygonListParams, options?: RequestOptions): APIPromise<SearchAPI.SearchResponse> {
    return this._client.get('/skynet/search/polygon', { query, ...options });
  }
}

export interface PolygonCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: An object to collect geoJSON details of a custom polygon. Please
   * ensure that:
   *
   * - the `polygon` provided is enclosed. This can be achieved by making the last
   *   location coordinate in the list equal to the first location coordinate of the
   *   list.
   *
   * - the 'polygon' provided does not contain multiple rings.
   *
   * The contents of this object follow the
   * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
   *
   * Please note that the maximum area of the search polygon allowed is 3000
   * km<sup>2</sup>.
   */
  polygon: PolygonCreateParams.Polygon;

  /**
   * Body param: **`tags` parameter will be deprecated soon! Please use the
   * `include_any_of_attributes` or `include_all_of_attributes` parameters to match
   * assets based on their labels or markers.**
   *
   * Use this parameter to filter the assets found inside the specified area by their
   * `tag`. Multiple `tag` can be separated using comma (`,`).
   *
   * Please note the tags are case sensitive.
   */
  filter?: string;

  /**
   * Body param: An object to define the `attributes` which will be used to filter
   * the assets found within the `polygon`.
   */
  match_filter?: PolygonCreateParams.MatchFilter;

  /**
   * Body param: if ture, can get 16x bigger limitation in search.
   */
  max_search_limit?: boolean;

  /**
   * Body param: Denotes page number. Use this along with the `ps` parameter to
   * implement pagination for your searched results. This parameter does not have a
   * maximum limit but would return an empty response in case a higher value is
   * provided when the result-set itself is smaller.
   */
  pn?: number;

  /**
   * Body param: Denotes number of search results per page. Use this along with the
   * `pn` parameter to implement pagination for your searched results. Please note
   * that `ps` has a default value of 20 and accepts integers only in the range of
   * [1, 100].
   */
  ps?: number;

  /**
   * Body param:
   */
  sort?: PolygonCreateParams.Sort;
}

export namespace PolygonCreateParams {
  /**
   * An object to collect geoJSON details of a custom polygon. Please ensure that:
   *
   * - the `polygon` provided is enclosed. This can be achieved by making the last
   *   location coordinate in the list equal to the first location coordinate of the
   *   list.
   *
   * - the 'polygon' provided does not contain multiple rings.
   *
   * The contents of this object follow the
   * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
   *
   * Please note that the maximum area of the search polygon allowed is 3000
   * km<sup>2</sup>.
   */
  export interface Polygon {
    /**
     * An array of coordinates in the [longitude, latitude] format, representing the
     * polygon boundary.
     */
    coordinates: Array<number>;

    /**
     * Type of the geoJSON geometry. Should always be `polygon`.
     */
    type: string;
  }

  /**
   * An object to define the `attributes` which will be used to filter the assets
   * found within the `polygon`.
   */
  export interface MatchFilter {
    /**
     * Use this parameter to filter the assets found inside the specified area by their
     * `attributes`. Only the assets having all the `attributes` that are added to this
     * parameter, will be returned in the search results. Multiple `attributes` can be
     * separated using commas (`,`).
     *
     * Please note the attributes are case sensitive. Also, this parameter can not be
     * used in conjunction with `include_any_of_attributes` parameter.
     */
    include_all_of_attributes?: string;

    /**
     * Use this parameter to filter the assets found inside the specified area by their
     * `attributes`. Assets having at least one of the `attributes` added to this
     * parameter, will be returned in the search results. Multiple `attributes` can be
     * separated using commas (`,`).
     *
     * Please note the attributes are case sensitive. Also, this parameter can not be
     * used in conjunction with `include_all_of_attributes` parameter.
     */
    include_any_of_attributes?: string;
  }

  export interface Sort {
    /**
     * Specify the metric to sort the assets returned in the search result. The valid
     * values are:
     *
     * - **distance** : Sorts the assets by driving distance to the given
     *   `sort_destination` .
     * - **duration** : Sorts the assets by travel time to the given `sort_destination`
     *   .
     * - **straight_distance** : Sort the assets by straight-line distance to the given
     *   `sort-destination` .
     */
    sort_by?: '`distance`' | '`duration`' | '`straight_distance`';

    /**
     * Specifies the location coordinates of the point which acts as destination for
     * sorting the assets in the search results. The service will sort each asset based
     * on the driving distance or travel time to this destination, from its current
     * location. Use the `sort_by` parameter to configure the metric that should be
     * used for sorting the assets. Please note that `sort_destination` is required
     * when `sort_by` is provided.
     */
    sort_destination?: Sort.SortDestination;

    /**
     * Specifies the driving mode to be used for determining travel duration or driving
     * distance for sorting the assets in search result.
     */
    sort_driving_mode?: '`car`' | '`truck`';
  }

  export namespace Sort {
    /**
     * Specifies the location coordinates of the point which acts as destination for
     * sorting the assets in the search results. The service will sort each asset based
     * on the driving distance or travel time to this destination, from its current
     * location. Use the `sort_by` parameter to configure the metric that should be
     * used for sorting the assets. Please note that `sort_destination` is required
     * when `sort_by` is provided.
     */
    export interface SortDestination {
      /**
       * Latitude of the destination location
       */
      lat: number;

      /**
       * Longitude of the destination location
       */
      lon: number;
    }
  }
}

export interface PolygonListParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Define a custom polygon enclosing the area to be searched. It should be a pipe
   * (`|`) delimited list of location coordinates.
   *
   * Please ensure that the `polygon` provided is enclosed. This can be achieved by
   * making the last location coordinate in the list equal to the first location
   * coordinate of the list.
   *
   * Please note that the maximum area of the search polygon allowed is 3000
   * km<sup>2</sup>.
   */
  polygon: string;

  /**
   * **`tags` parameter will be deprecated soon! Please use the
   * `include_any_of_attributes` or `include_all_of_attributes` parameters to match
   * assets based on their labels or markers.**
   *
   * Use this parameter to filter the assets found inside the specified area by their
   * `tags`. Multiple `tags` can be separated using commas (`,`).
   *
   * Please note the tags are case sensitive.
   */
  filter?: string;

  /**
   * Use this parameter to filter the assets found inside the specified area by their
   * `attributes`. Only the assets having all the `attributes` that are added to this
   * parameter, will be returned in the search results. Multiple `attributes` can be
   * separated using pipes (`|`).
   *
   * Please note the attributes are case sensitive. Also, this parameter can not be
   * used in conjunction with `include_any_of_attributes` parameter.
   */
  include_all_of_attributes?: string;

  /**
   * Use this parameter to filter the assets found inside the specified area by their
   * `attributes`. Assets having at least one of the `attributes` added to this
   * parameter, will be returned in the search results. Multiple `attributes` can be
   * separated using pipes (`|`).
   *
   * Please note the attributes are case sensitive. Also, this parameter can not be
   * used in conjunction with `include_all_of_attributes` parameter.
   */
  include_any_of_attributes?: string;

  /**
   * When true, the maximum limit is 20Km for around search API and 48000 Km2 for
   * other search methods.
   */
  max_search_limit?: boolean;

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
   * Specify the metric to sort the assets returned in the search result. The valid
   * values are:
   *
   * - **distance** : Sorts the assets by driving distance to the given
   *   `sort_destination` .
   * - **duration** : Sorts the assets by travel time to the given `sort_destination`
   *   .
   * - **straight_distance** : Sort the assets by straight-line distance to the given
   *   `sort-destination` .
   */
  sort_by?: '`distance`' | '`duration`' | '`straight_distance`';

  /**
   * Specifies the location coordinates of the point which acts as destination for
   * sorting the assets in the search results. The service will sort each asset based
   * on the driving distance or travel time to this destination, from its current
   * location. Use the `sort_by` parameter to configure the metric that should be
   * used for sorting the assets. Please note that `sort_destination` is required
   * when `sort_by` is provided.
   */
  sort_destination?: string;

  /**
   * Specifies the driving mode to be used for determining travel duration or driving
   * distance for sorting the assets in search result.
   */
  sort_driving_mode?: '`car`' | '`truck`';
}

export declare namespace Polygon {
  export { type PolygonCreateParams as PolygonCreateParams, type PolygonListParams as PolygonListParams };
}
