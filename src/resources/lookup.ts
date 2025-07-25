// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as GeocodeAPI from './geocode';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Lookup extends APIResource {
  /**
   * Lookup By ID
   */
  retrieveByID(
    query: LookupRetrieveByIDParams,
    options?: RequestOptions,
  ): APIPromise<LookupRetrieveByIDResponse> {
    return this._client.get('/lookup', { query, ...options });
  }
}

export interface LookupRetrieveByIDResponse {
  /**
   * The results are presented as a JSON list of candidates in ranked order
   * (most-likely to least-likely) based on the matched location criteria.
   */
  items?: Array<LookupRetrieveByIDResponse.Item>;
}

export namespace LookupRetrieveByIDResponse {
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
     * The bounding box enclosing the geometric shape (area or line) that an individual
     * result covers. `place` typed results have no `mapView`.
     */
    mapView?: GeocodeAPI.MapView;

    /**
     * Returns the location coordinates of the result.
     */
    position?: GeocodeAPI.Position;

    /**
     * The localized display name of this result item.
     */
    title?: string;
  }
}

export interface LookupRetrieveByIDParams {
  /**
   * Specify the unique identifier of a specific POI, Street, Geography, Point
   * Address or other entities to retrieve its details.
   */
  id: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export declare namespace Lookup {
  export {
    type LookupRetrieveByIDResponse as LookupRetrieveByIDResponse,
    type LookupRetrieveByIDParams as LookupRetrieveByIDParams,
  };
}
