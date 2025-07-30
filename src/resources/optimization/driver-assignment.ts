// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DriverAssignmentAPI from './driver-assignment';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DriverAssignment extends APIResource {
  /**
   * Assigns available drivers (vehicles) to open orders based on specified criteria
   * and constraints.
   */
  assign(
    params: DriverAssignmentAssignParams,
    options?: RequestOptions,
  ): APIPromise<DriverAssignmentAssignResponse> {
    const { key, ...body } = params;
    return this._client.post('/optimization/driver-assignment/v1', { query: { key }, body, ...options });
  }
}

/**
 * Location info.
 */
export interface Location {
  /**
   * Latitude of location.
   */
  lat: number;

  /**
   * Longitude of location.
   */
  lon: number;
}

export interface Vehicle {
  /**
   * Specify a unique ID for the vehicle.
   */
  id: string;

  /**
   * Specify the location coordinates where the vehicle is currently located. This
   * input is mandatory for each vehicle.
   */
  location: Vehicle.Location;

  /**
   * Specify custom attributes for the vehicle. Each attribute should be created as a
   * key:value pair. These attributes can be used in the orders.vehicle_preferences
   * input to refine the search of vehicles for each order.
   *
   * The maximum number of key:value pairs that can be specified under attributes for
   * a given vehicle, is limited to 30.
   */
  attributes?: unknown;

  /**
   * Specify the priority for this vehicle. A higher value indicates a higher
   * priority. When specified, it will override any priority score deduced from
   * vehicle_attribute_priority_mappings for this vehicle. Valid values are \[1, 10\]
   * and default is 0.
   */
  priority?: number;

  /**
   * An array of objects to collect the location coordinates of the stops remaining
   * on an ongoing trip of the vehicle. The service can assign new orders to the
   * vehicle if they are cost-effective. Once a new order is assigned, the vehicle
   * must complete all the steps in the ongoing trip before proceeding to pickup the
   * newly assigned order.
   *
   * Please note that a maximum of 10 waypoints can be specified for a given vehicle.
   */
  remaining_waypoints?: Array<Location>;
}

export namespace Vehicle {
  /**
   * Specify the location coordinates where the vehicle is currently located. This
   * input is mandatory for each vehicle.
   */
  export interface Location {
    /**
     * Latitude of the vehicle's current location.
     */
    lat?: number;

    /**
     * Longitude of the vehicle's current location.
     */
    lng?: number;
  }
}

export interface DriverAssignmentAssignResponse {
  /**
   * Displays indicative error message in case of a failed request or operation.
   * Please note that this parameter is not returned in the response in case of a
   * successful request.
   */
  message?: string;

  /**
   * An object containing the details of the assignments.
   */
  result?: DriverAssignmentAssignResponse.Result;

  /**
   * An integer indicating the HTTP response code. See the
   * [API Error Handling](https://docs.nextbillion.ai/optimization/driver-assignment-api#api-error-handling)
   * section below for more information.
   */
  status?: number;
}

export namespace DriverAssignmentAssignResponse {
  /**
   * An object containing the details of the assignments.
   */
  export interface Result {
    /**
     * An array of objects containing the details of the potential, alternate vehicle
     * assignments for the orders in the input. This attribute will not be returned in
     * the response if the alternate_assignments was not provided in the input. Each
     * object represents alternate assignments for a single order.
     */
    alternate_assignments?: Array<Result.AlternateAssignment>;

    /**
     * A collection of vehicles IDs that were not assigned to any orders. A null value
     * is returned if there are no vehicles without an order assignment.
     */
    available_vehicles?: Array<string>;

    /**
     * An collection of objects returning the trip details for each vehicle which was
     * assigned to an order. Each object corresponds to one vehicle.
     */
    trips?: Array<Result.Trip>;

    /**
     * A collection of objects listing the details of orders which remained unassigned.
     * Each object represents a single order. A null value is returned if there are no
     * unassigned orders.
     */
    unassigned_orders?: Array<Result.UnassignedOrder>;
  }

  export namespace Result {
    export interface AlternateAssignment {
      /**
       * An array of objects containing the details of the alternate vehicle assignments.
       * Each object represents an alternate vehicle assignment.
       */
      assignments?: Array<AlternateAssignment.Assignment>;

