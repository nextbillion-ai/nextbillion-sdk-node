// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetAPI from '../asset/asset';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Asset extends APIResource {
  /**
   * Bind asset to device
   */
  bind(id: string, params: AssetBindParams, options?: RequestOptions): APIPromise<AssetAPI.SimpleResp> {
    const { key, ...body } = params;
    return this._client.post(path`/skynet/skynet/asset/${id}/bind`, { query: { key }, body, ...options });
  }
}

export interface AssetBindParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Device ID to be linked to the `asset` identified by `id`.
   *
   * Please note that the device needs to be linked to an `asset` before using it in
   * the _Upload locations of an Asset_ method for sending GPS information about the
   * `asset`.
   */
  device_id: string;
}

export declare namespace Asset {
  export { type AssetBindParams as AssetBindParams };
}
