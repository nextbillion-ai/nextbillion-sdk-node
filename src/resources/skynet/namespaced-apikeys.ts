// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class NamespacedApikeys extends APIResource {
  /**
   * Create namespace under a parent key
   */
  create(
    params: NamespacedApikeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<NamespacedApikeyCreateResponse> {
    const { key, namespace, ...body } = params;
    return this._client.post('/skynet/namespaced-apikeys', { query: { key, namespace }, body, ...options });
  }

  /**
   * Delete namespace under a parent key
   */
  delete(
    params: NamespacedApikeyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<NamespacedApikeyDeleteResponse> {
    const { key, key_to_delete, namespace } = params;
    return this._client.delete('/skynet/namespaced-apikeys', {
      query: { key, key_to_delete, namespace },
      ...options,
    });
  }
}

export interface NamespacedApikeyCreateResponse {
  /**
   * Returns the error type in case of any error. If there is no error, then this
   * field is absent in the response.
   */
  error?: string;

  /**
   * Returns the error message in case of any error. If there is no error, then this
   * field is absent in the response.
   */
  message?: string;

  /**
   * An object to return the details about the namespace key created.
   */
  result?: NamespacedApikeyCreateResponse.Result;

  /**
   * Returns the API response code.
   */
  status?: number;
}

export namespace NamespacedApikeyCreateResponse {
  /**
   * An object to return the details about the namespace key created.
   */
  export interface Result {
    /**
     * Returns the unique key created for the specified namespace.
     */
    apikey?: string;

    /**
     * Returns the time, expressed as UNIX epoch timestamp in seconds, when the
     * namespace key was created.
     */
    created_at?: number;

    /**
     * Returns the time, expressed as UNIX epoch timestamp in seconds, when the
     * namespace key will expire.
     */
    expires_at?: number;

    /**
     * Returns the name of the namespace for which the key is created.
     */
    namespace?: string;

    /**
     * An internal subscription ID.
     */
    sub_id?: string;
  }
}

export interface NamespacedApikeyDeleteResponse {
  /**
   * Its value is OK in case of a successful delete operation. Indicative error
   * messages are returned otherwise, for different errors.
   */
  msg?: string;

  /**
   * A string indicating the state of the response. A successful delete operation ins
   * indicated by an HTTP code of200. See the
   * [API Error Codes](https://docs.nextbillion.ai/docs/tracking/api/live-tracking-api#api-error-codes)
   * section below for possible values in case of errors.
   */
  status?: number;
}

export interface NamespacedApikeyCreateParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Specify a name for the namespace. If the namespace specified is unique then a
   * new namespace along with a new key is created. Whereas if the specified
   * namespace is not unique, a new key will be created in the existing namespace.
   * Please note that a namespace cannot be created using another namespace key.
   */
  namespace: string;
}

export interface NamespacedApikeyDeleteParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API. Please note for the delete namespace key operation another namespace key
   * cannot be used.
   *
   * The namespace created using this key can be managed using the APIs & Services >
   * Credentials section of user’s
   * [NextBillion Console](https://console.nextbillion.ai).
   */
  key: string;

  /**
   * Specify the key to be deleted.
   */
  key_to_delete: string;

  /**
   * Specify the name of the namespace to which the \key_to_delete\ belongs. Please
   * note that a namespace key cannot be deleted using another namespace key.
   */
  namespace: string;
}

export declare namespace NamespacedApikeys {
  export {
    type NamespacedApikeyCreateResponse as NamespacedApikeyCreateResponse,
    type NamespacedApikeyDeleteResponse as NamespacedApikeyDeleteResponse,
    type NamespacedApikeyCreateParams as NamespacedApikeyCreateParams,
    type NamespacedApikeyDeleteParams as NamespacedApikeyDeleteParams,
  };
}
