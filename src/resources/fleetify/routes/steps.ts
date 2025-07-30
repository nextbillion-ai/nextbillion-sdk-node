// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StepsAPI from './steps';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Steps extends APIResource {
  /**
   * Insert a new step
   */
  create(
    routeID: string,
    params: StepCreateParams,
    options?: RequestOptions,
  ): APIPromise<StepCreateResponse> {
    const { key, ...body } = params;
    return this._client.post(path`/fleetify/routes/${routeID}/steps`, { query: { key }, body, ...options });
  }

  /**
   * Update a step
   */
  update(stepID: string, params: StepUpdateParams, options?: RequestOptions): APIPromise<StepUpdateResponse> {
    const { routeID, key, ...body } = params;
    return this._client.put(path`/fleetify/routes/${routeID}/steps/${stepID}`, {
      query: { key },
      body,
      ...options,
    });
  }

  /**
   * Delete a step
   */
  delete(stepID: string, params: StepDeleteParams, options?: RequestOptions): APIPromise<StepDeleteResponse> {
    const { routeID, key } = params;
    return this._client.delete(path`/fleetify/routes/${routeID}/steps/${stepID}`, {
      query: { key },
      ...options,
    });
  }

  /**
   * Complete a route step with document submission, or update the document of a
   * completed route step.
   *
   * When all steps are completed, the encapsulating route’s status will change to
   * completed automatically.
   *
   * Either Session Token must be provided to authenticate the request.
   */
  complete(stepID: string, params: StepCompleteParams, options?: RequestOptions): APIPromise<void> {
    const { routeID, key, ...body } = params;
    return this._client.patch(path`/fleetify/routes/${routeID}/steps/${stepID}`, {
      query: { key },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A key-value map storing form submission data, where keys correspond to field
 * labels and values can be of any type depend on the type of according document
 * item.
 */
export type DocumentSubmission = unknown;

/**
 * Specify the mode of completion to be used for the step. Currently, following
 * values are allowed:
 *
 * - manual: Steps must be marked as completed manually through the Driver App.
 * - geofence: Steps are marked as completed automatically based on the entry
 *   conditions and geofence specified.
 * - geofence_manual_fallback: Steps will be marked as completed automatically
 *   based on geofence and entry condition configurations but there will also be a
 *   provision for manually updating the status in case, geofence detection fails.
 */
export type RouteStepCompletionMode = 'manual' | 'geofence' | 'geofence_manual_fallback';

/**
 * Specify the configurations of the geofence which will be used to detect presence
 * of the driver and complete the tasks automatically. Please note that this
 * attribute is required when completion_mode is either "geofence" or
 * "geofence_manual_fallback".
 */
export interface RouteStepGeofenceConfig {
  /**
   * Specify the radius of the cicular geofence, in meters. Once specified, the
   * service will create a geofence with task's location as the center of the circle
   * having the given radius. Valid values for radius are \[10, 5000\].
   */
  radius?: number;

  /**
   * Specify the type of the geofence. Currently, circle is the only suppoeted value.
   */
  type?: 'circle';
}

export interface RouteStepsRequest {
  /**
   * Specify the scheduled arrival time of the driver, as an UNIX timestamp in
   * seconds, at the step. Please note that:
   *
   * - Arrival time for each step should be equal to or greater than the previous
   *   step.
   * - Past times can not be provided.
   * - The time provided is used only for informative display on the driver app and
   *   it does not impact or get affected by the route generated.
   */
  arrival: number;

  /**
   * Specify the location coordinates where the steps should be performed in
   * [latitude, longitude].
   */
  location: Array<number>;

  /**
   * Specify the step type. It can belong to one of the following: start, job ,
   * pickup, delivery, end. A duration is mandatory when the step type is either
   * layover or a break.
   */
  type: 'start' | 'job' | 'pickup' | 'delivery' | 'break' | 'layover' | 'end';

  /**
   * Specify the postal address for the step.
   */
  address?: string;

  /**
   * Specify the mode of completion to be used for the step. Currently, following
   * values are allowed:
   *
   * - manual: Steps must be marked as completed manually through the Driver App.
   * - geofence: Steps are marked as completed automatically based on the entry
   *   conditions and geofence specified.
   * - geofence_manual_fallback: Steps will be marked as completed automatically
   *   based on geofence and entry condition configurations but there will also be a
   *   provision for manually updating the status in case, geofence detection fails.
   */
  completion_mode?: RouteStepCompletionMode;

  /**
   * Specify the ID of the document template to be used for collecting proof of
   * completion for the step. If not specified, the document template specified at
   * the route level will be used for the step. Use the
   * [Documents API](https://docs.nextbillion.ai/docs/dispatches/documents-api) to
   * create, read and manage the document templates.
   *
   * Please note that the document template ID can not be assigned to following step
   * types - start, end, break, layover.
   */
  document_template_id?: string;

  /**
   * Specify the duration of the layover or break type steps, in seconds. Please note
   * it is mandatory when step type is either "layover" or "break".
   */
  duration?: number;

  /**
   * Specify the configurations of the geofence which will be used to detect presence
   * of the driver and complete the tasks automatically. Please note that this
   * attribute is required when completion_mode is either "geofence" or
   * "geofence_manual_fallback".
   */
  geofence_config?: RouteStepGeofenceConfig;

  /**
   * An object to specify any additional details about the task to be associated with
   * the step in the response. The information provided here will be available on the
   * Driver's app under step details. This attribute can be used to provide context
   * about or instructions to the driver for performing the task
   */
  meta?: RouteStepsRequest.Meta;
}

export namespace RouteStepsRequest {
  /**
   * An object to specify any additional details about the task to be associated with
   * the step in the response. The information provided here will be available on the
   * Driver's app under step details. This attribute can be used to provide context
   * about or instructions to the driver for performing the task
   */
  export interface Meta {
    /**
     * Specify the name of the customer for which the step has to be performed.
     */
    customer_name?: string;

    /**
     * Specify the phone number of the person to be contacted when at step location.
     */
    customer_phone_number?: string;

    /**
     * Specify custom instructions to be carried out while performing the step.
     */
    instructions?: string;
  }
}

export interface RouteStepsResponse {
  /**
   * Returns the unique ID of the step.
   */
  id?: string;

  /**
   * Returns the postal address where the step is executed. Its value is the same as
   * that specified in the input request when configuring the step details.
   */
  address?: string;

  /**
   * Returns the scheduled arrival time of the driver at the step as an UNIX
   * timestamp, in seconds precision. It is the same as that specified in the input
   * request while configuring the step details.
   *
   * The timestamp returned here is only for informative display on the driver's app
   * and it does not impact or get affected by the route generated.
   */
  arrival?: number;

  completion?: RouteStepsResponse.Completion;

  /**
   * Represents the timestamp of the creation in seconds since the Unix epoch.
   * Example: 1738743999.
   */
  created_at?: number;

  /**
   * Returns the details of the document that was used for collecting the proof of
   * completion for the step. In case no document template ID was provided for the
   * given step, then a null value is returned. Each object represents a new field in
   * the document.
   */
  document_snapshot?: Array<unknown>;

  /**
   * Returns the duration for layover or break type steps.
   */
  duration?: number;

  /**
   * Returns the location coordinates where the step is executed.
   */
  location?: Array<number>;

  /**
   * An object returning custom details about the step that were configured in the
   * input request while configuring the step details. The information returned here
   * will be available for display on the Driver's app under step details.
   */
  meta?: RouteStepsResponse.Meta;

  /**
   * Returns a unique short ID of the step for easier referencing and displaying
   * purposes.
   */
  short_id?: string;

  /**
   * Returns the step type. It can belong to one of the following: start, job ,
   * pickup, delivery, break, layover , and end. For any given step, it would be the
   * same as that specified in the input request while configuring the step details.
   */
  type?: string;

  /**
   * Represents the timestamp of the last update in seconds since the Unix epoch.
   * Example: 1738743999.
   */
  updated_at?: number;
}

export namespace RouteStepsResponse {
  export interface Completion {
    /**
     * Represents the timestamp of the completion in seconds since the Unix epoch.
     * Example: 1738743999.
     */
    completed_at?: number;

    /**
     * Specify the mode of completion to be used for the step. Currently, following
     * values are allowed:
     *
     * - manual: Steps must be marked as completed manually through the Driver App.
     * - geofence: Steps are marked as completed automatically based on the entry
     *   conditions and geofence specified.
     * - geofence_manual_fallback: Steps will be marked as completed automatically
     *   based on geofence and entry condition configurations but there will also be a
     *   provision for manually updating the status in case, geofence detection fails.
     */
    completed_by_mode?: StepsAPI.RouteStepCompletionMode;

    /**
     * Specify the mode of completion to be used for the step. Currently, following
     * values are allowed:
     *
     * - manual: Steps must be marked as completed manually through the Driver App.
     * - geofence: Steps are marked as completed automatically based on the entry
     *   conditions and geofence specified.
     * - geofence_manual_fallback: Steps will be marked as completed automatically
     *   based on geofence and entry condition configurations but there will also be a
     *   provision for manually updating the status in case, geofence detection fails.
     */
    completion_mode?: StepsAPI.RouteStepCompletionMode;

    /**
     * A key-value map storing form submission data, where keys correspond to field
     * labels and values can be of any type depend on the type of according document
     * item.
     */
    document?: StepsAPI.DocumentSubmission;

    /**
     * Represents the timestamp of the last doc modification in seconds since the Unix
     * epoch. Example: 1738743999.
     */
    document_modified_at?: number;

    /**
     * Specify the configurations of the geofence which will be used to detect presence
     * of the driver and complete the tasks automatically. Please note that this
     * attribute is required when completion_mode is either "geofence" or
     * "geofence_manual_fallback".
     */
    geofence_config?: StepsAPI.RouteStepGeofenceConfig;

    /**
     * Status of the step.
     */
    status?: 'scheduled' | 'completed' | 'canceled';
  }

  /**
   * An object returning custom details about the step that were configured in the
   * input request while configuring the step details. The information returned here
   * will be available for display on the Driver's app under step details.
   */
  export interface Meta {
    /**
     * Returns the customer name associated with the step. It can configured in the
     * input request using the metadata attribute of the step.
     */
    customer_name?: string;

    /**
     * Returns the customer's phone number associated with the step. It can configured
     * in the input request using the metadata attribute of the step.
     */
    customer_phone_number?: string;

    /**
     * Returns the custom instructions to carry out while performing the task. These
     * instructions can be provided at the time of configuring the step details in the
     * input request.
     */
    instructions?: string;
  }
}

export interface StepCreateResponse {
  data?: RouteStepsResponse;

  /**
   * Returns the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  message?: string;

  /**
   * Returns the status code of the response.
   */
  status?: number;
}

export interface StepUpdateResponse {
  data?: RouteStepsResponse;

  /**
   * Returns the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  message?: string;

  /**
   * Returns the status code of the response.
   */
  status?: number;
}

export interface StepDeleteResponse {
  /**
   * Returns the error message in case of a failed request. If the request is
   * successful, this field is not present in the response.
   */
  message?: string;

  /**
   * Returns the status code of the response.
   */
  status?: number;
}

export interface StepCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the scheduled arrival time of the driver, as an UNIX
   * timestamp in seconds, at the step. Please note that:
   *
   * - Arrival time for each step should be equal to or greater than the previous
   *   step.
   * - Past times can not be provided.
   * - The time provided is used only for informative display on the driver app and
   *   it does not impact or get affected by the route generated.
   */
  arrival: number;

  /**
   * Body param: Specify the location coordinates where the steps should be performed
   * in [latitude, longitude].
   */
  location: Array<number>;

  /**
   * Body param: Indicates the index at which to insert the step, starting from 0 up
   * to the total number of steps in the route.
   */
  position: number;

  /**
   * Body param: Specify the step type. It can belong to one of the following: start,
   * job , pickup, delivery, end. A duration is mandatory when the step type is
   * either layover or a break.
   */
  type: 'start' | 'job' | 'pickup' | 'delivery' | 'break' | 'layover' | 'end';

  /**
   * Body param: Specify the postal address for the step.
   */
  address?: string;

  /**
   * Body param: Specify the mode of completion to be used for the step. Currently,
   * following values are allowed:
   *
   * - manual: Steps must be marked as completed manually through the Driver App.
   * - geofence: Steps are marked as completed automatically based on the entry
   *   conditions and geofence specified.
   * - geofence_manual_fallback: Steps will be marked as completed automatically
   *   based on geofence and entry condition configurations but there will also be a
   *   provision for manually updating the status in case, geofence detection fails.
   */
  completion_mode?: RouteStepCompletionMode;

  /**
   * Body param: Specify the ID of the document template to be used for collecting
   * proof of completion for the step. If not specified, the document template
   * specified at the route level will be used for the step. Use the
   * [Documents API](https://docs.nextbillion.ai/docs/dispatches/documents-api) to
   * create, read and manage the document templates.
   *
   * Please note that the document template ID can not be assigned to following step
   * types - start, end, break, layover.
   */
  document_template_id?: string;

  /**
   * Body param: Specify the duration of the layover or break type steps, in seconds.
   * Please note it is mandatory when step type is either "layover" or "break".
   */
  duration?: number;

  /**
   * Body param: Specify the configurations of the geofence which will be used to
   * detect presence of the driver and complete the tasks automatically. Please note
   * that this attribute is required when completion_mode is either "geofence" or
   * "geofence_manual_fallback".
   */
  geofence_config?: RouteStepGeofenceConfig;

  /**
   * Body param: An object to specify any additional details about the task to be
   * associated with the step in the response. The information provided here will be
   * available on the Driver's app under step details. This attribute can be used to
   * provide context about or instructions to the driver for performing the task
   */
  meta?: StepCreateParams.Meta;
}

export namespace StepCreateParams {
  /**
   * An object to specify any additional details about the task to be associated with
   * the step in the response. The information provided here will be available on the
   * Driver's app under step details. This attribute can be used to provide context
   * about or instructions to the driver for performing the task
   */
  export interface Meta {
    /**
     * Specify the name of the customer for which the step has to be performed.
     */
    customer_name?: string;

    /**
     * Specify the phone number of the person to be contacted when at step location.
     */
    customer_phone_number?: string;

    /**
     * Specify custom instructions to be carried out while performing the step.
     */
    instructions?: string;
  }
}

export interface StepUpdateParams {
  /**
   * Path param: Provide the ID of a previously dispatched route which needs to be
   * modified. Both the id and short_id of the route are a valid input.
   */
  routeID: string;

  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the scheduled arrival time of the driver, as an UNIX
   * timestamp in seconds, at the step. Please note that:
   *
   * - Arrival time for each step should be equal to or greater than the previous
   *   step.
   * - Past times can not be provided.
   * - The time provided is used only for informative display on the driver app and
   *   it does not impact or get affected by the route generated.
   */
  arrival: number;

  /**
   * Body param: Specify the new position of the step. Provide a position different
   * from the current position of the step to update sequence in which the step get
   * completed.
   */
  position: number;

  /**
   * Body param: Specify the postal address for the step.
   */
  address?: string;

  /**
   * Body param: Specify the mode of completion to be used for the step. Currently,
   * following values are allowed:
   *
   * - manual: Steps must be marked as completed manually through the Driver App.
   * - geofence: Steps are marked as completed automatically based on the entry
   *   conditions and geofence specified.
   * - geofence_manual_fallback: Steps will be marked as completed automatically
   *   based on geofence and entry condition configurations but there will also be a
   *   provision for manually updating the status in case, geofence detection fails.
   */
  completion_mode?: RouteStepCompletionMode;

  /**
   * Body param: Update the ID of the document template to be used for collecting
   * proof of completion for the step. If an empty string "" is provided, the current
   * document template associated to the step will be removed.
   */
  document_template_id?: string;

  /**
   * Body param: Specify the duration of the layover or break type steps, in seconds.
   * Please note it is mandatory when step type is either "layover" or "break".
   */
  duration?: number;

  /**
   * Body param: Specify the configurations of the geofence which will be used to
   * detect presence of the driver and complete the tasks automatically. Please note
   * that this attribute is required when completion_mode is either "geofence" or
   * "geofence_manual_fallback".
   */
  geofence_config?: RouteStepGeofenceConfig;

  /**
   * Body param: Specify the location coordinates where the steps should be performed
   * in [latitude, longitude].
   */
  location?: Array<number>;

  /**
   * Body param: An object to specify any additional details about the task to be
   * associated with the step in the response. The information provided here will be
   * available on the Driver's app under step details. This attribute can be used to
   * provide context about or instructions to the driver for performing the task
   */
  meta?: StepUpdateParams.Meta;

  /**
   * Body param: Specify the step type. It can belong to one of the following: start,
   * job , pickup, delivery, end. A duration is mandatory when the step type is
   * either layover or a break.
   */
  type?: 'start' | 'job' | 'pickup' | 'delivery' | 'break' | 'layover' | 'end';
}

export namespace StepUpdateParams {
  /**
   * An object to specify any additional details about the task to be associated with
   * the step in the response. The information provided here will be available on the
   * Driver's app under step details. This attribute can be used to provide context
   * about or instructions to the driver for performing the task
   */
  export interface Meta {
    /**
     * Specify the name of the customer for which the step has to be performed.
     */
    customer_name?: string;

    /**
     * Specify the phone number of the person to be contacted when at step location.
     */
    customer_phone_number?: string;

    /**
     * Specify custom instructions to be carried out while performing the step.
     */
    instructions?: string;
  }
}

export interface StepDeleteParams {
  /**
   * Path param: Provide the ID of a previously dispatched route which needs to be
   * modified. Both the id and short_id of the route are a valid input.
   */
  routeID: string;

  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;
}

export interface StepCompleteParams {
  /**
   * Path param: Provide the ID of a previously dispatched route which needs to be
   * modified. Both the id and short_id of the route are a valid input.
   */
  routeID: string;

  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: A key-value map storing form submission data, where keys correspond
   * to field labels and values can be of any type depend on the type of according
   * document item.
   */
  document?: DocumentSubmission;

  /**
   * Body param: Sets the status of the route step. Currently only completed is
   * supported.
   *
   * Note: once marked completed, a step cannot transition to other statuses. You can
   * only update the document afterwards.
   */
  mode?: string;

  /**
   * Body param: Sets the status of the route step. Currently only completed is
   * supported.
   *
   * Note: once marked completed, a step cannot transition to other statuses. You can
   * only update the document afterwards.
   */
  status?: string;
}

export declare namespace Steps {
  export {
    type DocumentSubmission as DocumentSubmission,
    type RouteStepCompletionMode as RouteStepCompletionMode,
    type RouteStepGeofenceConfig as RouteStepGeofenceConfig,
    type RouteStepsRequest as RouteStepsRequest,
    type RouteStepsResponse as RouteStepsResponse,
    type StepCreateResponse as StepCreateResponse,
    type StepUpdateResponse as StepUpdateResponse,
    type StepDeleteResponse as StepDeleteResponse,
    type StepCreateParams as StepCreateParams,
    type StepUpdateParams as StepUpdateParams,
    type StepDeleteParams as StepDeleteParams,
    type StepCompleteParams as StepCompleteParams,
  };
}
