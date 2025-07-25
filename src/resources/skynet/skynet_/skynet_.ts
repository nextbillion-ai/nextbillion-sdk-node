// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssetAPI from './asset';
import { Asset, AssetBindParams } from './asset';

export class Skynet extends APIResource {
  asset: AssetAPI.Asset = new AssetAPI.Asset(this._client);
}

Skynet.Asset = Asset;

export declare namespace Skynet {
  export { Asset as Asset, type AssetBindParams as AssetBindParams };
}
