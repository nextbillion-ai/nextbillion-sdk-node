// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GeocodeAPI from './geocode';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Geocode extends APIResource {
  /**
   * Geocode
   */
  retrieve(query: GeocodeRetrieveParams, options?: RequestOptions): APIPromise<GeocodeRetrieveResponse> {
    return this._client.get('/geocode', { query, ...options });
  }

  /**
   * Batch Geocode
   */
  batchCreate(
    params: GeocodeBatchCreateParams,
    options?: RequestOptions,
  ): APIPromise<GeocodeBatchCreateResponse> {
    const { key, body } = params;
    return this._client.post('/geocode/batch', { query: { key }, body: body, ...options });
  }

  /**
   * Structured Geocode
   */
  structuredRetrieve(
    query: GeocodeStructuredRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GeocodeStructuredRetrieveResponse> {
    return this._client.get('/geocode/structured', { query, ...options });
  }
}

/**
 * An array returning the location coordinates of all the access points of the
 * search result.
 */
export interface Access {
  /**
   * The latitude of the access point of the search result.
   */
  lat?: number;

  /**
   * The longitude of the access point of the search result.
   */
  lng?: number;
}

/**
 * Postal address of the result item.
 */
export interface Address {
  /**
   * The name of the primary locality of the place.
   */
  city?: string;

  /**
   * A three-letter country code.
   */
  countryCode?: string;

  /**
   * The localised country name.
   */
  countryName?: string;

  /**
   * A division of a state; typically, a secondary-level administrative division of a
   * country or equivalent.
   */
  county?: string;

  /**
   * A division of city; typically an administrative unit within a larger city or a
   * customary name of a city's neighborhood.
   */
  district?: string;

  /**
   * House number of the returned place, if available.
   */
  houseNumber?: string;

  /**
   * Assembled address value built out of the address components according to the
   * regional postal rules. These are the same rules for all endpoints. It may not
   * include all the input terms.
   */
  label?: string;

  /**
   * An alphanumeric string included in a postal address to facilitate mail sorting,
   * such as post code, postcode, or ZIP code.
   */
  postalCode?: string;

  /**
   * The state division of a country.
   */
  state?: string;

  /**
   * A country specific state code or state name abbreviation. For example, in the
   * United States it is the two letter state abbreviation: "CA" for California.
   */
  stateCode?: string;

  /**
   * Name of street of the returned place, if available.
   */
  street?: string;
}

export interface Categories {
  /**
   * Identifier number for an associated category.
   */
  id?: string;

  /**
   * Name of the place category in the result item language.
   */
  name?: string;

  /**
   * Whether or not it is a primary category. This field is visible only when the
   * value is 'true'.
   */
  primary?: string;
}

export interface ContactObject {
  /**
   * The list of place categories this contact refers to.
   */
  categories?: Array<ContactObject.Category>;

  /**
   * Optional label for the contact string, such as "Customer Service" or "Pharmacy
   * Fax".
   */
  label?: string;

  /**
   * Contact information, as specified by the contact type.
   */
  value?: string;
}

export namespace ContactObject {
  export interface Category {
    /**
     * Identifier number for an associated category. For example: "900-9300-0000"
     */
    id?: string;
  }
}

export interface Contacts {
  email?: Array<ContactObject>;

  fax?: Array<ContactObject>;

  mobile?: Array<ContactObject>;

  phone?: Array<ContactObject>;

  tollFree?: Array<ContactObject>;

  www?: Array<ContactObject>;
}

/**
 * The bounding box enclosing the geometric shape (area or line) that an individual
 * result covers. `place` typed results have no `mapView`.
 */
export interface MapView {
  /**
   * Longitude of the eastern-side of the box.
   */
  east?: string;

  /**
   * Longitude of the northern-side of the box.
   */
  north?: string;

  /**
   * Longitude of the southern-side of the box.
   */
  south?: string;

  /**
   * Longitude of the western-side of the box.
   */
  west?: string;
}

/**
 * Returns the location coordinates of the result.
 */
export interface Position {
  /**
   * The latitude of the searched place.
   */
  lat?: string;

  /**
   * The longitude of the searched place.
   */
  lng?: string;
}

export interface GeocodeRetrieveResponse {
  /**
   * The results are presented as a JSON list of candidates in ranked order
   * (most-likely to least-likely) based on the matched location criteria.
   */
  items?: Array<GeocodeRetrieveResponse.Item>;
}

export namespace GeocodeRetrieveResponse {
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
     * result covers. `place` typed results have no `mapView`.
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
       * provided query `q`.
       */
      fieldScore?: unknown;

      /**
       * A score, out of 1, indicating how closely the result matches with the provided
       * query `q` .
       */
      queryScore?: number;
    }
  }
}

export interface GeocodeBatchCreateResponse {
  /**
   * The results are presented as a JSON list of candidates in ranked order
   * (most-likely to least-likely) based on the matched location criteria.
   */
  items?: Array<GeocodeBatchCreateResponse.Item>;
}

export namespace GeocodeBatchCreateResponse {
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
     * result covers. `place` typed results have no `mapView`.
     */
    mapView?: GeocodeAPI.MapView;

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
     * Score of the result. A higher score indicates a closer match.
     */
    export interface Scoring {
      /**
       * A breakdown of how closely individual field of the result matched with the
       * provided query `q`.
       */
      fieldScore?: unknown;

      /**
       * A score, out of 1, indicating how closely the result matches with the provided
       * query `q` .
       */
      queryScore?: number;
    }
  }
}