      /**
       * Returns the order ID associated with the alternate assignments.
       */
      order_id?: string;
    }

    export namespace AlternateAssignment {
      export interface Assignment {
        /**
         * Returns the ETA to the order's pickup location for the given vehicle.
         */
        pickup_eta?: number;

        /**
         * Returns the vehicle ID which could potentially be assigned to the given order.
         */
        vehicle_id?: string;
      }
    }

    export interface Trip {
      /**
       * Returns a unique trip ID.
       */
      trip_id?: string;

      /**
       * Returns the details of the vehicle, assigned order and the trip steps.
       */
      vehicle?: Trip.Vehicle;
    }

    export namespace Trip {
      /**
       * Returns the details of the vehicle, assigned order and the trip steps.
       */
      export interface Vehicle {
        /**
         * Returns the ID of the vehicle.
         */
        id?: string;

        /**
         * A collection of objects returning the sequence of steps that the vehicle needs
         * to perform for a trip.
         */
        steps?: Vehicle.Steps;

        /**
         * Location info.
         */
        vehicle_current_location?: DriverAssignmentAPI.Location;
      }

      export namespace Vehicle {
        /**
         * A collection of objects returning the sequence of steps that the vehicle needs
         * to perform for a trip.
         */
        export interface Steps {
          /**
           * Returns the driving distance, in meters, to the step's location from previous
           * step's location. For the first step of a trip, distance indicates the driving
           * distance from vehicle_current_location to the step's location.
           */
          distance?: number;

          /**
           * Returns the driving duration, in seconds, to the step's location from previous
           * step's location. For the first step of a trip, eta indicates the driving
           * duration from vehicle_current_location to the step's location.
           */
          eta?: number;

          /**
           * Location info.
           */
          location?: DriverAssignmentAPI.Location;

          /**
           * Returns the ID of the order. In case the step type is **ongoing**, an empty
           * string is returned.
           */
          order_id?: string;

          /**
           * Returns the type of the step. Currently, it can take following values:
           *
           * - **pickup:** Indicates the pickup step for an order
           * - **dropoff:** Indicates the dropoff step for an order. It is returned only if
           *   dropoff_details was **true** in the input request.
           * - **ongoing:** Indicates a step that the vehicle needs to complete on its
           *   current trip. This is returned in the response only when remaining_waypoints
           *   input was provided for the given vehicle.
           * - **intermediate_waypoint:** Indicates an intermediate stop that the vehicle
           *   needs to complete in case multiple dropoffs are provided in the input.
           */
          type?: 'pickup' | 'dropoff' | 'ongoing';
        }
      }
    }

    export interface UnassignedOrder {
      /**
       * Returns the ID of the order which remained unassigned.
       */
      order_id?: string;

      /**
       * Returns the most probable reason due to which the order remained unassigned.
       */
      unassigned_reason?: string;
    }
  }
}

export interface DriverAssignmentAssignParams {
  /**
   * Query param: A key is a unique identifier that is required to authenticate a
   * request to the API.
   */
  key: string;

  /**
   * Body param: Specify the filtering criterion for the vehicles with respect to
   * each order's location. filter is a mandatory input for all requests.
   */
  filter: DriverAssignmentAssignParams.Filter;

  /**
   * Body param: Collects the details of open orders to be fulfilled. Each object
   * represents one order. All requests must include orders as a mandatory input. A
   * maximum of 200 orders is allowed per request.
   */
  orders: Array<DriverAssignmentAssignParams.Order>;

  /**
   * Body param: Collects the details of vehicles available to fulfill the orders.
   * Each object represents one vehicle. All requests must include vehicles as a
   * mandatory input. A maximum of 100 vehicles is allowed per request.
   */
  vehicles: Array<Vehicle>;

  /**
   * Body param: Configure the assignment constraints and response settings.
   */
  options?: DriverAssignmentAssignParams.Options;
}

export namespace DriverAssignmentAssignParams {
  /**
   * Specify the filtering criterion for the vehicles with respect to each order's
   * location. filter is a mandatory input for all requests.
   */
  export interface Filter {
    /**
     * Defines a driving_distance filter, in meters. If a vehicle needs to drive
     * further than this distance to reach a pickup location, it will not be assigned
     * to that order. Valid range of values for this filter is \[1, 10000\].
     */
    driving_distance?: number;

