// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { NextbillionSDK } from '../client';

export abstract class APIResource {
  protected _client: NextbillionSDK;

  constructor(client: NextbillionSDK) {
    this._client = client;
  }
}
