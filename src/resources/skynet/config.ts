// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AssetAPI from './asset/asset';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Config extends APIResource {
  /**
   * Get webhook configuration
   */
  retrieve(query: ConfigRetrieveParams, options?: RequestOptions): APIPromise<ConfigRetrieveResponse> {
    return this._client.get('/skynet/config', { query, ...options });
  }

  /**
   * Update webhook configuration
   */
  update(params: ConfigUpdateParams, options?: RequestOptions): APIPromise<AssetAPI.SimpleResp> {
    const { key, cluster, ...body } = params;
    return this._client.put('/skynet/config', { query: { key, cluster }, body, ...options });
  }

  /**
   * Test webhook configurations
   */
  testWebhook(
    params: ConfigTestWebhookParams,
    options?: RequestOptions,
  ): APIPromise<ConfigTestWebhookResponse> {
    const { key } = params;
    return this._client.post('/skynet/config/testwebhook', { query: { key }, ...options });
  }
}

export interface ConfigRetrieveResponse {
  /**
   * A data object containing the `config` response.
   */
  data?: ConfigRetrieveResponse.Data;

  /**
   * Displays the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  message?: string;

  /**
   * A string indicating the state of the response. On successful responses, the
   * value will be `Ok`. Indicative error messages are returned for different errors.
   * See the [API Error Codes](#api-error-codes) section below for more information.
   */
  status?: string;
}

export namespace ConfigRetrieveResponse {
  /**
   * A data object containing the `config` response.
   */
  export interface Data {
    config?: Data.Config;
  }

  export namespace Data {
    export interface Config {
      /**
       * An array of strings representing the list of webhooks. Webhooks are used to
       * receive information, through POST requests, whenever any event is triggered.
       */
      webhook?: Array<string>;
    }
  }
}

export interface ConfigTestWebhookResponse {
  /**
   * A string indicating the state of the response. Please note this value will
   * always be `Ok`.
   *
   * The sample event information will be received on the webhook, if they were
   * successfully configured. If no event information is received by the webhook,
   * please reconfigure the webhook or else reach out to
   * [support@nextbillion.ai](mailto:support@nextbillion.ai) for help.
   */
  status?: string;
}

export interface ConfigRetrieveParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * the cluster of the region you want to use
   */
  cluster?: 'america';
}

export interface ConfigUpdateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Query param: the cluster of the region you want to use
   */
  cluster?: 'america';

  /**
   * Body param: Use this array to update information about the webhooks. Please note
   * that the webhooks will be overwritten every time this method is used.
   */
  webhook?: Array<string>;
}

export interface ConfigTestWebhookParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export declare namespace Config {
  export {
    type ConfigRetrieveResponse as ConfigRetrieveResponse,
    type ConfigTestWebhookResponse as ConfigTestWebhookResponse,
    type ConfigRetrieveParams as ConfigRetrieveParams,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigTestWebhookParams as ConfigTestWebhookParams,
  };
}