    /**
     * Specify a duration, in seconds, which will be used to filter out ineligible
     * vehicles for each order. Any vehicle which would take more time than specified
     * here, to reach the pickup location of a given order, will be ruled out for
     * assignment for that particular order. Valid values for pickup_eta are \[1,
     * 3600\].
     */
    pickup_eta?: number;

    /**
     * Specify a radius, in meters, which will be used to filter out ineligible
     * vehicles for each order. The pickup location of an order will act as the center
     * of the circle when identifying eligible vehicles. Valid values for radius are
     * \[1, 10000\].
     */
    radius?: number;
  }

  export interface Order {
    /**
     * Specify a unique ID for the order.
     */
    id: string;

    /**
     * Specify the location coordinates of the pickup location of the order. This input
     * is mandatory for each order.
     */
    pickup: Order.Pickup;

    /**
     * Specify custom attributes for the orders. Each attribute should be created as a
     * key:value pair. The **keys** provided can be used in
     * options.order_attribute_priority_mappings to assign a custom priority for this
     * order based on its attributes.
     *
     * The maximum number of key:value pairs that can be specified under attributes for
     * a given order, is limited to 30.
     */
    attributes?: unknown;

    /**
     * Use this parameter to specify the location coordinates of the destination of the
     * trip or the intermediate stops to be completed before it.
     *
     * Please note
     *
     * - The last location provided is treated as the destination of the trip.
     * - dropoffs is mandatory when dropoff_details is set to **true**.
     */
    dropoffs?: Array<Order.Dropoff>;

    /**
     * Specify the priority for this order. A higher value indicates a higher priority.
     * When specified, it will override any priority score deduced from
     * order_attribute_priority_mappings for this order. Valid values are \[1, 10\] and
     * default is 0.
     */
    priority?: number;

    /**
     * Specify the service time, in seconds, for the order. Service time is the
     * duration that the driver is likely to wait at the pickup location after
     * arriving. The impact of the service time is realized in the ETA for the
     * "dropoff" type step.
     */
    service_time?: number;

    /**
     * Define custom preferences for task assignment based on vehicle's attributes. If
     * multiple criteria are provided, they are evaluated using an AND
     * condition—meaning all specified criteria must be met individually for a vehicle
     * to be considered.
     *
     * For example, if required_all_of_attributes, required_any_of_attributes, and
     * exclude_all_of_attributes are all provided, an eligible vehicle must satisfy the
     * following to be considered for assignments:
     *
     * 1.  Meet all conditions specified in required_all_of_attributes.
     * 2.  Meet at least one of the conditions listed in required_any_of_attributes.
     * 3.  Not meet any conditions mentioned in exclude_all_of_attributes.
     *
     * Consequently, a vehicle which does not have any attributes defined can't be
     * assigned to an order which has vehicle_preferences configured.
     */
    vehicle_preferences?: Order.VehiclePreferences;
  }

  export namespace Order {
    /**
     * Specify the location coordinates of the pickup location of the order. This input
     * is mandatory for each order.
     */
    export interface Pickup {
      /**
       * Latitude of the pickup location.
       */
      lat?: number;

      /**
       * Longitude of the pickup location.
       */
      lng?: number;
    }

    export interface Dropoff {
      /**
       * Latitude of the stop location.
       */
      lat?: number;

      /**
       * Longitude of the stop location.
       */
      lng?: number;
    }

    /**
     * Define custom preferences for task assignment based on vehicle's attributes. If
     * multiple criteria are provided, they are evaluated using an AND
     * condition—meaning all specified criteria must be met individually for a vehicle
     * to be considered.
     *
     * For example, if required_all_of_attributes, required_any_of_attributes, and
     * exclude_all_of_attributes are all provided, an eligible vehicle must satisfy the
     * following to be considered for assignments:
     *
     * 1.  Meet all conditions specified in required_all_of_attributes.
     * 2.  Meet at least one of the conditions listed in required_any_of_attributes.
     * 3.  Not meet any conditions mentioned in exclude_all_of_attributes.
     *
     * Consequently, a vehicle which does not have any attributes defined can't be
     * assigned to an order which has vehicle_preferences configured.
     */
    export interface VehiclePreferences {
      /**
       * An array of objects to add exclusion requirements for the order. A vehicle must
       * **not meet any of the conditions** specified here to be considered for
       * assignment. Each object represents a single condition. Please note that a
       * maximum of 10 conditions can be added here for a given order.
       */
      exclude_all_of_attributes?: Array<VehiclePreferences.ExcludeAllOfAttribute>;

