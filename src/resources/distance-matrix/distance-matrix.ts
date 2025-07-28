// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JsonAPI from './json';
import { Json, JsonRetrieveParams, JsonRetrieveResponse } from './json';

export class DistanceMatrix extends APIResource {
  json: JsonAPI.Json = new JsonAPI.Json(this._client);
}

DistanceMatrix.Json = Json;

export declare namespace DistanceMatrix {
  export {
    Json as Json,
    type JsonRetrieveResponse as JsonRetrieveResponse,
    type JsonRetrieveParams as JsonRetrieveParams,
  };
}
