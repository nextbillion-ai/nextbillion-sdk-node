// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RoutesAPI from './routes';
import * as StepsAPI from './steps';
import {
  DocumentSubmission,
  RouteStepCompletionMode,
  RouteStepGeofenceConfig,
  RouteStepsRequest,
  RouteStepsResponse,
  StepCompleteParams,
  StepCreateParams,
  StepCreateResponse,
  StepDeleteParams,
  StepDeleteResponse,
  StepUpdateParams,
  StepUpdateResponse,
  Steps as StepsAPISteps,
} from './steps';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Routes extends APIResource {
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);

  /**
   * Dispatch a new route
   */
  create(params: RouteCreateParams, options?: RequestOptions): APIPromise<RouteCreateResponse> {
    const { key, ...body } = params;
    return this._client.post('/fleetify/routes', { query: { key }, body, ...options });
  }

  /**
   * Re-dispatch route
   */
  redispatch(
    routeID: string,
    params: RouteRedispatchParams,
    options?: RequestOptions,
  ): APIPromise<RouteRedispatchResponse> {
    const { key, ...body } = params;
    return this._client.post(path`/fleetify/routes/${routeID}/redispatch`, {
      query: { key },
      body,
      ...options,
    });
  }
}

/**
 * An object returning the routing characteristics that are used to generate the
 * route and turn-by-turn navigation steps for the dispatched route. The route and
 * navigation steps are available when driver uses the in-app navigation.
 *
 * Please note the routing characteristics returned here are the same as those
 * configured in the input request. The fields which were not specified in the
 * input will be returned as blanks.
 */
export interface Response {
  /**
   * Returns the configuration of approaches for each step, that is used when
   * generating the route to help the driver with turn-by-turn navigation.
   */
  approaches?: string;

  /**
   * Returns the objects and maneuvers that will be avoided in the route that is
   * built when driver starts the in-app turn-by-turn navigation.
   */
  avoid?: string;

  /**
   * Returns the hazardous cargo type that the truck is carrying. The hazardous cargo
   * type is used to determine the compliant routes that the driver can take while
   * navigating the dispatched route.
   */
  hazmat_type?: string;

  /**
   * Returns the driving mode that is used to build the route when driver starts the
   * in-app turn-by-turn navigation.
   */
  mode?: string;

  /**
   * Returns the total load per axle of the truck, in tonnes, used to determine
   * compliant routes that the driver can take when he starts navigating the
   * dispatched route.
   */
  truck_axle_load?: string;

  /**
   * Returns the truck dimensions, in centimeters, used to determine compliant routes
   * that the driver can take when he starts navigating the dispatched route.
   */
  truck_size?: string;

  /**
   * Returns the truck weight that will determine compliant routes that can be used
   * by the driver during navigation.
   */
  truck_weight?: string;
}

export interface RouteCreateResponse {
  /**
   * An array of objects containing the details of each step in the dispatched route.
   * Each object represents a single step.
   */
  data?: RouteCreateResponse.Data;

  /**
   * Returns the status code of the response.
   */
  status?: number;
}

export namespace RouteCreateResponse {
  /**
   * An array of objects containing the details of each step in the dispatched route.
   * Each object represents a single step.
   */
  export interface Data {
    /**
     * Returns the unique ID of the dispatched route.
     */
    id?: string;

    /**
     * Returns the UNIX timestamp, in seconds precision, at which this route dispatch
     * request was created.
     */
    created_at?: number;

    /**
     * Returns the total route distance, in meters, for informative display in the
     * driver app. It is the same as the value provided for `distance` field in the
     * input request.
     */
    distance?: number;

    /**
     * Returns the details of the document that was specified in the input for
     * collecting the proof-of-completion for all steps in the dispatched routes. Each
     * object represents a new field in the document.
     */
    document_snapshot?: Array<unknown>;

    /**
     * An object returning the details of the driver to whom the route was dispatched.
     */
    driver?: Data.Driver;

    /**
     * Returns the route optimization request ID which was used to dispatch the route.
     * An empty string is returned if the corresponding input was not provided.
     */
    ro_request_id?: string;

    /**
     * An object returning the routing characteristics that are used to generate the
     * route and turn-by-turn navigation steps for the dispatched route. The route and
     * navigation steps are available when driver uses the in-app navigation.
     *
     * Please note the routing characteristics returned here are the same as those
     * configured in the input request. The fields which were not specified in the
     * input will be returned as blanks.
     */
    routing?: RoutesAPI.Response;

