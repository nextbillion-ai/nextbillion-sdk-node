// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Areas extends APIResource {
  /**
   * Get available areas
   */
  list(query: AreaListParams, options?: RequestOptions): APIPromise<AreaListResponse> {
    return this._client.get('/areas', { query, ...options });
  }
}

export type AreaListResponse = Array<AreaListResponse.AreaListResponseItem>;

export namespace AreaListResponse {
  export interface AreaListResponseItem {
    /**
     * Returns the code for the available area.
     */
    code?: string;

    /**
     * Returns available traveling modes for the given area.
     */
    modes?: Array<string>;

    /**
     * Returns the name of the available area.
     */
    name?: string;

    /**
     * Returns the offset from UTC time.
     */
    timezone?: number;
  }
}

export interface AreaListParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export declare namespace Areas {
  export { type AreaListResponse as AreaListResponse, type AreaListParams as AreaListParams };
}
