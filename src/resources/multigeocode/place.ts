// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Place extends APIResource {
  /**
   * The "Add Place" method allows users to create custom places
   *
   * Add place method provides the flexibility to create custom places in a way that
   * suits your business needs. The newly created place and its attributes can be
   * added to custom (proprietary) dataset - to the effect of building your own
   * places dataset (s) - or, to a default dataset. Overcome inaccurate ‘POI’ details
   * from default search provider by creating custom, highly accurate ‘POIs’.
   */
  create(params: PlaceCreateParams, options?: RequestOptions): APIPromise<PlaceCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/multigeocode/place', { query: { key }, body, ...options });
  }

  /**
   * Use this method to get the details of previously created custom places using its
   * NextBillion ID.
   */
  retrieve(
    docID: string,
    query: PlaceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PlaceRetrieveResponse> {
    return this._client.get(path`/multigeocode/place/${docID}`, { query, ...options });
  }

  /**
   * The "Update Place" method allows businesses to update the attributes of an
   * existing place.
   *
   * This method allows you to update the attributes of custom places. In effect,
   * updating a place replaces the current information in search results with the
   * updated information associated with the specific docID. Use this method to
   * enhance the accuracy/usability of your search results with respect to the
   * default dataset to suit your business needs.
   *
   * If you want to prioritize a particular result in your search results, update the
   * ‘score’ of that specific place.
   * Alternatively, you can block places which are no longer needed by setting their
   * status: ‘disable’.
   */
  update(
    docID: string,
    params: PlaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PlaceUpdateResponse> {
    const { key, ...body } = params;
    return this._client.put(path`/multigeocode/place/${docID}`, { query: { key }, body, ...options });
  }

  /**
   * The "Delete Place" method enables businesses to delete a previously created
   * place
   *
   * Use this method to delete a previously created place. Please note that the place
   * associated with the specified docID only would be deleted. As a result, once a
   * place is deleted, the search API can still return valid results from the default
   * datasets or others, if present.
   */
  delete(
    docID: string,
    params: PlaceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PlaceDeleteResponse> {
    const { key } = params;
    return this._client.delete(path`/multigeocode/place/${docID}`, { query: { key }, ...options });
  }
}

export interface PlaceItem {
  /**
   * This parameter represents the complete address of the place, including the
   * street, city, state, postal code and country.
   */
  address?: string;

  /**
   * This parameter represents additional building information if applicable.
   */
  building?: string;

  /**
   * This parameter represents the city or town of the place.
   */
  city?: string;

  /**
   * This parameter represents the country of the place.
   */
  country?: string;

  /**
   * This parameter represents the district of the place.
   */
  district?: string;

  /**
   * This parameter represents the geographical coordinates of the place. It includes
   * the latitude and longitude values.
   */
  geopoint?: PlaceItem.Geopoint;

  /**
   * This parameter represents the house or building number of the place.
   */
  house?: string;

  /**
   * This parameter represents a point of interest within the place. A Point of
   * Interest (POI) refers to a specific location or area that is of interest to
   * individuals for various reasons. It could be a landmark, tourist attraction,
   * business, or any other location that people might find important or intriguing.
   */
  poi?: PlaceItem.Poi;

  /**
   * This parameter represents the postal code or ZIP code of the place.
   */
  postalCode?: string;

  /**
   * This parameter represents the state or region of the place.
   */
  state?: string;

  /**
   * This parameter represents the street name of the place.
   */
  street?: string;

  /**
   * This parameter represents the sub-district or locality of the place.
   */
  subDistrict?: string;
}

export namespace PlaceItem {
  /**
   * This parameter represents the geographical coordinates of the place. It includes
   * the latitude and longitude values.
   */
  export interface Geopoint {
    /**
     * This parameter represents the latitude value of the place.
     */
    lat?: number;

    /**
     * This parameter represents the longitude value of the place.
     */
    lng?: number;
  }

  /**
   * This parameter represents a point of interest within the place. A Point of
   * Interest (POI) refers to a specific location or area that is of interest to
   * individuals for various reasons. It could be a landmark, tourist attraction,
   * business, or any other location that people might find important or intriguing.
   */
  export interface Poi {
    /**
     * A title that describes the point of interest.
     */
    title?: string;
  }
}

export interface PlaceCreateResponse {
  /**
   * A unique NextBillion DocID will be created for the POI. Use this ID to search
   * this place through the “Get Place” method, to update attributes or ‘status’
   * through the “Update Place” method or delete it using the “Delete Place” method.
   */
  docId?: string;
}

export interface PlaceRetrieveResponse {
  /**
   * It displays the information about the current source and current status of the
   * place. Use the “Update Place” method to change these values, as needed.
   */
  dataSorce?: PlaceRetrieveResponse.DataSorce;

  /**
   * The unique NextBillion ID for the result item.
   */
  docId?: string;

  /**
   * This parameter represents the place details, including geographical information,
   * address and other related information.
   */
  place?: Array<PlaceItem>;

  /**
   * It returns the system calculated weighted score of the place. It depends on how
   * ‘richly’ the place was defined at the time of creation. In order to modify the
   * score, use “Update Place” method and update information for parameters which are
   * not set currently. As an alternative, you can directly update the score to a
   * custom value.
   */
  score?: number;
}

export namespace PlaceRetrieveResponse {
  /**
   * It displays the information about the current source and current status of the
   * place. Use the “Update Place” method to change these values, as needed.
   */
  export interface DataSorce {
    /**
     * This parameter represents the unique reference ID associated with the data
     * source.
     */
    refId?: string;

    /**
     * This parameter represents the current dataset source of the information returned
     * in the result.
     */
    source?: string;

    /**
     * This parameter indicates if a place is currently discoverable by search API or
     * not.
     */
    status?: 'enable' | 'disable';
  }
}

export interface PlaceUpdateResponse {
  /**
   * This could be “Ok” representing success or “not found” representing error in
   * processing the request.
   */
  msg?: string;

  /**
   * Represents the status of the response.
   */
  status?: string;
}

export interface PlaceDeleteResponse {
  /**
   * This could be “Ok” representing success or “not found” representing error in
   * processing the request.
   */
  msg?: string;

  /**
   * Represents the status of the response.
   */
  status?: string;
}

export interface PlaceCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: This parameter represents the place details, including geographical
   * information, address and other related information.
   */
  place: Array<PlaceCreateParams.Place>;

  /**
   * Body param: It contains information about the dataset that returns the specific
   * result
   */
  dataSource?: PlaceCreateParams.DataSource;

  /**
   * Body param: When 2 places are located within 100 meters of each other and have
   * more than 90% of matching attributes (at least 11 out of 12 attributes in the
   * “place” object), they will be considered duplicates and any requests to add such
   * a new place would be rejected. Set force=true to override this duplicate check.
   * You can use this to create closely located POIs. For instance, places inside a
   * mall, university or a government building etc.
   */
  force?: boolean;

  /**
   * Body param: Search score of the place. This is calculated based on how ‘richly’
   * the place is defined. For instance, a place with - street name, city, state and
   * country attributes set might be ranked lower than a place which has values of -
   * house, building, street name, city, state and country attributes set. The score
   * determines the rank of the place among search results. You can also use this
   * field to set a custom score as per its relevance to rank it among the search
   * results from multiple data sources.
   */
  score?: number;
}

export namespace PlaceCreateParams {
  export interface Place {
    /**
     * This parameter represents the geographical coordinates of the place. It includes
     * the latitude and longitude values.
     */
    geopoint: Place.Geopoint;

    /**
     * This parameter represents the complete address of the place, including the
     * street, city, state, postal code and country.
     */
    address?: string;

    /**
     * This parameter represents additional building information if applicable.
     */
    building?: string;

    /**
     * This parameter represents the city or town of the place.
     */
    city?: string;

    /**
     * Country of the search context provided as comma-separated
     * [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) country
     * codes.
     *
     * Note: Country codes should be provided in uppercase.
     */
    country?: string;

    /**
     * This parameter represents the district of the place.
     */
    district?: string;

    /**
     * This parameter represents the house or building number of the place.
     */
    house?: string;

    /**
     * This parameter represents a point of interest within the place. A Point of
     * Interest (POI) refers to a specific location or area that is of interest to
     * individuals for various reasons. It could be a landmark, tourist attraction,
     * business, or any other location that people might find important or intriguing.
     */
    poi?: Place.Poi;

    /**
     * This parameter represents the postal code or ZIP code of the place.
     */
    postalCode?: string;

    /**
     * This parameter represents the state or region of the place.
     */
    state?: string;

    /**
     * This parameter represents the street name of the place.
     */
    street?: string;

    /**
     * This parameter represents the sub-district or locality of the place.
     */
    subDistrict?: string;
  }

  export namespace Place {
    /**
     * This parameter represents the geographical coordinates of the place. It includes
     * the latitude and longitude values.
     */
    export interface Geopoint {
      /**
       * This parameter represents the latitude value of the place.
       */
      lat?: number;

      /**
       * This parameter represents the longitude value of the place.
       */
      lng?: number;
    }

    /**
     * This parameter represents a point of interest within the place. A Point of
     * Interest (POI) refers to a specific location or area that is of interest to
     * individuals for various reasons. It could be a landmark, tourist attraction,
     * business, or any other location that people might find important or intriguing.
     */
    export interface Poi {
      /**
       * A title that describes the point of interest.
       */
      title?: string;
    }
  }

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

export interface PlaceRetrieveParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface PlaceUpdateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: dataSource values can be updated to enhance or prioritize the search
   * results to better suit specific business use cases.
   */
  dataSource?: PlaceUpdateParams.DataSource;

  /**
   * Body param: This parameter represents the place details, including geographical
   * information, address and other related information.
   */
  place?: Array<PlaceItem>;

  /**
   * Body param: Search score of the place. This is calculated based on how ‘richly’
   * the place is defined. For instance, a place with street name, city, state and
   * country attributes set might be ranked lower than a place which has values of
   * house, building, street name, city, state and country attributes set. The score
   * determines the rank of the place among search results. You can also use this
   * field to set a custom score as per its relevance to rank it among the search
   * results from multiple data sources.
   */
  score?: number;
}

export namespace PlaceUpdateParams {
  /**
   * dataSource values can be updated to enhance or prioritize the search results to
   * better suit specific business use cases.
   */
  export interface DataSource {
    /**
     * This parameter represents the unique reference ID associated with the data
     * source.
     */
    refId?: string;

    /**
     * 1. Move the place to a new dataset by setting the value to a unique dataset
     *    name. You can also move the place to an existing dataset by using an existing
     *    dataset name other than the current one. In both cases, the current
     *    datasource will be replaced for the specified docID.
     *
     * 2. Update the place in an existing dataset by setting the name to the current
     *    value.
     */
    source?: string;

    /**
     * Set this to either enable or disable to allow the place to be retrieved by a
     * search API or block it respectively.
     */
    status?: 'enable' | 'disable';
  }
}

export interface PlaceDeleteParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export declare namespace Place {
  export {
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