    /**
     * Returns a shorter unique ID of the dispatched route for easier referencing and
     * displaying purposes.
     */
    short_id?: string;

    /**
     * An array of objects containing the details of all steps to be performed as part
     * of the dispatched route. Each object represents a single step during the route.
     */
    steps?: Array<StepsAPI.RouteStepsResponse>;

    /**
     * Returns the total number of steps in the dispatched route.
     */
    total_steps?: number;

    /**
     * Returns the UNIX timestamp, in seconds precision, at which this route dispatch
     * request was updated.
     */
    updated_at?: number;

    /**
     * Returns the ID of the vehicle to which the route was dispatched. The vehicle ID
     * returned here is the same as the one used in the route optimization request for
     * the given vehicle. An empty string is returned if the `ro_request_id` was not
     * provided in the input.
     */
    vehicle_id?: string;
  }

  export namespace Data {
    /**
     * An object returning the details of the driver to whom the route was dispatched.
     */
    export interface Driver {
      /**
       * Returns the ID of the driver as specified in the
       * [NextBillion.ai](http://NextBillion.ai) Cloud Console.
       */
      id?: string;

      /**
       * Returns the email of the driver as specified in the
       * [NextBillion.ai](http://NextBillion.ai) Cloud Console.
       */
      email?: string;

      /**
       * Returns the full name of the driver as specified in
       * [NextBillion.ai](http://NextBillion.ai) Cloud Console.
       */
      fullname?: string;
    }
  }
}

export interface RouteRedispatchResponse {
  /**
   * An array of objects containing the details of each step in the dispatched route.
   * Each object represents a single step.
   */
  data?: RouteRedispatchResponse.Data;

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

export namespace RouteRedispatchResponse {
  /**
   * An array of objects containing the details of each step in the dispatched route.
   * Each object represents a single step.
   */
  export interface Data {
    /**
     * Returns the unique ID of the route.
     */
    id?: string;

    /**
     * Returns the number of steps already completed in the route.
     */
    completed_steps?: number;

    /**
     * Returns the completion status of the route.
     */
    completion?: Data.Completion;

    /**
     * Returns the UNIX timestamp, in seconds precision, at which this route dispatch
     * request was created.
     */
    created_at?: number;

    /**
     * Returns the total route distance, in meters, for informative display in the
     * driver app. It is the same as the value provided for `distance` field in the
     * input request.
     */
    distance?: number;

    /**
     * Returns the details of the document that was specified in the input for
     * collecting the proof-of-completion for all steps in the dispatched routes. Each
     * object represents a new field in the document.
     */
    document_snapshot?: Array<unknown>;

    /**
     * An object returning the details of the driver to whom the route was dispatched.
     */
    driver?: Data.Driver;

    /**
     * Returns the route optimization request ID which was used to dispatch the route.
     * An empty string is returned if the corresponding input was not provided.
     */
    ro_request_id?: string;

    /**
     * An object returning the routing characteristics that are used to generate the
     * route and turn-by-turn navigation steps for the dispatched route. The route and
     * navigation steps are available when driver uses the in-app navigation.
     *
     * Please note the routing characteristics returned here are the same as those
     * configured in the input request. The fields which were not specified in the
     * input will be returned as blanks.
     */
    routing?: RoutesAPI.Response;

    /**
     * Returns a shorter unique ID of the route for easier referencing and displaying
     * purposes.
     */
    short_id?: string;

    steps?: Data.Steps;

    /**
     * Returns the total number of steps in the dispatched route.
     */
    total_steps?: number;

    /**
     * Returns the UNIX timestamp, in seconds precision, at which this route dispatch
     * request was updated.
     */
    updated_at?: number;

    /**
     * Returns the ID of the vehicle to which the route was dispatched. The vehicle ID
     * returned here is the same as the one used in the route optimization request for
     * the given vehicle. An empty string is returned if the `ro_request_id` was not
     * provided in the input.
     */
    vehicle_id?: string;
  }

  export namespace Data {
    /**
     * Returns the completion status of the route.
     */
    export interface Completion {
      /**
       * Returns the status of the route. It can take one of the following values -
       * "scheduled", "completed".
       */
      status?: '`scheduled`' | '`completed`';
    }

    /**
     * An object returning the details of the driver to whom the route was dispatched.
     */
    export interface Driver {
      /**
       * Returns the ID of the driver as specified in the
       * [NextBillion.ai](http://NextBillion.ai) Cloud Console.
       */
      id?: string;

      /**
       * Returns the email of the driver as specified in the
       * [NextBillion.ai](http://NextBillion.ai) Cloud Console.
       */
      email?: string;

