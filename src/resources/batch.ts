// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Batch extends APIResource {
  /**
   * Create Batch Routing
   */
  create(params: BatchCreateParams, options?: RequestOptions): APIPromise<BatchCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/batch', { query: { key }, body, ...options });
  }

  /**
   * Get Batch Result
   */
  retrieve(query: BatchRetrieveParams, options?: RequestOptions): APIPromise<BatchRetrieveResponse> {
    return this._client.get('/batch', { query, ...options });
  }
}

export interface BatchCreateResponse {
  /**
   * Displays the error message in case of a failed request or operation. Please note
   * that this parameter is not returned in the response in case of a successful
   * request.
   */
  msg?: string;

  /**
   * Returns the overall status of the API request. Its value will belong to one of
   * success, failed, and pending. It can also contain HTTP error codes in case of a
   * failed request or operation.
   */
  status?: string;

  /**
   * Returns the unique ID of the batch processing task. Use this ID using the GET
   * request to retrieve the solution once the task processing is completed.
   */
  track_id?: string;
}

export interface BatchRetrieveResponse {
  /**
   * Displays the error message in case of a failed request or operation. Please note
   * that this parameter is not returned in the response in case of a successful
   * request.
   */
  msg?: string;

  /**
   * An array of objects returning the results of all the individual routing queries
   * specified in the input. Each object represents the solution to an individual
   * query in the input.
   */
  responses?: Array<BatchRetrieveResponse.Response>;

  /**
   * Returns the overall status of the API request. Its value will always be one of
   * success, failed, and pending.
   */
  status?: string;

  /**
   * Returns the unique ID of the batch processing task.
   */
  track_id?: string;
}

export namespace BatchRetrieveResponse {
  export interface Response {
    /**
     * An object returning the routing solution of an individual query. The JSON format
     * and structure of the response would vary depending on the routing endpoint used
     * in each individual query. However, it will be consistent with standard response
     * for a given routing endpoint.
     */
    response?: unknown;

    /**
     * Returns the HTTP status code for the individual routing request. See the
     * [API Errors Codes](#api-error-codes) section below for more information.
     */
    status_code?: number;
  }
}

export interface BatchCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: An array of objects to collect the details of individual routing
   * queries that will form a batch.
   */
  requests?: Array<BatchCreateParams.Request>;
}

export namespace BatchCreateParams {
  export interface Request {
    /**
     * Specify the routing query in the form of a string. The supported attributes and
     * their formats are consistent with the standard routing endpoint that is being
     * used as part of the batch. Check the
     * [Sample Request](https://docs.nextbillion.ai/docs/navigation/batch-routing-api#sample-request-1)
     * section for an example request.
     */
    query?: string;
  }
}

export interface BatchRetrieveParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;

  /**
   * Specify the track ID of the batch that was returned in the response after
   * submitting a successful batch request.
   */
  track_id: string;
}

export declare namespace Batch {
  export {
    type BatchCreateResponse as BatchCreateResponse,
    type BatchRetrieveResponse as BatchRetrieveResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchRetrieveParams as BatchRetrieveParams,
  };
}
