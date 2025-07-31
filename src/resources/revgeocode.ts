// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GeocodeAPI from './geocode';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Revgeocode extends APIResource {
  /**
   * Reverse Geocode
   */
  retrieve(
    query: RevgeocodeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RevgeocodeRetrieveResponse> {
    return this._client.get('/revgeocode', { query, ...options });
  }
}

export interface RevgeocodeRetrieveResponse {
  /**
   * The results are presented as a JSON list of candidates in ranked order
   * (most-likely to least-likely) based on the matched location criteria.
   */
  items?: Array<RevgeocodeRetrieveResponse.Item>;
}

export namespace RevgeocodeRetrieveResponse {
  export interface Item {
    /**
     * The unique identifier for the result item.
     */
    id?: string;

    /**
     * An array returning the location coordinates of all the access points of the
     * search result.
     */
    access?: GeocodeAPI.Access;

    /**
     * Postal address of the result item.
     */
    address?: GeocodeAPI.Address;

    /**
     * The list of categories assigned to this place.
     */
    categories?: Array<GeocodeAPI.Categories>;

    /**
     * Contact information like phone, email or website.
     */
    contacts?: Array<GeocodeAPI.Contacts>;

    /**
     * The distance "as the crow flies" from the search center to this result item in
     * meters.
     */
    distance?: number;

    /**
     * The bounding box enclosing the geometric shape (area or line) that an individual
     * result covers. place typed results have no mapView.
     */
    mapView?: GeocodeAPI.MapView;

    /**
     * Returns the operating hours of the place, if available.
     */
    openingHours?: Item.OpeningHours;

    /**
     * Returns the location coordinates of the result.
     */
    position?: GeocodeAPI.Position;

    /**
     * Score of the result. A higher score indicates a closer match.
     */
    scoring?: Item.Scoring;

    /**
     * The localized display name of this result item.
     */
    title?: string;
  }

  export namespace Item {
    /**
     * Returns the operating hours of the place, if available.
     */
    export interface OpeningHours {
      /**
       * A collection of attributes with details about the opening and closing hours for
       * each day of the week.
       */
      timeRanges?: Array<OpeningHours.TimeRange>;
    }

    export namespace OpeningHours {
      export interface TimeRange {
        /**
         * Returns the closing time details.
         */
        endTime?: TimeRange.EndTime;

        /**
         * Returns the open time details.
         */
        startTime?: TimeRange.StartTime;
      }

      export namespace TimeRange {
        /**
         * Returns the closing time details.
         */
        export interface EndTime {
          /**
           * The date to which the subsequent closing time details belong to.
           */
          date?: string;

          /**
           * The hour of the day when the place closes.
           */
          hour?: number;

          /**
           * The minute of the hour when the place closes.
           */
          minute?: number;
        }

        /**
         * Returns the open time details.
         */
        export interface StartTime {
          /**
           * The date to which the subsequent open time details belong to.
           */
          date?: string;

          /**
           * The hour of the day when the place opens.
           */
          hour?: number;

          /**
           * The minute of the hour when the place opens.
           */
          minute?: number;
        }
      }
    }

    /**
     * Score of the result. A higher score indicates a closer match.
     */
    export interface Scoring {
      /**
       * A breakdown of how closely individual field of the result matched with the
       * provided query q.
       */
      fieldScore?: unknown;

      /**
       * A score, out of 1, indicating how closely the result matches with the provided
       * query q .
       */
      queryScore?: number;
    }
  }
}

export interface RevgeocodeRetrieveParams {
  /**
   * Specify the center of the search context expressed as coordinates.
   *
   * Please note that one of "at", "in=circle" or "in=bbox" should be provided for
   * relevant results.
   */
  at: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Search within a geographic area. This is a hard filter. Results will be returned
   * if they are located within the specified area.
   *
   * A geographic area can be
   *
   * - a country (or multiple countries), provided as comma-separated
   *   [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country
   *   codes
   *
   *   The country codes are to be provided in all uppercase.
   *
   *   Format: countryCode:{countryCode}[,{countryCode}]
   *
   * - a circular area, provided as latitude, longitude, and radius (an integer with
   *   meters as unit)
   *
   *   Format: circle:{latitude},{longitude};r={radius}
   *
   * - a bounding box, provided as _west longitude_, _south latitude_, _east
   *   longitude_, _north latitude_
   *
   *   Format: bbox:{west longitude},{south latitude},{east longitude},{north
   *   latitude}
   */
  in?: string;

  /**
   * Select the language to be used for result rendering from a list of
   * [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) compliant language
   * codes.
   */
  lang?: string;
}

export declare namespace Revgeocode {
  export {
    type RevgeocodeRetrieveResponse as RevgeocodeRetrieveResponse,
    type RevgeocodeRetrieveParams as RevgeocodeRetrieveParams,
  };
}