      /**
       * An array of objects to add mandatory requirements for the order. A vehicle must
       * **meet** **all conditions** specified here to be considered for assignment. Each
       * object represents a single condition. Please note that a maximum of 10
       * conditions can be added here for a given order.
       */
      required_all_of_attributes?: Array<VehiclePreferences.RequiredAllOfAttribute>;

      /**
       * An array of objects to add optional requirements for the order. A vehicle must
       * **meet** **at least one of the conditions** specified here to be considered for
       * assignment. Each object represents a single condition. Please note that a
       * maximum of 10 conditions can be added here for a given order.
       */
      required_any_of_attributes?: Array<VehiclePreferences.RequiredAnyOfAttribute>;
    }

    export namespace VehiclePreferences {
      export interface ExcludeAllOfAttribute {
        /**
         * Specify the name of the attribute. The attribute is compared to the keys (of
         * each key:value pair) in vehicles.attributes during evaluation.
         */
        attribute: string;

        /**
         * Specify the operator to denote the relation between attribute and the value
         * specified above. The attribute , operator and value together constitute the
         * condition that a vehicle must meet to be eligible for assignment. Currently, we
         * support following operators currently:
         *
         * - Equal to (==)
         * - Less than (<)
         * - Less tha equal to (<=)
         * - Greater than (>)
         * - Greater than equal to (>=)
         * - Contains (contains)
         *
         * Please note that when using "contains" operator only one value can be specified
         * and the corresponding attribute must contain multiple values when defined for a
         * vehicle.
         */
        operator: string;

        /**
         * Specify the desired value of the attribute to be applied for this order. value
         * provided here is compared to the values (of each key:value pair) in
         * vehicles.attributes during evaluation.
         */
        value: string;
      }

      export interface RequiredAllOfAttribute {
        /**
         * Specify the name of the attribute. The attribute is compared to the keys (of
         * each key:value pair) in vehicles.attributes during evaluation.
         */
        attribute: string;

        /**
         * Specify the operator to denote the relation between attribute and the value
         * specified above. The attribute , operator and value together constitute the
         * condition that a vehicle must meet to be eligible for assignment. Currently, we
         * support following operators currently:
         *
         * - Equal to (==)
         * - Less than (<)
         * - Less tha equal to (<=)
         * - Greater than (>)
         * - Greater than equal to (>=)
         * - Contains (contains)
         *
         * Please note that when using "contains" operator only one value can be specified
         * and the corresponding attribute must contain multiple values when defined for a
         * vehicle.
         */
        operator: string;

        /**
         * Specify the desired value of the attribute to be applied for this order. value
         * provided here is compared to the values (of each key:value pair) in
         * vehicles.attributes during evaluation.
         */
        value: string;
      }

      export interface RequiredAnyOfAttribute {
        /**
         * Specify the name of the attribute. The attribute is compared to the keys (of
         * each key:value pair) in vehicles.attributes during evaluation.
         */
        attribute: string;

        /**
         * Specify the operator to denote the relation between attribute and the value
         * specified above. The attribute , operator and value together constitute the
         * condition that a vehicle must meet to be eligible for assignment. Currently, we
         * support following operators currently:
         *
         * - Equal to (==)
         * - Less than (<)
         * - Less tha equal to (<=)
         * - Greater than (>)
         * - Greater than equal to (>=)
         * - Contains (contains)
         *
         * Please note that when using "contains" operator only one value can be specified
         * and the corresponding attribute must contain multiple values when defined for a
         * vehicle.
         */
        operator: string;

        /**
         * Specify the desired value of the attribute to be applied for this order. value
         * provided here is compared to the values (of each key:value pair) in
         * vehicles.attributes during evaluation.
         */
        value: string;
      }
    }
  }

