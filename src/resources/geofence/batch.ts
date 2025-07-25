// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GeofenceAPI from './geofence';
import * as AssetAPI from '../skynet/asset/asset';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Batch extends APIResource {
  /**
   * Batch Creation of Geofence
   */
  create(params: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/geofence/batch', { query: { key }, body, ...options });
  }

  /**
   * Delete Batch Geofence
   */
  delete(params: BatchDeleteParams, options?: RequestOptions): APIPromise<AssetAPI.SimpleResp> {
    const { key, ...body } = params;
    return this._client.delete('/geofence/batch', { query: { key }, body, ...options });
  }

  /**
   * Batch Query of Geofence
   */
  query(query: BatchQueryParams, options?: RequestOptions): APIPromise<BatchQueryResponse> {
    return this._client.get('/geofence/batch', { query, ...options });
  }
}

export interface BatchCreateResponse {
  /**
   * A data object containing the IDs of the geofences created.
   */
  data?: BatchCreateResponse.Data;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace BatchCreateResponse {
  /**
   * A data object containing the IDs of the geofences created.
   */
  export interface Data {
    ids?: Array<string>;
  }
}

export interface BatchQueryResponse {
  data: BatchQueryResponse.Data;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status: string;
}

export namespace BatchQueryResponse {
  export interface Data {
    /**
     * An array of objects containing the details of the geofences returned matching
     * the IDs provided. Each object represents one geofence.
     */
    list: Array<GeofenceAPI.Geofence>;
  }
}

export interface BatchCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: An array of objects to collect the details of the multiple geofences
   * that need to be created.
   */
  geofences?: Array<GeofenceAPI.GeofenceEntityCreate>;
}

export interface BatchDeleteParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: An array IDs of the geofence to be deleted. These are the IDs that
   * were generated/provided at the time of creating the respective geofences.
   */
  ids?: Array<string>;
}

export interface BatchQueryParams {
  /**
   * Comma(`,`) separated list of IDs of the geofences to be searched.
   */
  ids: string;

  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export declare namespace Batch {
  export {
    type BatchCreateResponse as BatchCreateResponse,
    type BatchQueryResponse as BatchQueryResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchDeleteParams as BatchDeleteParams,
    type BatchQueryParams as BatchQueryParams,
  };
}