      /**
       * Returns the full name of the driver as specified in
       * [NextBillion.ai](http://NextBillion.ai) Cloud Console.
       */
      fullname?: string;
    }

    export interface Steps {
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

      /**
       * Returns the completion status of the step.
       */
      completion?: Steps.Completion;

      /**
       * Returns the UNIX timestamp, in seconds precision, at which this step was
       * created.
       */
      created_at?: number;

      /**
       * Returns the details of the document that was used for collecting the proof of
       * completion for the step. In case no document template ID was provided for the
       * given step, then a `null` value is returned. Each object represents a new field
       * in the document.
       */
      document_snapshot?: Array<unknown>;

      /**
       * Returns the duration for `layover` or `break` type steps.
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
      meta?: Steps.Meta;

      /**
       * Returns a unique short ID of the step for easier referencing and displaying
       * purposes.
       */
      short_id?: string;

      /**
       * Returns the step type. It can belong to one of the following: `start`, `job` ,
       * `pickup`, `delivery`, `break`, `layover` , and `end`. For any given step, it
       * would be the same as that specified in the input request while configuring the
       * step details.
       */
      type?: string;

      /**
       * Returns the UNIX timestamp, in seconds precision, at which this step was last
       * updated.
       */
      updated_at?: number;
    }

    export namespace Steps {
      /**
       * Returns the completion status of the step.
       */
      export interface Completion {
        /**
         * Returns the status of the step. It can take one of the following values -
         * "scheduled", "completed".
         */
        status?: string;
      }

      /**
       * An object returning custom details about the step that were configured in the
       * input request while configuring the step details. The information returned here
       * will be available for display on the Driver's app under step details.
       */
      export interface Meta {
        /**
         * Returns the customer name associated with the step. It can configured in the
         * input request using the `metadata` attribute of the step.
         */
        customer_name?: string;

        /**
         * Returns the customer's phone number associated with the step. It can configured
         * in the input request using the `metadata` attribute of the step.
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
  }
}

export interface RouteCreateParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the e-mail address of the driver who should receive the
   * route. The e-mail address must be registered in
   * [NextBillion.ai Cloud Console](https://console.nextbillion.ai/).
   */
  driver_email: string;

  /**
   * Body param: An array of objects to collect the details about the intermediate
   * steps in the route to be dispatched. Each object corresponds to a single step.
   * The array must begin with a start-type step and end with an end-type step, to
   * form a valid route.
   */
  steps: Array<StepsAPI.RouteStepsRequest>;

  /**
   * Body param: Specify the total distance, in meters, for an informative display in
   * Driver's app. The distance specified here has no effect on the actual route that
   * the service generates.
   */
  distance?: number;

  /**
   * Body param: Specify the ID of the document template that should be used to
   * collect proof of completion for all steps in the route. In order to complete
   * each route step, the driver will need to submit a form generated by the rules
   * defined in the given document template. Use the
   * [Documents API](https://docs.nextbillion.ai/docs/dispatches/documents-api) to
   * create, read and manage document templates.
   *
   * Please note that the document template ID assigned to a route does not apply to
   * following step types - `start`, `end`, `break`, `layover`.
   */
  document_template_id?: string;

  /**
   * Body param: Specify the Route Optimization request ID. When this ID is provided,
   * all other fields will be ignored (including the required fields) and the route
   * optimization result will be used to form the routes and corresponding steps.
   *
   * Please note that:
   *
   * - The driver's email ID must be provided in input `vehicle.metadata` as
   *   `user_email` such that the route optimization result must contain a valid
   *   driver email, step's arrival time, etc., to make a successful dispatch.
   * - Document Template for collecting proof of delivery or completion can not be
   *   specified when using this field to dispatch a route.
   * - In case of an error at any part among the routes, the API will immediately
   *   return the error with the index of the specific route or route step.
   * - On a successful dispatch, the API returns the last route, if there are many,
   *   in the response payload.
   */
  ro_request_id?: string;

  /**
   * Body param: The `routing` object allows defining the routing characteristics
   * that should be used to generate a route when the Driver uses the in-app
   * navigation. Only `car` mode is supported currently.
   */
  routing?: RouteCreateParams.Routing;
}

export namespace RouteCreateParams {
  /**
   * The `routing` object allows defining the routing characteristics that should be
   * used to generate a route when the Driver uses the in-app navigation. Only `car`
   * mode is supported currently.
   */
  export interface Routing {
    /**
     * Specify the side of the road from which the route should approach the step
     * location. When set to `unrestricted` a route can arrive at the step location
     * from either side of the road and when set to `curb` the route will arrive at the
     * step location only from the driving side of the region. Use a semi-colon `;` to
     * specify approach configurations for multiple steps.
     */
    approaches?: '`unrestricted`' | '`curb`';

