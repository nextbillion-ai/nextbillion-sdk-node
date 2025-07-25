// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PlaceAPI from './place';
import {
  Place,
  PlaceCreateParams,
  PlaceCreateResponse,
  PlaceDeleteParams,
  PlaceDeleteResponse,
  PlaceItem,
  PlaceRetrieveParams,
  PlaceRetrieveResponse,
  PlaceUpdateParams,
  PlaceUpdateResponse,
} from './place';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Multigeocode extends APIResource {
  place: PlaceAPI.Place = new PlaceAPI.Place(this._client);

  /**
   * The method enables searching for known places from multiple data sources
   *
   * Use this method to find known places in default or your own custom (proprietary)
   * dataset and get a combined search result. It accepts free-form, partially
   * correct or even incomplete search texts. Results would be ranked based on the
   * search score of a place.
   */
  search(params: MultigeocodeSearchParams, options?: RequestOptions): APIPromise<MultigeocodeSearchResponse> {
    const { key, ...body } = params;
    return this._client.post('/multigeocode/search', { query: { key }, body, ...options });
  }
}

export interface MultigeocodeSearchResponse {
  /**
   * An array of objects containing the search result response. Each object
   * represents one place returned in the search response. An empty array would be
   * returned if no matching place is found.
   */
  entities?: Array<MultigeocodeSearchResponse.Entity>;
}

export namespace MultigeocodeSearchResponse {
  export interface Entity {
    /**
     * It contains information about the dataset that returns the specific result
     */
    dataSource?: Entity.DataSource;

    /**
     * The unique NextBillion ID for the result item. This ID can be used as input in
     * “Get Place”, “Update Place”, “Delete Place” methods.
     */
    docId?: string;

    /**
     * This parameter represents the place details, including geographical information,
     * address and other related information.
     */
    place?: Array<PlaceAPI.PlaceItem>;

    /**
     * Integer value representing how good the result is. Higher score indicates a
     * better match between the search query and the result. This can be used to accept
     * or reject the results depending on how “relevant” a result is, for a given use
     * case
     */
    score?: number;
  }

  export namespace Entity {
    /**
     * It contains information about the dataset that returns the specific result
     */
    export interface DataSource {
      /**
       * This parameter represents the unique reference ID associated with the data
       * source.
       */
      refId?: string;

      /**
       * This parameter represents the source of the data.
       */
      source?: string;

      /**
       * This parameter indicates if a place is searchable.
       */
      status?: 'enable' | 'disable';
    }
  }
}

export interface MultigeocodeSearchParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the center of the search context expressed as coordinates.
   */
  at: MultigeocodeSearchParams.At;

  /**
   * Body param: A free-form, complete or incomplete string to be searched. It allows
   * searching for places using keywords or names.
   */
  query: string;

  /**
   * Body param: Specifies the primary city of the place.
   */
  city?: string;

  /**
   * Body param: Country of the search context provided as comma-separated
   * [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country
   * codes.
   * Note: Country codes should be provided in uppercase.
   */
  country?: string;

  /**
   * Body param: Specifies the district of the search place.
   */
  district?: string;

  /**
   * Body param: Sets the maximum number of results to be returned.
   */
  limit?: number;

  /**
   * Body param: Filters the results to places within the specified radius from the
   * 'at' location.
   *
   * Note: Supports 'meter' (m) and 'kilometer' (km) units. If no radius is given,
   * the search method returns as many results as specified in `limit`.
   */
  radius?: string;

  /**
   * Body param: Specifies the state of the search place.
   */
  state?: string;

  /**
   * Body param: Specifies the street name of the search place.
   */
  street?: string;

  /**
   * Body param: Specifies the subDistrict of the search place.
   */
  subDistrict?: string;
}

export namespace MultigeocodeSearchParams {
  /**
   * Specify the center of the search context expressed as coordinates.
   */
  export interface At {
    /**
     * Latitude coordinate of the location
     */
    lat: number;

    /**
     * Longitude coordinate of the location.
     */
    lng: number;
  }
}

Multigeocode.Place = Place;

export declare namespace Multigeocode {
  export {
    type MultigeocodeSearchResponse as MultigeocodeSearchResponse,
    type MultigeocodeSearchParams as MultigeocodeSearchParams,
  };

  export {
    Place as Place,
    type PlaceItem as PlaceItem,
    type PlaceCreateResponse as PlaceCreateResponse,
    type PlaceRetrieveResponse as PlaceRetrieveResponse,
    type PlaceUpdateResponse as PlaceUpdateResponse,
    type PlaceDeleteResponse as PlaceDeleteResponse,
    type PlaceCreateParams as PlaceCreateParams,
    type PlaceRetrieveParams as PlaceRetrieveParams,
    type PlaceUpdateParams as PlaceUpdateParams,
    type PlaceDeleteParams as PlaceDeleteParams,
  };
}
