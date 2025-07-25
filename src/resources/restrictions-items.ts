// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class RestrictionsItems extends APIResource {
  /**
   * Get restriction items by bbox
   */
  list(
    query: RestrictionsItemListParams,
    options?: RequestOptions,
  ): APIPromise<RestrictionsItemListResponse> {
    return this._client.get('/restrictions_items', { query, ...options });
  }
}

export type RestrictionsItemListResponse =
  Array<RestrictionsItemListResponse.RestrictionsItemListResponseItem>;

export namespace RestrictionsItemListResponse {
  export interface RestrictionsItemListResponseItem {
    id: number;

    area: string;

    coordinate: RestrictionsItemListResponseItem.Coordinate;

    group_id: number;

    group_type: 'segment' | 'turn';

    mode: Array<'0w' | '1w' | '2w' | '3w' | '4w' | '6w'>;

    repeat_on: string;

    restriction_type: 'closure' | 'fixedspeed' | 'maxspeed' | 'turn' | 'truck';

    source: 'rrt' | 'pbf';

    state: 'enabled' | 'disabled' | 'deleted';

    status: 'active' | 'inactive';
  }

  export namespace RestrictionsItemListResponseItem {
    export interface Coordinate {
      lat?: number;

      lon?: number;
    }
  }
}

export interface RestrictionsItemListParams {
  max_lat: number;

  max_lon: number;

  min_lat: number;

  min_lon: number;

  group_id?: number;

  mode?: '0w' | '1w' | '2w' | '3w' | '4w' | '6w';

  restriction_type?: 'turn' | 'parking' | 'fixedspeed' | 'maxspeed' | 'closure' | 'truck';

  source?: string;

  state?: 'enabled' | 'disabled' | 'deleted';

  status?: 'active' | 'inactive';
}

export declare namespace RestrictionsItems {
  export {
    type RestrictionsItemListResponse as RestrictionsItemListResponse,
    type RestrictionsItemListParams as RestrictionsItemListParams,
  };
}