  /**
   * Configure the assignment constraints and response settings.
   */
  export interface Options {
    /**
     * Specify the maximum number of potential, alternate vehicle assignments to be
     * returned for each order, apart from the vehicle which was assigned as
     * recommended. Please note that:
     *
     * - The maximum number of alternate assignments that can be requested are 3.
     * - It is not necessary that the service will return the specified number of
     *   alternate assignments for each order. The number of alternate assignments
     *   returned will depend on the number of vehicles provided in the input.
     * - Order which could not be assigned to any vehicles due to their filter or
     *   attribute matching criteria will not be eligible for alternate assignments as
     *   well.
     */
    alternate_assignments?: number;

    /**
     * When **true**, the service returns the drop-off steps for each trip and related
     * details in the response. Defaults to **false**.
     */
    dropoff_details?: boolean;

    /**
     * Collection of rules for assigning custom priority to orders based on their
     * attributes. In case an order satisfies more than one rule, the highest priority
     * score from all the rules satisfied, would be the effective priority score for
     * such an order.
     */
    order_attribute_priority_mappings?: Array<Options.OrderAttributePriorityMapping>;

    /**
     * Choose a travel cost that will be used by the service for assigning vehicles
     * efficiently from a set of qualifying ones.
     */
    travel_cost?: 'driving_eta' | 'driving_distance' | 'straight_line_distance';

    /**
     * Collection of rules for assigning custom priority to vehicles based on their
     * attributes. In case a vehicle satisfies more than one rule, the highest priority
     * score from all the rules satisfied, would be the effective priority score for
     * such a vehicle.
     */
    vehicle_attribute_priority_mappings?: Array<Options.VehicleAttributePriorityMapping>;
  }

  export namespace Options {
    export interface OrderAttributePriorityMapping {
      /**
       * Specify the name of the attribute. The attribute is compared to the keys (of
       * each key:value pair) in orders.attributes during evaluation.
       */
      attribute: string;

      /**
       * Specify the operator to denote the relation between attribute and the value
       * specified above. The attribute , operator and value together constitute the
       * condition that an order must meet to assume the specified priority. We support
       * the following operators currently:
       *
       * - Equal to (==)
       * - Less than (<)
       * - Less tha equal to (<=)
       * - Greater than (>)
       * - Greater than equal to (>=)
       * - Contains (contains)
       *
       * Please note that when using "contains" operator only one value can be specified
       * and the corresponding attribute must contain multiple values when defined for an
       * order.
       */
      operator: string;

      /**
       * Specify the priority score that should be assigned when an order qualifies the
       * criteria specified above. A higher value indicates a higher priority. Valid
       * values are \[1,10\].
       */
      priority: string;

      /**
       * Specify the desired value of the attribute to be applied for this order. value
       * provided here is compared to the values (of each key:value pair) in
       * orders.attributes during evaluation.
       */
      value: string;
    }

    export interface VehicleAttributePriorityMapping {
      /**
       * Specify the name of the attribute. The attribute is compared to the keys (of
       * each key:value pair) in vehicles.attributes during evaluation.
       */
      attribute: string;

      /**
       * Specify the operator to denote the relation between attribute and the value
       * specified above. The attribute , operator and value together constitute the
       * condition that a vehicle must meet to assume the specified priority. We support
       * the following operators currently:
       *
       * - Equal to (==)
       * - Less than (<)
       * - Less tha equal to (<=)
       * - Greater than (>)
       * - Greater than equal to (>=)
       * - Contains (contains)
       *
       * Please note that when using "contains" operator only one value can be specified
       * and the corresponding attribute must contain multiple values when defined for a
       * vehicle.
       */
      operator: string;

      /**
       * Specify the priority score that should be assigned when a vehicle qualifies the
       * criteria specified above. A higher value indicates a higher priority. Valid
       * values are \[1,10\].
       */
      priority: string;

      /**
       * Specify the desired value of the attribute to be applied for this vehicle. value
       * provided here is compared to the values (of each key:value pair) in
       * vehicles.attributes during evaluation.
       */
      value: string;
    }
  }
}

export declare namespace DriverAssignment {
  export {
    type Location as Location,
    type Vehicle as Vehicle,
    type DriverAssignmentAssignResponse as DriverAssignmentAssignResponse,
    type DriverAssignmentAssignParams as DriverAssignmentAssignParams,
  };
}
