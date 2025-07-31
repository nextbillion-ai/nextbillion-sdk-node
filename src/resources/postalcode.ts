// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Postalcode extends APIResource {
  /**
   * Retrieve coordinates by postal code
   */
  retrieveCoordinates(
    params: PostalcodeRetrieveCoordinatesParams,
    options?: RequestOptions,
  ): APIPromise<PostalcodeRetrieveCoordinatesResponse> {
    const { key, ...body } = params;
    return this._client.post('/postalcode', { query: { key }, body, ...options });
  }
}

export interface PostalcodeRetrieveCoordinatesResponse {
  /**
   * An object that contains details about the place that was provided in the input.
   */
  places?: PostalcodeRetrieveCoordinatesResponse.Places;

  /**
   * Returns a message, in case the input provided triggers any warnings.
   */
  warning?: Array<string>;
}

export namespace PostalcodeRetrieveCoordinatesResponse {
  /**
   * An object that contains details about the place that was provided in the input.
   */
  export interface Places {
    /**
     * Returns the address of the `postalcode` returned.
     */
    address?: string;

    /**
     * An object containing the boundary details of the postal code area. This object
     * will not be returned in case the boundary information of the postal code
     * provided is not available (only for selected countries).
     *
     * Please note the contents of this object will change based on the `format` field
     * in the input. When the `format` field is not present in the input this object
     * would contain `multipolygon` - `polygon` - `points` objects depending on the
     * boundary of the given postal code. When the `format` field is present in the
     * input, then the contents of this object would match the
     * [geojson format and standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    boundary?: Places.Boundary;

    /**
     * Name of the country containing the geographic coordinate point / postal code
     * provided in the input request.
     */
    country?: string;

    /**
     * Returns the [alpha-3 ISO code](https://www.iban.com/country-codes) of the
     * country containing the `postalcode` returned.
     */
    countryCode?: string;

    /**
     * This property is returned only when the API is requested to fetch the postal
     * code containing the location coordinate provided in the `at` input parameter.
     * `distance` denotes the straight line distance, in meters, from the requested
     * location coordinate to the postal code centroid.
     */
    distance?: number;

    /**
     * Name of the district or region containing the geographic coordinate point /
     * postal code provided in the input request.
     */
    district?: string;

    /**
     * Refers to the geographic coordinate denoting the center of the postal code in
     * latitude, longitude format.
     */
    geopoint?: Places.Geopoint;

    /**
     * Returns the postal code associated with the requested geographic coordinate
     * point or the postal code itself as provided in the input API request.
     */
    postalcode?: string;

    /**
     * Name of the state or province containing the geographic coordinate point /
     * postal code provided in the input request.
     */
    state?: string;

    /**
     * Name of the sub-district or sub-region containing the postal code or geographic
     * coordinate point / postal code provided in the input request
     */
    subdistrict?: string;
  }

  export namespace Places {
    /**
     * An object containing the boundary details of the postal code area. This object
     * will not be returned in case the boundary information of the postal code
     * provided is not available (only for selected countries).
     *
     * Please note the contents of this object will change based on the `format` field
     * in the input. When the `format` field is not present in the input this object
     * would contain `multipolygon` - `polygon` - `points` objects depending on the
     * boundary of the given postal code. When the `format` field is present in the
     * input, then the contents of this object would match the
     * [geojson format and standard](https://datatracker.ietf.org/doc/html/rfc7946).
     */
    export interface Boundary {
      /**
       * An object with geoJSON details of the boundary. This object is returned when the
       * `format` field is set to `geojson` in the input request, otherwise it is not
       * present in the response. The contents of this object follow the
       * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
       */
      geometry?: Boundary.Geometry;

      /**
       * An array of objects containing information about all the polygons forming the
       * postal code area. In case, the postal code area is formed by multiple polygons
       * not containing each other, a matching count of `polygon` objects will be
       * returned.
       *
       * Please note that this object is returned only when `format` field is not
       * specified in the input, otherwise it is not present in the response.
       */
      multipolygon?: Array<Boundary.Multipolygon>;

