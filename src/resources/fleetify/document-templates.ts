// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentTemplatesAPI from './document-templates';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DocumentTemplates extends APIResource {
  /**
   * Create Document template
   */
  create(
    params: DocumentTemplateCreateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentTemplateCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/fleetify/document_templates', { query: { key }, body, ...options });
  }

  /**
   * Retrieve template by ID
   */
  retrieve(
    id: string,
    query: DocumentTemplateRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DocumentTemplateRetrieveResponse> {
    return this._client.get(path`/fleetify/document_templates/${id}`, { query, ...options });
  }

  /**
   * Update a document template
   */
  update(
    id: string,
    params: DocumentTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentTemplateUpdateResponse> {
    const { key, ...body } = params;
    return this._client.put(path`/fleetify/document_templates/${id}`, { query: { key }, body, ...options });
  }

  /**
   * Get all document templates
   */
  list(
    query: DocumentTemplateListParams,
    options?: RequestOptions,
  ): APIPromise<DocumentTemplateListResponse> {
    return this._client.get('/fleetify/document_templates', { query, ...options });
  }

  /**
   * Delete a document template
   */
  delete(
    id: string,
    params: DocumentTemplateDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DocumentTemplateDeleteResponse> {
    const { key } = params;
    return this._client.delete(path`/fleetify/document_templates/${id}`, { query: { key }, ...options });
  }
}

/**
 * An object to collect the details of form fields - data structures, validation
 * rules - for collecting required information after successfully executing a route
 * step.
 */
export interface DocumentTemplateContentRequest {
  /**
   * Specify the label or the name of the field. The `label` specified here can be
   * used as field name when rendering the document in the Driver app.
   */
  label: string;

  /**
   * Specify the data type of the field. It corresponds to the type of information
   * that the driver needs to collect.
   */
  type:
    | '`string`'
    | '`number`'
    | '`date_time`'
    | '`photos`'
    | '`multi_choices`'
    | '`signature`'
    | '`barcode`'
    | '`single_choice`';

  /**
   * An object to define additional information required for `single_choice` or
   * `multi_choices` type document items.
   */
  meta?: DocumentTemplateContentRequest.Meta;

  /**
   * Specify the name of the document field. A field's`name` can be used for internal
   * references to the document field.
   */
  name?: string;

  /**
   * Specify if it is mandatory to fill the field. Default value is false.
   */
  required?: boolean;

  /**
   * Specify the validation rules for the field. This can be used to enforce data
   * quality and integrity checks. For example, if the field is a number type,
   * `validation` can define constraints like minimum / maximum number values.
   */
  validation?: DocumentTemplateContentRequest.Validation;
}

export namespace DocumentTemplateContentRequest {
  /**
   * An object to define additional information required for `single_choice` or
   * `multi_choices` type document items.
   */
  export interface Meta {
    /**
     * An array of objects to define options for a `multi_choices` or `single_choice`
     * type document field. Each object represents one option.
     */
    options: Array<Meta.Option>;
  }

  export namespace Meta {
    export interface Option {
      /**
       * Specify the label or name for the option.
       */
      label: string;

      /**
       * Specify the value associated with the option. This value will be submitted when
       * the option is checked in the Driver app.
       */
      value: string;
    }
  }

  /**
   * Specify the validation rules for the field. This can be used to enforce data
   * quality and integrity checks. For example, if the field is a number type,
   * `validation` can define constraints like minimum / maximum number values.
   */
  export interface Validation {
    /**
     * Specifies the maximum allowed value for `number` type document field. Input
     * values must be less than or equal to this threshold.
     */
    max?: number;

    /**
     * Specifies the maximum number of items for `multi_choices`, `photos` type
     * document fields. The number of provided input items must be less than or equal
     * to this threshold.
     */
    max_items?: number;

    /**
     * Specifies the minimum allowed value for `number` type document field. Input
     * values must be greater than or equal to this threshold.
     */
    min?: number;

    /**
     * Specifies the minimum number of items for `multi_choices`, `photos` type
     * document fields. The number of provided input items must be greater than or
     * equal to this threshold.
     */
    min_items?: number;
  }
}

/**
 * An array of objects returning the details of data structures and validation
 * rules and other properties of all document fields. Each object represents one
 * document field.
 */
export interface DocumentTemplateContentResponse {
  /**
   * Returns the label of the document field.
   */
  label?: string;

  /**
   * Returns the options configured for `single_choice` or `multi_choices` type
   * document items.
   */
  meta?: DocumentTemplateContentResponse.Meta;

  /**
   * Returns the name of the document field.
   */
  name?: string;

  /**
   * Indicates if the document field is mandatory or not.
   */
  required?: boolean;

  /**
   * Returns the data type of the document field. It will always belong to one of
   * `string`, `number`, `date_time`, `photos`, `multi_choices`, `signature`,
   * `barcode`, and `single_choice.`
   */
  type?: string;

  /**
   * Returns the validation rules for `number` , `multi_choices` , and `photos`
   * document field types.
   */
  validation?: DocumentTemplateContentResponse.Validation;
}

export namespace DocumentTemplateContentResponse {
  /**
   * Returns the options configured for `single_choice` or `multi_choices` type
   * document items.
   */
  export interface Meta {
    /**
     * An array of objects returning the options for `multi_choices` or `single_choice`
     * type document field. Each object represents one configured option.
     */
    options?: Array<Meta.Option>;
  }

  export namespace Meta {
    export interface Option {
      /**
       * Returns the label for the option.
       */
      label?: string;

      /**
       * Returns the value associated with the option. This value gets submitted when the
       * option is checked in the Driver app.
       */
      value?: string;
    }
  }

  /**
   * Returns the validation rules for `number` , `multi_choices` , and `photos`
   * document field types.
   */
  export interface Validation {
    /**
     * Returns the maximum allowed value for `number` type document item, as specified
     * at the time of configuring the field. This parameter is not present in the
     * response if it was not provided in the input.
     */
    max?: number;

    /**
     * Returns the maximum number of items required for `multi_choices`, `photos` type
     * document items. This parameter will not be present in the response if it was not
     * provided in the input.
     */
    max_items?: string;

    /**
     * Returns the minimum allowed value for `number` type document item, as specified
     * at the time of configuring the field. This parameter is not present in the
     * response if it was not provided in the input.
     */
    min?: number;

    /**
     * Returns the minimum number of items required for `multi_choices`, `photos` type
     * document items. This parameter will not be present in the response if it was not
     * provided in the input.
     */
    min_items?: string;
  }
}

export interface DocumentTemplateCreateResponse {
  /**
   * An object returning the details of the document template created.
   */
  data?: DocumentTemplateCreateResponse.Data;

  /**
   * Returns the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  msg?: string;

  /**
   * Returns the HTTP response code.
   */
  status?: number;
}

export namespace DocumentTemplateCreateResponse {
  /**
   * An object returning the details of the document template created.
   */
  export interface Data {
    /**
     * Returns the unique ID of the document template created.
     */
    id?: string;

    /**
     * An array of objects returning the details of data structures and validation
     * rules and other properties of all document fields. Each object represents one
     * document field.
     */
    content?: Array<DocumentTemplatesAPI.DocumentTemplateContentResponse>;

    /**
     * Returns the name of the document template as specified in the input.
     */
    name?: string;
  }
}

export interface DocumentTemplateRetrieveResponse {
  /**
   * An object returning the details of the requested document template.
   */
  data?: DocumentTemplateRetrieveResponse.Data;

  /**
   * Returns the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  msg?: string;

  /**
   * Returns the HTTP response code.
   */
  status?: number;
}

export namespace DocumentTemplateRetrieveResponse {
  /**
   * An object returning the details of the requested document template.
   */
  export interface Data {
    /**
     * Returns the unique identifier of the document template.
     */
    id?: string;

    /**
     * An array of objects returning the details of data structures and validation
     * rules and other properties of all document fields. Each object represents one
     * document field.
     */
    content?: Array<DocumentTemplatesAPI.DocumentTemplateContentResponse>;

    /**
     * Returns the name of the document template as specified at the time of creating
     * the template.
     */
    name?: string;
  }
}

export interface DocumentTemplateUpdateResponse {
  /**
   * An object returning the details of the updated document template.
   */
  data?: DocumentTemplateUpdateResponse.Data;

  /**
   * Returns the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  msg?: string;

  /**
   * Returns the HTTP response code.
   */
  status?: number;
}

export namespace DocumentTemplateUpdateResponse {
  /**
   * An object returning the details of the updated document template.
   */
  export interface Data {
    /**
     * Returns the unique ID of the document template.
     */
    id?: string;

    /**
     * An array of object returning the details of updated data structures and
     * validation rules for document fields. Each object represents one document field.
     */
    content?: Array<DocumentTemplatesAPI.DocumentTemplateContentResponse>;

    /**
     * Returns the updated name of the document template.
     */
    name?: string;
  }
}

export interface DocumentTemplateListResponse {
  /**
   * An array of objects returning the details of each document template associated
   * with the specified API key. Each object represents one document template. In
   * case there are no templates associated with the given key, a blank array is
   * returned.
   */
  data?: Array<DocumentTemplateListResponse.Data>;

  /**
   * Returns the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  msg?: string;

  /**
   * Returns the HTTP response code.
   */
  status?: number;
}

export namespace DocumentTemplateListResponse {
  /**
   * An array of objects returning the details of each document template associated
   * with the specified API key. Each object represents one document template. In
   * case there are no templates associated with the given key, a blank array is
   * returned.
   */
  export interface Data {
    /**
     * Returns the unique ID of the document template.
     */
    id?: string;

    /**
     * An array of objects returning the details of data structures and validation
     * rules and other properties of all document fields. Each object represents one
     * document field.
     */
    content?: Array<DocumentTemplatesAPI.DocumentTemplateContentResponse>;

    /**
     * Returns the name of the document template.
     */
    name?: string;
  }
}

export interface DocumentTemplateDeleteResponse {
  /**
   * Returns the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  msg?: string;

  /**
   * Returns the HTTP response code.
   */
  status?: number;
}

export interface DocumentTemplateCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: A form field that drivers must complete when executing a route step.
   * Defines the data structure and validation rules for collecting required
   * information during route execution.
   */
  content: Array<DocumentTemplateContentRequest>;

  /**
   * Body param: Specify a name for the document template to be created.
   */
  name: string;
}

export interface DocumentTemplateRetrieveParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface DocumentTemplateUpdateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: An object to collect the details of form fields to be updated - data
   * structures, validation rules. Please note that the details provided here will
   * overwrite any existing document fields in the given template.
   */
  content?: Array<DocumentTemplateContentRequest>;

  /**
   * Body param: Specify the document template name to be updated.
   */
  name?: string;
}

export interface DocumentTemplateListParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export interface DocumentTemplateDeleteParams {
  /**
   * A key is a unique identifier that is required to authenticate a request to the
   * API.
   */
  key: string;
}

export declare namespace DocumentTemplates {
  export {
    type DocumentTemplateContentRequest as DocumentTemplateContentRequest,
    type DocumentTemplateContentResponse as DocumentTemplateContentResponse,
    type DocumentTemplateCreateResponse as DocumentTemplateCreateResponse,
    type DocumentTemplateRetrieveResponse as DocumentTemplateRetrieveResponse,
    type DocumentTemplateUpdateResponse as DocumentTemplateUpdateResponse,
    type DocumentTemplateListResponse as DocumentTemplateListResponse,
    type DocumentTemplateDeleteResponse as DocumentTemplateDeleteResponse,
    type DocumentTemplateCreateParams as DocumentTemplateCreateParams,
    type DocumentTemplateRetrieveParams as DocumentTemplateRetrieveParams,
    type DocumentTemplateUpdateParams as DocumentTemplateUpdateParams,
    type DocumentTemplateListParams as DocumentTemplateListParams,
    type DocumentTemplateDeleteParams as DocumentTemplateDeleteParams,
  };
}