    /**
     * Setting this will ensure the generated route avoids the object(s) specified in
     * the input. Multiple values should be separated by a pipe (|). If `none` is
     * provided along with other values, an error is returned as a valid route is not
     * feasible.
     */
    avoid?:
      | '`toll`'
      | '`highway`'
      | '`ferry`'
      | '`sharp_turn`'
      | '`uturn`'
      | '`left_turn`'
      | '`right_turn`'
      | '`service_road`'
      | '`none`';

    /**
     * Specify the type of hazardous material being carried and the dispatch service
     * will avoid roads which are not suitable for the type of goods specified.
     * Multiple values can be separated using a pipe operator `|` .
     *
     * Please note that this parameter is effective only when `mode=truck`.
     */
    hazmat_type?: '`general`' | '`circumstantial`' | '`explosive`' | '`harmful_to_water`';

    /**
     * Specify the driving mode that the service should use to determine a route
     */
    mode?: '`car`';

    /**
     * Specify the total load per axle (including the weight of trailers and shipped
     * goods) of the truck, in tonnes. When specified, the dispatched route uses only
     * those roads which can be used by a truck to carry the specified load per axle.
     *
     * Please note this parameter is effective only when `mode=truck`.
     */
    truck_axle_load?: number;

    /**
     * Specify the dimensions of a truck, in centimeters (cm), in the format of
     * <height, width, length>. When specified, the dispatched route uses only those
     * roads which allow trucks with specified dimensions.
     *
     * Please note this parameter is effective only when `mode=truck`. Also, the
     * maximum dimensions that can be specified are as follows:
     *
     * Height = 1000 cm
     * Width = 5000 cm
     * Length = 5000 cm
     */
    truck_size?: string;

    /**
     * Specify the weight of the truck, including trailers and shipped goods, in
     * kilograms (kg). When specified, the dispatched route uses only those roads which
     * allow trucks with specified weight.
     *
     * Please note this parameter is effective only when `mode=truck`. Also, the
     * maximum weight that can be specified for a truck is 100,000 kgs.
     */
    truck_weight?: number;
  }
}

export interface RouteRedispatchParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: A collection of objects with details of the steps to be modified.
   * Each object corresponds to a single step.
   */
  operations: Array<RouteRedispatchParams.Operation>;

  /**
   * Body param: Specify the distance of the route.
   */
  distance?: number;
}

export namespace RouteRedispatchParams {
  export interface Operation {
    data: Operation.Data;

    /**
     * Specify the type of operation to be performed for the step.
     */
    operation: '`create`' | '`update`' | '`delete`';
  }

  export namespace Operation {
    export interface Data {
      /**
       * Specify the mode of completion to be used for the step. Currently, following
       * values are allowed:
       *
       * - `manual`: Steps must be marked as completed manually through the Driver App.
       * - `geofence`: Steps are marked as completed automatically based on the entry
       *   conditions and geofence specified.
       * - `geofence_manual_fallback`: Steps will be marked as completed automatically
       *   based on geofence and entry condition configurations but there will also be a
       *   provision for manually updating the status in case, geofence detection fails.
       */
      completion_mode?: StepsAPI.RouteStepCompletionMode;

      /**
       * Specify the ID of the document template to be used for collecting proof of
       * completion for the step. It would be applied to step which not be bind to
       * document template. Use the
       * [Documents API](https://docs.nextbillion.ai/docs/dispatches/documents-api) to
       * create, read and manage the document templates.
       *
       * Please note that the document template ID can not be assigned to following step
       * types - `start`, `end`, `break`, `layover`.
       */
      document_template_id?: string;

      step?: StepsAPI.RouteStepsRequest;

      /**
       * Specify the ID of the step to be updated or deleted. Either one of `id` or
       * `short_id` of the step can be provided. This input will be ignored when
       * `operation: create` .
       */
      step_id?: string;
    }
  }
}

Routes.Steps = StepsAPISteps;

export declare namespace Routes {
  export {
    type Response as Response,
    type RouteCreateResponse as RouteCreateResponse,
    type RouteRedispatchResponse as RouteRedispatchResponse,
    type RouteCreateParams as RouteCreateParams,
    type RouteRedispatchParams as RouteRedispatchParams,
  };

  export {
    StepsAPISteps as Steps,
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