      /**
       * Property associated with the geoJSON shape.
       */
      properties?: string;

      /**
       * Type of the geoJSON object. This parameter is returned when the `format` field
       * is set to `geojson` in the input request, otherwise it is not present in the
       * response. The contents of this object follow the
       * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
       */
      type?: string;
    }

    export namespace Boundary {
      /**
       * An object with geoJSON details of the boundary. This object is returned when the
       * `format` field is set to `geojson` in the input request, otherwise it is not
       * present in the response. The contents of this object follow the
       * [geoJSON standard](https://datatracker.ietf.org/doc/html/rfc7946).
       */
      export interface Geometry {
        /**
         * An array of coordinates in the [longitude, latitude] format, representing the
         * coordinates points which lie on the boundary of the postal code area.
         */
        coordinates?: Array<Array<Array<number>>>;

        /**
         * Type of the geoJSON geometry.
         */
        type?: string;
      }

      export interface Multipolygon {
        /**
         * An object containing the details of a single polygon that is a part of the
         * postal code area. In case the postal code area contains other polygon(s), the
         * details of such polygon(s) would be returned through an array of `points`
         * object.
         */
        polygon?: Array<Multipolygon.Polygon>;
      }

      export namespace Multipolygon {
        export interface Polygon {
          /**
           * Represents an array of geographic coordinates that define a `polygon` boundary.
           */
          points?: Array<Polygon.Point>;
        }

        export namespace Polygon {
          export interface Point {
            /**
             * Latitude of the coordinate.
             */
            lat?: number;

            /**
             * Longitude of the coordinate.
             */
            lng?: number;
          }
        }
      }
    }

    /**
     * Refers to the geographic coordinate denoting the center of the postal code in
     * latitude, longitude format.
     */
    export interface Geopoint {
      /**
       * Latitude of the location.
       */
      lat?: number;

      /**
       * Longitude of the location.
       */
      lng?: number;
    }
  }
}

export interface PostalcodeRetrieveCoordinatesParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Location coordinates that you want to get the postal code of. If not
   * providing `postalcode` in the request, `at` becomes mandatory. Please note that
   * only 1 point can be requested. [See this example](#note).
   */
  at?: PostalcodeRetrieveCoordinatesParams.At;

  /**
   * Body param: Country containing the postal code or the location. It is mandatory
   * if `postalcode` is provided in the request. [See this example](#note).
   *
   * Please check the [API Query Limits](#api-query-limits) section below for a list
   * of the countries covered by the Geocode Postcode API. Users can provide either
   * the name or the alpha-2/3 code as per the
   * [ISO 3166-1 standard](https://en.wikipedia.org/wiki/ISO_3166-1) of a country
   * covered by the API as input for this parameter.
   */
  country?: string;

  /**
   * Body param: Specify the format in which the boundary details of the post code
   * will be returned. When specified, the boundary details will be returned in the
   * `geojson` format. When not specified, the boundary details are returned in
   * general format.
   */
  format?: '`geojson`';

  /**
   * Body param: Provide the postal code for which the information is needed. At
   * least one of (`postalcode` + `country`) or `at` needs to be provided. Please
   * note that only 1 postal code can be requested. [See this example](#note).
   */
  postalcode?: string;
}

export namespace PostalcodeRetrieveCoordinatesParams {
  /**
   * Location coordinates that you want to get the postal code of. If not providing
   * `postalcode` in the request, `at` becomes mandatory. Please note that only 1
   * point can be requested. [See this example](#note).
   */
  export interface At {
    /**
     * Latitude of the location.
     */
    lat?: number;

    /**
     * Longitude of the location.
     */
    lng?: number;
  }
}

export declare namespace Postalcode {
  export {
    type PostalcodeRetrieveCoordinatesResponse as PostalcodeRetrieveCoordinatesResponse,
    type PostalcodeRetrieveCoordinatesParams as PostalcodeRetrieveCoordinatesParams,
  };
}