export interface GeocodeStructuredRetrieveResponse {
  /**
   * The results are presented as a JSON list of candidates in ranked order
   * (most-likely to least-likely) based on the matched location criteria.
   */
  items?: Array<GeocodeStructuredRetrieveResponse.Item>;
}

export namespace GeocodeStructuredRetrieveResponse {
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
     * result covers. `place` typed results have no `mapView`.
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
       * provided query `q`.
       */
      fieldScore?: unknown;

      /**
       * A score, out of 1, indicating how closely the result matches with the provided
       * query `q` .
       */
      queryScore?: number;
    }
  }
}

export interface GeocodeRetrieveParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Specify the free-text search query.
   *
   * Please note that whitespace, urls, email addresses, or other out-of-scope
   * queries will yield no results.
   */
  q: string;

  /**
   * Specify the center of the search context expressed as coordinates.
   *
   * Please note that one of "at", "in=circle" or "in=bbox" should be provided for
   * relevant results.
   */
  at?: string;

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
   *   Format: `countryCode:{countryCode}[,{countryCode}]`
   *
   * - a circular area, provided as latitude, longitude, and radius (an integer with
   *   meters as unit)
   *
   *   Format: `circle:{latitude},{longitude};r={radius}`
   *
   * - a bounding box, provided as _west longitude_, _south latitude_, _east
   *   longitude_, _north latitude_
   *
   *   Format:
   *   `bbox:{west longitude},{south latitude},{east longitude},{north latitude}`
   *
   * Please provide one of 'at', 'in=circle' or 'in=bbox' input for a relevant
   * result.
   */
  in?: string;

  /**
   * Select the language to be used for result rendering from a list of
   * [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) compliant language
   * codes.
   */
  lang?: string;

  /**
   * Sets the maximum number of results to be returned.
   */
  limit?: number;
}

export interface GeocodeBatchCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param:
   */
  body: Array<GeocodeBatchCreateParams.Body>;
}

export namespace GeocodeBatchCreateParams {
  export interface Body {
    /**
     * Specify the free-text search query. Please note that whitespace, urls, email
     * addresses, or other out-of-scope queries will yield no results.
     */
    q: string;

    /**
     * Specify the center of the search context expressed as coordinates.
     *
     * Please note that one of "at", "in=circle" or "in=bbox" should be provided for
     * relevant results.
     */
    at?: string;

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
     *   Format: `countryCode:{countryCode}[,{countryCode}]`
     *
     * - a circular area, provided as latitude, longitude, and radius (an integer with
     *   meters as unit)
     *
     *   Format: `circle:{latitude},{longitude};r={radius}`
     *
     * - a bounding box, provided as _west longitude_, _south latitude_, _east
     *   longitude_, _north latitude_
     *
     *   Format:
     *   `bbox:{west longitude},{south latitude},{east longitude},{north latitude}`
     *
     * Please provide one of 'at', 'in=circle' or 'in=bbox' input for a relevant
     * result.
     */
    in?: string;

    /**
     * Select the language to be used for result rendering from a list of
     * [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) compliant language
     * codes.
     */
    lang?: string;

    /**
     * Maximum number of results to be returned. Please note that the minimum value
     * that can be provided is 1 and the maximum that can be provided is 100.
     */
    limit?: number;
  }
}

export interface GeocodeStructuredRetrieveParams {
  /**
   * Specify a valid
   * [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country
   * code in which the place being searched should be located. Please note that this
   * is a case-sensitive field and the country code should be in all uppercase.
   */
  countryCode: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Specify the center of the search context expressed as coordinates.
   *
   * Please note that one of "at", "in=circle" or "in=bbox" should be provided for
   * relevant results.
   */
  at?: string;

  /**
   * Specify the city in which the place being searched should be located.
   */
  city?: string;

  /**
   * Specify the county division of the state in which the place being searched
   * should be located.
   */
  county?: string;

  /**
   * Specify the house number of the place being searched.
   */
  houseNumber?: string;

  /**
   * Search within a geographic area. This is a hard filter. Results will be returned
   * if they are located within the specified area.
   *
   * A geographic area can be
   *
   * - a circular area, provided as latitude, longitude, and radius (an integer with
   *   meters as unit)
   *
   *   Format: `circle:{latitude},{longitude};r={radius}`
   *
   * - a bounding box, provided as _west longitude_, _south latitude_, _east
   *   longitude_, _north latitude_
   *
   *   Format:
   *   `bbox:{west longitude},{south latitude},{east longitude},{north latitude}`
   *
   * Please provide one of 'at', 'in=circle' or 'in=bbox' input for a relevant
   * result.
   */
  in?: string;

  /**
   * Sets the maximum number of results to be returned.
   */
  limit?: number;

  /**
   * Specify the postal code in which the place being searched should be located.
   */
  postalCode?: string;

  /**
   * Specify the state division of the country in which the place being searched
   * should be located.
   */
  state?: string;

  /**
   * Specify the name of the street in which the place being searched should be
   * located.
   */
  street?: string;
}

export declare namespace Geocode {
  export {
    type Access as Access,
    type Address as Address,
    type Categories as Categories,
    type ContactObject as ContactObject,
    type Contacts as Contacts,
    type MapView as MapView,
    type Position as Position,
    type GeocodeRetrieveResponse as GeocodeRetrieveResponse,
    type GeocodeBatchCreateResponse as GeocodeBatchCreateResponse,
    type GeocodeStructuredRetrieveResponse as GeocodeStructuredRetrieveResponse,
    type GeocodeRetrieveParams as GeocodeRetrieveParams,
    type GeocodeBatchCreateParams as GeocodeBatchCreateParams,
    type GeocodeStructuredRetrieveParams as GeocodeStructuredRetrieveParams,
  };
}
